"use client";

import { useEffect, useRef, useState } from "react";
import { StageBand } from "./StageBand";

// The living stage. A clean colour loop of the showreel (Remotion: video/src/StageSource.tsx) is drawn
// through eleven pillars by a WebGL shader, in the warm held colour. On load the eleven pillars rise
// apart, then close ranks into one picture: eleven musicians, one sound. The centre pillar stays raised
// and keeps its gold edge. Geometry is computed per pixel, so the pillars stay sharp at any size. Without
// WebGL, or if the shader, the context or the video fails, the pre-rendered StageBand plays instead. With
// reduced motion the stage is a still, closed frame; otherwise a pause control stops all motion
// (WCAG 2.2.2). The parent sets the height; the stage fills it.

const SOURCES = {
  large: "/media/video/a11-stage-source-v2.mp4",
  small: "/media/video/a11-stage-source-sm-v2.mp4",
};

const DELAYS = [0, 80, 160, 240, 320, 560, 320, 240, 160, 80, 0]; // outer pillars first, the centre last
const RISE_MS = 1100;
const REVEAL_WAIT_MS = 1200;
const VIDEO_FADE_MS = 700;
const MERGE_AT_MS = 1500; // after the reveal starts: the centre is nearly up
const MERGE_MS = 1400;
const PAUSE_KEY = "a11-stage-paused";

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG = `
precision mediump float;
uniform sampler2D u_tex;
uniform vec2 u_res;
uniform vec2 u_vid;
uniform float u_gap;
uniform float u_step;
uniform float u_gold;
uniform float u_video;
uniform float u_rise[11];

const vec3 GROUND = vec3(0.0667);
const vec3 FLOOR = vec3(0.1098);
const vec3 GOLD = vec3(0.6902, 0.5529, 0.3412);
const vec3 WARM = vec3(1.03, 0.99, 0.93);

void main() {
  vec2 p = gl_FragCoord.xy;
  float W = u_res.x;
  float H = u_res.y;
  float yTop = H - p.y;
  float colW = (W - 10.0 * u_gap) / 11.0;
  float pitch = colW + u_gap;
  float idxf = floor(p.x / pitch);
  float local = p.x - idxf * pitch;
  if (local > colW || idxf > 10.0) { gl_FragColor = vec4(GROUND, 1.0); return; }

  float rise = 0.0;
  for (int k = 0; k < 11; k++) {
    if (float(k) == idxf) rise = u_rise[k];
  }
  bool centre = idxf == 5.0;
  float stepTop = centre ? 0.0 : u_step * H;
  float top = mix(H, stepTop, rise);
  if (yTop < top) { gl_FragColor = vec4(GROUND, 1.0); return; }
  if (centre && yTop < top + u_gold) { gl_FragColor = vec4(GOLD, 1.0); return; }
  if (u_video <= 0.0) { gl_FragColor = vec4(FLOOR, 1.0); return; }

  float sc = max(W / u_vid.x, H / u_vid.y);
  vec2 size = u_vid * sc;
  vec2 off = (vec2(W, H) - size) * 0.5;
  vec2 uv = (vec2(p.x, yTop) - off) / size;
  vec3 rgb = texture2D(u_tex, uv).rgb;

  float lum = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
  // Held colour: stage light pulled toward the warm side of the palette, so the picture sits beside
  // the gold edge instead of shouting in magenta or red.
  vec3 colour = clamp((mix(vec3(lum), rgb, 0.68) * WARM - 0.5) * 1.04 + 0.5, 0.0, 1.0);
  colour = max(colour, FLOOR);
  gl_FragColor = vec4(mix(FLOOR, colour, u_video), 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
const easeInOutCubic = (t: number) => {
  const x = Math.min(1, Math.max(0, t));
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};

const readPaused = () => {
  try {
    return window.localStorage.getItem(PAUSE_KEY) === "1";
  } catch {
    return false;
  }
};
const writePaused = (paused: boolean) => {
  try {
    if (paused) window.localStorage.setItem(PAUSE_KEY, "1");
    else window.localStorage.removeItem(PAUSE_KEY);
  } catch {}
};

type FrameVideo = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
  cancelVideoFrameCallback?: (handle: number) => void;
};

export function StageCanvas() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const controlRef = useRef<((paused: boolean) => void) | null>(null);
  const [fallback, setFallback] = useState(false);
  const [paused, setPaused] = useState(false);
  const [canPause, setCanPause] = useState(false);

  // Restore the visitor's pause choice; no control at all when the system already asks for no motion.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setCanPause(true);
    if (readPaused()) setPaused(true);
  }, []);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const video = videoRef.current as FrameVideo | null;
    if (fallback || !wrap || !canvas || !video) return;

    // Everything the stage sets up is undone in one place: on unmount, and before handing over to the fallback.
    const cleanups: Array<() => void> = [];
    let torn = false;
    const teardown = () => {
      if (torn) return;
      torn = true;
      for (const undo of cleanups.splice(0).reverse()) undo();
    };
    const fail = () => {
      teardown();
      setFallback(true);
    };
    const listen = <T extends EventTarget>(target: T, type: string, handler: (event: Event) => void) => {
      target.addEventListener(type, handler);
      cleanups.push(() => target.removeEventListener(type, handler));
    };

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false, premultipliedAlpha: false });
    if (!gl) {
      fail();
      return teardown;
    }
    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const program = gl.createProgram();
    if (!vs || !fs || !program) {
      fail();
      return teardown;
    }
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      fail();
      return teardown;
    }
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const aPos = gl.getAttribLocation(program, "a_pos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    cleanups.push(() => {
      gl.deleteTexture(texture);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    });

    const u = (name: string) => gl.getUniformLocation(program, name);
    const uRes = u("u_res");
    const uVid = u("u_vid");
    const uGap = u("u_gap");
    const uStep = u("u_step");
    const uGold = u("u_gold");
    const uVideo = u("u_video");
    const uRise = u("u_rise");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const phone = window.matchMedia("(max-width: 699px)").matches;

    const rise = new Float32Array(11);
    const mountedAt = performance.now();
    let paused = !reduceMotion && readPaused();
    let revealStart = -1;
    let videoAt = -1;
    let hasFrame = false;
    let freshFrame = true;
    let inView = true;
    let visible = true;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const still = () => reduceMotion || paused;

    // Upload the texture only when the video has a new frame (where the browser can tell us).
    const frameCallbacks = typeof video.requestVideoFrameCallback === "function";
    let frameHandle = 0;
    const onVideoFrame = () => {
      freshFrame = true;
      if (!torn) frameHandle = video.requestVideoFrameCallback?.(onVideoFrame) ?? 0;
    };
    if (frameCallbacks) {
      frameHandle = video.requestVideoFrameCallback?.(onVideoFrame) ?? 0;
      cleanups.push(() => video.cancelVideoFrameCallback?.(frameHandle));
    }

    const resize = () => {
      const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
      const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
    };

    const draw = (now: number) => {
      if (torn) return;
      const settled = still();

      // The pillars rise with the first video frame, or after a short wait on a slow connection;
      // footage that arrives later fades in inside the risen pillars. A still stage is simply risen.
      if (revealStart < 0 && (hasFrame || now - mountedAt > REVEAL_WAIT_MS)) revealStart = now;
      if (hasFrame && videoAt < 0) videoAt = now - (now - revealStart < 50 ? VIDEO_FADE_MS : 0);
      const videoMix = settled ? (hasFrame ? 1 : 0) : videoAt < 0 ? 0 : Math.min(1, (now - videoAt) / VIDEO_FADE_MS);
      for (let i = 0; i < 11; i++) {
        rise[i] = settled ? 1 : revealStart < 0 ? 0 : Math.max(0, easeOutExpo((now - revealStart - DELAYS[i]) / RISE_MS));
      }

      // Once the pillars stand, they close ranks into one picture. A still stage is simply closed.
      const merge = settled ? 1 : revealStart < 0 ? 0 : easeInOutCubic((now - revealStart - MERGE_AT_MS) / MERGE_MS);

      if (hasFrame && freshFrame && video.readyState >= 2) {
        freshFrame = !frameCallbacks;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        try {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
        } catch {
          fail();
          return;
        }
      }

      const cssW = canvas.width / dpr;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uVid, video.videoWidth || 16, video.videoHeight || 9);
      gl.uniform1f(uGap, cssW * (phone ? 10 / 1080 : 12 / 1920) * dpr * (1 - merge));
      gl.uniform1f(uStep, 0.2126);
      gl.uniform1f(uGold, Math.max(3, Math.round(canvas.height * 0.007)));
      gl.uniform1f(uVideo, videoMix);
      gl.uniform1fv(uRise, rise);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const loop = (now: number) => {
      raf = 0;
      draw(now);
      if (!torn && visible && !still()) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && !torn) raf = requestAnimationFrame(loop);
    };
    cleanups.push(() => cancelAnimationFrame(raf));

    // Play only while the stage is on screen, the tab is in front and the visitor has not paused it.
    const sync = () => {
      visible = inView && !document.hidden;
      if (reduceMotion) return;
      if (visible && !paused) {
        video.play().catch(() => {});
        start();
      } else {
        video.pause();
      }
    };
    controlRef.current = (next) => {
      paused = next;
      sync();
      if (paused) draw(performance.now());
    };
    cleanups.push(() => {
      controlRef.current = null;
    });

    const ro = new ResizeObserver(() => {
      resize();
      if (still() || !raf) draw(performance.now());
    });
    ro.observe(canvas);
    cleanups.push(() => ro.disconnect());
    resize();

    listen(canvas, "webglcontextlost", (event) => {
      event.preventDefault();
      fail();
    });
    listen(video, "loadeddata", () => {
      if (hasFrame) return;
      hasFrame = true;
      freshFrame = true;
      if (still()) draw(performance.now());
    });
    listen(video, "error", fail);
    if (reduceMotion) {
      listen(video, "loadedmetadata", () => {
        video.currentTime = 0.6;
      });
      listen(video, "seeked", () => {
        hasFrame = true;
        freshFrame = true;
        draw(performance.now());
      });
    }
    video.muted = true;
    video.src = phone ? SOURCES.small : SOURCES.large;
    if (reduceMotion || paused) video.load();
    cleanups.push(() => {
      video.pause();
      video.removeAttribute("src");
      video.load();
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    io.observe(wrap);
    cleanups.push(() => io.disconnect());
    listen(document, "visibilitychange", sync);

    if (still()) draw(performance.now());
    else start();

    return teardown;
  }, [fallback]);

  const togglePause = () => {
    const next = !paused;
    setPaused(next);
    writePaused(next);
    controlRef.current?.(next);
  };

  return (
    <div className="relative h-full w-full bg-ink">
      {fallback ? (
        <StageBand paused={paused} />
      ) : (
        <div ref={wrapRef} className="relative h-full w-full touch-pan-y overflow-hidden" aria-hidden="true">
          <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
          <video ref={videoRef} className="pointer-events-none absolute size-px opacity-0" muted loop playsInline preload="auto" tabIndex={-1} />
        </div>
      )}
      {canPause && (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 min-[700px]:bottom-4">
          <div className="shell flex justify-end">
            <button
              type="button"
              onClick={togglePause}
              aria-label={paused ? "Wznów ruch sceny" : "Zatrzymaj ruch sceny"}
              className="pointer-events-auto inline-flex size-11 items-center justify-center border border-ivory/30 bg-ink text-ivory transition-colors duration-200 hover:border-gold-light hover:text-gold-light"
            >
              {paused ? (
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
                  <path d="M7 4.5v15L19.5 12z" fill="currentColor" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
                  <path d="M7 4.5h3.2v15H7zM13.8 4.5H17v15h-3.2z" fill="currentColor" />
                </svg>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

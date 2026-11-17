"use client";

import { useEffect, useRef, useState } from "react";
import { stageMedia as STAGE_MEDIA } from "@/content/site";
import { StageBand } from "./StageBand";

// The living stage. A clean colour loop of the showreel (Remotion: video/src/StageSource.tsx) fills the
// hero edge to edge, drawn by a WebGL shader in monochrome; colour lights the stage where the visitor
// points, a soft pool of the warm held colour that follows the pointer (on touch screens it drifts on its
// own). The first frame is drawn from a poster until the footage arrives. Without WebGL, or if the shader,
// the context or the video fails, StageBand plays the loop plainly instead. With reduced motion the stage
// is the poster, still, lit at the centre; otherwise a pause control stops all motion (WCAG 2.2.2).
// The parent sets the height; the stage fills it.

const FADE_MS = 700;
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
uniform vec2 u_light;
uniform float u_radius;
uniform float u_show;

const vec3 FLOOR = vec3(0.1098);
const vec3 WARM = vec3(1.03, 0.99, 0.93);

void main() {
  vec2 p = vec2(gl_FragCoord.x, u_res.y - gl_FragCoord.y);
  if (u_show <= 0.0) { gl_FragColor = vec4(FLOOR, 1.0); return; }

  float sc = max(u_res.x / u_vid.x, u_res.y / u_vid.y);
  vec2 size = u_vid * sc;
  vec2 uv = (p - (u_res - size) * 0.5) / size;
  vec3 rgb = texture2D(u_tex, uv).rgb;

  float lum = dot(rgb, vec3(0.2126, 0.7152, 0.0722));
  float m = clamp((lum * 1.18 - 0.5) * 1.12 + 0.5, 0.0, 1.0);
  vec3 mono = max(vec3(m), FLOOR);
  // Held colour: stage light pulled toward the warm side of the palette instead of shouting in magenta or red.
  vec3 colour = clamp((mix(vec3(lum), rgb, 0.68) * WARM - 0.5) * 1.04 + 0.5, 0.0, 1.0);
  colour = max(colour, FLOOR);

  vec2 d = (p - u_light) / u_radius;
  float lit = exp(-dot(d, d));
  gl_FragColor = vec4(mix(FLOOR, mix(mono, colour, lit), u_show), 1.0);
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
    const uLight = u("u_light");
    const uRadius = u("u_radius");
    const uShow = u("u_show");

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    let paused = !reduceMotion && readPaused();
    let shownAt = -1;
    let hasFrame = false;
    let freshFrame = true;
    let posterReady = false;
    let posterUploaded = false;
    let inView = true;
    let visible = true;
    let raf = 0;
    let last = performance.now();
    // The light, in fractions of the stage: where it is now, and where the pointer wants it.
    const light = { x: 0.5, y: 0.5 };
    const target = { x: 0.5, y: 0.5 };
    let pointerActive = false;
    let idleSince = performance.now();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    const still = () => reduceMotion || paused;

    // The poster is the loop's first frame, so the stage has a picture before the footage loads.
    const poster = new Image();
    poster.decoding = "async";
    poster.onload = () => {
      posterReady = true;
      if (!raf) draw(performance.now());
    };
    poster.src = STAGE_MEDIA.poster;
    cleanups.push(() => {
      poster.onload = null;
    });

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
      const dt = Math.min(0.1, (now - last) / 1000);
      last = now;
      const settled = still();

      if (hasFrame && freshFrame && video.readyState >= 2) {
        freshFrame = !frameCallbacks;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        try {
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, video);
        } catch {
          fail();
          return;
        }
      } else if (!hasFrame && posterReady && !posterUploaded) {
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, poster);
        posterUploaded = true;
      }

      // The picture fades up from the stage floor the first time there is one to show.
      const picture = hasFrame || posterUploaded;
      if (picture && shownAt < 0) shownAt = now;
      const show = !picture ? 0 : settled ? 1 : Math.min(1, (now - shownAt) / FADE_MS);

      // Where the light is: the pointer, or a slow drift across the stage when nobody is steering.
      // Under reduced motion the stage is lit at the centre; a paused stage keeps its light where it was.
      if (reduceMotion) {
        target.x = 0.5;
        target.y = 0.5;
      } else if (!pointerActive && !paused) {
        const drift = (now - idleSince) / 1000;
        target.x = 0.5 + 0.42 * Math.sin(drift * 0.42 + (canHover ? 0 : 1.2));
        target.y = 0.5 + 0.08 * Math.sin(drift * 0.27);
      }
      const k = settled ? 1 : 1 - Math.exp(-dt * 7);
      light.x += (target.x - light.x) * k;
      light.y += (target.y - light.y) * k;

      const W = canvas.width;
      const H = canvas.height;
      gl.uniform2f(uRes, W, H);
      gl.uniform2f(uVid, hasFrame ? video.videoWidth || 16 : poster.naturalWidth || 16, hasFrame ? video.videoHeight || 9 : poster.naturalHeight || 9);
      gl.uniform2f(uLight, light.x * W, light.y * H);
      gl.uniform1f(uRadius, 0.34 * Math.min(W, H));
      gl.uniform1f(uShow, show);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    };

    const loop = (now: number) => {
      raf = 0;
      draw(now);
      if (!torn && visible && !still()) raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!raf && !torn) {
        last = performance.now();
        raf = requestAnimationFrame(loop);
      }
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

    // With reduced motion the poster is the whole stage and the footage is never fetched.
    if (!reduceMotion) {
      listen(video, "loadeddata", () => {
        if (hasFrame) return;
        hasFrame = true;
        freshFrame = true;
        if (still()) draw(performance.now());
      });
      listen(video, "error", fail);
      video.muted = true;
      // The large loop wherever the stage needs more than ~600 device pixels of height (full-height phones too).
      const needed = Math.max(canvas.clientHeight, (canvas.clientWidth * 9) / 16) * dpr;
      video.src = needed > 600 ? STAGE_MEDIA.large : STAGE_MEDIA.small;
      if (paused) video.load();
      cleanups.push(() => {
        video.pause();
        video.removeAttribute("src");
        video.load();
      });
    }

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

    const onLeave = () => {
      pointerActive = false;
      idleSince = performance.now() - (Math.asin(Math.max(-1, Math.min(1, (light.x - 0.5) / 0.42))) / 0.42) * 1000;
    };
    listen(wrap, "pointermove", (event) => {
      const rect = wrap.getBoundingClientRect();
      const e = event as PointerEvent;
      target.x = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
      target.y = Math.min(1, Math.max(0, (e.clientY - rect.top) / rect.height));
      pointerActive = true;
    });
    listen(wrap, "pointerleave", onLeave);
    listen(wrap, "pointercancel", onLeave);
    listen(wrap, "pointerup", (event) => {
      if ((event as PointerEvent).pointerType !== "mouse") onLeave();
    });

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

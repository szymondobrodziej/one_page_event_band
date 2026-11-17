"use client";

import { useEffect, useRef, useState } from "react";

// Fallback for the living stage (StageCanvas) when WebGL, the shader or the stage video is unavailable.
// The pillars, their monochrome grade and the gold edge are rendered into the video by Remotion
// (video/src/HeroLoop.tsx); this component plays it inside the stage's own box, so nothing shifts, and
// lifts the curtain: one mask per pillar retracts upward, from both edges toward the centre.
// Geometry must match the render: gap = 12/1920 of the width on desktop, 10/1080 on phones (< 700 px).
// The desktop render is cropped from the bottom (the crown stays); the phone render is shown whole.

const STAGE = { src: "/media/video/a11-hero-stage-v2.mp4", poster: "/media/video/a11-hero-stage-v2.jpg" };
const MOBILE = { src: "/media/video/a11-hero-mobile-v4.mp4", poster: "/media/video/a11-hero-mobile-v4.jpg" };

// Delay per pillar index (0–10): outer pillars first, the centre last.
const DELAYS = [0, 80, 160, 240, 320, 560, 320, 240, 160, 80, 0];

const MEDIA_FIT = "absolute inset-0 h-full w-full object-contain object-bottom min-[700px]:object-cover min-[700px]:object-top";

export function StageBand({ paused = false }: { paused?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Choose the render for this viewport. With reduced motion the poster stays: no autoplaying loop.
  useEffect(() => {
    const phone = window.matchMedia("(max-width: 699px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const choose = () => setSrc(reduce.matches ? null : phone.matches ? MOBILE.src : STAGE.src);
    choose();
    phone.addEventListener("change", choose);
    reduce.addEventListener("change", choose);
    return () => {
      phone.removeEventListener("change", choose);
      reduce.removeEventListener("change", choose);
    };
  }, []);

  // Play only while on screen, in a visible tab and not paused by the visitor.
  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap || !src) return;
    video.muted = true;
    let inView = false;
    const sync = () => {
      if (inView && !document.hidden && !paused) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        sync();
      },
      { threshold: 0.1 },
    );
    observer.observe(wrap);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [src, paused]);

  return (
    <div
      ref={wrapRef}
      className="relative h-full w-full overflow-hidden bg-ink [--pillar-gap:0.926%] min-[700px]:[--pillar-gap:0.625%]"
      aria-hidden="true"
    >
      <picture>
        <source media="(min-width: 700px)" srcSet={STAGE.poster} />
        <img src={MOBILE.poster} alt="" className={MEDIA_FIT} fetchPriority="high" />
      </picture>
      {src && <video key={src} ref={videoRef} className={MEDIA_FIT} src={src} muted loop playsInline preload="auto" tabIndex={-1} />}
      <div
        className="pointer-events-none absolute inset-0 grid"
        style={{ gridTemplateColumns: "repeat(10, minmax(0, 1fr) var(--pillar-gap)) minmax(0, 1fr)" }}
      >
        {Array.from({ length: 21 }, (_, i) =>
          i % 2 === 1 ? (
            <span key={i} />
          ) : (
            <span key={i} className="relative overflow-hidden">
              <span className="pillar-mask absolute inset-0 bg-ink" style={{ animationDelay: `${DELAYS[i / 2] + 200}ms` }} />
            </span>
          ),
        )}
      </div>
    </div>
  );
}

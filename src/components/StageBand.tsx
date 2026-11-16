"use client";

import { useEffect, useRef, useState } from "react";

// The eleven-pillar stage. The pillars, their monochrome grade and the gold edge are rendered
// into the video by Remotion (video/src/HeroLoop.tsx); this component plays it and lifts the
// curtain: one mask per pillar retracts upward, from both edges toward the centre, the gold one last.
// Geometry must match the render: gap = 12/1920 of the width on desktop, 10/1080 on phones (< 700 px).

const DESKTOP = { src: "/media/video/a11-hero-desktop-v3.mp4", poster: "/media/video/a11-hero-desktop-v3.jpg" };
const MOBILE = { src: "/media/video/a11-hero-mobile-v3.mp4", poster: "/media/video/a11-hero-mobile-v3.jpg" };

// Delay per pillar index (0–10): outer pillars first, the centre last.
const DELAYS = [0, 80, 160, 240, 320, 560, 320, 240, 160, 80, 0];

export function StageBand() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Choose the render for this viewport and play it only while it is on screen.
  // With reduced motion the poster stays: no autoplaying loop.
  useEffect(() => {
    const phone = window.matchMedia("(max-width: 699px)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const choose = () => setSrc(reduce.matches ? null : phone.matches ? MOBILE.src : DESKTOP.src);
    choose();
    phone.addEventListener("change", choose);
    reduce.addEventListener("change", choose);
    return () => {
      phone.removeEventListener("change", choose);
      reduce.removeEventListener("change", choose);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap || !src) return;
    video.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !document.hidden) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(wrap);
    const onVisibility = () => {
      if (document.hidden) video.pause();
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [src]);

  return (
    <div
      ref={wrapRef}
      className="relative w-full overflow-hidden bg-ink [--pillar-gap:0.926%] aspect-[1080/654] min-[700px]:[--pillar-gap:0.625%] min-[700px]:aspect-[1920/712]"
      aria-hidden="true"
    >
      <picture>
        <source media="(min-width: 700px)" srcSet={DESKTOP.poster} />
        <img src={MOBILE.poster} alt="" className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
      </picture>
      {src && (
        <video
          key={src}
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          muted
          loop
          playsInline
          preload="auto"
          tabIndex={-1}
        />
      )}
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

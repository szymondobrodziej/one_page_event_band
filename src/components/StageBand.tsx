"use client";

import { useEffect, useRef, useState } from "react";
import { stageMedia as STAGE_MEDIA } from "@/content/site";

// Fallback for the living stage (StageCanvas) when WebGL, the shader or the stage video is unavailable:
// the same loop, played plainly in the held colour of the photographs, filling the stage's own box so
// nothing shifts. There is no pointer light without the shader. With reduced motion the poster stays.

const MEDIA_FIT = "doc-photo absolute inset-0 h-full w-full object-cover";

export function StageBand({ paused = false }: { paused?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  // Choose the loop for this stage. With reduced motion the poster stays: no autoplaying loop.
  useEffect(() => {
    const wrap = wrapRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const choose = () => {
      if (reduce.matches || !wrap) return setSrc(null);
      const needed = Math.max(wrap.clientHeight, (wrap.clientWidth * 9) / 16) * Math.min(window.devicePixelRatio || 1, 1.75);
      setSrc(needed > 600 ? STAGE_MEDIA.large : STAGE_MEDIA.small);
    };
    choose();
    reduce.addEventListener("change", choose);
    return () => reduce.removeEventListener("change", choose);
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
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden bg-ink" aria-hidden="true">
      {/* eslint-disable-next-line @next/next/no-img-element -- the loop's own first frame, already sized */}
      <img src={STAGE_MEDIA.poster} alt="" className={MEDIA_FIT} fetchPriority="high" />
      {src && <video key={src} ref={videoRef} className={MEDIA_FIT} src={src} poster={STAGE_MEDIA.poster} muted loop playsInline preload="auto" tabIndex={-1} />}
    </div>
  );
}

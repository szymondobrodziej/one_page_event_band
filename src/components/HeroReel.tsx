"use client";

import { useEffect, useRef, useState } from "react";
import { heroReel } from "@/content/site";

// The hero: the client's showreel, looping without sound, edge to edge in the stage box (corrections, point 1). It
// carries the held colour of the photographs. Phones held upright get a portrait cut of their own, framed shot by shot,
// so they do not fetch the full width only to crop it. The poster is each cut's first frame, so nothing jumps when
// the film starts. With reduced motion the poster is the whole hero and the film is never fetched; otherwise a pause
// control stops it (WCAG 2.2.2), and the choice is remembered.

const PAUSE_KEY = "a11-stage-paused";
const PORTRAIT = "(orientation: portrait)";
const MEDIA_FIT = "doc-photo absolute inset-0 h-full w-full object-cover";

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

export function HeroReel() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cut, setCut] = useState<"landscape" | "portrait" | null>(null);
  // The remembered pause choice. The control only renders after the cut is chosen on the client, so the server's
  // `false` never shows.
  const [paused, setPaused] = useState(() => typeof window !== "undefined" && readPaused());

  // Choose the cut for this screen, again when the phone turns; none at all when the system asks for no motion.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const portrait = window.matchMedia(PORTRAIT);
    const choose = () => setCut(reduce.matches ? null : portrait.matches ? "portrait" : "landscape");
    choose();
    reduce.addEventListener("change", choose);
    portrait.addEventListener("change", choose);
    return () => {
      reduce.removeEventListener("change", choose);
      portrait.removeEventListener("change", choose);
    };
  }, []);

  // Play only while on screen, in a visible tab and not paused by the visitor.
  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap || !cut) return;
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
  }, [cut, paused]);

  const togglePause = () => {
    const next = !paused;
    setPaused(next);
    writePaused(next);
  };

  return (
    <div ref={wrapRef} className="relative h-full w-full overflow-hidden bg-ink">
      <div aria-hidden="true">
        <picture>
          <source media={PORTRAIT} srcSet={heroReel.portraitPoster} width={540} height={960} />
          <img src={heroReel.poster} alt="" width={1600} height={900} className={MEDIA_FIT} fetchPriority="high" />
        </picture>
        {cut && (
          <video
            key={cut}
            ref={videoRef}
            className={MEDIA_FIT}
            src={heroReel[cut]}
            poster={cut === "portrait" ? heroReel.portraitPoster : heroReel.poster}
            muted
            loop
            playsInline
            preload="auto"
            tabIndex={-1}
          />
        )}
      </div>
      {cut && (
        <div className="pointer-events-none absolute inset-x-0 bottom-3 min-[700px]:bottom-4">
          <div className="shell flex justify-end">
            <button
              type="button"
              onClick={togglePause}
              aria-label={paused ? "Wznów film" : "Zatrzymaj film"}
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

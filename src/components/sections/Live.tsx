"use client";

import { useRef, useState } from "react";
import { cta, live, site } from "@/content/site";
import { PlayGlyph } from "../Icons";

const FILM = { src: "/media/video/a11-sklad-v2.mp4", poster: "/media/video/a11-sklad-v2.jpg" };

export function Live() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const start = () => {
    setPlaying(true);
    requestAnimationFrame(() => {
      const v = videoRef.current;
      if (!v) return;
      v.play().catch(() => {});
      v.focus();
    });
  };

  return (
    <section id="na-zywo" aria-labelledby="live-title" className="section bg-ink">
      <div className="shell">
        <div className="mb-[clamp(40px,5vw,64px)] flex flex-wrap items-end justify-between gap-x-16 gap-y-5">
          <h2 id="live-title" className="display-2 max-w-[12em]">
            {live.headline}
          </h2>
          <p className="mb-2 text-[19px] text-ash">{live.sub}</p>
        </div>

        <div className="relative aspect-video overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={FILM.src}
            poster={FILM.poster}
            preload="none"
            playsInline
            muted
            controls={playing}
            aria-label="Film: skład Aurum Eleven na scenie, bez dźwięku"
            tabIndex={playing ? 0 : -1}
            onEnded={() => setPlaying(false)}
          />
          {!playing && (
            <button
              type="button"
              onClick={start}
              className="group absolute inset-0 flex items-center justify-center bg-ink/25"
              aria-label="Odtwórz film ze składem Aurum Eleven"
            >
              <span className="flex size-[clamp(72px,8vw,104px)] items-center justify-center rounded-full bg-ivory text-ink transition-colors duration-200 group-hover:bg-gold">
                <PlayGlyph className="ml-1 size-[clamp(20px,2vw,26px)]" />
              </span>
            </button>
          )}
        </div>
        <p className="mt-4 text-[14px] text-stone">{live.silentNote}</p>

        <div className="mt-[clamp(36px,4.5vw,52px)] flex flex-wrap items-center gap-x-8 gap-y-4">
          <a href="#kontakt" className="btn btn-ivory">
            {cta.primary}
          </a>
          <a
            href={site.fullRecordingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet group inline-flex min-h-14 items-center gap-3.5 font-display text-[16px] font-medium text-ivory no-underline"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/45 transition-colors duration-200 group-hover:border-gold-light">
              <PlayGlyph className="size-3" />
            </span>
            {site.hasFullRecording ? cta.recording : cta.channel}
            <span className="sr-only"> (otwiera YouTube w nowej karcie)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

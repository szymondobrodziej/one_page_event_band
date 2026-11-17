"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cta, live, site } from "@/content/site";
import { PlayGlyph } from "../Icons";

/** The YouTube id from a watch, youtu.be or embed link. */
function youtubeId(url: string) {
  return url.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/)?.[1] ?? null;
}

// The full recording with sound. Until the visitor asks for it the section shows a still of the whole band
// (a frame of the client's showreel, graded like every photograph); only then does the youtube-nocookie player load.
export function Live() {
  const [playing, setPlaying] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const id = youtubeId(site.fullRecordingUrl);

  useEffect(() => {
    if (playing) frameRef.current?.focus();
  }, [playing]);

  const play = () => {
    if (id) setPlaying(true);
    else window.open(site.fullRecordingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="na-zywo" aria-labelledby="live-title" className="section bg-ink">
      <div className="shell">
        <h2 id="live-title" className="display-2 max-w-[12em]">
          {live.headline}
        </h2>
        <p className="mt-5 mb-[clamp(40px,5vw,64px)] text-[18px] text-ash">{live.sub}</p>

        <div className="relative aspect-video overflow-hidden bg-black">
          {playing && id ? (
            <iframe
              ref={frameRef}
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
              title="Aurum Eleven na żywo, nagranie z dźwiękiem"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <button type="button" onClick={play} className="group absolute inset-0 flex items-center justify-center" aria-label={live.play}>
              <Image src={live.poster} alt="" fill sizes="(min-width: 1280px) 1152px, 100vw" quality={78} className="origin-[50%_88%] scale-[1.12] object-cover doc-photo" />
              <span className="absolute inset-0 bg-ink/25" aria-hidden="true" />
              <span className="relative flex size-[clamp(72px,8vw,104px)] items-center justify-center rounded-full bg-ivory text-ink transition-colors duration-200 group-hover:bg-gold">
                <PlayGlyph className="ml-1 size-[clamp(20px,2vw,26px)]" />
              </span>
            </button>
          )}
        </div>
        <p className="mt-4 text-[14px] text-stone">{live.note}</p>

        <a href="#kontakt" className="btn btn-ivory mt-[clamp(36px,4.5vw,52px)]">
          {cta.primary}
        </a>
      </div>
    </section>
  );
}

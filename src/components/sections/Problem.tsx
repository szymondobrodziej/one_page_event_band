import Image from "next/image";
import { photos, problem } from "@/content/site";

export function Problem() {
  return (
    <section aria-labelledby="problem-title" className="bg-ivory text-ink">
      <div className="flex flex-wrap items-stretch">
        <figure className="relative m-0 min-h-[clamp(440px,52vw,780px)] flex-[1_1_420px]">
          <Image
            src={photos.trumpet.src}
            alt={photos.trumpet.alt}
            fill
            sizes="(min-width: 1000px) 45vw, 100vw"
            quality={80}
            className="object-cover object-[50%_74%] doc-photo"
          />
        </figure>
        <div className="flex flex-[1.25_1_520px] flex-col justify-center px-[clamp(20px,6vw,120px)] py-[clamp(72px,9vw,144px)]">
          {/* The client's line opens the heading on a gold plate (2026-11-26), the way the hero's overline opens the H1. */}
          <h2 id="problem-title">
            <span className="plate-line plate-gold mb-[clamp(16px,1.8vw,26px)]">
              <span>{problem.lead}</span>
            </span>
            <span className="display-2 block max-w-[10.5em]">{problem.headline}</span>
          </h2>
          <p className="mt-10 max-w-[31em] text-[18px] leading-[1.6] text-smoke">{problem.body}</p>
          <p className="mt-[clamp(48px,6vw,88px)] max-w-[15em] font-display text-[clamp(26px,2.6vw,38px)] leading-[1.15] tracking-[-0.025em]">
            {problem.turn}
          </p>
        </div>
      </div>
    </section>
  );
}

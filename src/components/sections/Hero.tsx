import { cta, hero, site } from "@/content/site";
import { PlayGlyph } from "../Icons";
import { StageBand } from "../StageBand";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-ink pt-[clamp(40px,5.5vw,88px)]">
      <div className="shell">
        <h1 id="hero-title">
          <span className="mb-[clamp(10px,1.4vw,20px)] block font-display text-[clamp(1.625rem,2.9vw,2.625rem)] font-light leading-[1.05] tracking-[-0.03em] text-ash">
            {hero.overline}
          </span>
          <span className="display-1 block max-w-[12.5em] text-ivory">{hero.headline}</span>
        </h1>

        <div className="mt-[clamp(28px,3.6vw,52px)] flex flex-wrap items-start justify-between gap-x-16 gap-y-8">
          <p className="max-w-[34em] flex-[1_1_340px] text-[18px] leading-[1.6] text-[#cfcac0]">{hero.lead}</p>
          <div id="hero-cta" className="flex flex-wrap items-start gap-x-7 gap-y-4">
            <div className="flex max-w-[320px] flex-col gap-3">
              <a href="#kontakt" className="btn btn-ivory">
                {cta.primary}
              </a>
              <span className="text-[14px] leading-normal text-stone">{cta.heroNote}</span>
            </div>
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
      </div>

      <div className="mt-[clamp(44px,5.5vw,84px)]">
        <StageBand />
      </div>

      <div className="shell flex flex-wrap items-baseline justify-between gap-x-16 gap-y-4 pt-7 pb-[clamp(80px,9vw,136px)]">
        <p className="max-w-[34em] font-display text-[clamp(18px,1.5vw,21px)] leading-[1.4] tracking-[-0.005em] text-ivory">{hero.facts}</p>
        <p className="max-w-[30em] text-[15px] leading-relaxed text-ash">{hero.credits}</p>
      </div>
    </section>
  );
}

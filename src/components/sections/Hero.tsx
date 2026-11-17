import { cta, hero, site } from "@/content/site";
import { PlayGlyph } from "../Icons";
import { StageCanvas } from "../StageCanvas";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-ink">
      {/* Air between the header and the stage, so the gold edge of the centre pillar reads as the stage, not as a
          nav underline. The stage height leaves the overline and the whole headline above the fold (phones: above
          the pinned enquiry button). */}
      <div className="pt-[clamp(16px,3.3vw,48px)]">
        <div className="h-[clamp(280px,min(118vw,calc(100svh-380px)),560px)] min-[700px]:h-[clamp(300px,min(34vw,calc(100svh-430px)),760px)]">
          <StageCanvas />
        </div>
      </div>

      <div className="shell pt-[clamp(28px,3.3vw,48px)] pb-[clamp(80px,9vw,136px)]">
        <h1 id="hero-title">
          <span className="mb-[clamp(10px,1.2vw,16px)] block font-display text-[clamp(1.5rem,2.4vw,2.25rem)] font-light leading-[1.05] tracking-[-0.03em] text-ash">
            {hero.overline}
          </span>
          <span className="block max-w-[13em] font-display text-[clamp(3rem,6.67vw,6rem)] font-light leading-[0.94] tracking-[-0.04em] text-ivory">
            {hero.headline}
          </span>
        </h1>

        <div className="mt-[clamp(32px,4vw,56px)] flex flex-wrap items-start justify-between gap-x-16 gap-y-8">
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

        <div className="mt-[clamp(48px,6vw,88px)] flex flex-wrap items-baseline justify-between gap-x-16 gap-y-4 border-t border-rule-ink pt-6">
          <p className="max-w-[34em] font-display text-[clamp(18px,1.5vw,21px)] leading-[1.4] tracking-[-0.005em] text-ivory">{hero.facts}</p>
          <p className="max-w-[30em] text-[15px] leading-relaxed text-ash">{hero.credits}</p>
        </div>
      </div>
    </section>
  );
}

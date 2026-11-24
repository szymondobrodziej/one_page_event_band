import { cta, hero, site } from "@/content/site";
import { LineIcon, PlayGlyph } from "../Icons";
import { HeroReel } from "../HeroReel";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-ink">
      {/* The showreel fills the screen under the 72px header, edge to edge; the headline follows below it. */}
      <div data-hero-stage className="h-[calc(100svh-72px)] min-h-[440px]">
        <HeroReel />
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
          <p className="max-w-[34em] flex-[1_1_340px] text-[18px] leading-[1.6] text-ivory-dim">{hero.lead}</p>
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
              {cta.recording}
              <span className="sr-only"> (YouTube, nowa karta)</span>
            </a>
          </div>
        </div>

        {/* The facts as a band of four cells under a gold rule, each with its gold line icon: the logo's beam carried
            into the page, so the row reads apart from the paragraphs around it (corrections, point 2). */}
        <div className="mt-[clamp(56px,7vw,104px)]">
          <ul className="grid list-none grid-cols-2 border-t-2 border-b border-t-gold border-b-rule-strong p-0 md:grid-cols-4">
            {hero.facts.map((fact) => (
              <li
                key={fact.text}
                className="flex flex-col gap-[clamp(16px,1.6vw,22px)] py-[clamp(22px,2.4vw,32px)] pr-4 even:border-l even:border-rule-strong even:pl-5 max-md:[&:nth-child(-n+2)]:border-b max-md:[&:nth-child(-n+2)]:border-rule-strong md:pl-6 md:not-first:border-l md:not-first:border-rule-strong md:first:pl-0"
              >
                <LineIcon name={fact.icon} className="size-8 text-gold md:size-9" />
                <span className="font-display text-[clamp(21px,2.1vw,30px)] font-light leading-[1.12] tracking-[-0.025em] text-ivory">{fact.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[44em] text-[15px] leading-relaxed text-ash">{hero.credits}</p>
        </div>
      </div>
    </section>
  );
}

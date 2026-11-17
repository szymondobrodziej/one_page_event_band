import { cta, hero, heroFilm } from "@/content/site";
import { PlayGlyph } from "../Icons";

// The hero is plain HTML with no script: the headline, then the stage film edge to edge. The film is a muted loop
// the browser plays by itself (cut in video/src/HeroFilm.tsx, held colour baked in). Its still sits beneath it, so
// the picture is there before the film loads, where autoplay is refused, and under reduced motion, where no film
// source matches and the still is all there is.
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="bg-ink">
      <div className="shell grid gap-y-8 pt-[clamp(28px,4vw,56px)] pb-[clamp(28px,3.5vw,48px)] lg:grid-cols-12 lg:items-end lg:gap-x-[clamp(24px,3vw,48px)]">
        <h1 id="hero-title" className="lg:col-span-7">
          <span className="mb-[clamp(10px,1.2vw,16px)] block font-display text-[clamp(1.375rem,2.2vw,2rem)] font-light leading-[1.05] tracking-[-0.03em] text-ash">
            {hero.overline}
          </span>
          <span className="block max-w-[12em] font-display text-[clamp(2.625rem,4.7vw,4.5rem)] font-light leading-[0.96] tracking-[-0.04em] text-ivory">
            {hero.headline}
          </span>
        </h1>
        <div className="hidden lg:col-span-5 lg:block">
          <Lead />
          <Actions className="mt-[clamp(28px,3vw,40px)]" />
        </div>
      </div>

      <div className="relative aspect-video max-h-[calc(100svh-72px)] w-full overflow-hidden bg-black">
        <picture>
          <source media="(max-width: 699px)" srcSet={heroFilm.posterSmall} />
          <img
            src={heroFilm.poster}
            alt={heroFilm.alt}
            width={heroFilm.w}
            height={heroFilm.h}
            fetchPriority="high"
            className="absolute inset-0 size-full object-cover"
          />
        </picture>
        <video autoPlay muted loop playsInline aria-hidden="true" className="hero-film absolute inset-0 size-full object-cover">
          <source media="(prefers-reduced-motion: no-preference) and (min-width: 700px)" src={heroFilm.src} type="video/mp4" />
          <source media="(prefers-reduced-motion: no-preference)" src={heroFilm.srcSmall} type="video/mp4" />
        </video>
      </div>

      <div className="shell pt-[clamp(32px,4vw,56px)] pb-[clamp(80px,9vw,136px)]">
        <div className="mb-[clamp(48px,6vw,88px)] flex flex-wrap items-start justify-between gap-x-16 gap-y-8 lg:hidden">
          <Lead className="flex-[1_1_340px]" />
          <Actions />
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-16 gap-y-4 border-t border-rule-ink pt-6">
          <p className="max-w-[34em] font-display text-[clamp(18px,1.5vw,21px)] leading-[1.4] tracking-[-0.005em] text-ivory">{hero.facts}</p>
          <p className="max-w-[30em] text-[15px] leading-relaxed text-ash">{hero.credits}</p>
        </div>
      </div>
    </section>
  );
}

function Lead({ className = "" }: { className?: string }) {
  return <p className={`max-w-[34em] text-[18px] leading-[1.6] text-ivory-dim ${className}`}>{hero.lead}</p>;
}

function Actions({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-start gap-x-7 gap-y-4 ${className}`}>
      <div className="flex max-w-[320px] flex-col gap-3">
        <a href="#kontakt" className="btn btn-ivory">
          {cta.primary}
        </a>
        <span className="text-[14px] leading-normal text-stone">{cta.heroNote}</span>
      </div>
      <a href="#na-zywo" className="link-quiet group/play inline-flex min-h-14 items-center gap-3.5 font-display text-[16px] font-medium text-ivory no-underline">
        <span className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/45 transition-colors duration-200 group-hover/play:border-gold-light">
          <PlayGlyph className="size-3" />
        </span>
        {cta.recording}
      </a>
    </div>
  );
}

import Image from "next/image";
import { cta, musicians, photos } from "@/content/site";

export function Musicians() {
  return (
    <section id="muzycy" aria-labelledby="musicians-title" className="section bg-ivory text-ink">
      <div className="shell flex flex-wrap items-start gap-x-[clamp(48px,6vw,96px)] gap-y-16">
        <div className="min-w-0 max-w-[500px] flex-[1_1_380px]">
          <h2 id="musicians-title" className="display-2">
            {musicians.headline}
          </h2>
          {musicians.body.map((p, i) => (
            <p key={i} className={`${i === 0 ? "mt-9" : "mt-5"} text-[18px] leading-[1.7] text-smoke`}>
              {p}
            </p>
          ))}
          <a href="#kontakt" className="btn btn-ink mt-11">
            {cta.primary}
          </a>
        </div>

        <div className="grid min-w-0 flex-[1.35_1_520px] grid-cols-3 gap-4">
          <div className="relative col-span-2 row-span-2 min-h-[280px]">
            <Image
              src={photos.frontman.src}
              alt={photos.frontman.alt}
              fill
              sizes="(min-width: 1000px) 34vw, 66vw"
              quality={80}
              className="object-cover object-[50%_28%] doc-photo"
            />
          </div>
          <div className="relative aspect-square">
            <Image src={photos.bass.src} alt={photos.bass.alt} fill sizes="(min-width: 1000px) 17vw, 33vw" quality={72} className="object-cover object-[50%_35%] doc-photo" />
          </div>
          <div className="relative aspect-square">
            <Image src={photos.keys.src} alt={photos.keys.alt} fill sizes="(min-width: 1000px) 17vw, 33vw" quality={72} className="object-cover object-[58%_50%] doc-photo" />
          </div>
          <div className="relative col-span-3 aspect-[12/5]">
            <Image src={photos.drums.src} alt={photos.drums.alt} fill sizes="(min-width: 1000px) 52vw, 100vw" quality={72} className="object-cover object-[50%_45%] doc-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { benefits, cta, photos } from "@/content/site";
import { BenefitGlyph } from "../Icons";

const STRIP = [
  { photo: photos.horns, caption: "Sekcja dęta", position: "30% 50%" },
  { photo: photos.percussion, caption: "Perkusjonalia", position: "55% 50%" },
  { photo: photos.vocals, caption: "Wokale", position: "55% 50%" },
  { photo: photos.engineer, caption: "Realizator dźwięku", position: "50% 50%" },
];

export function WhatYouGet() {
  return (
    <section id="co-dostajesz" aria-labelledby="benefits-title" className="section bg-ivory text-ink">
      <div className="shell">
        <h2 id="benefits-title" className="display-2 mb-[clamp(48px,6vw,88px)]">
          Co dostajesz
        </h2>
        <ul className="grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-[clamp(32px,4vw,64px)] gap-y-14 p-0">
          {benefits.map((b) => (
            <li key={b.title}>
              <div className="flex items-start gap-3.5">
                <BenefitGlyph name={b.icon} className={`${b.icon === "eleven" ? "h-6 w-[44px]" : "size-6"} mt-px flex-none text-ink`} />
                <h3 className="font-display text-[20px] font-medium tracking-[-0.01em]">{b.title}</h3>
              </div>
              <p className="mt-3 max-w-[28em] text-[16px] leading-[1.6] text-smoke">{b.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-[clamp(72px,8vw,120px)] grid grid-cols-2 gap-4 md:grid-cols-4">
          {STRIP.map((item) => (
            <figure key={item.caption} className="m-0">
              <div className="relative aspect-[3/4]">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  quality={72}
                  className="object-cover doc-photo"
                  style={{ objectPosition: item.position }}
                />
              </div>
              <figcaption className="mt-3 text-[14px] text-pebble">{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <a href="#kontakt" className="btn btn-ink mt-[clamp(56px,6vw,88px)]">
          {cta.primary}
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";
import { benefitGroups, benefits, cta, type Benefit } from "@/content/site";
import { LineIcon } from "../Icons";

const TITLE = "font-display text-[clamp(21px,1.9vw,26px)] font-light leading-[1.15] tracking-[-0.02em]";
const BODY = "mt-2.5 max-w-[30em] text-[15px] leading-[1.6] text-smoke sm:text-[16px]";

// "Co dostajesz" (corrections, point 6): the four things that happen on stage are shown, each with the client's
// own photograph; what is organised around the stage stays a ruled list. Every item carries its line icon.
function StageItem({ item }: { item: Benefit }) {
  return (
    <li className="grid grid-cols-[38%_1fr] items-start gap-x-5 sm:block">
      {item.photo && (
        <div className="relative aspect-[4/5] overflow-hidden bg-ink">
          <Image
            src={item.photo.src}
            alt={item.photo.alt}
            fill
            sizes="(min-width: 1280px) 280px, (min-width: 1024px) 23vw, (min-width: 640px) 45vw, 38vw"
            quality={78}
            className="doc-photo object-cover"
          />
        </div>
      )}
      <div className="sm:mt-6 sm:flex sm:gap-4">
        <LineIcon name={item.icon} className="size-7 flex-none text-ink sm:mt-0.5 sm:size-8" />
        <div className="max-sm:mt-3">
          <h4 className={TITLE}>{item.title}</h4>
          <p className={BODY}>{item.body}</p>
        </div>
      </div>
    </li>
  );
}

export function WhatYouGet() {
  return (
    <section id="co-dostajesz" aria-labelledby="benefits-title" className="section bg-ivory text-ink">
      <div className="shell">
        <h2 id="benefits-title" className="display-2 mb-[clamp(48px,6vw,88px)]">
          Co dostajesz
        </h2>

        {benefitGroups.map((group) => {
          const items = benefits.filter((b) => b.group === group.id);
          return (
            <div key={group.id} className="mt-[clamp(64px,7vw,104px)] first-of-type:mt-0">
              <h3 className="mb-7 font-display text-[20px] font-medium tracking-[-0.01em]">{group.title}</h3>
              {group.id === "scena" ? (
                <ul className="grid list-none gap-x-[clamp(16px,1.8vw,28px)] gap-y-10 p-0 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-4">
                  {items.map((item) => (
                    <StageItem key={item.title} item={item} />
                  ))}
                </ul>
              ) : (
                <ul className="grid list-none gap-x-[clamp(40px,6vw,96px)] p-0 md:grid-cols-2">
                  {items.map((item) => (
                    <li key={item.title} className="flex gap-4 border-t border-rule-ivory py-6 sm:gap-5">
                      <LineIcon name={item.icon} className="mt-0.5 size-7 flex-none text-ink sm:size-8" />
                      <div>
                        <h4 className={TITLE}>{item.title}</h4>
                        <p className={BODY}>{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}

        <div className="mt-[clamp(56px,6vw,88px)] flex justify-center">
          <a href="#kontakt" className="btn btn-ink">
            {cta.primary}
          </a>
        </div>
      </div>
    </section>
  );
}

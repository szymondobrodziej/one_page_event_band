import { benefitGroups, benefits, cta, offerLead } from "@/content/site";
import { LineIcon } from "../Icons";
import { StageCards } from "../StageCards";

const TITLE = "font-display text-[clamp(21px,1.9vw,26px)] font-light leading-[1.15] tracking-[-0.02em]";
const BODY = "mt-2.5 max-w-[30em] text-[15px] leading-[1.6] text-smoke sm:text-[16px]";

// "Co dostajesz" (corrections, point 6): the four things that happen on stage are shown, each with the client's
// own photograph in a framed card that opens on hover (StageCards); what is organised around the stage stays a
// ruled list. Every item carries its line icon.
export function WhatYouGet() {
  return (
    <section id="co-dostajesz" aria-labelledby="benefits-title" className="section bg-ivory text-ink">
      <div className="shell">
        {/* "Oferta" heads the section on a gold plate, like "Największy problem eventów"; "Co dostajesz na scenie"
            follows as the first group's title, on one line where the width allows (client, 2026-11-26). */}
        <h2 id="benefits-title" className="plate-line plate-gold mb-[clamp(16px,1.8vw,26px)]">
          <span>{offerLead}</span>
        </h2>

        {benefitGroups.map((group) => {
          const items = benefits.filter((b) => b.group === group.id);
          return (
            <div key={group.id} className="mt-[clamp(64px,7vw,104px)] first-of-type:mt-0">
              {/* Larger at the client's request (2026-11-26); "Organizacja" matches it. It wraps only when the line runs
                  out, rather than balancing into two. */}
              <h3 className="mb-[clamp(24px,2.6vw,36px)] text-wrap font-display text-[clamp(1.75rem,2.6vw,2.375rem)] font-light leading-[1.05] tracking-[-0.03em]">
                {group.title}
              </h3>
              {group.id === "scena" ? (
                <StageCards items={items} />
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

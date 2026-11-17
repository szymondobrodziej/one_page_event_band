import { benefitGroups, benefits, cta } from "@/content/site";

// Two ruled lists instead of a grid of icon cards: what happens on stage, and what is organised around it.
// The people themselves are shown once, in the line-up of "Kto stoi na scenie".
export function WhatYouGet() {
  return (
    <section id="co-dostajesz" aria-labelledby="benefits-title" className="section bg-ivory text-ink">
      <div className="shell">
        <h2 id="benefits-title" className="display-2 mb-[clamp(48px,6vw,88px)]">
          Co dostajesz
        </h2>
        <div className="flex flex-wrap gap-x-[clamp(40px,6vw,96px)] gap-y-16">
          {benefitGroups.map((group) => (
            <div key={group.id} className="min-w-0 flex-[1_1_420px]">
              <h3 className="mb-6 font-display text-[20px] font-medium tracking-[-0.01em]">{group.title}</h3>
              <ul className="list-none p-0">
                {benefits
                  .filter((b) => b.group === group.id)
                  .map((b) => (
                    <li key={b.title} className="border-t border-rule-ivory py-6">
                      <h4 className="font-display text-[clamp(22px,2vw,26px)] font-light leading-tight tracking-[-0.02em]">{b.title}</h4>
                      <p className="mt-2.5 max-w-[30em] text-[16px] leading-[1.6] text-smoke">{b.body}</p>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>

        <a href="#kontakt" className="btn btn-ink mt-[clamp(56px,6vw,88px)]">
          {cta.primary}
        </a>
      </div>
    </section>
  );
}

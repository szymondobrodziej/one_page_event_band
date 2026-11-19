"use client";

import { useState } from "react";
import { faq } from "@/content/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section bg-ivory text-ink">
      <div className="shell flex flex-wrap items-start gap-x-[clamp(40px,6vw,96px)] gap-y-10">
        <h2 id="faq-title" className="display-2 flex-[1_1_300px] md:sticky md:top-28">
          {faq.headline}
        </h2>
        <div className="min-w-0 flex-[2_1_600px] border-t border-rule-ivory">
          {faq.items.map((item, i) => {
            const isOpen = open === i;
            const id = `faq-${i}`;
            return (
              <div key={item.q} className="border-b border-rule-ivory">
                <h3>
                  <button
                    type="button"
                    id={`${id}-q`}
                    aria-expanded={isOpen}
                    aria-controls={`${id}-a`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-[clamp(19px,1.7vw,24px)] leading-[1.3] tracking-[-0.015em] transition-colors duration-200 group-hover:text-smoke">
                      {item.q}
                    </span>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" className="flex-none text-gold">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" className={`origin-center transition-transform duration-300 ease-[var(--ease-arrive)] ${isOpen ? "scale-y-0" : "scale-y-100"}`} />
                    </svg>
                  </button>
                </h3>
                <div
                  id={`${id}-a`}
                  role="region"
                  aria-labelledby={`${id}-q`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-[var(--ease-arrive)] motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  inert={!isOpen}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-[40em] pr-14 pb-8 text-[17px] leading-[1.65] text-smoke">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

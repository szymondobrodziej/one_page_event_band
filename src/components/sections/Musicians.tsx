import { cta, musicians } from "@/content/site";
import { LineUp } from "../LineUp";

export function Musicians() {
  return (
    <section id="muzycy" aria-labelledby="musicians-title" className="section bg-ivory text-ink">
      <div className="shell">
        <div className="flex flex-wrap items-start justify-between gap-x-[clamp(48px,6vw,96px)] gap-y-9">
          <h2 id="musicians-title" className="display-2 flex-[1_1_320px]">
            {musicians.headline}
          </h2>
          <div className="min-w-0 max-w-[36em] flex-[1.4_1_440px]">
            {musicians.body.map((p, i) => (
              <p key={i} className={`${i === 0 ? "" : "mt-5"} text-[18px] leading-[1.7] text-smoke`}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <LineUp />

        <a href="#kontakt" className="btn btn-ink mt-[clamp(48px,5vw,72px)]">
          {cta.primary}
        </a>
      </div>
    </section>
  );
}

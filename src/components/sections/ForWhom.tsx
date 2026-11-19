import { forWhom } from "@/content/site";
import { CheckGlyph, DashGlyph } from "../Icons";

export function ForWhom() {
  return (
    <section aria-labelledby="for-whom-title" className="bg-ink">
      <div className="shell pt-[clamp(96px,11vw,168px)] pb-[clamp(48px,5vw,72px)]">
        <h2 id="for-whom-title" className="display-2">
          {forWhom.headline}
        </h2>
      </div>
      <div className="flex flex-wrap">
        <div className="min-w-0 flex-[1_1_480px] bg-ivory px-[clamp(20px,5vw,64px)] py-[clamp(48px,6vw,96px)] text-ink">
          <div className="ml-auto max-w-[560px]">
            <h3 className="mb-7 font-display text-[20px] font-medium tracking-[-0.01em]">{forWhom.yesTitle}</h3>
            <ul className="list-none p-0">
              {forWhom.yes.map((line) => (
                <li key={line} className="flex gap-4.5 border-t border-rule-ivory py-5.5">
                  <CheckGlyph className="mt-1 size-[22px] flex-none text-gold" />
                  <span className="font-display text-[clamp(22px,2vw,28px)] font-light leading-tight tracking-[-0.02em]">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="min-w-0 flex-[1_1_480px] bg-ink px-[clamp(20px,5vw,64px)] py-[clamp(48px,6vw,96px)]">
          <div className="mr-auto max-w-[560px]">
            <h3 className="mb-7 font-display text-[20px] font-medium tracking-[-0.01em] text-stone">{forWhom.noTitle}</h3>
            <ul className="list-none p-0">
              {forWhom.no.map((line) => (
                <li key={line} className="flex gap-4.5 border-t border-[#262626] py-5.5">
                  <DashGlyph className="mt-1 size-[22px] flex-none text-[#5c5852]" />
                  <span className="font-display text-[clamp(22px,2vw,28px)] font-light leading-tight tracking-[-0.02em] text-stone">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

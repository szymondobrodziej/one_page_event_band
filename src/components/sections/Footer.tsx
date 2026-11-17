import { cta, site } from "@/content/site";
import { Lockup } from "../Logo";

const COLUMN_HEAD = "mb-1 font-display text-[15px] font-medium";
// Footer links are stacked, not inline, so each gets a full touch row (about 38px) rather than its 22px line.
const LINK = "link-quiet py-2 text-[15px] text-ash no-underline";

export function Footer() {
  return (
    <footer className="border-t border-rule-ink bg-ink pt-[clamp(72px,8vw,120px)] pb-[calc(40px+env(safe-area-inset-bottom))] max-md:pb-32">
      <div className="shell">
        <p className="font-display text-[clamp(2.375rem,5.2vw,5rem)] font-light leading-[0.98] tracking-[-0.04em]">
          <span className="block">Eleven musicians.</span>
          <span className="block">One signature sound.</span>
        </p>

        <div className="mt-[clamp(56px,7vw,104px)] flex flex-wrap items-start justify-between gap-x-18 gap-y-12">
          <a href="#top" aria-label="Aurum Eleven, początek strony" className="text-ivory">
            <Lockup width={56} size="md" />
          </a>
          <div className="flex flex-wrap gap-x-20 gap-y-10">
            <div className="flex min-w-36 flex-col">
              <h2 className={COLUMN_HEAD}>Kontakt</h2>
              <a href="#kontakt" className={LINK}>
                {cta.short}
              </a>
              {site.email && (
                <a href={`mailto:${site.email}`} className={LINK}>
                  {site.email}
                </a>
              )}
              {site.phone && (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className={LINK}>
                  {site.phone}
                </a>
              )}
            </div>
            <div className="flex min-w-36 flex-col">
              <h2 className={COLUMN_HEAD}>Na bieżąco</h2>
              {site.social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={LINK}>
                  {s.name}
                </a>
              ))}
            </div>
            <div className="flex min-w-36 flex-col">
              <h2 className={COLUMN_HEAD}>Informacje</h2>
              <a href="/polityka-prywatnosci" className={LINK}>
                Polityka prywatności
              </a>
              {site.company && <span className="py-2 text-[15px] text-stone">{site.company}</span>}
            </div>
          </div>
        </div>

        <div className="mt-18 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-rule-ink pt-6 text-[13px] text-stone">
          <span>© {new Date().getFullYear()} Aurum Eleven</span>
          <span>{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}

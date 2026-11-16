import { site } from "@/content/site";
import { Lockup } from "../Logo";

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
            <div className="flex min-w-36 flex-col gap-3">
              <h2 className="font-display text-[15px] font-medium">Kontakt</h2>
              {site.email ? (
                <a href={`mailto:${site.email}`} className="link-quiet text-[15px] text-ash no-underline">
                  {site.email}
                </a>
              ) : (
                <span className="text-[15px] text-ash">[e-mail firmowy]</span>
              )}
              {site.phone ? (
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="link-quiet text-[15px] text-ash no-underline">
                  {site.phone}
                </a>
              ) : (
                <span className="text-[15px] text-ash">[numer telefonu]</span>
              )}
            </div>
            <div className="flex min-w-36 flex-col gap-3">
              <h2 className="font-display text-[15px] font-medium">Na bieżąco</h2>
              {site.social.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="link-quiet text-[15px] text-ash no-underline">
                  {s.name}
                </a>
              ))}
            </div>
            <div className="flex min-w-36 flex-col gap-3">
              <h2 className="font-display text-[15px] font-medium">Informacje</h2>
              <a href="/polityka-prywatnosci" className="link-quiet text-[15px] text-ash no-underline">
                Polityka prywatności
              </a>
              {site.company && <span className="text-[15px] text-stone">{site.company}</span>}
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

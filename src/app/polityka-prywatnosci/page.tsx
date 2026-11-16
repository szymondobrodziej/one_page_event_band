import type { Metadata } from "next";
import Link from "next/link";
import { Lockup } from "@/components/Logo";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Polityka prywatności | Aurum Eleven",
  description: "Jak Aurum Eleven przetwarza dane wysłane przez formularz zapytania o termin.",
};

// Draft: the administrator's legal name, address and NIP come from the client (NEXT_PUBLIC_COMPANY_LINE).
export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ivory text-ink">
      <div className="shell py-10">
        <Link href="/" aria-label="Aurum Eleven, strona główna" className="inline-block text-ink">
          <span className="inline-flex rounded-none bg-ink px-3 py-2 text-ivory">
            <Lockup />
          </span>
        </Link>
      </div>
      <article className="shell pb-32">
        <h1 className="display-2 max-w-[12em]">Polityka prywatności</h1>
        <div className="mt-12 max-w-[42em] space-y-6 text-[17px] leading-[1.7] text-smoke">
          <p>
            Administratorem danych jest{" "}
            {site.company ? <strong className="font-medium text-ink">{site.company}</strong> : "Aurum Eleven (pełne dane administratora zostaną uzupełnione)"}.
          </p>
          <h2 className="pt-6 font-display text-[24px] font-medium tracking-[-0.01em] text-ink">Jakie dane zbieramy</h2>
          <p>Przez formularz „Zapytaj o dostępność terminu” zbieramy imię, adres e-mail, opcjonalnie numer telefonu oraz treść wiadomości.</p>
          <h2 className="pt-6 font-display text-[24px] font-medium tracking-[-0.01em] text-ink">Po co</h2>
          <p>
            Dane wykorzystujemy wyłącznie po to, żeby odpowiedzieć na zapytanie, sprawdzić dostępność terminu i przygotować wycenę. Podstawą jest art. 6
            ust. 1 lit. b RODO (działania przed zawarciem umowy na Twoje żądanie).
          </p>
          <h2 className="pt-6 font-display text-[24px] font-medium tracking-[-0.01em] text-ink">Jak długo</h2>
          <p>Przechowujemy je przez czas prowadzenia rozmów o wydarzeniu, a jeśli dojdzie do współpracy, przez okres wynikający z umowy i przepisów podatkowych.</p>
          <h2 className="pt-6 font-display text-[24px] font-medium tracking-[-0.01em] text-ink">Twoje prawa</h2>
          <p>
            Masz prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania i przeniesienia, a także prawo wniesienia skargi do
            Prezesa Urzędu Ochrony Danych Osobowych.
          </p>
          <p>
            {site.email ? (
              <>
                W sprawach danych osobowych napisz na <a href={`mailto:${site.email}`} className="text-ink underline">{site.email}</a>.
              </>
            ) : (
              "W sprawach danych osobowych skontaktuj się z nami przez formularz na stronie głównej."
            )}
          </p>
        </div>
        <Link href="/" className="btn btn-ink mt-16">
          Wróć na stronę główną
        </Link>
      </article>
    </main>
  );
}

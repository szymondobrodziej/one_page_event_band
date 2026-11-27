# Aurum Eleven — strona www

Landing page Aurum Eleven, 11-osobowego zespołu na eventy firmowe. Next.js (App Router) + Tailwind CSS 4, wideo renderowane w Remotion (`video/`).

## Uruchomienie

```bash
npm install
npm run dev
```

Strona działa na http://localhost:3000. Build produkcyjny: `npm run build && npm run start`.

## Zmienne środowiskowe

Skopiuj `.env.example` do `.env.local` i uzupełnij to, co już jest znane. Brakujące dane kontaktowe są na stronie ukrywane, a nie zastępowane zaślepkami.

| Zmienna | Do czego |
|---|---|
| `SMTP_HOST` | serwer poczty wychodzącej skrzynki zespołu (home.pl: `serwer2615779.hosting-home.pl`); bez `SMTP_HOST`, `SMTP_USER` i `SMTP_PASS` formularz uczciwie informuje, że wysyłka nie jest włączona |
| `SMTP_PORT` | port SMTP, domyślnie `465` (SSL) |
| `SMTP_USER` | adres skrzynki, z której strona wysyła zapytania, np. `kontakt@aurumeleven.pl` |
| `SMTP_PASS` | hasło tej skrzynki (na Vercelu jako zmienna typu Sensitive) |
| `CONTACT_TO_EMAIL` | adres (lub adresy po przecinku), na który przychodzą zapytania; domyślnie sama skrzynka |
| `CONTACT_FROM_EMAIL` | nadawca, domyślnie `Aurum Eleven <SMTP_USER>`; „Odpowiedz” trafia do osoby z formularza |
| `NEXT_PUBLIC_CONTACT_EMAIL` | firmowy e-mail pokazywany przy formularzu i w stopce |
| `NEXT_PUBLIC_CONTACT_PHONE` | telefon pokazywany przy formularzu i w stopce |
| `NEXT_PUBLIC_COMPANY_LINE` | nazwa firmy i NIP do stopki i polityki prywatności |
| `NEXT_PUBLIC_FULL_RECORDING_URL` | link do pełnego nagrania na YouTube (domyślnie kanał @AurumEleven) |
| `NEXT_PUBLIC_SITE_URL` | docelowy adres strony (canonical, sitemap) |
| `NEXT_PUBLIC_INDEXABLE` | `true` tylko na produkcyjnej domenie; inaczej strona ma `noindex` |

## Wdrożenie

Strona stoi na Vercelu w zespole Aurum Eleven, projekt `one-page-event-band` (https://one-page-event-band.vercel.app), podłączony do tego repozytorium. Każdy push na `main` sam wdraża produkcję, a inne gałęzie dostają podglądy. Zmienne środowiskowe z tabeli powyżej ustawia się w projekcie na Vercelu, nie w repozytorium.

## Struktura

- `src/content/site.ts` — wszystkie teksty (wiernie ze struktury od klienta) i zdjęcia.
- `src/components/sections/` — sekcje strony w kolejności z `src/app/page.tsx`.
- `src/components/StageCanvas.tsx` — hero: scena ze showreelu na pełną wysokość, w monochromie, z kolorem zapalanym pod kursorem (WebGL); `StageBand.tsx` to wersja awaryjna bez WebGL.
- `src/app/api/enquiry/route.ts` — wysyłka formularza ze skrzynki zespołu przez SMTP (nodemailer).
- `src/lib/email/` — wygląd maila z zapytaniem (HTML w barwach strony, wersja ciemna, znak A11 dołączony w treści) i jego wersja tekstowa.
- `public/media/` — zdjęcia (2400 px, Next.js serwuje AVIF/WebP) i wyrenderowane wideo.
- `video/` — projekt Remotion (instrukcja w `video/README.md`).
- `PRODUCT.md`, `.impeccable/` — kontekst produktu i kierunek projektu dla skilla Impeccable.

## Do uzupełnienia przez klienta

Firmowy e-mail i telefon, dane firmy (NIP), treść polityki prywatności z danymi administratora, link do pełnego nagrania z dźwiękiem, potwierdzenie schematu ustawienia składu na scenie.

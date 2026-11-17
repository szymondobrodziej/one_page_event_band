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
| `RESEND_API_KEY` | klucz Resend; bez niego formularz uczciwie informuje, że wysyłka nie jest włączona |
| `CONTACT_TO_EMAIL` | adres (lub adresy po przecinku), na który przychodzą zapytania |
| `CONTACT_FROM_EMAIL` | nadawca w domenie zweryfikowanej w Resend, np. `Aurum Eleven <formularz@aurumeleven.pl>` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | firmowy e-mail pokazywany przy formularzu i w stopce |
| `NEXT_PUBLIC_CONTACT_PHONE` | telefon pokazywany przy formularzu i w stopce |
| `NEXT_PUBLIC_COMPANY_LINE` | nazwa firmy i NIP do stopki i polityki prywatności |
| `NEXT_PUBLIC_FULL_RECORDING_URL` | link do pełnego nagrania na YouTube (domyślnie kanał @AurumEleven) |
| `NEXT_PUBLIC_SITE_URL` | docelowy adres strony (canonical, sitemap) |
| `NEXT_PUBLIC_INDEXABLE` | `true` tylko na produkcyjnej domenie; inaczej strona ma `noindex` |

## Struktura

- `src/content/site.ts` — wszystkie teksty (wiernie ze struktury od klienta) i zdjęcia.
- `src/components/sections/` — sekcje strony w kolejności z `src/app/page.tsx`.
- `src/components/sections/Hero.tsx` — hero: nagłówek i film sceny na całą szerokość (zwykłe `<video>` bez JavaScriptu; pętla renderowana w `video/`).
- `src/app/api/enquiry/route.ts` — wysyłka formularza przez Resend.
- `public/media/` — zdjęcia (2400 px, Next.js serwuje AVIF/WebP) i wyrenderowane wideo.
- `video/` — projekt Remotion (instrukcja w `video/README.md`).
- `PRODUCT.md`, `.impeccable/` — kontekst produktu i kierunek projektu dla skilla Impeccable.

## Do uzupełnienia przez klienta

Firmowy e-mail i telefon, dane firmy (NIP), treść polityki prywatności z danymi administratora, link do pełnego nagrania z dźwiękiem, potwierdzenie schematu ustawienia składu na scenie.

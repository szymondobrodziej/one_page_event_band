# PRD: One-Page Website — Zespół Live na Eventy Firmowe

**Wersja:** 1.0  
**Data:** 2026-01-14  
**Product Owner:** [Do uzupełnienia]  
**Status:** Draft → Review

---

## 1. Cel produktu

| Aspekt | Opis |
|--------|------|
| **Cel główny** | Maksymalizacja zapytań o dostępność terminów od firm B2B |
| **Cel dodatkowy** | Budowa wizerunku premium i wiarygodności zespołu |
| **Konwersja główna** | Wypełnienie formularza „Sprawdź termin" |
| **Konwersja pomocnicza** | Obejrzenie showreela, pobranie EPK |

**Metryka sukcesu:**  
- Conversion Rate (formularz) > 3%  
- Bounce Rate < 40%  
- Średni czas na stronie > 90s

---

## 2. Archetypy marki i ton głosu

### 2.1 Rdzeń narracji

| Aspekt | Opis |
|--------|------|
| **Insight** | Klient B2B boi się ryzyka: opóźnień, chaosu technicznego, „cringe'u" na scenie |
| **Archetyp Władca** | Bezpieczeństwo, prestiż, kontrola, standard, klasa |
| **Archetyp Bohater** | Efekt, energia, „dowożenie", parkiet, emocje, „wow" |
| **Pozycjonowanie** | Partner, który dowozi event od strony produkcyjnej i robi wynik na sali |

### 2.2 Big Idea

> **„Dowożymy eventy firmowe w standardzie premium — z energią live, która podnosi temperaturę sali."**

Alternatywy:
- „Kontrola produkcji. Energia sceny. Zero ryzyka."
- „Profesjonalna realizacja + show, które naprawdę działa na ludzi."

### 2.3 Tagline / Claim (do Hero)

| # | Wariant |
|---|---------|
| 1 | „Premium live band dla eventów firmowych — pewność i efekt." |


### 2.4 Ton głosu (Voice)

| Archetyp | Charakterystyka |
|----------|-----------------|
| **Władca** | Konkret, standardy, pewność, spokój |
| **Bohater** | Dynamika, moc, rezultat, emocje |

**Zasady copy:**
- Mów w kategoriach rezultatów, nie cech („pełny parkiet", „płynny scenariusz", „bez nerwów")
- Zawsze dodawaj dowód (liczby, procedura, case, referencja)
- Zero przesady/krzykliwości — premium

### 2.5 Słownictwo marki

| Kategoria | Słowa-klucze |
|-----------|--------------|
| **Władca** | standard, kontrola, produkcja, jakość, scenariusz, rider, punktualność, bezpieczeństwo, klasa |
| **Bohater** | energia, finał, tempo, „ciągniemy salę", momenty wow, dynamika, podkręcamy emocje |
| **Unikaj** | „najlepsi", „mega sztos", „rozkręcimy imprezkę" (obniża premium) |

### 2.6 Proof Statements (do użycia w UI)

- „Rider techniczny i harmonogram dopinamy przed eventem."
- „Obsługujemy wydarzenia PL/EN."
- „Współpracujemy z agencjami i działami HR/Marketing."
- „Działamy na umowie, z fakturą."
- „Sety projektujemy pod scenariusz: otwarcie → peak → finał."

### 2.7 Manifest marki

**Wariant Władca:**
> „Dostarczamy eventy firmowe w standardzie premium. Działamy procesowo i przewidywalnie — a na scenie robimy show, które podnosi energię całej sali."

**Wariant Bohater:**
> „Wchodzimy na scenę po efekt. Gramy tak, żeby ludzie weszli w klimat — a organizator miał spokój, że wszystko jest dopięte."

---

## 3. Persona docelowa

| Cecha | Opis |
|-------|------|
| **Rola** | HR Manager / Event Manager / Marketing Manager |
| **Firma** | Korporacje, średnie firmy, agencje eventowe |
| **Motywacja** | Szybko znaleźć "bezpieczny wybór" — sprawdzony zespół |
| **Pain points** | Brak czasu, ryzyko wizerunkowe, logistyka, budżet |
| **Decyzja** | Porównuje 2-3 oferty, wybiera wiarygodność + dostępność |

---

## 4. Architektura informacji (sekcje)

```
┌─────────────────────────────────────────────────────────┐
│  1. HERO + CTA + Proof Pills                            │
├─────────────────────────────────────────────────────────┤
│  2. ZAUFALI NAM — logotypy + metryki + cytat            │
├─────────────────────────────────────────────────────────┤
│  3. SHOWREEL — wideo główne + karuzela klipów           │
├─────────────────────────────────────────────────────────┤
│  4. FORMATY WSPÓŁPRACY — 3 karty ofertowe               │
├─────────────────────────────────────────────────────────┤
│  5. CASE STUDIES — 2-3 realizacje                       │
├─────────────────────────────────────────────────────────┤
│  6. GALERIA — karuzela + lightbox                       │
├─────────────────────────────────────────────────────────┤
│  7. PROCES — 4 kroki współpracy                         │
├─────────────────────────────────────────────────────────┤
│  8. FAQ — akordeon 10-12 pytań                          │
├─────────────────────────────────────────────────────────┤
│  9. KONTAKT + FORMULARZ — lead capture                  │
├─────────────────────────────────────────────────────────┤
│ 10. FOOTER — dane, social, prawne                       │
└─────────────────────────────────────────────────────────┘
```

---

## 5. Specyfikacja sekcji (z gotowym copy)

### 5.1 Hero ⚡ Władca + Bohater

| Element | Specyfikacja |
|---------|--------------|
| **H1 (opcja B)** | „Premium live band — bezpieczny wybór, mocny efekt." |
| **Subheadline** | „Prowadzimy wydarzenia od strony muzycznej i produkcyjnej: dopięty rider, płynny przebieg, a na scenie — show, które działa na ludzi." |
| **Proof pills** | `Faktura / umowa` · `PL/EN repertuar` · `Rider techniczny` · `Realizacja na wysokim poziomie` |
| **CTA Primary** | „Sprawdź dostępność terminu" → scroll do formularza |
| **CTA Secondary** | „Zobacz showreel" → scroll do wideo |
| **Tło** | Wideo loop (muted) lub hero image z eventu |
| **Mobile** | Sticky CTA „Sprawdź termin" na dolnej krawędzi |

### 5.2 Zaufali nam 👑 Władca

| Element | Specyfikacja |
|---------|--------------|
| **Nagłówek** | „Spokój organizatora. Poziom, który czuć na sali." |
| **Opis** | „W eventach firmowych liczą się standardy i przewidywalność. Dlatego działamy procesowo: brief → rider → harmonogram → realizacja." |
| **Logotypy** | 6-12 firm (karuzela na mobile) |
| **Metryki** | 3 liczby: `X lat` · `Y+ eventów` · `Z+ miast` |
| **Hero quote** | 1 cytat od klienta (nazwa firmy + stanowisko) |

### 5.3 Showreel & Klipy 🦸 Bohater

| Element | Specyfikacja |
|---------|--------------|
| **Nagłówek** | „Zobacz, jak budujemy momenty 'wow'." |
| **Opis** | „Od eleganckiego otwarcia po finał, który zamyka wieczór z energią. Gramy tak, żeby ludzie chcieli zostać do końca." |
| **Wideo główne** | 30-90s, lite-embed (YouTube/Vimeo), poster image |
| **Karuzela zdjęć** | 4-8 zdjęć: Gala, Integracja, Konferencja, Afterparty |
| **Micro-CTA** | „Pobierz EPK" (opcjonalnie, link do PDF) |

### 5.4 Formaty współpracy ⚡ Władca + Bohater

**Nagłówek sekcji:** „Format dopasowany do scenariusza eventu."
**Wstęp:** „Dobieramy tempo i brzmienie do typu wydarzenia — bez chaosu i bez przypadków."

**3 karty ofertowe:**

| Karta | Gala / Konferencja 👑 | Integracja / Impreza ⚡ | Afterparty / Club Set 🦸 |
|-------|----------------------|------------------------|-------------------------|
| **Archetyp** | Władca | Władca + Bohater | Bohater |
| **Copy** | „Eleganckie brzmienie, kontrola dynamiki, perfekcyjny timing pod scenariusz." | „Narracja zaprojektowana pod reakcję sali — od pierwszych taktów do pełnego parkietu." | „Tempo, energia i finał. Mocne brzmienie, które domyka event." |
| **Dla kogo** | Gale, bankiety, konferencje | Team-building, jubileusze | Zakończenia eventów |
| **Sety** | 2-3 × 45 min | 2-3 × 60 min | 1-2 × 90 min |
| **Skład** | 5-7 osób | 5-7 osób | 4-5 osób + DJ |
| **Rider** | Pełny (po naszej stronie) | Pełny lub częściowy | Minimalny |
| **Faktura** | ✓ VAT | ✓ VAT | ✓ VAT |
| **CTA** | „Sprawdź termin pod ten format" | „Sprawdź termin pod ten format" | „Sprawdź termin pod ten format" |

### 5.5 Case Studies 👑 Władca (dowód)

**Nagłówek:** „Realizacje, które dowieźliśmy od A do Z."

**Szablon case (4 linie):**
```
Typ: [gala/integracja] | Uczestnicy: [widełki]
Zakres: [muzyka + technika + scenariusz]
Wyzwanie: [np. krótki montaż / nietypowa scena]
Efekt: [np. pełny parkiet po 20 min / świetny feedback]
```

**Przykład:**
```
Typ: Gala rocznicowa | Uczestnicy: 400 osób
Zakres: Muzyka live + pełna produkcja sceniczna
Wyzwanie: Montaż 2h, ścisły harmonogram przemówień
Efekt: Pełny parkiet od pierwszego setu, ponowna rezerwacja na kolejny rok
```

### 5.6 Galeria

| Element | Specyfikacja |
|---------|--------------|
| **Liczba zdjęć** | 8-16 |
| **Kategorie** | Stage · Corporate · Backstage |
| **Format** | Karuzela + lightbox (swipe na mobile) |
| **Optymalizacja** | AVIF/WebP, lazy-load, max 200KB/zdjęcie |

### 5.7 Proces współpracy 👑 Władca

**Nagłówek:** „Przewidywalny proces. Zero stresu po stronie organizatora."

**4 kroki (timeline/stepper):**

| Krok | Tytuł | Opis |
|------|-------|------|
| 1 | Brief + termin | „2 min w formularzu — i wiemy, czy termin pasuje" |
| 2 | Wycena | „Oferta + rider + umowa w 24-48h" |
| 3 | Scenariusz | „Ustalamy setlistę i harmonogram eventu" |
| 4 | Realizacja | „Gramy, rozliczamy, wystawiamy fakturę VAT" |

### 5.8 FAQ 👑 Władca (minimalizacja ryzyka)

**Nagłówek:** „Pytania, które padają najczęściej w eventach firmowych."
**Lead:** „Wolimy dopiąć szczegóły wcześniej — to gwarantuje jakość realizacji."

| # | Pytanie |
|---|---------|
| 1 | Czy wystawiacie fakturę VAT? |
| 2 | Ile miejsca potrzebujecie na scenę? |
| 3 | Czy macie własne nagłośnienie i oświetlenie? |
| 4 | Jak wygląda rider techniczny? |
| 5 | Ile setów gracie i jak długie przerwy? |
| 6 | Czy możliwe występy w języku angielskim? |
| 7 | Czy możecie poprowadzić elementy konferansjerskie? |
| 8 | Jak szybko potwierdzacie rezerwację terminu? |
| 9 | Kiedy wymagany jest dojazd i nocleg? |
| 10 | Co w razie opóźnień w harmonogramie eventu? |

### 5.9 Formularz „Sprawdź termin" ⚡ Domknięcie

**Nagłówek:** „Sprawdź termin — wrócimy z odpowiedzią i propozycją formatu."
**Opis:** „Podaj datę, miasto i typ eventu. Odpowiemy z dostępnością i krótką propozycją (sety + technika + warunki)."

**Pola (max 6):**

| Pole | Typ | Wymagane |
|------|-----|----------|
| Firma / Osoba kontaktowa | text | ✓ |
| Email | email | ✓ |
| Telefon | tel | ✓ |
| Data wydarzenia | date picker | ✓ |
| Miasto / Venue | text | ✓ |
| Typ eventu | select: Gala / Integracja / Afterparty | ✓ |
| Liczba uczestników | select: <50 / 50-150 / 150-300 / 300+ | opcjonalne |
| Budżet (widełki) | select | opcjonalne |

**Microcopy pod formularzem:**
„Wolisz kontakt telefoniczny? Zadzwoń — 2–3 min i wiesz, czy termin jest możliwy."

**Po wysłaniu:**
- Ekran: „Dziękujemy — wracamy w ciągu 24h"
- Link do showreela
- Opcjonalnie: kalendarz Calendly do szybkiej rozmowy

### 5.10 Footer

| Element | Zawartość |
|---------|-----------|
| **Dane firmy** | Nazwa, NIP, adres |
| **Kontakt** | Email, telefon |
| **Social** | Instagram, YouTube, Facebook, Tiktok |
| **Prawne** | Polityka prywatności, Regulamin |

---

## 6. CTA — rozmieszczenie

| Lokalizacja | Typ | Tekst |
|-------------|-----|-------|
| Hero | Primary Button | „Sprawdź dostępność terminu" |
| Hero | Secondary Link | „Zobacz showreel" |
| Każda karta oferty | Button | „Sprawdź termin pod ten format" |
| Sticky mobile | Floating Button | „Sprawdź termin" |
| Po case studies | Button | „Sprawdź dostępność" |
| FAQ | Text link | „Masz więcej pytań? Napisz do nas" |

---

## 7. Wymagania techniczne

### 7.1 Stack

| Warstwa | Technologia |
|---------|-------------|
| Framework | Next.js 14+ (App Router) lub Astro |
| Styling | Tailwind CSS |
| Animacje | Framer Motion (opcjonalnie) |
| Formularz | React Hook Form + walidacja Zod |
| Backend formularza | Resend / Nodemailer / zewnętrzny webhook |
| Hosting | Vercel / Netlify |
| Analytics | Plausible / GA4 |

### 7.2 Performance

| Metryka | Target |
|---------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| FID | < 100ms |
| Lighthouse Score | > 90 |

**Optymalizacje:**
- Obrazy: AVIF/WebP, `next/image` z lazy-load
- Wideo: lite-embed (fasada), poster image
- Fonty: `font-display: swap`, subset
- CSS: critical inline, reszta async

### 7.3 SEO & Schema

| Element | Implementacja |
|---------|---------------|
| **Meta title** | „Zespół na event firmowy — [Nazwa] | Gale, integracje, afterparty" |
| **Meta description** | „Profesjonalny zespół live na eventy B2B. Pełna obsługa techniczna, faktura VAT. Sprawdź dostępność terminu." |
| **OG Image** | 1200×630, optimized dla LinkedIn |
| **Schema.org** | `FAQPage` + `LocalBusiness` / `MusicGroup` |
| **Sitemap** | Automatyczny (Next.js) |

---

## 8. Content checklist

| Asset | Ilość | Status |
|-------|-------|--------|
| Showreel (30-90s) | 1 | ⬜ Do produkcji |
| Klipy eventowe (10-20s) | 4-8 | ⬜ Do produkcji |
| Zdjęcia (scena/światła/dress) | 8-16 | ⬜ Do selekcji |
| Logotypy klientów | 6-12 | ⬜ Do zebrania zgód |
| Case studies | 2-3 | ⬜ Do napisania |
| FAQ (odpowiedzi) | 10-12 | ⬜ Do napisania |
| Rider PDF | 1 | ⬜ Do przygotowania |
| Zdjęcie setupu sceny | 1 | ⬜ Do selekcji |
| EPK (opcjonalnie) | 1 | ⬜ Do przygotowania |

---

## 9. Milestones

| Faza | Zakres | Deadline |
|------|--------|----------|
| **M1: Discovery** | Zebranie contentu, finalizacja copy | +7 dni |
| **M2: Design** | Wireframe → UI design (Figma) | +14 dni |
| **M3: Development** | Implementacja Next.js/Astro | +28 dni |
| **M4: QA** | Testy, optymalizacja, responsywność | +35 dni |
| **M5: Launch** | Deploy produkcyjny, monitoring | +42 dni |

---

## 10. Ryzyka i mitygacje

| Ryzyko | Prawdopodobieństwo | Wpływ | Mitygacja |
|--------|-------------------|-------|-----------|
| Brak zgód na logotypy | Średnie | Średni | Przygotować alternatywę: „branże" zamiast firm |
| Opóźnienia w produkcji wideo | Wysokie | Wysoki | Zacząć od placeholder, priorytet na showreel |
| Niska konwersja formularza | Średnie | Wysoki | A/B test copy CTA, uproszczenie pól |
| Słabe SEO | Niskie | Średni | Schema, OG dla LinkedIn, szybkie LCP |

---

## 11. Definition of Done

- [ ] Wszystkie sekcje zaimplementowane zgodnie ze specyfikacją
- [ ] Formularz działa i wysyła powiadomienia
- [ ] Lighthouse > 90 (Performance, Accessibility, SEO)
- [ ] Responsywność: mobile / tablet / desktop
- [ ] Sticky CTA działa na mobile
- [ ] Wszystkie linki działają
- [ ] Polityka prywatności i zgody RODO
- [ ] Analytics zintegrowane
- [ ] Content załadowany (zdjęcia, wideo, copy)

---

## Appendix A: Wireframe (low-fidelity)

```
┌──────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│  [Logo]                      [CTA: Sprawdź dostępność]       │
├──────────────────────────────────────────────────────────────┤
│                     HERO ⚡ Władca+Bohater                    │
│                                                              │
│     „Zespół live na eventy firmowe — klasa i energia."      │
│     „Prowadzimy wydarzenia od strony muzycznej              │
│      i produkcyjnej: dopięty rider, płynny przebieg..."     │
│                                                              │
│   [Faktura/umowa] [PL/EN] [Rider tech.] [Realizacja premium]│
│                                                              │
│        [  Sprawdź termin  ]    [Zobacz showreel]            │
│                                                              │
├──────────────────────────────────────────────────────────────┤
│                  ZAUFALI NAM 👑 Władca                       │
│   „Spokój organizatora. Poziom, który czuć na sali."        │
│   [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]                 │
│      10 lat        150+ eventów        40+ miast            │
│   „[Cytat od klienta]" — Jan Kowalski, HR Director          │
├──────────────────────────────────────────────────────────────┤
│                  SHOWREEL 🦸 Bohater                         │
│   „Zobacz, jak budujemy momenty 'wow'."                     │
│   ┌─────────────────────────────────────────────────────┐   │
│   │                  ▶ VIDEO                            │   │
│   └─────────────────────────────────────────────────────┘   │
│   [Gala] [Integracja] [Konferencja] [Afterparty] →          │
├──────────────────────────────────────────────────────────────┤
│              FORMATY WSPÓŁPRACY ⚡ Władca+Bohater            │
│   „Format dopasowany do scenariusza eventu."                │
│   ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│   │  GALA 👑     │ │INTEGRACJA ⚡ │ │AFTERPARTY 🦸│        │
│   │ Elegancko    │ │ Tanecznie    │ │ Mocno        │        │
│   │ 2-3 × 45min  │ │ 2-3 × 60min  │ │ 1-2 × 90min  │        │
│   │[Sprawdź]     │ │[Sprawdź]     │ │[Sprawdź]     │        │
│   └──────────────┘ └──────────────┘ └──────────────┘        │
├──────────────────────────────────────────────────────────────┤
│                 CASE STUDIES 👑 Władca                       │
│   „Realizacje, które dowieźliśmy od A do Z."                │
│   [Case 1: Gala rocznicowa]  [Case 2: Integracja IT]        │
├──────────────────────────────────────────────────────────────┤
│                       GALERIA                                │
│   ← [img] [img] [img] [img] [img] →                         │
├──────────────────────────────────────────────────────────────┤
│                 JAK DZIAŁAMY 👑 Władca                       │
│   „Przewidywalny proces. Zero stresu."                      │
│   (1)────────(2)────────(3)────────(4)                      │
│ Brief+termin  Wycena   Scenariusz  Realizacja               │
├──────────────────────────────────────────────────────────────┤
│                      FAQ 👑 Władca                           │
│   „Pytania, które padają najczęściej..."                    │
│   [+] Czy wystawiacie fakturę VAT?                          │
│   [+] Ile miejsca potrzebujecie na scenę?                   │
│   [+] ...                                                    │
├──────────────────────────────────────────────────────────────┤
│                 FORMULARZ ⚡ Domknięcie                      │
│   „Sprawdź termin — wrócimy z propozycją formatu."          │
│   ┌────────────────────────────────────────────────────┐    │
│   │  [Firma] [Email] [Telefon]                         │    │
│   │  [Data] [Miasto] [Typ eventu ▼]                    │    │
│   │         [ Sprawdź dostępność terminu ]             │    │
│   │  „Wolisz szybciej? Zadzwoń — 2-3 min."             │    │
│   └────────────────────────────────────────────────────┘    │
├──────────────────────────────────────────────────────────────┤
│                        FOOTER                                │
│  [Logo]  Kontakt  Social  Polityka prywatności              │
└──────────────────────────────────────────────────────────────┘
```

---

*Dokument przygotowany przez Product Development. Wszelkie zmiany wymagają aktualizacji wersji.*


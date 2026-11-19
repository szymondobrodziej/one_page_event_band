// Copy comes from the client's structure document (STRUKTURA, 2026-11-16) and stays verbatim.
// Contact details that do not exist yet are read from environment variables and hidden until set.

import type { IconName } from "@/components/Icons";
import { typeset } from "@/lib/typeset";

export const site = {
  name: "Aurum Eleven",
  title: "Aurum Eleven | 11-osobowy zespół na eventy firmowe",
  description: "Muzyka na żywo na eventy firmowe. 11 muzyków, własne aranżacje. Sprawdź termin i poproś o wycenę.",
  manifest: "Eleven musicians. One signature sound.",
  tagline: "Premium Live Band for Corporate Events",
  // The full recording with sound (client corrections, 2026-11-18): the hero's "Zobacz pełne nagranie" opens it on
  // YouTube, and the "Na żywo" player starts it at 10:38 (the client's link: https://youtu.be/UPvItS4fOE0?t=638).
  fullRecordingUrl: "https://www.youtube.com/watch?v=UPvItS4fOE0",
  liveStart: 638,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  company: process.env.NEXT_PUBLIC_COMPANY_LINE || "",
  social: [
    { name: "Instagram", href: "https://www.instagram.com/aurum.eleven/" },
    { name: "YouTube", href: "https://www.youtube.com/@AurumEleven" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61593784180481" },
  ],
} as const;

// Labels from the client's corrections (2026-11-18): "Jak gramy? — Oferta — Na żywo — O nas — Współpraca — FAQ".
export const nav = [
  { label: "Jak gramy?", href: "#jak-gramy" },
  { label: "Oferta", href: "#co-dostajesz" },
  { label: "Na żywo", href: "#na-zywo" },
  { label: "O nas", href: "#muzycy" },
  { label: "Współpraca", href: "#wspolpraca" },
  { label: "FAQ", href: "#faq" },
] as const;

export const cta = typeset({
  primary: "Zapytaj o dostępność terminu",
  short: "Zapytaj o termin",
  heroNote: "Odpowiadamy z ofertą w ciągu 24 godzin od podania daty eventu.",
  recording: "Zobacz pełne nagranie",
});

export const hero = typeset({
  overline: "Zespół na event firmowy",
  headline: "Event? Zagramy tak, że goście nie zejdą z parkietu.",
  lead: "11 muzyków, pełna sekcja dęta i własne aranżacje na gale, bale i duże produkcje. Utwory z naszego repertuaru dobieramy pod gości, a ofertę dostajesz w 24 godziny.",
  // The client's facts line ("11 muzyków, pełna sekcja dęta, własne aranżacje, oferta w 24 godziny"), one cell per fact.
  facts: [
    { icon: "muzycy", text: "11 muzyków" },
    { icon: "sekcja", text: "pełna sekcja dęta" },
    { icon: "aranzacje", text: "własne aranżacje" },
    { icon: "wycena", text: "oferta w 24 godziny" },
  ] as { icon: IconName; text: string }[],
  credits: "Muzycy grali z Adamem Sztabą, Justyną Steczkowską, Mrozem, Kwiatem Jabłoni. Wokaliści z The Voice of Poland.",
});

// The hero stage: a clean colour loop of the showreel (video/src/StageSource.tsx) and its first frame.
export const stageMedia = {
  large: "/media/video/a11-stage-source-v2.mp4",
  small: "/media/video/a11-stage-source-sm-v2.mp4",
  poster: "/media/video/a11-stage-source-v2.jpg",
} as const;

export const problem = typeset({
  // Added by the client (2026-11-18) above the headline; set as the heading's first line, in sentence case.
  lead: "Największy problem eventów",
  headline: "Goście siedzą przy stole, a parkiet jest pusty",
  body: "Część oficjalna eventu przebiegła dobrze. Zaczyna się część rozrywkowa i energia spada. Goście zostają przy stołach, a parkiet świeci pustkami. Po evencie słyszysz, że było ok, a po tygodniu nikt o nim nie pamięta.",
  turn: "Eventy z naszym udziałem przebiegają inaczej.",
});

export const howWePlay = typeset([
  {
    title: "Gramy pod gości",
    body: "Gdy zaczyna się część rozrywkowa, obserwujemy, do czego tańczą goście. Na każdym wydarzeniu bawią się inni ludzie, z innymi gustami, więc przed występem ustalamy tylko zarys setów. Pierwsze utwory gramy na wyczucie gości, a resztę wieczoru układamy pod nich.",
  },
  {
    title: "Liczba osób ma znaczenie",
    body: "Jedenastu muzyków daje brzmienie, którego nie uzyska mały skład. Mamy ponad 60 utworów, każdy z własną aranżacją napisaną pod nasze instrumenty, więc kolejność możemy zmienić w każdej chwili.",
  },
]);

// "Co dostajesz" in two groups: what happens on stage, and what is organised around it.
export type BenefitGroup = "scena" | "organizacja";

export const benefitGroups: { id: BenefitGroup; title: string }[] = [
  { id: "scena", title: "Na scenie" },
  { id: "organizacja", title: "Organizacja" },
];

// Each item has its own line icon (src/components/Icons.tsx). The four "Na scenie" items carry the client's
// photos 3, 4, 5 and 6 from the first package (corrections, point 6), cut 4:5 in public/media/photos.
export type Benefit = { group: BenefitGroup; icon: IconName; title: string; body: string; photo?: { src: string; alt: string } };

export const benefits: Benefit[] = typeset([
  {
    group: "scena",
    icon: "muzycy",
    title: "11 muzyków",
    body: "Sekcja dęta, perkusjonalia, perkusja, bas, klawisze, gitara i trzy wokale dają moc na dużej sali.",
    photo: { src: "/media/photos/a11-foto-3-pion.jpg", alt: "Sekcja dęta Aurum Eleven: saksofonista i dwaj puzoniści, w głębi perkusja" },
  },
  {
    group: "scena",
    icon: "aranzacje",
    title: "Własne aranżacje znanych kawałków",
    body: "Znasz te piosenki, ale my gramy je w wersjach, których nikt inny nie ma.",
    photo: { src: "/media/photos/a11-foto-4-pion.jpg", alt: "Perkusjonalista Aurum Eleven przy dzwonkach i kongach" },
  },
  {
    group: "scena",
    icon: "kontakt",
    title: "Kontakt z gośćmi podczas grania",
    body: "Wokaliści nawiązują kontakt z gośćmi, a cały zespół wymienia sceniczną energię z parkietem.",
    photo: { src: "/media/photos/a11-foto-5-pion.jpg", alt: "Wokalistka i wokalista Aurum Eleven śpiewają w stronę publiczności" },
  },
  { group: "organizacja", icon: "sety", title: "3 sety po 40 minut", body: "W przerwach gra DJ, więc muzyka nie milknie do końca wieczoru." },
  {
    group: "scena",
    icon: "realizator",
    title: "Własny realizator dźwięku",
    body: "Brzmienie jest ustawione pod nasz skład i powtarzalne na każdym evencie.",
    photo: { src: "/media/photos/a11-foto-6-pion.jpg", alt: "Dłonie realizatora dźwięku na suwakach cyfrowej konsolety" },
  },
  { group: "organizacja", icon: "wycena", title: "Wycena w 24 godziny", body: "Dostajesz ofertę, gdy podasz datę, miejsce i orientacyjną liczbę gości." },
  { group: "organizacja", icon: "umowa", title: "Skład wpisany do umowy", body: "W sytuacjach losowych zapewniamy zastępstwo." },
  { group: "organizacja", icon: "scenariusz", title: "Scenariusz wieczoru", body: "Przed eventem ustalamy godziny, przebieg i wymagania techniczne." },
  { group: "organizacja", icon: "produkcja", title: "Pełna produkcja na życzenie", body: "Nagłośnienie, światło, scena i DJ od jednej firmy, jeśli nie masz własnego zaplecza." },
]);

export const forWhom = typeset({
  headline: "Dla kogo jest ten zespół",
  yesTitle: "To jest dla Ciebie, jeśli:",
  yes: [
    "Organizujesz galę, bal albo duży event firmowy.",
    "Chcesz zespołu z własnymi aranżacjami i pełnym brzmieniem.",
    "Chcesz muzyki na żywo z pełną sekcją dętą i perkusjonaliami.",
    "Chcesz, żeby goście tańczyli do ostatniego utworu.",
  ],
  noTitle: "To nie jest dla Ciebie, jeśli:",
  no: [
    "Na sali nie ma miejsca na scenę dla 11 osób.",
    "Chcesz utworów zagranych nuta w nutę jak w oryginale.",
    "Organizujesz kameralną imprezę, na której zespół ma grać cicho w tle.",
    "Nie masz budżetu na pełny skład.",
  ],
});

export const live = typeset({
  headline: "Tak brzmi Aurum Eleven na żywo",
  sub: "Jedenastu muzyków na scenie.",
  play: "Odtwórz nagranie z dźwiękiem",
  note: "Nagranie z dźwiękiem z YouTube. Odtwarzacz ładuje się dopiero po kliknięciu.",
  // The vocalists under the AURUM ELEVEN LED wall (client photo 7): it used to close "Dla kogo" at full width;
  // the user chose it as the recording's poster (corrections, point 7).
  poster: "/media/photos/a11-foto-7.jpg",
});

export const musicians = typeset({
  headline: "Kto stoi na scenie",
  body: [
    "Aurum Eleven tworzą muzycy z doświadczeniem scenicznym i telewizyjnym. Indywidualnie graliśmy m.in. z Adamem Sztabą, Justyną Steczkowską, Mrozem, Kwiatem Jabłoni, Beatą Kozidrak i Dawidem Kwiatkowskim. Nasi wokaliści śpiewali w „The Voice of Poland”, a saksofonista gra w programie „Jaka to melodia?”. Mamy za sobą także KFPP w Opolu i TOP OF THE TOP Sopot Festiwal.",
    "To doświadczenie daje nam spokój, gdy zmienia się scenariusz eventu lub klimat na parkiecie. Obserwujemy, do czego goście tańczą, i dopasowujemy do tego kolejność utworów.",
  ],
});

// "Kto stoi na scenie": one pillar per musician, cut from the client's originals (public/media/lineup, 960x1600,
// provenance in docs/media-provenance.md). Each file is twice as wide as the pillar at rest, so a pillar that opens
// on hover or tap reveals more of the frame. Left to right: the rhythm section at the edges, the horns around the
// three vocals in the middle. Wokal 1 is Zuzia and Wokal 3 is Kama (photos of 2026-11-18).
export const lineup = [
  { slug: "perkusja", label: "Perkusja" },
  { slug: "bas", label: "Bas" },
  { slug: "gitara", label: "Gitara" },
  { slug: "saksofon", label: "Saksofon" },
  { slug: "wokal-1", label: "Wokal" },
  { slug: "wokal-2", label: "Wokal" },
  { slug: "wokal-3", label: "Wokal" },
  { slug: "trabka", label: "Trąbka" },
  { slug: "puzon", label: "Puzon" },
  { slug: "klawisze", label: "Klawisze" },
  { slug: "perkusjonalia", label: "Perkusjonalia" },
] as const;

export const workflow = typeset({
  headline: "Prosty i przewidywalny proces współpracy",
  steps: [
    { who: "Po Twojej stronie", title: "Kontakt", body: "Napisz do nas — wystarczy imię, adres e-mail i kilka słów o evencie. Jeśli znasz już datę, miejsce lub potrzeby techniczne, możesz je dopisać." },
    { who: "Po naszej stronie", title: "Wycena", body: "Odpowiadamy w ciągu 24 godzin od otrzymania informacji potrzebnych do przygotowania oferty." },
    { who: "Wspólnie", title: "Warunki", body: "Potwierdzamy termin, zakres i zaplecze techniczne." },
    { who: "Wspólnie", title: "Scenariusz", body: "Ustalamy przebieg eventu, godziny wejścia na scenę, przerwy." },
    { who: "Po naszej stronie", title: "Realizacja", body: "Gwarantujemy najlepszy event, na którym byłeś! Po wydarzeniu rozliczamy płatność zgodnie z umową." },
  ],
});

export const faq = typeset({
  headline: "Najczęstsze pytania",
  items: [
    { q: "Jak wygląda rider techniczny?", a: "Rider wysyłamy po potwierdzeniu terminu. Zawiera wymagania techniczne, plan sceny i listę potrzeb. Jeśli organizator ma swoją technikę — dostosowujemy się." },
    { q: "Czy możecie zapewnić nagłośnienie i oświetlenie?", a: "Możemy zorganizować firmę techniczną. Zakres zależy od miejsca, liczby gości, sceny i wymagań ridera." },
    { q: "Ile setów gracie i jak długie są przerwy?", a: "Standardowo 3 sety po 40 minut plus przerwy na występ DJ-a. Dopasowujemy to do harmonogramu eventu — przemówienia, catering, etc." },
    { q: "Czy możecie zapewnić DJ-a?", a: "Tak. Możemy zapewnić DJ-a na przerwy między setami i dalszą część wydarzenia. Ustalamy to przy wycenie." },
    { q: "Czy są możliwe występy w języku angielskim?", a: "Tak, mamy pełny repertuar PL/EN. Przy eventach międzynarodowych możemy prowadzić cały występ po angielsku, włącznie z zapowiedziami." },
    { q: "Czy możecie poprowadzić elementy konferansjerskie?", a: "Tak, nasi wokaliści mogą poprowadzić krótkie elementy: zaproszenie do stołów, ogłoszenie atrakcji, toast. To nie zastępuje profesjonalnego konferansjera, ale sprawdza się w prostszych scenariuszach." },
    { q: "Jak szybko potwierdzacie rezerwację terminu?", a: "Wstępną dostępność potwierdzamy w ciągu 24h od uzyskania informacji na temat eventu. Rezerwacja jest wiążąca po wpłacie zaliczki i podpisaniu umowy." },
    { q: "Co, jeśli nie znam jeszcze wszystkich szczegółów eventu?", a: "Napisz do nas z tym, co już wiesz. Termin, miejsce, liczba gości i technika mogą zostać doprecyzowane później." },
    { q: "Czy wystawiacie fakturę VAT?", a: "Tak, działamy w pełni legalnie. Każda współpraca kończy się fakturą VAT. Dodatkowo podpisujemy umowę przed eventem — to standard w naszych realizacjach." },
    { q: "Kiedy wymagane jest zapewnienie noclegu?", a: "Przy eventach powyżej 100 km od Warszawy doliczamy koszty dojazdu oraz wymagamy zapewnienia noclegu dla zespołu." },
  ],
});

// The footer line from the client's corrections (point 10). site.manifest stays for the hero-stage lettering.
export const footer = typeset({
  manifesto: ["11 muzyków.", "Jedna scena.", "Własne aranżacje."],
});

export const contact = typeset({
  headline: "Zapytaj o dostępność terminu",
  lead: "Podaj datę, miejsce i liczbę gości. Odpiszemy w ciągu 24 godzin, czy termin jest wolny i wyślemy wycenę.",
  submit: "Zapytaj o termin",
  sending: "Wysyłanie…",
  noObligation: "Wycena do niczego nie zobowiązuje.",
  sentTitle: "Zapytanie wysłane.",
  sentBody: "Odpiszemy w ciągu 24 godzin z informacją o dostępności terminu i wyceną.",
  again: "Wyślij kolejne zapytanie",
  messageHint: "Data, miejsce, liczba gości",
});

export const photos = {
  trumpet: { src: "/media/photos/a11-foto-1.jpg", alt: "Trąbka w dłoni muzyka, wyłaniająca się z ciemności sceny", w: 1600, h: 2400 },
  // Portrait crop from the client's 6000x4000 original: the contact panel is tall, so a landscape file would be upscaled.
  side: { src: "/media/photos/a11-foto-12-pion.jpg", alt: "Scena Aurum Eleven z boku: zza talerzy perkusji widać klawiszowca i gitarzystę", w: 1600, h: 2400 },
} as const;

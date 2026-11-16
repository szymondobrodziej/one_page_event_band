// Copy comes from the client's structure document (STRUKTURA, 2026-11-16) and stays verbatim.
// Contact details that do not exist yet are read from environment variables and hidden until set.

export const site = {
  name: "Aurum Eleven",
  title: "Aurum Eleven | 11-osobowy zespół na eventy firmowe",
  description: "Muzyka na żywo na eventy firmowe. 11 muzyków, własne aranżacje. Sprawdź termin i poproś o wycenę.",
  manifest: "Eleven musicians. One signature sound.",
  tagline: "Premium Live Band for Corporate Events",
  fullRecordingUrl: process.env.NEXT_PUBLIC_FULL_RECORDING_URL || "https://www.youtube.com/@AurumEleven",
  // Until the client sends the link to the full recording, the button says honestly that it opens the channel.
  hasFullRecording: Boolean(process.env.NEXT_PUBLIC_FULL_RECORDING_URL),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  company: process.env.NEXT_PUBLIC_COMPANY_LINE || "",
  social: [
    { name: "Instagram", href: "https://www.instagram.com/aurum.eleven/" },
    { name: "YouTube", href: "https://www.youtube.com/@AurumEleven" },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61593784180481" },
  ],
} as const;

export const nav = [
  { label: "Jak gramy", href: "#jak-gramy" },
  { label: "Co dostajesz", href: "#co-dostajesz" },
  { label: "Na żywo", href: "#na-zywo" },
  { label: "Muzycy", href: "#muzycy" },
  { label: "Współpraca", href: "#wspolpraca" },
  { label: "FAQ", href: "#faq" },
] as const;

export const cta = {
  primary: "Zapytaj o dostępność terminu",
  short: "Zapytaj o termin",
  heroNote: "Odpowiadamy z ofertą w ciągu 24 godzin od podania daty eventu.",
  recording: "Zobacz pełne nagranie",
  channel: "Nagrania na YouTube",
};

export const hero = {
  overline: "Zespół na event firmowy.",
  headline: "Event? Zagramy tak, że goście nie zejdą z parkietu.",
  lead: "11 muzyków, pełna sekcja dęta i własne aranżacje na gale, bale i duże produkcje. Utwory z naszego repertuaru dobieramy pod gości, a ofertę dostajesz w 24 godziny.",
  facts: "11 muzyków, pełna sekcja dęta, własne aranżacje, oferta w 24 godziny",
  credits: "Muzycy grali z Adamem Sztabą, Justyną Steczkowską, Mrozem, Kwiatem Jabłoni. Wokaliści z The Voice of Poland.",
};

export const problem = {
  headline: "Goście siedzą przy stole, a parkiet jest pusty",
  body: "Część oficjalna eventu przebiegła dobrze. Zaczyna się część rozrywkowa i energia spada. Goście zostają przy stołach, a parkiet świeci pustkami. Po evencie słyszysz, że było ok, a po tygodniu nikt o nim nie pamięta.",
  turn: "Eventy z naszym udziałem przebiegają inaczej.",
};

export const howWePlay = [
  {
    title: "Gramy pod gości",
    body: "Gdy zaczyna się część rozrywkowa, obserwujemy, do czego tańczą goście. Na każdym wydarzeniu bawią się inni ludzie, z innymi gustami, więc przed występem ustalamy tylko zarys setów. Pierwsze utwory gramy na wyczucie gości, a resztę wieczoru układamy pod nich.",
  },
  {
    title: "Liczba osób ma znaczenie",
    body: "Jedenastu muzyków daje brzmienie, którego nie uzyska mały skład. Mamy ponad 60 utworów, każdy z własną aranżacją napisaną pod nasze instrumenty, więc kolejność możemy zmienić w każdej chwili.",
  },
];

export type BenefitIcon =
  | "eleven"
  | "pen"
  | "contact"
  | "clock"
  | "faders"
  | "quote"
  | "contract"
  | "scenario"
  | "production";

export const benefits: { icon: BenefitIcon; title: string; body: string }[] = [
  { icon: "eleven", title: "11 muzyków", body: "Sekcja dęta, perkusjonalia, perkusja, bas, klawisze, gitara i trzy wokale dają moc na dużej sali." },
  { icon: "pen", title: "Własne aranżacje znanych kawałków", body: "Znasz te piosenki, ale my gramy je w wersjach, których nikt inny nie ma." },
  { icon: "contact", title: "Kontakt z gośćmi podczas grania", body: "Wokaliści nawiązują kontakt z gośćmi, a cały zespół wymienia sceniczną energię z parkietem." },
  { icon: "clock", title: "3 sety po 40 minut", body: "W przerwach gra DJ, więc muzyka nie milknie do końca wieczoru." },
  { icon: "faders", title: "Własny realizator dźwięku", body: "Brzmienie jest ustawione pod nasz skład i powtarzalne na każdym evencie." },
  { icon: "quote", title: "Wycena w 24 godziny", body: "Dostajesz ofertę, gdy podasz datę, miejsce i orientacyjną liczbę gości." },
  { icon: "contract", title: "Skład wpisany do umowy", body: "W sytuacjach losowych zapewniamy zastępstwo." },
  { icon: "scenario", title: "Scenariusz wieczoru", body: "Przed eventem ustalamy godziny, przebieg i wymagania techniczne." },
  { icon: "production", title: "Pełna produkcja na życzenie", body: "Nagłośnienie, światło, scena i DJ od jednej firmy, jeśli nie masz własnego zaplecza." },
];

export const forWhom = {
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
};

export const live = {
  headline: "Tak brzmi Aurum Eleven na żywo",
  sub: "Jedenastu muzyków na scenie.",
  silentNote: "Fragment bez dźwięku. Pełne nagranie z dźwiękiem jest na YouTube.",
};

export const musicians = {
  headline: "Kto stoi na scenie",
  body: [
    "Aurum Eleven tworzą muzycy z doświadczeniem scenicznym i telewizyjnym. Indywidualnie graliśmy m.in. z Adamem Sztabą, Justyną Steczkowską, Mrozem, Kwiatem Jabłoni, Beatą Kozidrak i Dawidem Kwiatkowskim. Nasi wokaliści śpiewali w „The Voice of Poland”, a saksofonista gra w programie „Jaka to melodia?”. Mamy za sobą także KFPP w Opolu i TOP OF THE TOP Sopot Festiwal.",
    "To doświadczenie daje nam spokój, gdy zmienia się scenariusz eventu lub klimat na parkiecie. Obserwujemy, do czego goście tańczą, i dopasowujemy do tego kolejność utworów.",
  ],
};

export const workflow = {
  headline: "Prosty i przewidywalny proces współpracy",
  steps: [
    { who: "Po Twojej stronie", title: "Kontakt", body: "Napisz do nas — wystarczy Twój adres e-mail. Jeśli znasz już datę, miejsce lub potrzeby techniczne, możesz je dopisać." },
    { who: "Po naszej stronie", title: "Wycena", body: "Odpowiadamy w ciągu 24 godzin od otrzymania informacji potrzebnych do przygotowania oferty." },
    { who: "Wspólnie", title: "Warunki", body: "Potwierdzamy termin, zakres i zaplecze techniczne." },
    { who: "Wspólnie", title: "Scenariusz", body: "Ustalamy przebieg eventu, godziny wejścia na scenę, przerwy." },
    { who: "Po naszej stronie", title: "Realizacja", body: "Gwarantujemy najlepszy event, na którym byłeś! Po wydarzeniu rozliczamy płatność zgodnie z umową." },
  ],
};

export const faq = {
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
};

export const contact = {
  headline: "Zapytaj o dostępność terminu",
  lead: "Podaj datę, miejsce i liczbę gości. Odpiszemy w ciągu 24 godzin, czy termin jest wolny i wyślemy wycenę.",
  submit: "Zapytaj o termin",
  sending: "Wysyłanie…",
  noObligation: "Wycena do niczego nie zobowiązuje.",
  sentTitle: "Zapytanie wysłane.",
  sentBody: "Odpiszemy w ciągu 24 godzin z informacją o dostępności terminu i wyceną.",
  again: "Wyślij kolejne zapytanie",
  messageHint: "Data, miejsce, liczba gości",
};

export const photos = {
  trumpet: { src: "/media/photos/a11-foto-1.jpg", alt: "Trąbka w dłoni muzyka, wyłaniająca się z ciemności sceny", w: 1600, h: 2400 },
  stage: { src: "/media/photos/a11-foto-2.jpg", alt: "Pełny skład Aurum Eleven na scenie, w tle ekran LED ze znakiem A11", w: 2400, h: 1600 },
  horns: { src: "/media/photos/a11-foto-3.jpg", alt: "Saksofonista i puzonista podczas występu", w: 2400, h: 1600 },
  percussion: { src: "/media/photos/a11-foto-4.jpg", alt: "Perkusjonalista przy instrumentach perkusyjnych", w: 2400, h: 1600 },
  vocals: { src: "/media/photos/a11-foto-5.jpg", alt: "Troje wokalistów śpiewa razem w świetle reflektorów", w: 2400, h: 1600 },
  engineer: { src: "/media/photos/a11-foto-6.jpg", alt: "Realizator dźwięku przy konsolecie mikserskiej", w: 2400, h: 1350 },
  vocalsLed: { src: "/media/photos/a11-foto-7.jpg", alt: "Wokaliści Aurum Eleven na scenie, w tle napis AURUM ELEVEN", w: 2400, h: 1600 },
  bass: { src: "/media/photos/a11-foto-8.jpg", alt: "Basista podczas koncertu", w: 2400, h: 1600 },
  keys: { src: "/media/photos/a11-foto-9.jpg", alt: "Klawiszowiec przy instrumencie na scenie", w: 2400, h: 1600 },
  drums: { src: "/media/photos/a11-foto-10.jpg", alt: "Perkusista za zestawem perkusyjnym, ujęcie spomiędzy talerzy", w: 2400, h: 1600 },
  frontman: { src: "/media/photos/a11-foto-11.jpg", alt: "Wokalista w okularach śpiewa i wskazuje na publiczność", w: 1600, h: 2400 },
  side: { src: "/media/photos/a11-foto-12.jpg", alt: "Scena Aurum Eleven z boku, czarno-białe ujęcie perkusji i muzyków", w: 2400, h: 1600 },
} as const;

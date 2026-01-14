// Content data for One-Page Music website
// Based on PRD: Władca (trust, control) + Bohater (energy, results)

export const siteConfig = {
  name: "Premium Live Band",
  tagline: "Premium live band dla eventów firmowych — pewność i efekt.",
  phone: "+48 XXX XXX XXX",
  email: "kontakt@premiumliveband.pl",
  address: "Warszawa, Polska",
};

export const heroContent = {
  h1: "Premium live band — bezpieczny wybór, mocny efekt.",
  subtitle: "Prowadzimy wydarzenia od strony muzycznej i produkcyjnej: dopięty rider, płynny przebieg, a na scenie — show, które działa na ludzi.",
  proofPills: [
    { icon: "FileText", text: "Faktura / umowa" },
    { icon: "Globe", text: "PL/EN repertuar" },
    { icon: "FileCheck", text: "Rider techniczny" },
    { icon: "Award", text: "Realizacja premium" },
  ],
  ctaPrimary: "Sprawdź dostępność terminu",
  ctaSecondary: "Zobacz showreel",
};

export const trustContent = {
  headline: "Spokój organizatora. Poziom, który czuć na sali.",
  description: "W eventach firmowych liczą się standardy i przewidywalność. Dlatego działamy procesowo: brief → rider → harmonogram → realizacja.",
  metrics: [
    { value: "10+", label: "lat doświadczenia" },
    { value: "150+", label: "eventów rocznie" },
    { value: "40+", label: "miast w Polsce" },
  ],
  testimonial: {
    quote: "Profesjonalizm na każdym etapie. Rider dopięty, harmonogram bez opóźnień, a goście bawili się do końca. Już rezerwujemy na przyszły rok.",
    author: "Anna Kowalska",
    role: "Event Manager",
    company: "Firma XYZ",
  },
  logos: [
    { name: "Deloitte", logo: "/images/logos/deloitte.svg" },
    { name: "PWC", logo: "/images/logos/pwc.svg" },
    { name: "KPMG", logo: "/images/logos/kpmg.svg" },
    { name: "McKinsey", logo: "/images/logos/mckinsey.svg" },
    { name: "Accenture", logo: "/images/logos/accenture.svg" },
    { name: "EY", logo: "/images/logos/ey.svg" },
  ],
};

export const showreelContent = {
  headline: "Zobacz, jak budujemy momenty 'wow'.",
  description: "Od eleganckiego otwarcia po finał, który zamyka wieczór z energią. Gramy tak, żeby ludzie chcieli zostać do końca.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  posterImage: "/images/showreel-poster.jpg",
  clips: [
    { title: "Gala", thumbnail: "/images/clip-gala.jpg" },
    { title: "Integracja", thumbnail: "/images/clip-integration.jpg" },
    { title: "Konferencja", thumbnail: "/images/clip-conference.jpg" },
    { title: "Afterparty", thumbnail: "/images/clip-afterparty.jpg" },
  ],
};

export const formatsContent = {
  headline: "Format dopasowany do scenariusza eventu.",
  description: "Dobieramy tempo i brzmienie do typu wydarzenia — bez chaosu i bez przypadków.",
  formats: [
    {
      id: "gala",
      title: "Gala / Konferencja",
      archetype: "ruler",
      vibe: "Elegancko, prestiżowo",
      copy: "Eleganckie brzmienie, kontrola dynamiki, perfekcyjny timing pod scenariusz.",
      forWho: "Gale, bankiety, konferencje",
      sets: "2-3 × 45 min",
      crew: "5-7 osób",
      rider: "Pełny (po naszej stronie)",
      vat: true,
    },
    {
      id: "integration",
      title: "Integracja / Impreza",
      archetype: "mixed",
      vibe: "Tanecznie, energicznie",
      copy: "Narracja zaprojektowana pod reakcję sali — od pierwszych taktów do pełnego parkietu.",
      forWho: "Team-building, jubileusze",
      sets: "2-3 × 60 min",
      crew: "5-7 osób",
      rider: "Pełny lub częściowy",
      vat: true,
    },
    {
      id: "afterparty",
      title: "Afterparty / Club Set",
      archetype: "hero",
      vibe: "Mocno, klubowo",
      copy: "Tempo, energia i finał. Mocne brzmienie, które domyka event.",
      forWho: "Zakończenia eventów",
      sets: "1-2 × 90 min",
      crew: "4-5 osób + DJ",
      rider: "Minimalny",
      vat: true,
    },
  ],
};

export const caseStudiesContent = {
  headline: "Realizacje, które dowieźliśmy od A do Z.",
  cases: [
    {
      type: "Gala rocznicowa",
      industry: "Sektor finansowy",
      participants: "400 osób",
      location: "Warszawa, Hotel Marriott",
      scope: "Muzyka live + pełna produkcja sceniczna",
      challenge: "Montaż 2h, ścisły harmonogram przemówień",
      result: "Pełny parkiet od pierwszego setu, ponowna rezerwacja",
    },
    {
      type: "Integracja firmowa",
      industry: "IT / Software",
      participants: "250 osób",
      location: "Kraków, venue outdoor",
      scope: "3 sety live + DJ set",
      challenge: "Zmienna pogoda, szybka zmiana planu",
      result: "Impreza trwała do 4:00, świetny feedback zespołu",
    },
    {
      type: "Konferencja + afterparty",
      industry: "Farmacja",
      participants: "600 osób",
      location: "Poznań, MTP",
      scope: "Elegancki set konferencyjny + energiczny afterparty",
      challenge: "Duża scena, wymagająca akustyka",
      result: "Standing ovation, zaproszenie na kolejną edycję",
    },
  ],
};

export const galleryContent = {
  images: [
    { src: "/images/gallery-1.jpg", alt: "Występ na gali", category: "Stage" },
    { src: "/images/gallery-2.jpg", alt: "Event korporacyjny", category: "Corporate" },
    { src: "/images/gallery-3.jpg", alt: "Backstage", category: "Backstage" },
    { src: "/images/gallery-4.jpg", alt: "Scena", category: "Stage" },
    { src: "/images/gallery-5.jpg", alt: "Integracja", category: "Corporate" },
    { src: "/images/gallery-6.jpg", alt: "Przygotowania", category: "Backstage" },
  ],
};

export const processContent = {
  headline: "Przewidywalny proces. Zero stresu po stronie organizatora.",
  steps: [
    {
      number: 1,
      title: "Brief + termin",
      description: "2 min w formularzu — i wiemy, czy termin pasuje",
      icon: "ClipboardList",
    },
    {
      number: 2,
      title: "Wycena",
      description: "Oferta + rider + umowa w 24-48h",
      icon: "FileText",
    },
    {
      number: 3,
      title: "Scenariusz",
      description: "Ustalamy setlistę i harmonogram eventu",
      icon: "Music",
    },
    {
      number: 4,
      title: "Realizacja",
      description: "Gramy, rozliczamy, wystawiamy fakturę VAT",
      icon: "CheckCircle",
    },
  ],
};

export const faqContent = {
  headline: "Pytania, które padają najczęściej w eventach firmowych.",
  lead: "Wolimy dopiąć szczegóły wcześniej — to gwarantuje jakość realizacji.",
  questions: [
    {
      q: "Czy wystawiacie fakturę VAT?",
      a: "Tak, działamy w pełni legalnie. Każda współpraca kończy się fakturą VAT. Możemy też podpisać umowę przed eventem — to standard w naszych realizacjach.",
    },
    {
      q: "Ile miejsca potrzebujecie na scenę?",
      a: "Minimalnie 4x3 metry dla podstawowego składu (4-5 osób). Dla pełnego składu 6-7 osób zalecamy 6x4 metry. Zawsze dostosowujemy się do warunków venue.",
    },
    {
      q: "Czy macie własne nagłośnienie i oświetlenie?",
      a: "Tak, dysponujemy profesjonalnym sprzętem na eventy do 500 osób. Dla większych wydarzeń współpracujemy ze sprawdzonymi firmami technicznymi.",
    },
    {
      q: "Jak wygląda rider techniczny?",
      a: "Rider wysyłamy po potwierdzeniu terminu. Zawiera wymagania techniczne, plan sceny i listę potrzeb. Jeśli venue ma swoją technikę — dostosowujemy się.",
    },
    {
      q: "Ile setów gracie i jak długie przerwy?",
      a: "Standardowo 2-3 sety po 45-60 minut z 15-20 minutowymi przerwami. Dopasowujemy to do harmonogramu eventu — przemówienia, catering, etc.",
    },
    {
      q: "Czy możliwe występy w języku angielskim?",
      a: "Tak, mamy pełny repertuar PL/EN. Przy eventach międzynarodowych możemy prowadzić cały występ po angielsku, włącznie z zapowiedziami.",
    },
    {
      q: "Czy możecie poprowadzić elementy konferansjerskie?",
      a: "Tak, nasz wokalista może poprowadzić krótkie elementy: zaproszenie do stołów, ogłoszenie atrakcji, toast. To nie zastępuje profesjonalnego konferansjera, ale sprawdza się w prostszych scenariuszach.",
    },
    {
      q: "Jak szybko potwierdzacie rezerwację terminu?",
      a: "Wstępną dostępność potwierdzamy w ciągu 24h. Rezerwacja jest wiążąca po wpłacie zaliczki i podpisaniu umowy.",
    },
    {
      q: "Kiedy wymagany jest dojazd i nocleg?",
      a: "Przy eventach powyżej 100km od Warszawy — dojazd wliczamy w wycenę. Nocleg wymagany przy eventach kończących się po 23:00 i odległości powyżej 150km.",
    },
    {
      q: "Co w razie opóźnień w harmonogramie eventu?",
      a: "Jesteśmy elastyczni. Jeśli harmonogram się przesuwa — dostosowujemy się w ramach możliwości. Przy dużych zmianach (powyżej 2h) ustalamy szczegóły na miejscu.",
    },
  ],
};

export const contactContent = {
  headline: "Sprawdź termin — wrócimy z odpowiedzią i propozycją formatu.",
  description: "Podaj datę, miasto i typ eventu. Odpowiemy z dostępnością i krótką propozycją (sety + technika + warunki).",
  microcopy: "Wolisz kontakt telefoniczny? Zadzwoń — 2-3 min i wiesz, czy termin jest możliwy.",
  successMessage: "Dziękujemy — wracamy w ciągu 24h",
  eventTypes: ["Gala / Konferencja", "Integracja / Impreza", "Afterparty / Club Set", "Inny"],
  participantRanges: ["do 50 osób", "50-150 osób", "150-300 osób", "300+ osób"],
};

export const footerContent = {
  company: {
    name: "Premium Live Band",
    nip: "NIP: XXX-XXX-XX-XX",
    address: "ul. Przykładowa 1, 00-001 Warszawa",
  },
  contact: {
    email: "kontakt@premiumliveband.pl",
    phone: "+48 XXX XXX XXX",
  },
  social: [
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
    { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
    { name: "TikTok", url: "https://tiktok.com", icon: "Music2" },
  ],
  legal: [
    { name: "Polityka prywatności", url: "/privacy" },
    { name: "Regulamin", url: "/terms" },
  ],
};
import { Header } from "@/components/Header";
import { StickyCta } from "@/components/StickyCta";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { ForWhom } from "@/components/sections/ForWhom";
import { Hero } from "@/components/sections/Hero";
import { HowWePlay } from "@/components/sections/HowWePlay";
import { Live } from "@/components/sections/Live";
import { Musicians } from "@/components/sections/Musicians";
import { Problem } from "@/components/sections/Problem";
import { Process } from "@/components/sections/Process";
import { WhatYouGet } from "@/components/sections/WhatYouGet";
import { faq, site } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MusicGroup",
      name: site.name,
      description: site.description,
      slogan: site.manifest,
      genre: "Muzyka na żywo na eventy firmowe",
      sameAs: site.social.map((s) => s.href),
      ...(site.email ? { email: site.email } : {}),
      ...(site.phone ? { telephone: site.phone } : {}),
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <a href="#tresc" className="sr-only z-[60] bg-ivory px-4 py-3 text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
        Przejdź do treści
      </a>
      <Header />
      <main id="tresc">
        <Hero />
        <Problem />
        <HowWePlay />
        <WhatYouGet />
        <ForWhom />
        <Live />
        <Musicians />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}

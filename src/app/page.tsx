import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Trust } from "@/components/sections/Trust";
import { Showreel } from "@/components/sections/Showreel";
import { Formats } from "@/components/sections/Formats";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/ui/StickyCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Trust />
        <Showreel />
        <Formats />
        <CaseStudies />
        <Gallery />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
}

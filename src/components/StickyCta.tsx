"use client";

import { useEffect, useState } from "react";
import { cta } from "@/content/site";

/** Phones only: the enquiry button pinned to the bottom edge once the hero button has scrolled away,
 *  hidden again while the form itself is on screen. */
export function StickyCta() {
  const [heroVisible, setHeroVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-cta");
    const form = document.getElementById("kontakt");
    if (!hero || !form) return;
    const heroObs = new IntersectionObserver(([e]) => setHeroVisible(e.isIntersecting));
    const formObs = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.15 });
    heroObs.observe(hero);
    formObs.observe(form);
    return () => {
      heroObs.disconnect();
      formObs.disconnect();
    };
  }, []);

  const shown = !heroVisible && !formVisible;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 bg-ink px-4 pt-3 pb-[calc(16px+env(safe-area-inset-bottom))] transition-transform duration-300 ease-[var(--ease-arrive)] motion-reduce:transition-none md:hidden ${shown ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!shown}
      inert={!shown}
    >
      <a href="#kontakt" className="btn btn-ivory w-full">
        {cta.primary}
      </a>
    </div>
  );
}

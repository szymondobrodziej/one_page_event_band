"use client";

import { useEffect, useState } from "react";
import { cta } from "@/content/site";

/** Phones only: the enquiry button pinned to the bottom edge. It waits until the visitor has scrolled most
 *  of the hero stage away, so the page opens on the stage alone; after that it steps aside whenever another
 *  enquiry button is on screen (the hero's, or one closing a section) and while the form itself is in view,
 *  so the visitor never sees two identical buttons at once. */
export function StickyCta() {
  const [stageVisible, setStageVisible] = useState(true);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const form = document.getElementById("kontakt");
    const stage = document.querySelector("[data-hero-stage]");
    const buttons = document.querySelectorAll('main a.btn[href="#kontakt"]');
    if (!form) return;
    // The stage counts as in view while more than a quarter of it is on screen.
    const stageObs = new IntersectionObserver(([e]) => setStageVisible(e.intersectionRatio > 0.25), { threshold: [0, 0.25, 0.5] });
    if (stage) stageObs.observe(stage);
    const onScreen = new Set<Element>();
    const buttonObs = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setButtonVisible(onScreen.size > 0);
    });
    const formObs = new IntersectionObserver(([e]) => setFormVisible(e.isIntersecting), { threshold: 0.15 });
    buttons.forEach((button) => buttonObs.observe(button));
    formObs.observe(form);
    return () => {
      stageObs.disconnect();
      buttonObs.disconnect();
      formObs.disconnect();
    };
  }, []);

  const shown = !stageVisible && !buttonVisible && !formVisible;

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

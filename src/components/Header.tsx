"use client";

import { useEffect, useRef, useState } from "react";
import { cta, nav } from "@/content/site";
import { Lockup } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-ink">
      <div className="shell flex h-full items-center justify-between gap-8">
        <a href="#top" aria-label="Aurum Eleven, początek strony" className="text-ivory">
          <Lockup />
        </a>

        <nav aria-label="Nawigacja główna" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="link-quiet text-[15px] text-[#cfcac0] no-underline">
              {item.label}
            </a>
          ))}
        </nav>

        <a href="#kontakt" className="btn btn-ivory hidden min-h-11 px-5 text-[15px] lg:inline-flex">
          {cta.short}
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-11 items-center justify-center border border-ivory/30 text-ivory lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobilne"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="menu-mobilne" className="fixed inset-x-0 top-[72px] bottom-0 z-50 flex flex-col bg-ink px-5 pt-10 pb-8 lg:hidden">
          <nav aria-label="Menu mobilne" className="flex flex-col">
            {nav.map((item, index) => (
              <a
                key={item.href}
                ref={index === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-display text-[40px] font-light leading-tight tracking-[-0.035em] text-ivory no-underline"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="#kontakt" onClick={() => setOpen(false)} className="btn btn-ivory mt-auto w-full">
            {cta.primary}
          </a>
        </div>
      )}
    </header>
  );
}

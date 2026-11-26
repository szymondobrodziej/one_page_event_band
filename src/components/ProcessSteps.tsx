"use client";

import { type CSSProperties, useEffect, useRef } from "react";
import { workflow } from "@/content/site";

// The five steps of "Współpraca". The markup is the finished state, so the server HTML shows every step; on the client
// the steps still below the fold are armed and land in order when they scroll into view (styles in globals.css,
// under "Prosty i przewidywalny proces współpracy").
export function ProcessSteps() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const last = workflow.steps.length - 1;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const below = (el: Element) => el.getBoundingClientRect().top > window.innerHeight;
    const waiting = Array.from(wrap.querySelectorAll<HTMLElement>(".step")).filter(below);
    if (!waiting.length) return;
    if (below(wrap)) wrap.dataset.state = "armed";
    waiting.forEach((step) => (step.dataset.state = "armed"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.state = "shown";
          observer.unobserve(entry.target);
          if (wrap.dataset.state === "armed") wrap.dataset.state = "shown";
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.25 },
    );
    waiting.forEach((step) => observer.observe(step));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className="steps relative">
      <div className="steps-rule absolute inset-x-0 top-[88px] hidden h-px bg-rule-strong md:block" aria-hidden="true" />
      <ol className="relative grid list-none gap-x-8 gap-y-14 p-0 md:grid-cols-5">
        {workflow.steps.map((step, i) => (
          <li key={step.title} className="step flex flex-col" style={{ "--i": i } as CSSProperties}>
            <span
              className={`step-num self-start font-display text-[64px] font-light leading-none tracking-[-0.04em] tabular-nums ${i === last ? "text-gold" : "text-ivory"}`}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span
              aria-hidden="true"
              className="step-dot relative mt-[19px] hidden size-[9px] rounded-full bg-gold shadow-[0_0_0_6px_#111111] md:block"
            />
            <div className="step-text">
              <h3 className="mt-7 font-display text-[22px] font-medium tracking-[-0.01em]">
                <span className="sr-only">Krok {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-1 text-[14px] text-stone">{step.who}</p>
              <p className="mt-3 max-w-[26em] text-[15px] leading-[1.6] text-ash">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

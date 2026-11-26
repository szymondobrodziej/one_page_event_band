"use client";

import { type CSSProperties, type FocusEvent, type PointerEvent, type RefObject, useEffect, useRef, useState } from "react";
import { workflow } from "@/content/site";

// The five steps of "Współpraca" as cards (client, 2026-11-26, second round). From 1024px they lie in a stack that
// shows only their numerals; the card the visitor points at (or taps, or tabs to) opens and shows its step. Below
// 1024px they are a deck of flashcards: the top card shows its step and a swipe sends it to the back.

const steps = workflow.steps;
const COUNT = steps.length;
const LAST = COUNT - 1;
// How much wider the open card grows, against 1 for each of the others.
const OPEN = 3.4;

// Cards still below the fold deal in when they first scroll into view (styles under "Współpraca" in globals.css).
function useDealIn(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const below = (el: Element) => el.getBoundingClientRect().top > window.innerHeight;
    const waiting = Array.from(root.querySelectorAll<HTMLElement>(".step")).filter(below);
    if (!waiting.length) return;
    waiting.forEach((el) => (el.dataset.state = "armed"));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.state = "shown";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );
    waiting.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

// The words of a step: ink type, since a card shows them only on its ivory face. On the stack they are larger and
// the body sits under a hairline in graphite (client, 2026-11-26: the words were too faint on desktop).
function StepWords({ i, large = false }: { i: number; large?: boolean }) {
  const step = steps[i];
  return (
    <>
      <h3
        className={
          large
            ? "font-display text-[clamp(30px,2.6vw,40px)] font-light leading-[1.05] tracking-[-0.03em] text-ink"
            : "font-display text-[clamp(22px,1.9vw,26px)] font-medium leading-[1.15] tracking-[-0.015em] text-ink"
        }
      >
        <span className="sr-only">Krok {i + 1}: </span>
        {step.title}
      </h3>
      <p className={large ? "mt-2 font-display text-[16px] font-medium text-pebble" : "mt-1 text-[14px] text-pebble"}>{step.who}</p>
      <p
        className={
          large
            ? "mt-4 max-w-[30em] border-t border-rule-ivory pt-4 text-[clamp(17px,1.35vw,19px)] leading-[1.55] text-graphite"
            : "mt-3 max-w-[30em] text-[15px] leading-[1.6] text-smoke"
        }
      >
        {step.body}
      </p>
    </>
  );
}

// From 1024px: the stack. Each card shows only its numeral at the foot, except the open one; at rest that is the
// first (client, 2026-11-26), so step 1 reads without a hover. Each card overlaps the one before it by 12px, so the
// row reads as cards laid edge over edge. The open card grows to 3.4 times the others, turns to its ivory face, its
// numeral rises to the top and shrinks, and the step appears at the foot. The words keep the open card width while
// the row moves, so they never reflow.
function StepStack() {
  const [open, setOpen] = useState(0);
  const pointerType = useRef("");

  const onBlur = (e: FocusEvent<HTMLOListElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(0);
  };

  return (
    <ol
      className="@container flex h-[var(--h)] list-none p-0 [--h:clamp(380px,32vw,440px)] [--n:clamp(88px,9vw,140px)] [--pad:clamp(20px,2vw,28px)]"
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(0);
      }}
      onBlur={onBlur}
    >
      {steps.map((step, i) => {
        const on = open === i;
        const panel = `krok-${i + 1}`;
        return (
          <li
            key={step.title}
            className="step relative min-w-0 shrink grow-[var(--g)] basis-0 transition-[flex-grow] duration-500 ease-[var(--ease-arrive)] not-first:-ml-3 motion-reduce:transition-none"
            style={{ "--i": i, "--g": on ? OPEN : 1, zIndex: on ? COUNT + 1 : i + 1 } as CSSProperties}
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") setOpen(i);
            }}
          >
            <div
              aria-hidden={on ? undefined : true}
              className={`absolute inset-0 overflow-hidden border transition-colors duration-300 ease-[var(--ease-arrive)] ${on ? "border-ivory bg-ivory" : "border-rule-strong bg-ink"}`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-[var(--pad)] left-[var(--pad)] origin-top-left font-display text-[length:var(--n)] font-light leading-none tracking-[-0.04em] tabular-nums transition-[translate,scale,color] duration-500 ease-[var(--ease-arrive)] motion-reduce:transition-none ${on ? "translate-y-0 scale-50" : "translate-y-[calc(var(--h)_-_2*var(--pad)_-_2px_-_var(--n))] scale-100"} ${i === LAST ? (on ? "text-gold-deep" : "text-gold") : on ? "text-ink" : "text-ivory"}`}
              >
                {i + 1}
              </span>
              <div
                id={panel}
                className={`absolute bottom-[var(--pad)] left-[var(--pad)] w-[calc((100cqw_+_48px)*3.4/7.4_-_2*var(--pad)_-_2px)] transition-[opacity,translate] ease-[var(--ease-arrive)] motion-reduce:transition-none ${on ? "translate-y-0 opacity-100 delay-150 duration-500" : "translate-y-3 opacity-0 duration-200"}`}
              >
                <StepWords i={i} large />
              </div>
            </div>
            <button
              type="button"
              aria-expanded={on}
              aria-controls={panel}
              aria-label={`Krok ${i + 1}: ${step.title}`}
              className="absolute inset-0 z-[1] cursor-pointer"
              onPointerDown={(e) => {
                pointerType.current = e.pointerType;
              }}
              onFocus={(e) => {
                if (e.currentTarget.matches(":focus-visible")) setOpen(i);
              }}
              onClick={() => {
                // A mouse opened the card on hover; a tap or a key toggles it.
                const type = pointerType.current;
                pointerType.current = "";
                if (type === "mouse") return;
                setOpen((current) => (current === i ? 0 : i));
              }}
            />
          </li>
        );
      })}
    </ol>
  );
}

type Leaving = { index: number; dir: 1 | -1 };

// Below 1024px: the deck. The top card shows its step; two more cards sit behind it, lower and dimmer, so the deck
// reads as a stack. A swipe either way sends the top card off that side and under the deck, and the next step comes
// up; "Poprzedni" brings the last card back from the left. The deck goes round: after step 5 comes step 1.
function StepDeck() {
  const [top, setTop] = useState(0);
  const [dx, setDx] = useState<number | null>(null);
  const [leaving, setLeaving] = useState<Leaving | null>(null);
  const [entering, setEntering] = useState<number | null>(null);
  const drag = useRef<{ id: number; x: number; t: number } | null>(null);
  const timer = useRef(0);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const next = (dir: 1 | -1) => {
    window.clearTimeout(timer.current);
    setLeaving({ index: top, dir });
    setTop((top + 1) % COUNT);
    setDx(null);
    timer.current = window.setTimeout(() => setLeaving(null), 480);
  };

  const previous = () => {
    const k = (top - 1 + COUNT) % COUNT;
    setLeaving(null);
    setEntering(k);
    setTop(k);
    // Two frames: the card is first placed off to the left without a transition, then let go.
    requestAnimationFrame(() => requestAnimationFrame(() => setEntering(null)));
  };

  const onPointerDown = (e: PointerEvent<HTMLLIElement>) => {
    if (!e.isPrimary || (e.pointerType === "mouse" && e.button !== 0)) return;
    drag.current = { id: e.pointerId, x: e.clientX, t: e.timeStamp };
    e.currentTarget.setPointerCapture(e.pointerId);
    setDx(0);
  };
  const onPointerMove = (e: PointerEvent<HTMLLIElement>) => {
    if (drag.current?.id === e.pointerId) setDx(e.clientX - drag.current.x);
  };
  const onPointerUp = (e: PointerEvent<HTMLLIElement>) => {
    const start = drag.current;
    if (!start || start.id !== e.pointerId) return;
    drag.current = null;
    const delta = e.clientX - start.x;
    const speed = Math.abs(delta) / Math.max(1, e.timeStamp - start.t);
    if (Math.abs(delta) > 72 || (Math.abs(delta) > 24 && speed > 0.45)) next(delta > 0 ? 1 : -1);
    else setDx(null);
  };
  const onPointerCancel = () => {
    drag.current = null;
    setDx(null);
  };

  return (
    <div className="step max-w-[460px]" style={{ "--i": 0 } as CSSProperties}>
      <ol role="list" aria-label="Kroki współpracy" className="relative grid list-none p-0 pb-6">
        {steps.map((step, k) => {
          const rank = (k - top + COUNT) % COUNT;
          const isLeaving = leaving?.index === k;
          const front = rank === 0 && !isLeaving;
          let transform: string;
          let opacity = 1;
          let zIndex = COUNT - rank;
          let transition: string | undefined;
          let shade = 1;
          if (isLeaving) {
            transform = `translateX(${leaving.dir * 130}%) rotate(${leaving.dir * 14}deg)`;
            opacity = 0;
            zIndex = COUNT + 1;
          } else if (entering === k) {
            transform = "translateX(-130%) rotate(-14deg)";
            opacity = 0;
            transition = "none";
          } else if (rank === 0) {
            const d = dx ?? 0;
            transform = `translateX(${d}px) rotate(${d / 24}deg)`;
            if (dx !== null) transition = "none";
          } else {
            const r = Math.min(rank, 2);
            transform = `translateY(${r * 12}px) scale(${1 - r * 0.05})`;
            opacity = rank <= 2 ? 1 : 0;
            shade = 1 - r * 0.1;
          }
          return (
            <li
              key={step.title}
              aria-hidden={front ? undefined : true}
              className="col-start-1 row-start-1 flex min-h-[clamp(320px,82vw,380px)] origin-bottom touch-pan-y flex-col bg-ivory p-[clamp(24px,6vw,36px)] text-ink transition-[transform,opacity,filter] duration-[480ms] ease-[var(--ease-arrive)] select-none motion-reduce:transition-none"
              style={{ transform, opacity, zIndex, transition, filter: shade < 1 ? `brightness(${shade})` : undefined }}
              onPointerDown={front ? onPointerDown : undefined}
              onPointerMove={front ? onPointerMove : undefined}
              onPointerUp={front ? onPointerUp : undefined}
              onPointerCancel={front ? onPointerCancel : undefined}
            >
              <span
                aria-hidden="true"
                className={`font-display text-[72px] font-light leading-none tracking-[-0.04em] tabular-nums ${k === LAST ? "text-gold-deep" : "text-ink"}`}
              >
                {k + 1}
              </span>
              <div className={`mt-auto pt-8 transition-opacity duration-300 ${rank <= 1 || isLeaving ? "opacity-100" : "opacity-0"}`}>
                <StepWords i={k} />
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 flex items-center justify-between gap-4">
        <div aria-hidden="true" className="flex gap-1.5">
          {steps.map((step, k) => (
            <span key={step.title} className={`h-[2px] w-5 transition-colors duration-300 ${k === top ? "bg-gold" : "bg-rule-strong"}`} />
          ))}
        </div>
        <p className="sr-only" aria-live="polite">
          Krok {top + 1} z{" "}
          {COUNT}: {steps[top].title}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            className="min-h-11 border border-ivory/30 px-4 font-display text-[15px] text-ivory transition-colors duration-200 hover:border-gold-light hover:text-gold-light"
          >
            Poprzedni
          </button>
          <button
            type="button"
            onClick={() => next(-1)}
            className="min-h-11 border border-ivory/30 px-4 font-display text-[15px] text-ivory transition-colors duration-200 hover:border-gold-light hover:text-gold-light"
          >
            Następny
          </button>
        </div>
      </div>
    </div>
  );
}

export function ProcessSteps() {
  const wrapRef = useRef<HTMLDivElement>(null);
  useDealIn(wrapRef);
  return (
    <div ref={wrapRef}>
      <div className="hidden lg:block">
        <StepStack />
      </div>
      <div className="lg:hidden">
        <StepDeck />
      </div>
    </div>
  );
}

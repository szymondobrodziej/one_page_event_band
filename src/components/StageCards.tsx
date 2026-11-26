"use client";

import Image from "next/image";
import { type CSSProperties, useRef, useState } from "react";
import type { Benefit } from "@/content/site";
import { LineIcon } from "./Icons";

// How much wider an open card grows, against 1 for the others.
const OPEN = 1.6;

const TITLE = "font-display text-[clamp(21px,1.9vw,26px)] font-light leading-[1.15] tracking-[-0.02em]";
const BODY = "mt-2.5 max-w-[30em] text-[15px] leading-[1.6] text-smoke sm:text-[16px]";

// "Na scenie" in "Co dostajesz": each photograph with its icon and words in a fine frame (client, 2026-11-26). The
// card the visitor points at (or taps) opens like a line-up pillar in "Kto stoi na scenie": in the row of four it
// grows wider and its photograph, a 6:5 cut seen through a 4:5 window at rest, shows more of the stage and moves a
// touch closer; the frame takes the gold. The photo keeps its height and the words keep the width of a closed card,
// so nothing below moves while the row breathes. In two columns and on phones the card only lights.
export function StageCards({ items }: { items: Benefit[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const pointerType = useRef("mouse");

  return (
    <ul
      className="@container grid list-none gap-[var(--gap)] p-0 [--gap:clamp(16px,1.8vw,28px)] [--pad:clamp(10px,0.9vw,14px)] sm:grid-cols-2 lg:flex"
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setOpen(null);
      }}
    >
      {items.map((item, i) => {
        const wide = open === i;
        return (
          <li
            key={item.title}
            style={{ "--g": wide ? OPEN : 1 } as CSSProperties}
            className="min-w-0 transition-[flex-grow] duration-500 ease-[var(--ease-arrive)] motion-reduce:transition-none lg:shrink lg:grow-[var(--g)] lg:basis-0"
            onPointerEnter={(e) => {
              if (e.pointerType === "mouse") setOpen(i);
            }}
            onPointerDown={(e) => {
              pointerType.current = e.pointerType;
            }}
            onClick={() => {
              // A tap opens the card and a second tap closes it; a mouse already opened it on hover.
              if (pointerType.current === "mouse") return;
              setOpen((current) => (current === i ? null : i));
            }}
          >
            <div
              className={`grid h-full grid-cols-[38%_1fr] items-start gap-x-4 border p-[var(--pad)] transition-colors duration-300 ease-[var(--ease-arrive)] sm:block ${wide ? "border-gold" : "border-rule-ivory"}`}
            >
              {item.photo && (
                // At four across the photo is as tall as a closed card's 4:5 and keeps that height when it opens.
                <div className="relative aspect-[4/5] overflow-hidden bg-ink lg:aspect-auto lg:h-[calc(((100cqw_-_3*var(--gap))/4_-_2*var(--pad)_-_2px)*1.25)]">
                  <Image
                    src={item.photo.src}
                    alt={item.photo.alt}
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 1024px) 34vw, (min-width: 640px) 64vw, 50vw"
                    quality={78}
                    style={item.photo.position ? { objectPosition: item.photo.position } : undefined}
                    className={`doc-photo object-cover transition-transform duration-700 ease-[var(--ease-arrive)] motion-reduce:transition-none ${wide ? "scale-[1.04]" : "scale-100"}`}
                  />
                </div>
              )}
              <div className="sm:px-1 sm:pt-6 sm:pb-2 lg:w-[calc((100cqw_-_3*var(--gap))/4.6_-_2*var(--pad)_-_2px)]">
                <LineIcon name={item.icon} className="size-7 text-ink sm:size-8" />
                <h4 className={`mt-3 sm:mt-4 ${TITLE}`}>{item.title}</h4>
                <p className={BODY}>{item.body}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

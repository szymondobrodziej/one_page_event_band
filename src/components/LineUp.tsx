"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { lineup } from "@/content/site";

// The line-up: eleven pillars, one musician in each, in the hero's geometry and held colour. The pillar the
// visitor points at takes the hero centre pillar's gold edge. On touch screens, where nothing hovers, the
// pillar nearest the middle of the strip is lit as the visitor scrolls it (or the one they touch).
// Nothing moves on its own: the living stage in the hero stays the page's only unprompted motion.
export function LineUp() {
  const [lit, setLit] = useState<number | null>(null);
  const [scrollable, setScrollable] = useState(false);
  const [near, setNear] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Native lazy loading does not see pillars hidden sideways in the phone strip, so the whole set is fetched
  // together once the strip comes within reach of the viewport.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setNear(true);
        observer.disconnect();
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(strip);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    const list = listRef.current;
    if (!strip || !list) return;
    const touch = window.matchMedia("(hover: none)");
    let frame = 0;

    const pickCentre = () => {
      frame = 0;
      const canScroll = strip.scrollWidth > strip.clientWidth + 1;
      setScrollable(canScroll);
      if (!touch.matches || !canScroll) return;
      const box = strip.getBoundingClientRect();
      const middle = box.left + box.width / 2;
      let best = 0;
      let bestDistance = Infinity;
      Array.from(list.children).forEach((item, i) => {
        const r = item.getBoundingClientRect();
        const distance = Math.abs(r.left + r.width / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      setLit(best);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(pickCentre);
    };

    schedule();
    strip.addEventListener("scroll", schedule, { passive: true });
    const resize = new ResizeObserver(schedule);
    resize.observe(strip);
    return () => {
      strip.removeEventListener("scroll", schedule);
      resize.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={stripRef}
      role="region"
      aria-label="Skład na scenie"
      tabIndex={scrollable ? 0 : undefined}
      className="no-scrollbar mt-[clamp(56px,6vw,96px)] -mx-[clamp(20px,5vw,64px)] snap-x snap-mandatory scroll-px-[clamp(20px,5vw,64px)] overflow-x-auto px-[clamp(20px,5vw,64px)] lg:mx-0 lg:overflow-visible lg:px-0"
    >
      <ul
        ref={listRef}
        className="flex list-none gap-2.5 p-0 lg:grid lg:grid-cols-11 lg:gap-[clamp(8px,0.85vw,12px)]"
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setLit(null);
        }}
      >
        {lineup.map((member, i) => {
          const on = lit === i;
          return (
            <li
              key={member.slug}
              className="w-[34vw] max-w-[190px] flex-none snap-start lg:w-auto lg:max-w-none"
              onPointerEnter={(e) => {
                if (e.pointerType === "mouse") setLit(i);
              }}
              onPointerDown={(e) => {
                if (e.pointerType !== "mouse") setLit(i);
              }}
            >
              <figure className="m-0">
                <div className="relative aspect-[3/10] overflow-hidden bg-ink">
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 z-10 h-[3px] origin-top bg-gold transition-transform duration-300 ease-[var(--ease-arrive)] ${on ? "scale-y-100" : "scale-y-0"}`}
                  />
                  <Image
                    src={`/media/lineup/a11-pion-${member.slug}.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 9vw, 34vw"
                    quality={78}
                    loading={near ? "eager" : "lazy"}
                    className="doc-photo object-cover"
                  />
                </div>
                <figcaption className={`mt-3 whitespace-nowrap text-[13px] leading-tight transition-colors duration-300 ${on ? "text-ink" : "text-pebble"}`}>
                  {member.label}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

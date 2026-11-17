"use client";

import { useEffect, useRef } from "react";
import { cta, hero, photos } from "@/content/site";
import { PlayGlyph } from "../Icons";

// Where the picture starts: the vocalist in the black jumpsuit, in the middle of the stage (pixels of photos.stage).
const FOCUS = { x: 1693, y: 1530, h: 1300 };
const HEADER = 72;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

// "Jeden z jedenastu": the page opens on one musician in a tall frame beside the headline. Scrolling opens the frame
// to the whole screen and pulls back to all eleven on stage; on narrow screens the camera then pans across the
// stage. The scroll drives it and nothing moves on its own; under reduced motion it is a still beside the headline.
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const stage = stageRef.current;
    const slot = slotRef.current;
    const copy = copyRef.current;
    const layer = layerRef.current;
    const img = imgRef.current;
    if (!section || !track || !stage || !slot || !copy || !layer || !img) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.dataset.motion = "off";
      return;
    }

    const { w: PW, h: PH } = photos.stage;
    let W = 0;
    let H = 0;
    let S = { x: 0, y: 0, w: 0, h: 0 };
    let frame = 0;

    const measure = () => {
      const box = stage.getBoundingClientRect();
      const s = slot.getBoundingClientRect();
      W = box.width;
      H = box.height;
      S = { x: s.left - box.left, y: s.top - box.top, w: s.width, h: s.height };
    };

    const render = () => {
      frame = 0;
      const r = track.getBoundingClientRect();
      const p = clamp01((HEADER - r.top) / Math.max(1, r.height - H));

      // The end picture covers the stage; where it is much wider than the screen the camera pans after opening.
      const cover = Math.max(W / PW, H / PH);
      const bw = PW * cover;
      const pans = bw - W > W * 0.15;
      const openEnd = pans ? 0.5 : 0.78;
      const t = easeInOutCubic(clamp01(p / openEnd));
      const pan = pans ? easeInOutCubic(clamp01((p - openEnd) / (0.96 - openEnd))) : 0;

      // Start: the vocalist fills the frame. Scale and position move linearly with t, so the photo always covers
      // the opening frame. Panning starts a little in from the left edge, past the darkest corner of the room.
      const k0 = Math.max(S.h / FOCUS.h, cover);
      const x0 = S.x + S.w / 2 - FOCUS.x * k0;
      const y0 = S.y + S.h / 2 - FOCUS.y * k0;
      const x1 = pans ? (W - bw) * 0.1 : (W - bw) / 2;
      const y1 = (H - PH * cover) / 2;
      const k = mix(k0, cover, t);
      const x = mix(x0, x1, t) + (W - bw - x1) * pan;
      const y = mix(y0, y1, t);

      const u = 1 - t;
      layer.style.clipPath = `inset(${S.y * u}px ${(W - S.x - S.w) * u}px ${(H - S.y - S.h) * u}px ${S.x * u}px)`;
      img.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${k})`;
      // The words step back as the picture opens over them, and leave the focus order once covered.
      copy.style.opacity = String(1 - clamp01(t * 1.8));
      copy.style.visibility = t > 0.56 ? "hidden" : "";
      layer.dataset.ready = "1";
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };
    const resize = new ResizeObserver(() => {
      measure();
      schedule();
    });
    resize.observe(stage);
    resize.observe(slot);
    window.addEventListener("scroll", schedule, { passive: true });
    measure();
    render();
    return () => {
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="top" aria-labelledby="hero-title" className="group bg-ink">
      <div ref={trackRef} className="relative h-[calc(270svh-72px)] group-data-[motion=off]:h-auto lg:h-[calc(230svh-72px)]">
        <div ref={stageRef} className="sticky top-[72px] h-[calc(100svh-72px)] overflow-hidden group-data-[motion=off]:static group-data-[motion=off]:h-auto">
          <div className="shell grid h-full grid-rows-[auto_minmax(0,1fr)] gap-y-[clamp(20px,3vw,32px)] py-[clamp(20px,3vw,40px)] lg:grid-cols-12 lg:grid-rows-1 lg:gap-x-[clamp(24px,3vw,48px)]">
            <div ref={copyRef} className="flex flex-col justify-center lg:col-span-7">
              <h1 id="hero-title">
                <span className="mb-[clamp(10px,1.2vw,16px)] block font-display text-[clamp(1.375rem,2.2vw,2rem)] font-light leading-[1.05] tracking-[-0.03em] text-ash">
                  {hero.overline}
                </span>
                <span className="block max-w-[12em] font-display text-[clamp(2.625rem,4.7vw,4.5rem)] font-light leading-[0.96] tracking-[-0.04em] text-ivory">
                  {hero.headline}
                </span>
              </h1>
              <div className="hidden lg:block">
                <Lead className="mt-[clamp(24px,2.5vw,36px)]" />
                <Actions className="mt-[clamp(28px,3vw,40px)]" />
              </div>
            </div>
            <div ref={slotRef} className="relative min-h-0 overflow-hidden lg:col-span-5 group-data-[motion=off]:aspect-[4/5]">
              {/* eslint-disable-next-line @next/next/no-img-element -- the same file as the moving layer, fetched once */}
              <img src={photos.stage.src} alt={photos.stage.alt} className="doc-photo absolute inset-0 hidden size-full object-cover group-data-[motion=off]:block" />
            </div>
          </div>

          <div ref={layerRef} className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-0 data-[ready]:opacity-100 group-data-[motion=off]:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- transformed by hand, needs the full-size file */}
            <img
              ref={imgRef}
              src={photos.stage.src}
              alt={photos.stage.alt}
              width={photos.stage.w}
              height={photos.stage.h}
              fetchPriority="high"
              className="doc-photo absolute top-0 left-0 max-w-none origin-top-left"
              style={{ width: photos.stage.w, height: photos.stage.h }}
            />
          </div>
        </div>
      </div>

      <div className="shell pt-[clamp(40px,5vw,72px)] pb-[clamp(80px,9vw,136px)]">
        <div className="mb-[clamp(48px,6vw,88px)] flex flex-wrap items-start justify-between gap-x-16 gap-y-8 lg:hidden">
          <Lead className="flex-[1_1_340px]" />
          <Actions />
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-16 gap-y-4 border-t border-rule-ink pt-6">
          <p className="max-w-[34em] font-display text-[clamp(18px,1.5vw,21px)] leading-[1.4] tracking-[-0.005em] text-ivory">{hero.facts}</p>
          <p className="max-w-[30em] text-[15px] leading-relaxed text-ash">{hero.credits}</p>
        </div>
      </div>
    </section>
  );
}

function Lead({ className = "" }: { className?: string }) {
  return <p className={`max-w-[34em] text-[18px] leading-[1.6] text-ivory-dim ${className}`}>{hero.lead}</p>;
}

function Actions({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-start gap-x-7 gap-y-4 ${className}`}>
      <div className="flex max-w-[320px] flex-col gap-3">
        <a href="#kontakt" className="btn btn-ivory">
          {cta.primary}
        </a>
        <span className="text-[14px] leading-normal text-stone">{cta.heroNote}</span>
      </div>
      <a href="#na-zywo" className="link-quiet group/play inline-flex min-h-14 items-center gap-3.5 font-display text-[16px] font-medium text-ivory no-underline">
        <span className="inline-flex size-10 items-center justify-center rounded-full border border-ivory/45 transition-colors duration-200 group-hover/play:border-gold-light">
          <PlayGlyph className="size-3" />
        </span>
        {cta.recording}
      </a>
    </div>
  );
}

import React from "react";
import { AbsoluteFill } from "remotion";
import { LoopingReel, ReelItem, SMOOTH_SRC, planReel } from "./Reel";
import { PALETTE, SHOTS } from "./shots";

// The hero film on the page (src/components/sections/Hero.tsx): a plain muted loop the browser plays with no script.
// Colour shots only, in slow motion (0.4x from the 75 fps master) with half-second dissolves. The whole band opens it
// and the last shot dissolves back into the first, so the loop has no seam. The held colour of the page's photographs
// is baked in, so the page puts no filter on moving video. voxTrio stays out: a frame of it is the poster of the
// full recording further down the page, and no picture appears twice.
export const FILM_XF = 12;

export const FILM_ITEMS: ReelItem[] = [
  { shot: SHOTS.wide, rate: 0.4 },
  { shot: SHOTS.voxRed, rate: 0.4 },
  { shot: SHOTS.hornsA, rate: 0.4 },
  { shot: SHOTS.voxBlondeA, rate: 0.4 },
  { shot: SHOTS.trumpet, rate: 0.4 },
  { shot: SHOTS.voxBrunetteB, rate: 0.4 },
];

export const filmDuration = () => planReel(FILM_ITEMS, FILM_XF).total;

export const HeroFilm: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: PALETTE.black }}>
    <AbsoluteFill style={{ filter: "saturate(0.68) sepia(0.08) contrast(1.04)" }}>
      <LoopingReel items={FILM_ITEMS} xf={FILM_XF} src={SMOOTH_SRC} />
    </AbsoluteFill>
  </AbsoluteFill>
);

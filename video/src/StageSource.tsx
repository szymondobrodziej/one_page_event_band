import React from "react";
import { AbsoluteFill } from "remotion";
import { LoopingReel, ReelItem, SMOOTH_SRC, planReel } from "./Reel";
import { SHOTS } from "./shots";

// Clean colour loop for the live WebGL stage (src/components/StageCanvas.tsx).
// No pillars, no grade: the shader draws the eleven pillars, the monochrome and the colour
// that follows the pointer, so the geometry stays sharp at any viewport size.
// A calm cut for a premium stage: four shots in slow motion (2.5x, from the 75 fps interpolated
// showreel) with long holds. The whole band opens and holds longest; then the horns and the two lead
// vocalists. Shots were picked by measuring the centre pillar's crown (the top fifth of the stage crop,
// where the centre rises above the others): each has lit content there, so the crown never reads as an
// empty slab. (hornsGold, for instance, is fully dark in the centre column: luminance ~16/255.)
export const STAGE_XF = 12;

export const STAGE_ITEMS: ReelItem[] = [
  { shot: SHOTS.wide, rate: 0.4 },
  { shot: SHOTS.hornsA, rate: 0.4 },
  { shot: SHOTS.voxBlondeA, rate: 0.4 },
  { shot: SHOTS.voxBrunette, rate: 0.4 },
];

export const stageDuration = () => planReel(STAGE_ITEMS, STAGE_XF).total;

export const StageSource: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#111111" }}>
    <LoopingReel items={STAGE_ITEMS} xf={STAGE_XF} src={SMOOTH_SRC} />
  </AbsoluteFill>
);

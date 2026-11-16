import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { LoopingReel, ReelItem, planReel } from "./Reel";
import { PALETTE, SHOTS } from "./shots";

// Hero loop: the showreel seen through eleven pillars.
// Ten pillars are monochrome; the centre pillar keeps its colour, rises above the line and carries a gold edge.
// Geometry is shared with the website (src/components/StageBand.tsx): gap = GAP_RATIO of the width,
// the ten outer pillars start STEP_RATIO of the height below the top.
export const GAP_RATIO = 12 / 1920;
export const STEP_RATIO = 0.2126;
export const HERO_XF = 8;
const PILLAR_FLOOR = "#1c1c1c";

export const HERO_ITEMS: ReelItem[] = [
  { shot: SHOTS.wide, rate: 0.8 },
  { shot: SHOTS.hornsGold, rate: 0.8 },
  { shot: SHOTS.voxBlonde, rate: 0.8 },
  { shot: SHOTS.trumpet, rate: 0.8 },
  { shot: SHOTS.drummerMono, rate: 0.8 },
  { shot: SHOTS.voxBrunetteB, rate: 0.8 },
  { shot: SHOTS.keysRed, rate: 0.8 },
];

export const heroDuration = () => planReel(HERO_ITEMS, HERO_XF).total;

export const HeroLoop: React.FC<{ gapRatio?: number }> = ({ gapRatio = GAP_RATIO }) => {
  const { width, height } = useVideoConfig();
  const gap = width * gapRatio;
  const colW = (width - 10 * gap) / 11;
  const centreX = 5 * (colW + gap);
  const step = Math.round(height * STEP_RATIO);
  const goldLine = Math.max(4, Math.round(height * 0.009));

  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.black }}>
      {/* Pillars sit on a graphite floor (lighten blend), so even the darkest footage stays a readable
          pillar against the #111 gutters and the page ground. */}
      <AbsoluteFill style={{ backgroundColor: PILLAR_FLOOR }}>
        <AbsoluteFill style={{ filter: "grayscale(1) brightness(1.18) contrast(1.12)", mixBlendMode: "lighten" }}>
          <LoopingReel items={HERO_ITEMS} xf={HERO_XF} />
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          clipPath: `inset(0px ${width - centreX - colW}px 0px ${centreX}px)`,
          backgroundColor: PILLAR_FLOOR,
        }}
      >
        <AbsoluteFill style={{ filter: "saturate(0.92) contrast(1.03)", mixBlendMode: "lighten" }}>
          <LoopingReel items={HERO_ITEMS} xf={HERO_XF} />
        </AbsoluteFill>
      </AbsoluteFill>
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`gap-${i}`}
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: (i + 1) * colW + i * gap,
            width: gap,
            backgroundColor: PALETTE.black,
          }}
        />
      ))}
      {Array.from({ length: 11 }, (_, i) =>
        i === 5 ? null : (
          <div
            key={`step-${i}`}
            style={{
              position: "absolute",
              top: 0,
              left: i * (colW + gap),
              width: colW,
              height: step,
              backgroundColor: PALETTE.black,
            }}
          />
        ),
      )}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: centreX,
          width: colW,
          height: goldLine,
          backgroundColor: PALETTE.gold,
        }}
      />
    </AbsoluteFill>
  );
};

import React from "react";
import { AbsoluteFill, useVideoConfig } from "remotion";
import { LoopingReel, ReelItem, SMOOTH_SRC, planReel } from "./Reel";
import { PALETTE } from "./shots";
import { STAGE_ITEMS, STAGE_XF } from "./StageSource";

// Hero loop: the showreel seen through eleven pillars.
// Ten pillars are monochrome; the centre pillar keeps its colour, rises above the line and carries a gold edge.
// This is the baked fallback of the live WebGL stage (src/components/StageCanvas.tsx, played by
// src/components/StageBand.tsx): same cut, same geometry, a close match of the shader's grade.
// Gap = GAP_RATIO of the width, the ten outer pillars start STEP_RATIO of the height below the top.
export const GAP_RATIO = 12 / 1920;
export const STEP_RATIO = 0.2126;
export const HERO_XF = STAGE_XF;
const PILLAR_FLOOR = "#1c1c1c";

export const HERO_ITEMS: ReelItem[] = STAGE_ITEMS;

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
          <LoopingReel items={HERO_ITEMS} xf={HERO_XF} src={SMOOTH_SRC} />
        </AbsoluteFill>
      </AbsoluteFill>
      <AbsoluteFill
        style={{
          clipPath: `inset(0px ${width - centreX - colW}px 0px ${centreX}px)`,
          backgroundColor: PILLAR_FLOOR,
        }}
      >
        <AbsoluteFill style={{ filter: "saturate(0.68) sepia(0.08) contrast(1.04)", mixBlendMode: "lighten" }}>
          <LoopingReel items={HERO_ITEMS} xf={HERO_XF} src={SMOOTH_SRC} />
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

import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { loadFont as loadInterTight } from "@remotion/google-fonts/InterTight";
import { loadFont as loadManrope } from "@remotion/google-fonts/Manrope";
import { CutReel, ReelItem, planReel } from "./Reel";
import { PALETTE, SHOTS } from "./shots";

const { fontFamily: interTight } = loadInterTight("normal", { weights: ["300", "500"], subsets: ["latin", "latin-ext"] });
const { fontFamily: manrope } = loadManrope("normal", { weights: ["400"], subsets: ["latin", "latin-ext"] });

type Group = { caption: string; adds: number; items: ReelItem[] };

// Line-up film for the "Tak brzmi Aurum Eleven na żywo" section: who stands on stage, one group at a time.
const GROUPS: Group[] = [
  { caption: "Wokale", adds: 3, items: [{ shot: SHOTS.voxRed }, { shot: SHOTS.voxBrunetteB }, { shot: SHOTS.voxBlonde }] },
  { caption: "Trąbka", adds: 1, items: [{ shot: SHOTS.trumpet }] },
  { caption: "Saksofon i puzon", adds: 2, items: [{ shot: SHOTS.hornsGold }, { shot: SHOTS.hornsA }] },
  { caption: "Perkusjonalia", adds: 1, items: [{ shot: SHOTS.percChimes }, { shot: SHOTS.percSticks }] },
  { caption: "Perkusja", adds: 1, items: [{ shot: SHOTS.drummerMono }, { shot: SHOTS.drumsMono }] },
  { caption: "Bas", adds: 1, items: [{ shot: SHOTS.bass, rate: 0.5 }] },
  { caption: "Gitara", adds: 1, items: [{ shot: SHOTS.guitarColour }, { shot: SHOTS.guitarMono }] },
  { caption: "Klawisze", adds: 1, items: [{ shot: SHOTS.keysRed }, { shot: SHOTS.keysMonoB }] },
];
const FINALE: ReelItem[] = [{ shot: SHOTS.wide, rate: 0.7 }];
const INTRO = 60;
const OUTRO = 72;

const timeline = () => {
  let cursor = INTRO;
  let lit = 0;
  const groups = GROUPS.map((g) => {
    const length = planReel(g.items, 0).total;
    const entry = { ...g, from: cursor, length, litBefore: lit };
    cursor += length;
    lit += g.adds;
    return entry;
  });
  const finaleLength = planReel(FINALE, 0).total;
  const finaleFrom = cursor;
  const outroFrom = finaleFrom + finaleLength;
  return { groups, finaleFrom, finaleLength, outroFrom, total: outroFrom + OUTRO };
};

export const lineUpDuration = () => timeline().total;

const FOOTAGE_H = 900; // footage above, a #111 caption band of 180 px below: captions never sit on the picture
const GRADE = "saturate(0.42) contrast(1.05)";

const Caption: React.FC<{ text: string }> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  const x = interpolate(frame, [0, 12], [-16, 0], { extrapolateRight: "clamp" });
  return (
    <div
      style={{
        position: "absolute",
        left: 96,
        top: FOOTAGE_H,
        height: 1080 - FOOTAGE_H,
        display: "flex",
        alignItems: "center",
        fontFamily: interTight,
        fontWeight: 300,
        fontSize: 72,
        lineHeight: 1,
        letterSpacing: "-0.04em",
        color: PALETTE.ivory,
        opacity,
        transform: `translateX(${x}px)`,
      }}
    >
      {text}
    </div>
  );
};

const Footage: React.FC<{ items: ReelItem[] }> = ({ items }) => (
  <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: FOOTAGE_H, overflow: "hidden" }}>
    <AbsoluteFill style={{ filter: GRADE }}>
      <CutReel items={items} />
    </AbsoluteFill>
  </div>
);

const Mark: React.FC<{ size: number }> = ({ size }) => (
  <svg viewBox="4 6 194 144" width={size} height={(size * 144) / 194} aria-hidden="true">
    <path d="M16 142 L68 30 L120 142" fill="none" stroke={PALETTE.ivory} strokeWidth={16} />
    <rect x={42} y={96} width={86} height={14} fill={PALETTE.gold} />
    <g fill={PALETTE.ivory}>
      <rect x={146} y={28} width={16} height={114} />
      <polygon points="146,28 131,45 146,45" />
      <rect x={178} y={28} width={16} height={114} />
      <polygon points="178,28 163,45 178,45" />
    </g>
  </svg>
);

const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [8, 26], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.black, justifyContent: "center", paddingLeft: 120 }}>
      <div style={{ fontFamily: interTight, fontWeight: 300, fontSize: 120, lineHeight: 0.98, letterSpacing: "-0.045em", color: PALETTE.ivory, opacity, maxWidth: 1200 }}>
        Jedenastu muzyków na scenie.
      </div>
    </AbsoluteFill>
  );
};

const Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 14], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.black, alignItems: "center", justifyContent: "center", opacity }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <Mark size={220} />
        <div style={{ fontFamily: interTight, fontWeight: 500, fontSize: 26, letterSpacing: "0.42em", paddingLeft: "0.42em", color: PALETTE.ivory }}>AURUM ELEVEN</div>
        <div style={{ marginTop: 28, fontFamily: manrope, fontSize: 30, color: "#A8A39A" }}>Eleven musicians. One signature sound.</div>
      </div>
    </AbsoluteFill>
  );
};

export const LineUp: React.FC = () => {
  const t = timeline();
  return (
    <AbsoluteFill style={{ backgroundColor: PALETTE.black }}>
      <Sequence from={0} durationInFrames={INTRO}>
        <Intro />
      </Sequence>
      {t.groups.map((g) => (
        <Sequence key={g.caption} from={g.from} durationInFrames={g.length}>
          <Footage items={g.items} />
          <Caption text={g.caption} />
        </Sequence>
      ))}
      <Sequence from={t.finaleFrom} durationInFrames={t.finaleLength}>
        <Footage items={FINALE} />
        <Caption text="Aurum Eleven" />
      </Sequence>
      <Sequence from={INTRO} durationInFrames={t.outroFrom - INTRO}>
        <div style={{ position: "absolute", right: 96, top: FOOTAGE_H, height: 1080 - FOOTAGE_H, display: "flex", alignItems: "center" }}>
          <Mark size={64} />
        </div>
      </Sequence>
      <Sequence from={t.outroFrom} durationInFrames={OUTRO}>
        <Outro />
      </Sequence>
    </AbsoluteFill>
  );
};

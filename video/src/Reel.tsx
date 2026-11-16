import React from "react";
import {
  AbsoluteFill,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import { frames, Shot } from "./shots";

const SRC = staticFile("showreel.mp4");

export type ReelItem = { shot: Shot; rate?: number };

type Planned = { item: ReelItem; from: number; length: number };

/** Lays shots end to end with a dissolve of `xf` frames between them. */
export const planReel = (items: ReelItem[], xf: number) => {
  let cursor = 0;
  const planned: Planned[] = items.map((item) => {
    const rate = item.rate ?? 1;
    const available = Math.floor(frames(item.shot.out - item.shot.in) / rate);
    const visible = available - xf;
    const p = { item, from: cursor, length: available };
    cursor += visible;
    return p;
  });
  return { planned, total: cursor };
};

const Clip: React.FC<{ shot: Shot; rate: number; fadeIn: number; trimOffset?: number }> = ({
  shot,
  rate,
  fadeIn,
  trimOffset = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn > 0 ? interpolate(frame, [0, fadeIn - 1], [0, 1], { extrapolateRight: "clamp" }) : 1;
  return (
    <AbsoluteFill style={{ opacity }}>
      <OffthreadVideo
        src={SRC}
        muted
        trimBefore={frames(shot.in) + trimOffset}
        playbackRate={rate}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </AbsoluteFill>
  );
};

/** A looping reel: the first shot dissolves back in over the last `xf` frames, so the last frame leads into frame 0. */
export const LoopingReel: React.FC<{ items: ReelItem[]; xf: number }> = ({ items, xf }) => {
  const { planned, total } = planReel(items, xf);
  const first = items[0];
  const firstRate = first.rate ?? 1;
  return (
    <AbsoluteFill>
      {planned.map((p, i) => (
        <Sequence key={i} from={p.from} durationInFrames={p.length} layout="none">
          <Clip shot={p.item.shot} rate={p.item.rate ?? 1} fadeIn={i === 0 ? 0 : xf} />
        </Sequence>
      ))}
      <Sequence from={total - xf} durationInFrames={xf} layout="none">
        <Clip shot={first.shot} rate={firstRate} fadeIn={xf} trimOffset={-Math.round(xf * firstRate)} />
      </Sequence>
    </AbsoluteFill>
  );
};

/** A straight cut reel for the film: shots play one after another without dissolves. */
export const CutReel: React.FC<{ items: ReelItem[] }> = ({ items }) => {
  const { planned } = planReel(items, 0);
  return (
    <AbsoluteFill>
      {planned.map((p, i) => (
        <Sequence key={i} from={p.from} durationInFrames={p.length} layout="none">
          <Clip shot={p.item.shot} rate={p.item.rate ?? 1} fadeIn={0} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

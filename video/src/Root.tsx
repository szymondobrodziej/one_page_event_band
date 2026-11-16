import React from "react";
import { Composition } from "remotion";
import { HeroLoop, heroDuration } from "./HeroLoop";
import { LineUp, lineUpDuration } from "./LineUp";
import { FPS } from "./shots";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="HeroDesktop" component={HeroLoop} durationInFrames={heroDuration()} fps={FPS} width={1920} height={712} />
    <Composition
      id="HeroMobile"
      component={HeroLoop}
      durationInFrames={heroDuration()}
      fps={FPS}
      width={1080}
      height={654}
      defaultProps={{ gapRatio: 10 / 1080 }}
    />
    <Composition id="LineUp" component={LineUp} durationInFrames={lineUpDuration()} fps={FPS} width={1920} height={1080} />
  </>
);

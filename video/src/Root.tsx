import React from "react";
import { Composition } from "remotion";
import { HeroFilm, filmDuration } from "./HeroFilm";
import { HeroLoop, heroDuration } from "./HeroLoop";
import { LineUp, lineUpDuration } from "./LineUp";
import { StageSource, stageDuration } from "./StageSource";
import { FPS } from "./shots";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="HeroFilm" component={HeroFilm} durationInFrames={filmDuration()} fps={FPS} width={1920} height={1080} />
    <Composition id="HeroStage" component={HeroLoop} durationInFrames={heroDuration()} fps={FPS} width={1920} height={960} />
    <Composition id="StageSource" component={StageSource} durationInFrames={stageDuration()} fps={FPS} width={1600} height={900} />
    <Composition id="StageSourceSmall" component={StageSource} durationInFrames={stageDuration()} fps={FPS} width={960} height={540} />
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

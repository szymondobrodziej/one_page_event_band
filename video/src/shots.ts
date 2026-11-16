// Shot map of the client showreel (public/showreel.mp4, 25 fps, 19.68 s, no audio).
// Cut points were measured frame by frame (ffmpeg scdet plus per-frame strips);
// in/out points sit a frame inside each cut so no frame of the neighbouring shot leaks in.
export const FPS = 25;

export type Shot = { in: number; out: number };

export const SHOTS = {
  wide: { in: 0.32, out: 1.6 }, // whole band on stage, A11 on the LED wall
  keysMono: { in: 1.68, out: 2.04 },
  voxRed: { in: 3.04, out: 3.72 }, // vocalist in sunglasses, red light
  percSticks: { in: 4.72, out: 5.44 }, // percussionist with sticks, yellow light
  voxBrunette: { in: 5.52, out: 6.12 },
  congasMono: { in: 7.24, out: 8.04 }, // hands on congas
  voxBlondeA: { in: 8.12, out: 8.84 },
  guitarColour: { in: 8.88, out: 9.28 },
  percChimes: { in: 9.32, out: 9.76 }, // percussionist at chimes and congas
  voxBrunetteB: { in: 9.84, out: 10.56 },
  drummerMono: { in: 10.64, out: 11.48 },
  keysRed: { in: 11.56, out: 12.28 },
  trumpet: { in: 12.36, out: 13.24 },
  voxBlonde: { in: 13.32, out: 14.12 },
  hornsA: { in: 14.2, out: 14.84 }, // saxophone and trombone
  bass: { in: 14.88, out: 15.3 },
  voxTrio: { in: 15.36, out: 15.68 },
  drumsMono: { in: 15.76, out: 16.16 },
  keysMonoB: { in: 16.24, out: 16.64 },
  voxGreen: { in: 16.72, out: 17.4 },
  hornsGold: { in: 17.48, out: 18.32 }, // saxophone and trombone, gold curtain
  guitarMono: { in: 18.4, out: 19.6 },
} satisfies Record<string, Shot>;

export const frames = (seconds: number) => Math.round(seconds * FPS);

export const PALETTE = {
  black: "#111111",
  ivory: "#F5F2EC",
  gold: "#B08D57",
  graphite: "#2B2B2B",
};

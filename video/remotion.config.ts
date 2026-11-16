import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setJpegQuality(92);
Config.setOverwriteOutput(true);
Config.setPixelFormat("yuv420p");
// Tagged BT.709, limited range: without it the encode comes out full-range and browsers crush #111 to black.
Config.setColorSpace("bt709");

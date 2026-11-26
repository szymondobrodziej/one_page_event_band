# Media provenance

Every raster on the page comes from the client's own material. Originals are not in the repository; they are
Adobe RGB JPEGs, converted to sRGB when cut (sharp, with the sRGB profile embedded). No grade is baked into the
files: the warm held colour is applied in CSS (`.doc-photo`: sepia 0.08, saturate 0.68, contrast 1.04).

Sources:

- **First package** (`Aurum Eleven 2026-11-16.zip`, folder `WWW AURUM ELEVEN/ZDJĘCIA NA STRONĘ/`, photos `1.JPG`–`12.JPG`).
- **Corrections package** (`Poprawka PDF Nov 18 2026.zip`, received 2026-11-19, folder `GRAFIKI INSTRUMENTY/`):
  GITARA, PERKUSJONALIA, PUZON, TRĄBKA, WOKAL KAMA, WOKAL ZUZIA (3200–6000 px).

## Line-up pillars (`public/media/lineup/`, 960x1600, JPEG q82)

Each file is a 3:5 crop at the source's full height (unless noted), centred on the musician. The pillar shows the
middle 3:10 at rest and opens to nearly the full 3:5 on hover or tap. The five unchanged musicians were re-cut wider
from the same originals; their centres and heights were found by matching the previous 480x1600 pillars against
the originals (normalised cross-correlation 0.98–0.998), so the framing at rest is unchanged.

| File | Source | Source size | Crop (w x h + left + top) |
|---|---|---|---|
| a11-pion-perkusja-v2.jpg | first package, 10.JPG | 4112x2741 | 1645x2741+1193+0 |
| a11-pion-bas-v2.jpg | first package, 8.JPG | 4433x2955 | 1772x2953+1698+0 |
| a11-pion-gitara-v2.jpg | corrections, GITARA.JPG | 4709x3139 | 1883x3139+1319+0 |
| a11-pion-saksofon-v2.jpg | first package, 3.JPG | 4421x2947 | 1768x2947+663+0 |
| a11-pion-wokal-1-v2.jpg | corrections, WOKAL ZUZIA.JPG | 6000x4000 | 2400x4000+1530+0 |
| a11-pion-wokal-2-v2.jpg | first package, 11.JPG | 2403x3605 | 1514x2524+631+909 (as before, not full height) |
| a11-pion-wokal-3-v2.jpg | corrections, WOKAL KAMA.JPG | 4800x3200 | 1920x3200+1056+0 |
| a11-pion-trabka-v2.jpg | corrections, TRĄBKA.JPG | 6000x4000 | 2400x4000+2050+0 |
| a11-pion-puzon-v2.jpg | corrections, PUZON.JPG (portrait) | 3200x4800 | 2304x3840+288+0 (top 80%) |
| a11-pion-klawisze-v2.jpg | first package, 9.JPG | 4347x2898 | 1739x2898+1522+0 |
| a11-pion-perkusjonalia-v2.jpg | corrections, PERKUSJONALIA.JPG | 4062x2708 | 1625x2708+1788+0 |

Wokal 1 is Zuzia and Wokal 3 is Kama (the user's mapping, 2026-11-19); Wokal 2, the male vocalist, is unchanged.

## "Co dostajesz", Na scenie (`public/media/photos/`, 1800x1500, JPEG q82 mozjpeg, sRGB)

The client's "grafiki 3, 4, 5, 6" (corrections, point 6), full-height 6:5 cuts (2026-11-26) around the centre of the
former 4:5 crops. At rest each card shows a 4:5 window of the file, which keeps the old framing; a card that opens on
hover shows more of the stage. Photo 4 could not be centred in its source, so its window sits at `75% 50%`
(`photo.position` in `site.ts`). Photo 5 is lit in violet, which the brand book rules out, so its file carries 0.3
of the saturation before the CSS grade (about a fifth in all).

| File | Source | Source size | Crop | Item |
|---|---|---|---|---|
| a11-foto-3-karta.jpg | first package, 3.JPG | 4421x2947 | 3536x2947+538+0 | 11 muzyków |
| a11-foto-4-karta.jpg | first package, 4.JPG | 4800x3200 | 3840x3200+960+0 | Własne aranżacje znanych kawałków |
| a11-foto-5-karta.jpg | first package, 5.JPG | 4479x2986 | 3583x2986+275+0, saturation 0.3 in the file | Kontakt z gośćmi podczas grania |
| a11-foto-6-karta.jpg | first package, 6.jpg | 3840x2160 | 2592x2160+624+0 | Własny realizator dźwięku |

The 4:5 files they replace (`a11-foto-3-pion.jpg` to `a11-foto-6-pion.jpg`, 1200x1500) were removed.

## Other photographs (unchanged in this round)

- `a11-foto-1.jpg` (first package, 1.JPG): the trumpet beside the problem section.
- `a11-foto-7.jpg` (first package, 7.JPG): the vocalists under the AURUM ELEVEN LED wall, now the poster of the
  "Na żywo" recording (corrections, point 7).
- `a11-foto-12-pion.jpg` (first package, 12.JPG): the portrait crop beside the contact form.
- `public/media/video/a11-showreel-v1.mp4` (1600x900) and `a11-showreel-pion-v1.mp4` (540x960 portrait cut) with their
  first frames as posters: the hero since 2026-11-24, encoded from the client's `showreel www_3.mp4` (first package and
  corrections package, identical files), no grade baked in; commands in `video/README.md`.
- `public/media/video/a11-stage-source-*`: the former living stage's loop and first frame, rendered by Remotion from the
  same showreel; off the page, kept with `StageCanvas`.

Removed in this round: the old 480x1600 pillars, `a11-foto-3.jpg` (the full-width horn photo in "Jak gramy") and
`a11-nagranie-v2.jpg` (the showreel still that was the recording's poster).

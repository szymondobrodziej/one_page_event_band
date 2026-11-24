# Aurum Eleven — wideo (Remotion)

Kompozycje renderowane ze showreelu klienta:

| Kompozycja | Plik na stronie | Co to jest |
|---|---|---|
| `StageSource` (1600×900) | `public/media/video/a11-stage-source-v2.mp4` | czysta, kolorowa pętla dla żywej sceny w hero (`src/components/StageCanvas.tsx`): cztery ujęcia w zwolnieniu 2,5× (cały zespół, sekcja dęta, dwie wokalistki), bez gradacji, bo monochrom i światło koloru rysuje shader WebGL; klatka 0 jako `a11-stage-source-v2.jpg` (plakat) |
| `StageSourceSmall` (960×540) | `public/media/video/a11-stage-source-sm-v2.mp4` | ta sama pętla dla niskich scen (poniżej ~600 px wysokości w pikselach urządzenia); scena na pełną wysokość bierze dużą wersję także na telefonie |
| `HeroStage`, `HeroMobile` | (zdjęte ze strony) | wersje awaryjne dawnej sceny w jedenastu pionach; od 2026-11-17 scena hero jest na pełną wysokość i bez pionów, a jej wersją awaryjną jest sama pętla `StageSource` (`src/components/StageBand.tsx`). Zostają do użytku w social media |
| `HeroFilm` (1920×1080) | (zdjęte ze strony) | zwykły film hero bez skryptu, używany krótko 2026-11-17: 9,4 s, ujęcia kolorowe 0,4× z przenikaniem, ciepły kolor wypalony; zostaje do użytku w social media (`npm run render:film`) |
| `LineUp` (1920×1080) | `public/media/video/a11-sklad-v2.mp4` | prezentacja składu z podpisami instrumentów; bez dźwięku |

## Showreel w hero (od 2026-11-24)

Na prośbę klienta (poprawki z 2026-11-23, punkt 1) hero to sam showreel w pętli, bez Remotion: `src/components/HeroReel.tsx`, pliki w `public/media/video/`. Źródło: `showreel www_3.mp4` z paczki (ten sam montaż co `showreel www_2.mp4`, wyższy bitrate). Kolor klienta zostaje w pliku; ciepły „held colour” daje CSS (`.doc-photo`).

```bash
SRC="showreel www_3.mp4"
ENC="-an -c:v libx264 -preset slow -profile:v high -pix_fmt yuv420p -movflags +faststart"
TAG="h264_metadata=video_full_range_flag=0:colour_primaries=1:transfer_characteristics=1:matrix_coefficients=1"
# poziomo, 1600x900 (~3,9 MB)
ffmpeg -i "$SRC" -vf "hqdn3d=2:1.5:4:3,scale=1600:900:flags=lanczos" $ENC -crf 30 -bsf:v "$TAG" a11-showreel-v1.mp4
# pionowo na telefon, 540x960 (~1,9 MB): środek każdego ujęcia, przesunięty dla planszy A11 (klatki 52–72) i basisty (372–383)
ffmpeg -i "$SRC" -vf "hqdn3d=2:1.5:4:3,crop=w=608:h=1080:x='if(between(n,52,72),426,if(between(n,372,383),380,656))':y=0,scale=540:960:flags=lanczos" $ENC -crf 29 -bsf:v "$TAG" a11-showreel-pion-v1.mp4
# plakaty = klatka 0 każdego pliku (macierz BT.709), potem JPEG q80 w sRGB (sharp)
ffmpeg -i a11-showreel-v1.mp4 -frames:v 1 -vf "scale=in_color_matrix=bt709:in_range=tv:out_range=full,format=rgb24" a11-showreel-v1.png
```

Przy tym łańcuchu filtrów flagi `-color_primaries`/`-color_trc` nie trafiły do pliku (sprawdź `ffprobe`); znaczniki BT.709 pewnie nadaje `h264_metadata` (bez nich #111 w przeglądarce robi się czarne). Po zmianie podbij wersję w nazwie (`-v2`).

Dawna żywa scena (`StageCanvas`, poniżej `StageSource`) jest zdjęta ze strony, ale zostaje w repozytorium.

## Render

Materiał źródłowy nie jest w repozytorium. Skopiuj `showreel www_3.mp4` z paczki klienta jako `video/public/showreel.mp4`, potem:

```bash
cd video
npm install
npm run master:smooth   # raz: płynny master 75 kl./s (interpolacja ruchu) dla zwolnionych ujęć
npm run render -- --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
npm run render:film      # film hero: master, dwa pliki dla strony i klatka 0 (PNG; JPG-i dla strony robi się z niej w sRGB)
```

Wyniki trafiają do `video/out/`. Po zmianie wideo podbij wersję w nazwie pliku (`-v2`), bo pliki w `/media/video/` mają cache `immutable`.

Mapa ujęć (punkty cięć zmierzone klatka po klatce) jest w `src/shots.ts`.

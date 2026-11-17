# Aurum Eleven — wideo (Remotion)

Kompozycje renderowane ze showreelu klienta:

| Kompozycja | Plik na stronie | Co to jest |
|---|---|---|
| `StageSource` (1600×900) | `public/media/video/a11-stage-source-v2.mp4` | czysta, kolorowa pętla dla żywej sceny w hero (`src/components/StageCanvas.tsx`): cztery ujęcia w zwolnieniu 2,5× (cały zespół, sekcja dęta, dwie wokalistki), bez gradacji, bo monochrom i światło koloru rysuje shader WebGL; klatka 0 jako `a11-stage-source-v2.jpg` (plakat) |
| `StageSourceSmall` (960×540) | `public/media/video/a11-stage-source-sm-v2.mp4` | ta sama pętla dla niskich scen (poniżej ~600 px wysokości w pikselach urządzenia); scena na pełną wysokość bierze dużą wersję także na telefonie |
| `HeroStage`, `HeroMobile` | (zdjęte ze strony) | wersje awaryjne dawnej sceny w jedenastu pionach; od 2026-11-17 scena hero jest na pełną wysokość i bez pionów, a jej wersją awaryjną jest sama pętla `StageSource` (`src/components/StageBand.tsx`). Zostają do użytku w social media |
| `HeroFilm` (1920×1080) | (zdjęte ze strony) | zwykły film hero bez skryptu, używany krótko 2026-11-17: 9,4 s, ujęcia kolorowe 0,4× z przenikaniem, ciepły kolor wypalony; zostaje do użytku w social media (`npm run render:film`) |
| `LineUp` (1920×1080) | `public/media/video/a11-sklad-v2.mp4` | prezentacja składu z podpisami instrumentów; bez dźwięku |

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

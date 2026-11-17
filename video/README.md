# Aurum Eleven — wideo (Remotion)

Kompozycje renderowane ze showreelu klienta:

| Kompozycja | Plik na stronie | Co to jest |
|---|---|---|
| `StageSource` (1600×900) | `public/media/video/a11-stage-source-v2.mp4` | czysta, kolorowa pętla dla żywej sceny w hero (`src/components/StageCanvas.tsx`): cztery ujęcia w zwolnieniu 2,5× (cały zespół, sekcja dęta, dwie wokalistki), bez pionów i bez gradacji, bo rysuje je shader WebGL |
| `StageSourceSmall` (960×540) | `public/media/video/a11-stage-source-sm-v2.mp4` | ta sama pętla na telefony |
| `HeroStage` (1920×960) | `public/media/video/a11-hero-stage-v3.mp4` (+ `.jpg`) | wersja awaryjna sceny (bez WebGL): ta sama pętla jako jeden obraz w ciepłym kolorze, z uniesionym środkowym pionem i złotą krawędzią wypalonymi w obrazie |
| `HeroMobile` (1080×654) | `public/media/video/a11-hero-mobile-v5.mp4` (+ `.jpg`) | wersja awaryjna na telefon |
| `LineUp` (1920×1080) | `public/media/video/a11-sklad-v2.mp4` | prezentacja składu z podpisami instrumentów; bez dźwięku |

Geometria pionów (odstęp 12/1920 szerokości na desktopie, 10/1080 na telefonie; schodek 21,26% wysokości) musi zgadzać się z shaderem w `src/components/StageCanvas.tsx` i z `src/components/StageBand.tsx`.

## Render

Materiał źródłowy nie jest w repozytorium. Skopiuj `showreel www_3.mp4` z paczki klienta jako `video/public/showreel.mp4`, potem:

```bash
cd video
npm install
npm run master:smooth   # raz: płynny master 75 kl./s (interpolacja ruchu) dla zwolnionych ujęć
npm run render -- --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

Wyniki trafiają do `video/out/`. Po zmianie wideo podbij wersję w nazwie pliku (`-v2`), bo pliki w `/media/video/` mają cache `immutable`.

Mapa ujęć (punkty cięć zmierzone klatka po klatce) jest w `src/shots.ts`.

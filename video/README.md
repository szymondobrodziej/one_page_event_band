# Aurum Eleven — wideo (Remotion)

Trzy kompozycje renderowane ze showreelu klienta:

| Kompozycja | Plik na stronie | Co to jest |
|---|---|---|
| `HeroDesktop` (1920×712) | `public/media/video/a11-hero-desktop-v1.mp4` | pętla hero: showreel widoczny przez 11 pionów, 10 w monochromie, środkowy w kolorze ze złotą krawędzią |
| `HeroMobile` (1080×654) | `public/media/video/a11-hero-mobile-v1.mp4` | ta sama pętla w proporcjach na telefon |
| `LineUp` (1920×1080) | `public/media/video/a11-sklad-v1.mp4` | ok. 17 s, prezentacja składu z podpisami instrumentów i licznikiem 11 pionów; bez dźwięku |

Geometria pionów (odstęp 12/1920 szerokości na desktopie, 10/1080 na telefonie; schodek 21,26% wysokości) musi zgadzać się z `src/components/StageBand.tsx`.

## Render

Materiał źródłowy nie jest w repozytorium. Skopiuj `showreel www_3.mp4` z paczki klienta jako `video/public/showreel.mp4`, potem:

```bash
cd video
npm install
npm run render -- --browser-executable="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
```

Wyniki trafiają do `video/out/`. Po zmianie wideo podbij wersję w nazwie pliku (`-v2`), bo pliki w `/media/video/` mają cache `immutable`.

Mapa ujęć (punkty cięć zmierzone klatka po klatce) jest w `src/shots.ts`.

# Aurum Eleven — wideo (Remotion)

Kompozycje renderowane ze showreelu klienta:

| Kompozycja | Plik na stronie | Co to jest |
|---|---|---|
| `StageSource`, `StageSourceSmall`, `HeroStage`, `HeroMobile` | (zdjęte ze strony) | pętle i wersje awaryjne dawnej sceny WebGL w jedenastu pionach; od 2026-11-17 hero to zdjęcie całego składu otwierane przewijaniem (`src/components/sections/Hero.tsx`), więc te pliki nie są już publikowane. Kompozycje zostają do użytku w social media |
| `LineUp` (1920×1080) | `public/media/video/a11-sklad-v2.mp4` | prezentacja składu z podpisami instrumentów; bez dźwięku |

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

# Aurum Eleven — wideo (Remotion)

Kompozycje renderowane ze showreelu klienta:

| Kompozycja | Plik na stronie | Co to jest |
|---|---|---|
| `HeroFilm` (1920×1080) | `public/media/video/a11-hero-film-v1.mp4` i `a11-hero-film-sm-v1.mp4` (960×540) + klatki 0 jako `.jpg` | film hero: 9,4 s ciszy, ujęcia kolorowe w zwolnieniu 0,4× z przenikaniem, bez szwu w pętli, ciepły kolor wypalony w pliku; strona gra go zwykłym `<video autoplay muted loop playsinline>` bez skryptu |
| `StageSource`, `StageSourceSmall`, `HeroStage`, `HeroMobile` | (zdjęte ze strony) | pętle i wersje awaryjne dawnej sceny WebGL w jedenastu pionach; zostają do użytku w social media |
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

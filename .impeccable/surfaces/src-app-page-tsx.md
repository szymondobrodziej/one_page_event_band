---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Landing page Aurum Eleven

Scope: the single public page (`src/app/page.tsx`) and its form endpoint. Visitor mode: Persuade.

Audience and job: event managers, HR and marketing teams and event agencies booking music for a gala, ball or large production; they need a safe choice and a fast quote. Action: send the availability enquiry (name, e-mail, optional phone, message). Proof on hand: 12 documentary photos, 20 s silent showreel, credits listed in PRODUCT.md. Copy is the client's STRUKTURA PDF, verbatim.

Constraints: CTA in hero, after "Co dostajesz", after the live film, after "Kto stoi na scenie", and above the form; pinned enquiry button on phones. Form sends through Resend when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` exist; otherwise it says plainly that sending is not enabled yet and shows the alternative contact. The live section embeds the client's full recording with sound (youtube-nocookie, loaded only on click, under a graded still of the whole band). Each documentary picture is used once: the whole band belongs to the hero film, "Jak gramy" carries the horn section, the recording's poster shows three vocalists. The hero runs no script (user, 2026-11-17). Deploy to a separate Vercel dev project.

Unresolved: business e-mail, phone, company data, privacy policy, client confirmation of the stage-plan schematic.

## Direction contract

THESIS: The band, playing: the headline, then all eleven on stage in a silent film that simply plays. Eleven musicians, one signature sound. It refuses the category default: a party hero with the headline over footage under a dark wash, gold-on-black "premium" chrome, logo walls and stat counters. (Autoplaying footage was on this list; the user asked for a plain video hero on 2026-11-17, so the film plays, silent and slow, with its words never on top of it.)

OWN-WORLD: Matte black #111111 and ivory #F5F2EC own alternating sections; satin gold #B08D57 appears only at the culmination (logo beam, the lit pillar of the line-up, final process step, button hover). Graphite #2B2B2B rules. Inter Tight Light display set large and tight, Manrope for text, square edges, ivory buttons on black and black on ivory, no arrows, no tracked capitals outside the logotype. Documentary photography in the warm held colour (the user found the near-monochrome grade gloomy, 2026-11-17).

STORY: The organiser recognises the empty-dancefloor risk, sees the whole band and how it reads the guests, learns exactly what they get and how the process runs, sees who stands on stage, and asks about a date.

FIRST VIEWPORT: Black ground under the 72px header. Desktop: the sentence-case overline "Zespół na event firmowy." and the H1 in light display (up to 72px, three lines) in the left seven columns; the lead, the ivory primary button "Zapytaj o dostępność terminu" with its microcopy, and the play link in the right five, bottom-aligned. Below, edge to edge, the stage film at 16:9 opening on all eleven in front of the A11 screen; at 1440x900 its top ~43% (the screen and the band's heads) shows above the fold. Phones: overline and headline, then the film at 16:9, then the lead and buttons.

FORM: Code-led; a plain video hero. seed: none (pinned) — the user's words: "zamieniamy na normalny filmik bez javascript, żadnego" (2026-11-17). It replaced "Jeden z jedenastu" (a scroll-pinned photograph opening from one vocalist to the whole band), which before that replaced the "Overdrive" WebGL stage of eleven pillars. Signature: the stage film (video/src/HeroFilm.tsx), 9.4 s, colour shots at 0.4x with dissolves and a seamless loop, held grade baked in; `<video autoplay muted loop playsinline>` over a `<picture>` of its first frame, no script anywhere in the hero. Reduced motion: no film source matches, the still stands. Motion that answers the visitor elsewhere: the gold edge lighting one pillar of the line-up, FAQ expand, form confirmation.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

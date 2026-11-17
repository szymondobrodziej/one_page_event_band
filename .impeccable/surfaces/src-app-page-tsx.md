---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Landing page Aurum Eleven

Scope: the single public page (`src/app/page.tsx`) and its form endpoint. Visitor mode: Persuade.

Audience and job: event managers, HR and marketing teams and event agencies booking music for a gala, ball or large production; they need a safe choice and a fast quote. Action: send the availability enquiry (name, e-mail, optional phone, message). Proof on hand: 12 documentary photos, 20 s silent showreel, credits listed in PRODUCT.md. Copy is the client's STRUKTURA PDF, verbatim.

Constraints: CTA in hero, after "Co dostajesz", after the live film, after "Kto stoi na scenie", and above the form; pinned enquiry button on phones. Form sends through Resend when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` exist; otherwise it says plainly that sending is not enabled yet and shows the alternative contact. Remotion renders the hero loop. The live section embeds the client's full recording with sound (youtube-nocookie, loaded only on click, under a graded still of the whole band); the user chose it over the silent Remotion line-up film, which stays in video/ for social use. Each documentary picture is used once: the whole band belongs to the hero stage, "Jak gramy" carries the horn section, the recording's poster shows three vocalists. Deploy to a separate Vercel dev project.

Unresolved: business e-mail, phone, company data, privacy policy, client confirmation of the stage-plan schematic.

## Direction contract

THESIS: The lit stage: the showreel fills the first screen in monochrome, and colour lights it wherever the visitor points. Eleven musicians, one signature sound. It refuses the category default: a full-bleed party hero under a dark wash with the headline on the footage, gold-on-black "premium" chrome, logo walls and stat counters.

OWN-WORLD: Matte black #111111 and ivory #F5F2EC own alternating sections; satin gold #B08D57 appears only at the culmination (logo beam, the lit pillar of the line-up, final process step, button hover). Graphite #2B2B2B rules. Inter Tight Light display set large and tight, Manrope for text, square edges, ivory buttons on black and black on ivory, no arrows, no tracked capitals outside the logotype. Documentary photography in the warm held colour (the user found the near-monochrome grade gloomy, 2026-11-17).

STORY: The organiser recognises the empty-dancefloor risk, sees the whole stage and how the band reads the guests, learns exactly what they get and how the process runs, sees who stands on stage, and asks about a date.

FIRST VIEWPORT: Black header, then the living stage filling the rest of the screen edge to edge (100svh − 72px, at least 440px): the showreel drawn live in monochrome with a soft pool of the warm held colour following the pointer (drifting on its own on touch), and a square pause control at its bottom right. No pillars, gaps or steps: the user asked for "full wysokość i bez pasków" (2026-11-17). Below the fold the sentence-case overline "Zespół na event firmowy." and the H1 in light display, left-aligned; then the lead beside the ivory primary button "Zapytaj o dostępność terminu" with its microcopy and the play link; then a ruled caption row with the facts and the credits. The header's own enquiry button keeps a call to action in the first viewport; the pinned phone button waits until most of the stage has scrolled away (user: "żeby nie było od razu zapytaj o dostępność terminu", 2026-11-17).

FORM: Code-led; eleven pillars, the canvas direction carried into code. seed: none (pinned). No roll ran: the world is the eleven-pillar Claude Design canvas the user approved ("wydaje mi się, że idziemy w dobrym kierunku"), and the hero is the specific direction the user picked by name from a described set ("Overdrive tutaj": the showreel drawn live by a shader through eleven pillars, monochrome with colour following the cursor and drifting on its own on phones, the gold centre kept, the pre-rendered video as the fallback). Signature interaction: the living stage. On load the pillars rise from both edges toward the centre, the gold pillar last; the footage plays inside them in a calm slow-motion cut; the light drifts slowly across the pillars while nobody steers it. That stage is the only unprompted motion on the page, it has a visible pause control (remembered per visitor) and is a still frame under reduced motion. Motion that answers the visitor: colour following the pointer over the stage, colour lighting one pillar of the line-up in "Kto stoi na scenie" (the user picked "Piony, kolor na dotyk" from three described directions), FAQ expand, form confirmation. On 2026-11-17 the user tried four replacements in turn (pillars closing into one warm picture, "Jeden z jedenastu" opened by scroll, a plain video with no script, then the closed pillars again) and came back to this lit stage: "do tego co się podświetlało na webgl". Photography elsewhere stays in the warm held colour. Then, the same day: "full wysokość i bez pasków" — the stage now fills the screen with no pillars, and the light that lit one pillar became a round pool of colour that follows the pointer in both axes.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

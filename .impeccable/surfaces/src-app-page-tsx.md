---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Landing page Aurum Eleven

Scope: the single public page (`src/app/page.tsx`) and its form endpoint. Visitor mode: Persuade.

Audience and job: event managers, HR and marketing teams and event agencies booking music for a gala, ball or large production; they need a safe choice and a fast quote. Action: send the availability enquiry (name, e-mail, optional phone, message). Proof on hand: 12 documentary photos, 20 s silent showreel, credits listed in PRODUCT.md. Copy is the client's STRUKTURA PDF, verbatim.

Constraints: CTA in hero, after "Co dostajesz", after the live film, after "Kto stoi na scenie", and above the form; pinned enquiry button on phones. Form sends through Resend when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` exist; otherwise it says plainly that sending is not enabled yet and shows the alternative contact. The live section embeds the client's full recording with sound (youtube-nocookie, loaded only on click, under a graded still of the whole band). Each documentary photograph is used once: the whole-band picture belongs to the hero, "Jak gramy" carries the horn section. Deploy to a separate Vercel dev project.

Unresolved: business e-mail, phone, company data, privacy policy, client confirmation of the stage-plan schematic.

## Direction contract

THESIS: One of eleven: the page opens on one musician and the visitor's own scroll pulls back to all eleven on stage. Eleven musicians, one signature sound. It refuses the category default: a full-bleed party hero under a dark wash, autoplaying footage, gold-on-black "premium" chrome, logo walls and stat counters.

OWN-WORLD: Matte black #111111 and ivory #F5F2EC own alternating sections; satin gold #B08D57 appears only at the culmination (logo beam, the lit pillar of the line-up, final process step, button hover). Graphite #2B2B2B rules. Inter Tight Light display set large and tight, Manrope for text, square edges, ivory buttons on black and black on ivory, no arrows, no tracked capitals outside the logotype. Documentary photography in the warm held colour (the user found the near-monochrome grade gloomy, 2026-11-17).

STORY: The organiser recognises the empty-dancefloor risk, sees the whole band and how it reads the guests, learns exactly what they get and how the process runs, sees who stands on stage, and asks about a date.

FIRST VIEWPORT: Black ground under the 72px header. Left seven columns, vertically centred: the sentence-case overline "Zespół na event firmowy.", the H1 in light display (up to 72px, about three lines), the lead, then the ivory primary button "Zapytaj o dostępność terminu" with its microcopy beside the play link. Right five columns: a tall frame holding one vocalist from the client's whole-band photograph, from just under the header to just above the bottom edge. Scrolling opens that frame to the whole screen and pulls back to all eleven in front of the A11 screen. Phones: overline and headline on top, the frame fills the rest, the pinned enquiry button below.

FORM: Code-led; "Jeden z jedenastu", the second of three hero concepts the user was shown as working previews on 2026-11-17 ("Pełna scena", "Jeden z jedenastu", "Odbitka"). seed: none (pinned) — the user picked it by name: "wariant jeden jedenastu tylko wtedy to drugie zdjęcie niżej trzeba zmienić, żeby nie powielac". It replaced the "Overdrive" WebGL stage of eleven pillars, which the user found odd to watch through the stripes and gloomy in colour. Signature interaction: the opening frame, driven only by scroll (pinned track; clip and scale move together so the photo always covers the frame; the words fade as it opens; on phones the camera then pans across the stage). Nothing on the page moves on its own. Reduced motion: a still beside the headline, not pinned. Motion that answers the visitor: the gold edge lighting one pillar of the line-up, FAQ expand, form confirmation.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Landing page Aurum Eleven

Scope: the single public page (`src/app/page.tsx`) and its form endpoint. Visitor mode: Persuade.

Audience and job: event managers, HR and marketing teams and event agencies booking music for a gala, ball or large production; they need a safe choice and a fast quote. Action: send the availability enquiry (name, e-mail, optional phone, message). Proof on hand: 12 documentary photos, 20 s silent showreel, credits listed in PRODUCT.md. Copy is the client's STRUKTURA PDF, verbatim.

Constraints: CTA in hero, after "Co dostajesz", after the live film, after "Kto stoi na scenie", and above the form; pinned enquiry button on phones. Form sends through Resend when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` exist; otherwise it says plainly that sending is not enabled yet and shows the alternative contact. Remotion renders the hero loop and a ~30 s line-up film for the live section (silent, labelled as such). Deploy to a separate Vercel dev project.

Unresolved: business e-mail, phone, company data, privacy policy, full recording link on YouTube, client confirmation of the stage-plan schematic.

## Direction contract

THESIS: The stage seen through eleven pillars: the showreel revealed through eleven vertical pillars, ten monochrome, the centre one in colour with a gold edge, rising 27% above the rest. Eleven musicians, one signature sound. It refuses the category default: a full-bleed party hero under a dark wash, gold-on-black "premium" chrome, logo walls and stat counters.

OWN-WORLD: Matte black #111111 and ivory #F5F2EC own alternating sections; satin gold #B08D57 appears only at the culmination (logo beam, centre pillar, final process step, button hover). Graphite #2B2B2B rules. Inter Tight Light display set large and tight, Manrope for text, square edges, ivory buttons on black and black on ivory, no arrows, no tracked capitals outside the logotype. Documentary photography, desaturated.

STORY: The organiser recognises the empty-dancefloor risk, sees the whole stage and how the band reads the guests, learns exactly what they get and how the process runs, sees who stands on stage, and asks about a date.

FIRST VIEWPORT: Black ground. Sentence-case kicker "Zespół na event firmowy", H1 in light display 46–108 px, left-aligned across about two thirds of the width. Lead paragraph left, ivory primary button "Zapytaj o dostępność terminu" with its 24 h microcopy and the "Zobacz pełne nagranie" play link to its right. Below, full-bleed, the eleven-pillar video band; the centre pillar rises above the line. A caption line under the band carries the four facts and the credits.

FORM: Code-led; eleven pillars, the canvas direction carried into code. seed: none. No roll ran: the direction is the eleven-pillar Claude Design canvas the user saw and approved ("wydaje mi się, że idziemy w dobrym kierunku"); that approval is of the canvas, not words that pin the world. Signature interaction: on load the pillars rise from both edges toward the centre, the gold pillar last; that is the only unprompted motion on the page. Other motion answers actions: FAQ expand, form confirmation.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

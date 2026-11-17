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

FIRST VIEWPORT: Black ground. The living stage opens the page, full bleed, below a little air under the header: the showreel drawn live through eleven pillars, ten monochrome, the centre one in colour with its gold edge and 27% taller; colour follows the pointer (drifts on its own on touch). Below it the sentence-case overline "Zespół na event firmowy." and the H1 in light display, left-aligned; then the lead beside the ivory primary button "Zapytaj o dostępność terminu" with its microcopy and the play link; then a ruled caption row with the facts and the credits. Approved by the user as the "Overdrive" direction (Scena, która ożywa), replacing the headline-first layout over a pre-rendered band.

FORM: Code-led; eleven pillars, the canvas direction carried into code. seed: none (pinned). No roll ran: the world is the eleven-pillar Claude Design canvas the user approved ("wydaje mi się, że idziemy w dobrym kierunku"), and the hero is the specific direction the user picked by name from a described set ("Overdrive tutaj": the showreel drawn live by a shader through eleven pillars, monochrome with colour following the cursor and drifting on its own on phones, the gold centre kept, the pre-rendered video as the fallback). Signature interaction: the living stage. On load the pillars rise from both edges toward the centre, the gold pillar last; the footage plays inside them in a calm slow-motion cut; the light drifts slowly across the pillars while nobody steers it. That stage is the only unprompted motion on the page, it has a visible pause control (remembered per visitor) and is a still frame under reduced motion. Motion that answers the visitor: colour following the pointer over the stage, FAQ expand, form confirmation.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

---
name: Aurum Eleven
description: The stage seen through eleven pillars, lit where the visitor points; matte black and ivory own the page, satin gold arrives only at the culmination.
colors:
  ink: "#111111"
  ivory: "#f5f2ec"
  gold: "#b08d57"
  gold-light: "#c2a46a"
  graphite: "#2b2b2b"
  ivory-dim: "#cfcac0"
  ash: "#a8a39a"
  stone: "#8e8a82"
  smoke: "#55514a"
  pebble: "#6b665e"
  rule-ink: "#2b2b2b"
  rule-strong: "#3a3a3a"
  rule-ivory: "#d9d2c5"
  error-sand: "#e0c49a"
typography:
  display:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.875rem, 6.4vw, 6rem)"
    fontWeight: 300
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.8vw, 4.625rem)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline-sm:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 3.8vw, 3.625rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  caption:
    fontFamily: "Manrope, Helvetica Neue, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
  label:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    letterSpacing: "-0.005em"
  numeral:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.04em"
  logotype:
    fontFamily: "Inter Tight, Helvetica Neue, Arial, sans-serif"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.32em"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  container: "1280px"
  section: "clamp(96px, 11vw, 168px)"
  header: "72px"
components:
  button-ivory:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  button-ivory-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  button-ink-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ivory}"
  field:
    textColor: "{colors.ivory}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0"
    height: "52px"
  play-ring:
    textColor: "{colors.ivory}"
    rounded: "{rounded.full}"
    size: "40px"
  play-disc:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: "clamp(72px, 8vw, 104px)"
  play-disc-hover:
    backgroundColor: "{colors.gold}"
  nav-link:
    textColor: "{colors.ivory-dim}"
    typography: "{typography.body-sm}"
  nav-link-hover:
    textColor: "{colors.gold-light}"
---

# Design System: Aurum Eleven

## Overview

**Creative North Star: "The Stage Through Eleven Pillars"**

The whole system is built from one image: a stage seen through eleven vertical pillars, ten of them monochrome and the centre one in colour, standing 27% taller and capped with a gold edge; colour lights the pillar under the visitor's pointer. Eleven musicians, one signature sound. Everything else on the page is quiet so that this image can carry the brand: matte black and ivory take turns owning full-width sections, type is large, light and tightly set, edges are square, and gold is withheld everywhere except at the point of culmination.

The register is a premium design house rather than a party band. Density is low and pacing is generous (sections breathe at up to 168px of vertical padding), copy sits in long left-aligned measures, and there is exactly one unprompted motion on the page: the living stage in the hero (the pillars rising on load, the footage playing inside them, and colour drifting slowly across the pillars while nobody steers it). All other motion answers the visitor (colour following the pointer over the stage, the gold edge over the line-up, accordion expand, form confirmation, hover colour shifts).

Photography is documentary and keeps its stage light, graded in the held colour wherever it appears (68% saturation, a slight shift toward amber), so magenta and blue washes sit beside the gold instead of shouting. An earlier near-monochrome grade read as gloomy to the user and was dropped. The category default this refuses: full-bleed party heroes under dark washes, gold-on-black "premium" chrome, logo walls and stat counters.

**Key Characteristics:**
- Alternating ink and ivory sections, flat colour fields, no gradients anywhere.
- Inter Tight Light at display scale with negative tracking; Manrope for reading text.
- Square buttons and fields; circles exist only as play affordances and process markers.
- Gold is a reward, not a chrome colour: it appears at the culmination of a sequence or in response to an action.
- Documentary photography in the warm held colour, never in raw club colour.

## Colors

A two-field palette of matte black and warm ivory, ruled in graphite, with satin gold held in reserve.

### Primary
- **Satin Gold** (gold): the culmination colour. The logo's beam, the centre pillar's top edge in the hero stage, the final step's numeral and marker in the process timeline, and the hover state of ivory buttons and the large play disc. Never a background field, never body text.
- **Pale Gold** (gold-light): the lighter step of gold, used only in response to action: quiet-link hover, play-ring hover border, the left rule on a form error alert.

### Neutral
- **Matte Ink** (ink): page ground, dark sections, header, footer, sticky mobile bar, and button text on ivory.
- **Warm Ivory** (ivory): light sections, primary text on ink, the primary button on ink.
- **Graphite** (graphite): the hover field of ink buttons; shares its value with the ink-section rule colour.
- **Dimmed Ivory** (ivory-dim): long lead paragraphs and nav links on ink, one step below full ivory.
- **Ash** (ash): secondary text on ink (field labels, credits, supporting paragraphs); 7.5:1 on ink.
- **Stone** (stone): tertiary text on ink (microcopy, step owners, legal lines, field placeholders); 5.5:1 on ink.
- **Smoke** (smoke): secondary text on ivory (FAQ answers, benefit descriptions); 7:1 on ivory.
- **Pebble** (pebble): captions on ivory; 5.1:1.
- **Ink Rule** (rule-ink): hairlines between ink regions (footer, sent confirmation, diagram frame).
- **Strong Rule** (rule-strong): the brighter hairline used where a rule must read as structure on ink: input underlines and the process timeline.
- **Ivory Rule** (rule-ivory): hairlines on ivory (FAQ rows, ruled lists).
- **Error Sand** (error-sand): validation messages on ink. The brand forbids red, so errors speak in a warm sand that stays legible (well above AA on ink) and is separated from gold by context and by the alert's left rule.

### Named Rules
**The Culmination Rule.** Gold marks the end of a sequence or the answer to an action: the gold beam in the mark, the centre pillar, the last process step, a hover. If gold appears at rest anywhere that is not a culmination, it is wrong.

**The Two Fields Rule.** Sections are either ink or ivory, edge to edge. No third surface colour, no tints, no gradients, and no red, blue or violet anywhere.

**The Held Colour Rule.** Every photograph carries the warm held grade (sepia 0.08, saturation 0.68, contrast 1.04), and so does every lit pillar of the hero stage (in the shader: 68% of the original saturation, a slight shift toward amber, 1.04 contrast, floor #1c1c1c). On the stage, ten pillars rest in monochrome; the centre pillar always carries colour, and the pillar under the visitor's pointer (or under the slow drift) lights up. Stage light stays real but never shouts in raw magenta, red or blue, and it sits beside the gold. Gold remains the one held accent: the centre pillar's edge, the lit pillar of the line-up, the last process step, hover. The YouTube recording plays in its own colour after the visitor presses play.

## Typography

**Display Font:** Inter Tight (with Helvetica Neue, Arial)
**Body Font:** Manrope (with Helvetica Neue, Arial)

**Character:** A light, tightly tracked grotesk at very large sizes against a calm, open humanist sans for reading. The display voice is confident by being thin and large rather than bold.

### Hierarchy
- **Display** (300, clamp 46–96px, 0.96): the hero headline only, left-aligned across about two thirds of the width.
- **Headline** (300, clamp 40–74px, 1.0): section headlines, usually capped near 12em measure.
- **Headline Small** (300, clamp 36–58px, 1.02): headlines in split layouts (contact, how-we-play) where the column is narrower.
- **Statement** (Inter Tight 300, roughly 22–42px, tight negative tracking): pull lines, ruled list items and the footer manifesto; display face at an intermediate size, always light.
- **Title** (500, 20–22px, -0.01em): item and step titles, footer column heads.
- **Body** (Manrope 400, 18px, 1.6): lead and section paragraphs, measures of 30–34em.
- **Body Small** (Manrope 400, 15–17px, 1.6–1.7): list descriptions, FAQ answers, footer links.
- **Caption** (Manrope 400, 13–14px): microcopy under buttons, photo captions, field labels, notes.
- **Label** (Inter Tight 500, 16px, -0.005em): buttons and the play link.
- **Numeral** (Inter Tight 300, 64px, 1.0, tabular): the process step numbers.
- **Logotype** (Inter Tight 500, 11–12px, 0.32em tracking, uppercase): the AURUM / ELEVEN wordmark only.

### Named Rules
**The Light Voice Rule.** Display and headline sizes are set at weight 300 with negative tracking (-0.035em to -0.04em). Weight 500 is reserved for titles and buttons; nothing on the page is bold.

**The Single Capitals Rule.** Tracked uppercase exists only inside the logotype. Headings, labels and buttons are sentence case.

**The Bound Letter Rule.** Polish one-letter words (a, i, o, u, w, z) and bare numbers never end a line: every content string passes through `typeset()` (`src/lib/typeset.ts`), which binds them to the next word with a non-breaking space. Text written directly in JSX binds them by hand with `\u00A0`.

## Layout

Content sits in a single shell (max 1280px, side gutter clamp 20–64px). Sections use generous vertical padding (clamp 96–168px) and alternate ink and ivory at full bleed; the header is a fixed-height 72px ink bar that stays pinned, and anchor scrolling is offset by the same 72px.

Composition is built from flex-wrap splits rather than fixed breakpoints: a photo panel and a text panel share a row with flex bases around 420–560px and stack naturally on narrow screens. Split sections often let the photograph run edge to edge on one side while the text keeps its own padding. Text measures are held deliberately (lead 34em, answers 40em, headlines 10.5–12.5em).

The hero stage opens the page, full bleed, after 16–48px of air below the header (so the centre pillar's gold edge never reads as a nav underline). Its height leaves the overline and the whole headline above the fold: clamp(300px, min(34vw, 100svh − 430px), 760px) from 700px up, and clamp(280px, min(118vw, 100svh − 380px), 560px) on phones, where the pinned enquiry button also has to clear the headline. The shader computes the geometry per pixel: eleven columns separated by ten gaps of 12/1920 of the width on desktop and 10/1080 under 700px; the ten outer pillars start 21.26% of the height below the top, so the centre pillar stands 27% taller. The pre-rendered fallback (Remotion `HeroStage`, `HeroMobile`) uses the same ratios; any change to one side must be mirrored in the other. Below the stage: the sentence-case overline and the display headline, then the lead beside the primary button and play link, then a ruled caption row with the facts and the credits.

On phones the enquiry button is pinned to the bottom edge, and steps aside whenever another enquiry button is on screen (the hero's or one closing a section) and while the form is in view, so two identical buttons never show at once. The contact section's photo panel appears only from 1040px up; on narrower screens every enquiry button lands straight on the form's headline and first field.

## Elevation & Depth

The system is flat. There are no drop shadows; depth comes from the alternation of ink and ivory fields, from hairline rules, and from photography. The one box-shadow in the build is a 6px ink knockout ring around the gold process marker, which separates the dot from the timeline rule behind it rather than lifting anything.

### Named Rules
**The Flat Stage Rule.** Surfaces never float. If something needs separation, use a field change or a 1px rule, not a shadow.

## Shapes

Edges are square: buttons, inputs, image frames, the diagram frame and the sticky bar all have zero radius. Inputs are a single bottom hairline with no box. The only circles are functional markers: play affordances (a 40px outlined ring for inline links, a large ivory disc over video) and the small dots of the process timeline and stage diagram. The vertical pillar is the system's signature silhouette; it recurs in the mark, the hero stage and the line-up.

## Components

### Buttons
Calm, square, and sized for touch.
- **Shape:** square corners (0px), minimum height 56px (44px in the header), 30px horizontal padding.
- **Ivory (primary on ink):** ivory field, ink text, Inter Tight 500 at 16px. Hover moves the field to satin gold over 220ms on the arrival ease.
- **Ink (primary on ivory):** ink field, ivory text. Hover moves to graphite.
- **Disabled / sending:** 55% opacity with a progress cursor.
- **Focus:** a 2px gold outline offset by 3px, shared with every focusable element; inside ivory sections the outline is ink, because gold measures under 3:1 on ivory.
- There is one call to action wording across the page; buttons carry no arrows or icons.

### Play affordances
- **Inline play link:** a 40px circular ring in ivory at 45% opacity holding a small play triangle, followed by a 16px Inter Tight 500 label. Hover shifts the ring to pale gold and the label colour to pale gold.
- **Video play disc:** a large ivory disc (72–104px) centred over a lightly dimmed poster; hover turns it gold.
- **Recording player ("Na żywo"):** a 16:9 still of three vocalists singing (a frame of the client's showreel at 15.6 s, graded like every photograph; the whole band already opens the hero stage) under the play disc. Nothing from YouTube loads until the visitor presses it; then a youtube-nocookie player with sound replaces the still and takes focus. A stone caption says so. The hero's play link scrolls to this player instead of leaving the page.

### Inputs / Fields
- **Style:** transparent ground, no box, a 1px strong-rule underline, Manrope 18px ivory text, 52px minimum height. Labels sit above in ash at 14px.
- **Focus:** the underline turns gold; no outline or glow.
- **Error:** the underline warms to sand and the message appears below in error sand at 14px; a submission error appears as a sand paragraph with a pale-gold left rule.
- **Limits and success:** every field carries the same maximum length the server enforces, so nothing is clipped unseen. On success the confirmation heading takes focus; "send another" returns focus to the first field. Contact data the client has not supplied is left out of sentences and the footer, never shown as a bracketed placeholder.

### Navigation
- **Desktop:** Manrope 15px links in dimmed ivory on the ink header, 32px apart, quiet gold-light hover; a compact ivory button sits at the right.
- **Mobile:** a square outlined toggle (44px) opens a full-height ink sheet listing the sections in 40px Inter Tight Light, with the full-width primary button pinned at the bottom. Escape closes it and returns focus.

### Accordion (FAQ)
On ivory, the headline sits sticky in a narrow column while questions run in ruled rows (ivory rule). Questions are Inter Tight at 19–24px; a thin plus whose vertical stroke collapses to a minus marks state. Answers open by animating grid rows over 300ms on the arrival ease, with motion removed under reduced motion.

### Process timeline
Five steps on a single strong-rule line. Each step carries a 64px light numeral, a 9px dot on the line, a title, its owner in stone and a short body in ash. The last step's numeral and dot are gold; every other is ivory.

### Ruled lists
"Co dostajesz" and "Dla kogo" set their items as ruled rows rather than cards: an ivory-rule hairline above each item, the item in Inter Tight Light at 22–28px, a short body in smoke below. "Co dostajesz" splits its nine items into two titled groups, "Na scenie" and "Organizacja"; no icons.

### Line-up
"Kto stoi na scenie" shows the eleven musicians as eleven pillars (`src/components/LineUp.tsx`): each a 3:10 crop of one musician cut from the client's originals (`public/media/lineup`, 480x1600), captioned with the instrument in 13px pebble. Left to right: the rhythm section at the edges, the horns around the three vocals in the middle. Every pillar carries the held colour; the pillar under the pointer takes the hero centre pillar's 3px gold top edge (scaling in over 300ms) and its caption turns ink. From 1024px the pillars stand in one row of eleven; below that they become a sideways strip with snap, about a third of the screen wide each, where the pillar nearest the middle is lit as the visitor scrolls. Nothing moves on its own, and all eleven images load together once the strip nears the viewport.

### Living stage (signature)
The hero's eleven-pillar stage, drawn live by a WebGL shader (`src/components/StageCanvas.tsx`) from a clean colour showreel loop (Remotion `StageSource`, 1600x900, phones 960x540): four shots in 2.5x slow motion from a 75 fps motion-interpolated master, the whole band first and held longest, then the horns and the two lead vocalists, each picked by measuring the centre crown so it always carries lit content and never reads as an empty slab. Ten pillars are graded monochrome (luminance, 1.18 brightness, 1.12 contrast, floor #1c1c1c); colour pillars are held warm (68% saturation, a slight shift toward amber) so they sit beside the gold edge, and the centre pillar always carries colour and the gold top edge. Colour follows the pointer: the pillar under it lights up in full colour and its neighbours fall off on a Gaussian (sigma 0.62 of a pillar), easing at a 140ms time constant. With no pointer on the stage, and always on touch screens, the light drifts slowly across the pillars on its own (a 15 s sine sweep). On load the pillars rise from both outer edges toward the centre (80ms steps, centre held to 560ms, 1100ms each, ease-out-expo) as soon as the first frame decodes, or after 1.2 s on a slow connection, with the footage then fading in over 700ms. The stage plays only while in view and in a visible tab, uploads a texture only on new video frames, and caps the pixel ratio at 1.75. A square outlined 44px pause control sits at the stage's lower right, on the shell's right edge; it stops the footage and the drift, holds colour in the centre pillar and is remembered per visitor. With reduced motion the stage is a still frame with the centre in colour and no control. Without WebGL, if the context is lost, or if the shader or video fails, the stage tears itself down and the pre-rendered Remotion band (`StageBand`, same cut and grade) plays in the same box, so nothing shifts. The stage is decorative (`aria-hidden`); the headline below carries the message.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed ink and ivory sections and keep every surface flat.
- **Do** set headlines in Inter Tight 300 with negative tracking and let them be large.
- **Do** grade every photograph with `.doc-photo`, the held colour (sepia 0.08, saturation 0.68, contrast 1.04), so photographs and the stage share one warm light.
- **Do** reserve gold for culminations and for responses to action (hover, focus, the last step).
- **Do** keep the stage geometry in the shader in lockstep with the Remotion fallback renders (gap ratio, step ratio).
- **Do** use each documentary picture once: the whole band belongs to the hero stage, so "Jak gramy" carries the horn section and the recording's poster shows three vocalists.
- **Do** use the 2px focus outline with 3px offset on every interactive element: gold on ink, ink on ivory.
- **Do** use circles only for play affordances and timeline or diagram markers.

### Don't:
- **Don't** use red, blue or violet, gradients, or decorative fonts.
- **Don't** put gold on a field, a heading or body copy at rest.
- **Don't** round buttons, inputs or image frames.
- **Don't** add drop shadows or floating cards.
- **Don't** use tracked uppercase outside the logotype, and don't add arrows to buttons.
- **Don't** add a second unprompted animation; the living stage is the only one.
- **Don't** introduce logo walls, stat counters, or dark washes over full-bleed party photos.

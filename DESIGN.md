---
name: Aurum Eleven
description: The stage seen through eleven pillars; matte black and ivory own the page, satin gold arrives only at the culmination.
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
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0 30px"
    height: "56px"
  button-ivory-hover:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ivory}"
    typography: "{typography.title}"
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

The whole system is built from one image: a stage seen through eleven vertical pillars, ten of them monochrome and the centre one in colour, standing 27% taller and capped with a gold edge. Eleven musicians, one signature sound. Everything else on the page is quiet so that this image can carry the brand: matte black and ivory take turns owning full-width sections, type is large, light and tightly set, edges are square, and colour is withheld everywhere except at the point of culmination.

The register is a premium design house rather than a party band. Density is low and pacing is generous (sections breathe at up to 168px of vertical padding), copy sits in long left-aligned measures, and there is exactly one unprompted motion on the page: the pillars lifting their curtains on load. All other motion answers the visitor (accordion expand, form confirmation, hover colour shifts).

Photography is documentary and graded near-monochrome (92% grayscale with a slight contrast lift) wherever it appears, so that the only full colour on screen belongs to the hero's centre pillar. The category default this refuses: full-bleed party heroes under dark washes, gold-on-black "premium" chrome, logo walls and stat counters.

**Key Characteristics:**
- Alternating ink and ivory sections, flat colour fields, no gradients anywhere.
- Inter Tight Light at display scale with negative tracking; Manrope for reading text.
- Square buttons and fields; circles exist only as play affordances and process markers.
- Gold is a reward, not a chrome colour: it appears at the culmination of a sequence or in response to an action.
- Near-monochrome documentary photography; colour is held for the centre pillar.

## Colors

A two-field palette of matte black and warm ivory, ruled in graphite, with satin gold held in reserve.

### Primary
- **Satin Gold** (gold): the culmination colour. The logo's beam, the centre pillar's top edge in the hero render, the final step's numeral and marker in the process timeline, and the hover state of ivory buttons and the large play disc. Never a background field, never body text.
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

**The Held Colour Rule.** Photography is graded near-monochrome so that the hero's centre pillar is the only full colour on the page. A colour photograph anywhere else spends the one colour moment the system has.

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
- **Logotype** (Inter Tight 500, 11–12px, 0.32em tracking, uppercase): the AURUM / ELEVEN wordmark only.

### Named Rules
**The Light Voice Rule.** Display and headline sizes are set at weight 300 with negative tracking (-0.035em to -0.04em). Weight 500 is reserved for titles and buttons; nothing on the page is bold.

**The Single Capitals Rule.** Tracked uppercase exists only inside the logotype. Headings, labels and buttons are sentence case.

## Layout

Content sits in a single shell (max 1280px, side gutter clamp 20–64px). Sections use generous vertical padding (clamp 96–168px) and alternate ink and ivory at full bleed; the header is a fixed-height 72px ink bar that stays pinned, and anchor scrolling is offset by the same 72px.

Composition is built from flex-wrap splits rather than fixed breakpoints: a photo panel and a text panel share a row with flex bases around 420–560px and stack naturally on narrow screens. Split sections often let the photograph run edge to edge on one side while the text keeps its own padding. Text measures are held deliberately (lead 34em, answers 40em, headlines 10.5–12.5em).

The hero stage band is full bleed and shares its geometry with the Remotion render: eleven columns separated by ten gaps of 12/1920 of the width on desktop (aspect 1920:712) and 10/1080 on phones under 700px (aspect 1080:654). The ten outer pillars start 21.26% of the height below the top, so the centre pillar stands 27% taller. Any change to one side must be mirrored in the other.

On phones the enquiry button is pinned to the bottom edge once the hero button has scrolled out of view, and hides again while the form is on screen.

## Elevation & Depth

The system is flat. There are no drop shadows; depth comes from the alternation of ink and ivory fields, from hairline rules, and from photography. The one box-shadow in the build is a 6px ink knockout ring around the gold process marker, which separates the dot from the timeline rule behind it rather than lifting anything.

### Named Rules
**The Flat Stage Rule.** Surfaces never float. If something needs separation, use a field change or a 1px rule, not a shadow.

## Shapes

Edges are square: buttons, inputs, image frames, the diagram frame and the sticky bar all have zero radius. Inputs are a single bottom hairline with no box. The only circles are functional markers: play affordances (a 40px outlined ring for inline links, a large ivory disc over video) and the small dots of the process timeline and stage diagram. The vertical pillar is the system's signature silhouette; it recurs in the mark, the eleven-pillar icon and the hero band.

## Components

### Buttons
Calm, square, and sized for touch.
- **Shape:** square corners (0px), minimum height 56px (44px in the header), 30px horizontal padding.
- **Ivory (primary on ink):** ivory field, ink text, Inter Tight 500 at 16px. Hover moves the field to satin gold over 220ms on the arrival ease.
- **Ink (primary on ivory):** ink field, ivory text. Hover moves to graphite.
- **Disabled / sending:** 55% opacity with a progress cursor.
- **Focus:** a 2px gold outline offset by 3px, shared with every focusable element.
- There is one call to action wording across the page; buttons carry no arrows or icons.

### Play affordances
- **Inline play link:** a 40px circular ring in ivory at 45% opacity holding a small play triangle, followed by a 16px Inter Tight 500 label. Hover shifts the ring to pale gold and the label colour to pale gold.
- **Video play disc:** a large ivory disc (72–104px) centred over a lightly dimmed poster; hover turns it gold.

### Inputs / Fields
- **Style:** transparent ground, no box, a 1px strong-rule underline, Manrope 18px ivory text, 52px minimum height. Labels sit above in ash at 14px.
- **Focus:** the underline turns gold; no outline or glow.
- **Error:** the underline warms to sand and the message appears below in error sand at 14px; a submission error appears as a sand paragraph with a pale-gold left rule.

### Navigation
- **Desktop:** Manrope 15px links in dimmed ivory on the ink header, 32px apart, quiet gold-light hover; a compact ivory button sits at the right.
- **Mobile:** a square outlined toggle (44px) opens a full-height ink sheet listing the sections in 40px Inter Tight Light, with the full-width primary button pinned at the bottom. Escape closes it and returns focus.

### Accordion (FAQ)
On ivory, the headline sits sticky in a narrow column while questions run in ruled rows (ivory rule). Questions are Inter Tight at 19–24px; a thin plus whose vertical stroke collapses to a minus marks state. Answers open by animating grid rows over 300ms on the arrival ease, with motion removed under reduced motion.

### Process timeline
Five steps on a single strong-rule line. Each step carries a 64px light numeral, a 9px dot on the line, a title, its owner in stone and a short body in ash. The last step's numeral and dot are gold; every other is ivory.

### Stage band (signature)
The hero's eleven-pillar video band. The pillars, their monochrome grade and the gold edge are baked into the Remotion render; the page adds eleven ink masks that retract upward on load, from both outer edges toward the centre (80ms steps, centre held to 560ms, 1100ms each on the arrival ease). With reduced motion the poster stays and nothing animates; the video plays only while in view.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed ink and ivory sections and keep every surface flat.
- **Do** set headlines in Inter Tight 300 with negative tracking and let them be large.
- **Do** grade every photograph with the documentary treatment (92% grayscale, 1.06 contrast) so the centre pillar keeps the only colour.
- **Do** reserve gold for culminations and for responses to action (hover, focus, the last step).
- **Do** keep stage band geometry in lockstep with the Remotion render (gap ratio, step ratio, aspect).
- **Do** use the 2px gold focus outline with 3px offset on every interactive element.
- **Do** use circles only for play affordances and timeline or diagram markers.

### Don't:
- **Don't** use red, blue or violet, gradients, or decorative fonts.
- **Don't** put gold on a field, a heading or body copy at rest.
- **Don't** round buttons, inputs or image frames.
- **Don't** add drop shadows or floating cards.
- **Don't** use tracked uppercase outside the logotype, and don't add arrows to buttons.
- **Don't** add a second unprompted animation; the pillar rise is the only one.
- **Don't** introduce logo walls, stat counters, or dark washes over full-bleed party photos.

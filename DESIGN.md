---
name: Aurum Eleven
description: The band's showreel filling the first screen on a loop, in the held colour; matte black and ivory own the page, satin gold marks the culmination and a few drawn accents, as the beam does in the logo.
colors:
  ink: "#111111"
  ivory: "#f5f2ec"
  gold: "#b08d57"
  gold-light: "#c2a46a"
  gold-deep: "#9a7a48"
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

**Creative North Star: "The Lit Stage"**

The whole system is built from one image: the band on stage filling the first screen under the header. Since the client's corrections of 2026-11-23 that image is the band's own showreel, playing on a loop in the held colour; it replaced the monochrome stage lit under the pointer (the client asked for the showreel itself, point 1). Eleven musicians, one signature sound. The vertical pillar stays the silhouette of the mark and of the line-up of eleven; the hero itself has no stripes (the user asked for it full height and without them on 2026-11-17). Everything else on the page is quiet so that this image can carry the brand: matte black and ivory take turns owning full-width sections, type is large, light and tightly set, edges are square, and gold appears the way the beam appears in the mark: as a line, never as a field (see the Beam Rule).

The register is a premium design house rather than a party band. Density is low and pacing is generous (sections breathe at up to 168px of vertical padding), copy sits in long left-aligned measures, and there is exactly one unprompted motion on the page: the showreel in the hero. All other motion answers the visitor (the line-up pillar opening and its gold edge, accordion expand, form confirmation, hover colour shifts).

Photography is documentary and keeps its stage light, graded in the held colour wherever it appears (68% saturation, a slight shift toward amber), so magenta and blue washes sit beside the gold instead of shouting. An earlier near-monochrome grade read as gloomy to the user and was dropped. The category default this refuses: full-bleed party heroes under dark washes, gold-on-black "premium" chrome, logo walls and stat counters.

**Key Characteristics:**
- Alternating ink and ivory sections, flat colour fields, no gradients anywhere.
- Inter Tight Light at display scale with negative tracking; Manrope for reading text.
- Square buttons, fields and cards; circles exist only as play affordances.
- Gold is drawn, not filled: a culmination, an answer to an action, or a thin accent line (the facts band, list markers), never a field, a heading or body copy.
- Documentary photography in the warm held colour, never in raw club colour.

## Colors

A two-field palette of matte black and warm ivory, ruled in graphite, with satin gold held in reserve.

### Primary
- **Satin Gold** (gold): the logo's beam. At the culmination: the lit pillar's top edge in the line-up, the final step's numeral in the process cards, the hover state of ivory buttons and the large play disc. As a drawn accent at rest (since 2026-11-19): the 2px rule and the four line icons of the hero facts band, the check marks of "Dla kogo", the plus/minus of the FAQ, and the progress tick of the phone deck in "Współpraca". The footer manifesto carries a gold glow behind its letters (client, 2026-11-26). Since 2026-11-26 the client also wants it as the field of the gold plates (see Plates), with ink type on it (6.1:1). Otherwise never a background field, never a heading or body text. On ivory it measures 2.8:1, so there it is only ever a mark beside text (check, plus), never text.
- **Deep Gold** (gold-deep): gold type on an ivory plate (3.6:1, so large text only: plates never go under 24px).
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
- **Ink Rule** (rule-ink): hairlines between ink regions (footer, sent confirmation).
- **Strong Rule** (rule-strong): the brighter hairline used where a rule must read as structure on ink: input underlines and the edges of the closed process cards.
- **Ivory Rule** (rule-ivory): hairlines on ivory (FAQ rows, ruled lists).
- **Error Sand** (error-sand): validation messages on ink. The brand forbids red, so errors speak in a warm sand that stays legible (well above AA on ink) and is separated from gold by context and by the alert's left rule.

### Named Rules
**The Beam Rule** (formerly the Culmination Rule). Gold behaves like the beam in the mark: a line drawn into the page. It marks the end of a sequence or the answer to an action (the lit pillar of the line-up, the last process numeral, a hover), and, since the client asked for "nieco więcej złotych akcentów… podobnie jak w logo" (corrections of 2026-11-18, applied 2026-11-19), a few accents at rest: the hero facts band (2px rule and line icons), the "Dla kogo" check marks, the FAQ plus/minus and the process dots (the dots left with the timeline on 2026-11-26). The user picked exactly these from a set that also offered gold "Co dostajesz" icons and a gold hero overline, and declined those two. So gold at rest is allowed only as a stroke, a rule or a small marker attached to content, never as a field, a heading, body copy or decoration on its own; adding a new gold accent is a design decision to put to the user, not a default.

**The Two Fields Rule.** Sections are either ink or ivory, edge to edge. No third surface colour, no tints, no gradients, and no red, blue or violet anywhere.

**The Held Colour Rule.** Every photograph carries the warm held grade (sepia 0.08, saturation 0.68, contrast 1.04), and so does the showreel in the hero (the same `.doc-photo` filter on the video and its poster; the files carry the client's own grade, untouched). The showreel's own black-and-white shots stay black and white. Stage light stays real but never shouts in raw magenta, red or blue, and it sits beside the gold; where a photograph is lit in violet (client photo 5 in "Co dostajesz"), the file itself carries 0.3 of the saturation before the CSS grade. Gold remains the one held accent (see the Beam Rule). The YouTube recording plays in its own colour after the visitor presses play.

## Typography

**Display Font:** Inter Tight (with Helvetica Neue, Arial)
**Body Font:** Manrope (with Helvetica Neue, Arial)

**Character:** A light, tightly tracked grotesk at very large sizes against a calm, open humanist sans for reading. The display voice is confident by being thin and large rather than bold.

### Hierarchy
- **Display** (300, clamp 46–96px, 0.96): the hero headline only, left-aligned across about two thirds of the width.
- **Lead line** (Inter Tight 400, clamp 24–32px, on a plate, sentence case, no full stop): the first line inside a heading, above its main line: "Zespół na event firmowy" in the H1, "Największy problem eventów" and "Współpraca" in their H2s. "Jak pracujemy?" and "Oferta" are whole H2s in the same style. It is part of the heading, never a separate label, and never tracked capitals. Since 2026-11-26 every lead line sits on a plate (see Plates).
- **Headline** (300, clamp 40–74px, 1.0): section headlines, usually capped near 12em measure.
- **Headline Small** (300, clamp 36–58px, 1.02): headlines in split layouts (contact, how-we-play) where the column is narrower.
- **Statement** (Inter Tight 300, roughly 21–42px, tight negative tracking): pull lines, ruled list items, the hero facts and the footer manifesto ("11 muzyków. Jedno brzmienie.", one sentence per line, with a soft gold glow behind the letters: `.manifesto-glow`, three halos at 0.16em, 0.55em and 1.2em); display face at an intermediate size, always light.
- **Title** (500, 20–22px, -0.01em): item and step titles, footer column heads.
- **Body** (Manrope 400, 18px, 1.6): lead and section paragraphs, measures of 30–34em.
- **Body Small** (Manrope 400, 15–17px, 1.6–1.7): list descriptions, FAQ answers, footer links.
- **Caption** (Manrope 400, 13–14px): microcopy under buttons, photo captions, field labels, notes.
- **Label** (Inter Tight 500, 16px, -0.005em): buttons and the play link.
- **Numeral** (Inter Tight 300, 88–140px on the card stack, 72px on the phone deck, 1.0, tabular): the process step numbers.
- **Logotype** (Inter Tight 500, 11–12px, 0.32em tracking, uppercase): the AURUM / ELEVEN wordmark only.

### Named Rules
**The Light Voice Rule.** Display and headline sizes are set at weight 300 with negative tracking (-0.035em to -0.04em). Weight 500 is reserved for titles and buttons; nothing on the page is bold.

**The Single Capitals Rule.** Tracked uppercase exists only inside the logotype. Headings, labels and buttons are sentence case.

**The Bound Letter Rule.** Polish one-letter words (a, i, o, u, w, z) and bare numbers never end a line: every content string passes through `typeset()` (`src/lib/typeset.ts`), which binds them to the next word with a non-breaking space. Text written directly in JSX binds them by hand with `\u00A0`.

## Layout

Content sits in a single shell (max 1280px, side gutter clamp 20–64px). Sections use generous vertical padding (clamp 96–168px) and alternate ink and ivory at full bleed; the header is a fixed-height 72px ink bar that stays pinned, and anchor scrolling is offset by the same 72px.

Composition is built from flex-wrap splits rather than fixed breakpoints: a photo panel and a text panel share a row with flex bases around 420–560px and stack naturally on narrow screens. Split sections often let the photograph run edge to edge on one side while the text keeps its own padding. Text measures are held deliberately (lead 34em, answers 40em, headlines 10.5–12.5em).

Section-closing enquiry buttons ("Co dostajesz", "Na żywo", "Kto stoi na scenie") are centred under their section (client corrections, 2026-11-18); the hero's stays beside its lead. The "Na żywo" header is centred over its player, the headline on one line from tablet width up.

The hero stage opens the page, full bleed and full height: it fills the screen under the 72px header (100svh − 72px, at least 440px) on every width, so the overline, the headline, the lead and the buttons follow below the fold; the page opens on the showreel alone, with only the header's own enquiry button. The film covers the box from its centre; phones held upright get a portrait cut framed shot by shot (see Showreel hero).

On phones the enquiry button is pinned to the bottom edge once the visitor has scrolled most of the hero stage away (never on the opening screen), and steps aside whenever another enquiry button is on screen (the hero's or one closing a section) and while the form is in view, so two identical buttons never show at once. The contact section's photo panel appears only from 1040px up; on narrower screens every enquiry button lands straight on the form's headline and first field.

## Elevation & Depth

The system is flat. There are no drop shadows; depth comes from the alternation of ink and ivory fields, from hairline rules, and from photography. There is no box-shadow in the build since the process timeline gave way to cards (2026-11-26). The one glow is the footer manifesto's gold halo, which the client asked for.

### Named Rules
**The Flat Stage Rule.** Surfaces never float. If something needs separation, use a field change or a 1px rule, not a shadow.

## Shapes

Edges are square: buttons, inputs, image frames and the sticky bar all have zero radius, and the line icons use butt caps and mitre joins. Inputs are a single bottom hairline with no box. The only circles are functional markers: play affordances (a 40px outlined ring for inline links, a large ivory disc over video). The process cards are square too. The vertical pillar is the system's signature silhouette; it recurs in the mark and the line-up.

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
- **Inline play link:** a 40px circular ring in ivory at 45% opacity holding a small play triangle, followed by a 16px Inter Tight 500 label. Hover shifts the ring to pale gold and the label colour to pale gold. The hero's "Zobacz pełne nagranie" opens the full recording on YouTube in a new tab (the client's link; a screen-reader note says so).
- **Video play disc:** a large ivory disc (72–104px) centred over a lightly dimmed poster; hover turns it gold.
- **Recording player ("Na żywo"):** a 16:9 still of the vocalists under the AURUM ELEVEN LED wall (client photo 7, graded like every photograph; it used to close "Dla kogo" at full width, and the user chose it as the poster) under the play disc. Nothing from YouTube loads until the visitor presses it; then a youtube-nocookie player with sound replaces the still, starts the full recording at 10:38 and takes focus. A stone caption says so.

### Inputs / Fields
- **Style:** transparent ground, no box, a 1px strong-rule underline, Manrope 18px ivory text, 52px minimum height. Labels sit above in ash at 14px.
- **Focus:** the underline turns gold; no outline or glow.
- **Error:** the underline warms to sand and the message appears below in error sand at 14px; a submission error appears as a sand paragraph with a pale-gold left rule.
- **Limits and success:** every field carries the same maximum length the server enforces, so nothing is clipped unseen. On success the confirmation heading takes focus; "send another" returns focus to the first field. Contact data the client has not supplied is left out of sentences and the footer, never shown as a bracketed placeholder.

### Navigation
- **Desktop:** Manrope 15px links in dimmed ivory on the ink header, 32px apart, quiet gold-light hover; a compact ivory button sits at the right. Labels (client, 2026-11-18 and 2026-11-26): Jak pracujemy?, Oferta, Na żywo, O nas, Współpraca, FAQ. "Jak pracujemy?" lands on the section's heading of the same name.
- **Mobile:** a square outlined toggle (44px) opens a full-height ink sheet listing the sections in 40px Inter Tight Light, with the full-width primary button pinned at the bottom. Escape closes it and returns focus.

### Accordion (FAQ)
On ivory, the headline sits sticky in a narrow column while questions run in ruled rows (ivory rule). Questions are Inter Tight at 19–24px; a thin gold plus whose vertical stroke collapses to a minus marks state. Answers open by animating grid rows over 300ms on the arrival ease, with motion removed under reduced motion.

### Process cards
The five steps of "Współpraca" are cards (client, 2026-11-26, second round: "karty, które można po kolei odsłaniać ze stosu"), `ProcessSteps.tsx`.
- **From 1024px, the stack:** five cards in a row, 380–440px tall, each overlapping the one before it by 12px, ink with a strong-rule edge. The closed cards show only their numerals (Inter Tight Light 88–140px) at the foot; the last is gold. At rest the first card is open (client, 2026-11-26), so step 1 reads without a hover. The card the visitor points at (or taps, or tabs to) grows to 3.4 times the others' width and turns to its ivory face: the numeral rises to the top at half size (ink, the last in deep gold), and the step fades in at the foot, set large because the client found it too faint (2026-11-26): the title in Inter Tight Light 30–40px, the owner in 16px pebble, then a hairline and the body at 17–19px in graphite. The words keep the open card's width while the row moves, so they never reflow. The pointer leaving the row, or focus leaving it, returns to the first card; tapping the open card does the same. Each card carries a full-size button with `aria-expanded`.
- **Below 1024px, the deck:** flashcards up to 460px wide. The top card is ivory with the numeral at the top and the step at the foot; two cards sit behind it, 12px lower and 5% smaller each, dimmed. A swipe either way (72px, or a quick flick) throws the top card off that side and under the deck, and the next step comes up; the card underneath shows its words while it is uncovered. "Poprzedni" brings the last card back from the left, "Następny" throws the top card left. The deck goes round. Five 2px ticks show the place, gold for the current step; a hidden live line reads "Krok 2 z 5: Wycena".
- **Entrance:** the first time the cards scroll into view they deal in from the left, 110ms apart (the deck as one). Only cards still below the fold are armed, so no JavaScript, an anchor jump to the section or reduced motion all show the finished state. Reduced motion also drops the card transitions.

### Plates
The client's heading lead lines sit on square plates (2026-11-26): gold plates with ink type on ivory sections ("Największy problem eventów", "Oferta"), ivory plates with deep-gold type on ink ("Zespół na event firmowy", "Jak pracujemy?", "Współpraca"). The plate's edge aligns with the column, padding 0.1em 0.38em, and a plate that wraps on a phone repeats its padding on every line (`box-decoration-break: clone`). `.plate-line` with `.plate-gold` or `.plate-ivory` in `globals.css`.

### Facts band (hero)
Under the hero lead, the client's facts line ("11 muzyków, pełna sekcja dęta, własne aranżacje, oferta w 24 godziny") is split into four cells under a 2px gold rule and over a strong rule, divided by strong vertical rules: each cell a 32–36px gold line icon above the fact in Inter Tight Light at 21–30px. Four across from 768px, two by two below. The credits follow in ash at 15px. It exists because the client found the old one-line caption blended into the text around it (corrections, point 2).

### Line icons
Ten icons drawn for this site (`LineIcon` in `src/components/Icons.tsx`): a 32px grid, a 1.5 stroke, butt caps and mitre joins. muzycy is the 11 of the mark as a line; sekcja a trumpet; aranzacje two beamed notes; kontakt a vocal microphone; realizator three faders; sety a clock at forty past; wycena an envelope; umowa a signed contract; scenariusz a running order; produkcja a loudspeaker. Gold only in the hero facts band; ink in "Co dostajesz" (the user declined gold there). They always sit beside their words, aria-hidden.

### Ruled lists and "Co dostajesz"
"Dla kogo" sets its items as ruled rows rather than cards: an ivory-rule hairline above each item, the item in Inter Tight Light at 22–28px, a gold check (or a dim dash on the ink side) before it. "Co dostajesz" splits its nine items into "Na scenie" and "Organizacja". The section opens with the "Oferta" plate as its H2; the former "Co dostajesz" headline and the "Na scenie" group title became one group title, "Co dostajesz na scenie", on one line wherever the width allows (it wraps, never balances). The group titles are Inter Tight Light 28–38px (client, 2026-11-26; "Organizacja" matches). "Co dostajesz na scenie" shows its four items with the client's own photographs (3 horns, 4 percussion, 5 vocalists, 6 the sound engineer at the desk; held colour) in fine frames (client, 2026-11-26): a 1px ivory-rule border around the photo, the ink line icon, the title (Inter Tight Light 21–26px) and the body in smoke, with no fill or shadow. Four across from 1024px, two by two from 640px, and on phones a row each with the photo at 38% beside the text. The card the visitor points at (or taps) opens like a line-up pillar: in the row of four it grows to 1.6 times the others' width, its photo (a 6:5 cut seen through a 4:5 window at rest) shows more of the stage and moves 4% closer, and the frame turns gold. The photo keeps its height and the words keep a closed card's width, so nothing below moves. `StageCards.tsx`. "Organizacja" stays a ruled list in two columns, each row led by its ink line icon.

### Line-up
"Kto stoi na scenie" shows the eleven musicians as eleven pillars (`src/components/LineUp.tsx`), captioned with the instrument in 13px pebble. Each file (`public/media/lineup`, 960x1600, provenance in `docs/media-provenance.md`) is a 3:5 crop centred on one musician; the pillar shows its middle 3:10 at rest. Left to right: the rhythm section at the edges, the horns around the three vocals in the middle (Wokal 1 Zuzia, Wokal 2 the male vocalist, Wokal 3 Kama; guitar, percussion, trumpet, trombone and both women re-shot by the client on 2026-11-18). Every pillar carries the held colour. The pillar under the pointer opens (client corrections, point 9): it grows to about 1.7 times its width over 500ms on the arrival ease while its neighbours give way, revealing more of the frame at the same height, and the photograph moves 4% closer over 700ms; it also takes the 3px gold top edge (scaling in over 300ms) and its caption turns ink. From 1024px the pillars stand in one row of eleven; below that they become a sideways strip with snap, about a third of the screen wide each, where the pillar nearest the middle keeps the gold edge as the visitor scrolls, and a tap opens a pillar to about two thirds of the screen (a second tap closes it). Reduced motion removes the transitions, not the opening. Nothing moves on its own, and all eleven images load together once the strip nears the viewport.

### Showreel hero (signature)
The hero (`src/components/HeroReel.tsx`) is the client's showreel ("showreel www", 19.7 s, 25 fps, no sound) playing on a loop, muted, edge to edge in the stage box (client corrections of 2026-11-23, point 1). It is the client's edit as delivered: fast cuts of about a second, colour and black-and-white shots, and the A11 card at about 2 s; the loop runs from the whole band to the closing guitar and cuts straight back. Two cuts, both encoded from `showreel www_3.mp4` (`video/README.md`): landscape 1600x900 (`a11-showreel-v1.mp4`, about 3.9 MB) and, for phones held upright, a portrait 540x960 (`a11-showreel-pion-v1.mp4`, about 1.9 MB) cropped from the middle of each shot, moved left for the A11 card (so the whole mark shows) and for the bass player. Each has its first frame as the poster (`<picture>` swaps it by orientation), so the hand-over to the film is invisible. The film carries the held colour (`.doc-photo`), plays only while on screen and the tab is in front, and a square pause control at the bottom right stops it and is remembered per visitor (WCAG 2.2.2). Under reduced motion the film is never fetched: the hero is the still first frame, with no control.

### Living stage (retired 2026-11-24)
The former hero stage (`src/components/StageCanvas.tsx`, still in the repository so it can return in one line in `Hero.tsx`) is the client's showreel drawn live by a WebGL shader from a clean colour loop (Remotion `StageSource`, 1600x900; 960x540 only where the stage needs under ~600 device pixels of height): four shots in 2.5x slow motion from a 75 fps motion-interpolated master, the whole band first and held longest, then the horns and the two lead vocalists. It covers the whole stage with no pillars, gaps or steps. The picture rests in monochrome (luminance, 1.18 brightness, 1.12 contrast, floor #1c1c1c); a round pool of the held colour (a Gaussian with a radius of 0.34 of the stage's shorter side) follows the pointer in both axes, easing at a 140ms time constant. With no pointer on the stage (touch screens, or the pointer elsewhere) the light drifts slowly from side to side on its own. The loop's first frame (`a11-stage-source-v2.jpg`) is drawn as soon as it decodes and the footage takes over when it arrives, both fading up from the floor over 700ms. The loop plays only while the stage is on screen and the tab is in front; a square pause control at the stage's bottom right stops all motion and is remembered per visitor (WCAG 2.2.2). Under reduced motion the footage is never fetched: the stage is the still first frame, lit at the centre, with no control. Without WebGL, or if the shader, the context or the video fails, `StageBand` plays the same loop plainly in the held colour of the photographs, with no light.

## Do's and Don'ts

### Do:
- **Do** alternate full-bleed ink and ivory sections and keep every surface flat.
- **Do** set headlines in Inter Tight 300 with negative tracking and let them be large.
- **Do** grade every photograph with `.doc-photo`, the held colour (sepia 0.08, saturation 0.68, contrast 1.04), so photographs and the stage share one warm light.
- **Do** keep gold to culminations, responses to action (hover, focus, the last step) and the drawn accents the Beam Rule lists; ask before adding another.
- **Do** keep the hero poster the film's own first frame, so the hand-over from poster to footage is invisible.
- **Do** use each documentary picture once: the whole band belongs to the hero stage, the horn section, percussion, vocalists and sound engineer illustrate "Co dostajesz", and the LED-wall vocalists are the recording's poster. "Jak gramy" is text only, so the answer follows the problem section's last line at once.
- **Do** use the 2px focus outline with 3px offset on every interactive element: gold on ink, ink on ivory.
- **Do** use circles only for play affordances and timeline markers.

### Don't:
- **Don't** use red, blue or violet, gradients, or decorative fonts.
- **Don't** put gold on a field, a heading or body copy at rest.
- **Don't** round buttons, inputs or image frames.
- **Don't** add drop shadows or floating cards.
- **Don't** use tracked uppercase outside the logotype, and don't add arrows to buttons.
- **Don't** add a second unprompted animation; the showreel in the hero is the only one. The process cards' deal-in plays once, on scroll, and is the only scroll-triggered motion.
- **Don't** introduce logo walls, stat counters, or dark washes over full-bleed party photos.

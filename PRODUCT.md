# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Decision makers who book live music for large corporate events: event managers, HR and marketing teams inside companies, and event agencies choosing the music for their clients. They usually compare two or three options, need a safe choice that will not embarrass them in front of the board or the client, and want availability and a quote fast. They arrive with a date, a venue and an approximate guest count, often not all of them confirmed.

## Product Purpose

A one-page site for Aurum Eleven, an eleven-piece live band for corporate galas, balls and large productions. Its single job is to turn a visit into an availability enquiry ("Zapytaj o dostępność terminu"). Success is a sent enquiry with at least a name, an e-mail and a message (date, venue, guest count); the phone number is optional.

## Positioning

Eleven musicians on stage, with a full horn section, percussion and three vocalists, playing their own arrangements written for this line-up. The band reads the room and orders the set around the guests instead of playing a fixed list. A quote arrives within 24 hours of receiving the date, venue and guest count. The brand behaves like a premium design house rather than a party band: the organiser should feel "nie muszę się o nic martwić."

## Operating Context

- Enquiry flow: contact (e-mail is enough) → quote within 24 h → terms (date, scope, technical setup) → evening scenario (stage times, breaks) → performance, then payment under the contract.
- Standard format: 3 sets of 40 minutes, DJ in the breaks; the line-up is written into the contract and a substitute is guaranteed in emergencies.
- Own sound engineer; full production (sound, light, stage, DJ) available through a partner company on request.
- Technical rider with stage plan is sent after the date is confirmed.
- PL/EN repertoire; vocalists can host short MC moments; VAT invoice and contract are standard.
- Travel costs and accommodation apply for events more than 100 km from Warsaw.

## Capabilities and Constraints

- Codebase: Next.js (App Router) with Tailwind CSS in this repository; the old "Premium Live Band" template is being fully replaced.
- Deployment for this round: a separate Vercel project used as the dev environment, apart from the existing one-page-event-band deployment.
- Motion: Remotion is approved for rendering the hero loop from the showreel and a short film for the live section.
- Form: name and e-mail required, phone optional, message required with the hint "data, miejsce, liczba gości"; no other fields.
- Undecided: business e-mail address, phone number, company legal data (name, NIP), privacy policy text, form delivery provider. The full recording with sound is https://youtu.be/OH8YCK4aEQU (supplied 2026-11-17).

## Brand Commitments

- Name: Aurum Eleven; logo A11 Precision Mark (SVG/PNG in `branding/a11-precision/` and the client package). Manifest: "Eleven musicians. One signature sound."
- Archetypes: Ruler 50%, Creator 30%, Magician 20%.
- Colour commitments from the brand book: matte black #111111, satin gold #B08D57 (or #C2A46A), ivory #F5F2EC for large surfaces, graphite #2B2B2B as accent. No red, blue or violet, no gradients.
- Type commitments: headings from Neue Haas Grotesk, Suisse Int'l, Helvetica Now, Gotham or Inter Tight; text from Inter, Manrope or IBM Plex Sans. No decorative fonts.
- Voice: calm, confident, specific; never "najlepsza zabawa", "rozkręcamy imprezę", "gramy największe hity", "cover band", "gramy wszystko"; never compete on price.
- Photography: documentary rather than staged; no shots where everyone looks at the camera; no wedding imagery.
- Brand book inspirations: Bang & Olufsen, Leica, Porsche, Audi RS, Aesop, COS, Rimowa. Do not take cues from other bands.
- Client-supplied copy (STRUKTURA PDF) is final unless the client changes it; section names in brackets are never shown as headings.

## Evidence on Hand

- 12 documentary photos and a 20-second silent showreel (two encodes) in the client package `~/Downloads/Aurum Eleven 2026-11-16.zip`; web-optimised copies were prepared during design.
- Credits the client stated: members played with Adam Sztaba, Justyna Steczkowska, Mrozu, Kwiat Jabłoni, Beata Kozidrak, Dawid Kwiatkowski; vocalists from "The Voice of Poland"; the saxophonist plays in "Jaka to melodia?"; KFPP Opole and TOP OF THE TOP Sopot Festival.
- Social profiles: instagram.com/aurum.eleven, youtube.com/@AurumEleven, facebook.com/profile.php?id=61593784180481.
- Absent and not to be fabricated: client logos, testimonials, case studies, statistics, prices.

## Product Principles

1. One action matters: every section should leave the visitor closer to asking about a date.
2. Proof over promise: show the line-up, the stage and the people; avoid claims the band cannot back.
3. Remove the organiser's worry: be explicit about process, contract, timing and technical needs.
4. Premium through restraint: fewer, better elements; the organiser is buying calm.

## Accessibility & Inclusion

Polish-language site; must work on phones (pinned enquiry button on mobile), respect reduced motion, and keep text contrast at WCAG AA.

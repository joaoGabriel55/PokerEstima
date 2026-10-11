---
name: PokerEstima
description: Real-time planning poker for teams on a call, set in Barcelona's street plaques and Eixample chamfers.
colors:
  terracotta: "#b4512f"
  terracotta-deep: "#96432a"
  terracotta-mist: "#f3ddd2"
  terracotta-pale: "#d39c88"
  panot: "#e3e4e0"
  panot-line: "#d0d1cc"
  enamel: "#f8f8f5"
  ink: "#26231f"
  ink-soft: "#5b5650"
  ink-faint: "#736e67"
  line: "#c6c7c1"
  line-strong: "#8a8680"
  groc: "#efc843"
  groc-hover: "#f4d264"
  vermell: "#b8352c"
  vermell-on-groc: "#9e2a22"
  on-color: "#fbfaf7"
  on-groc: "#26231f"
  night-basalt: "#151719"
  night-joint: "#2a2d31"
  night-enamel: "#1d1f22"
  lamplight: "#e7e1d7"
  lamplight-soft: "#b0a99e"
  lamplight-faint: "#8f887e"
  night-line: "#33363b"
  night-line-strong: "#6f6c67"
  night-rail: "#6a2b16"
  night-terracotta: "#e07b55"
  lifted-tile: "#eea284"
  night-mist: "#3e2218"
  night-terracotta-pale: "#88523e"
  night-primary: "#c96a46"
  night-primary-hover: "#d97c57"
  night-on-primary: "#1a1715"
  night-groc: "#d8b84a"
  night-groc-hover: "#e3c45c"
  night-vermell: "#ec6d5e"
  night-vermell-fill: "#a8261e"
  night-vermell-on-groc: "#8e1a12"
typography:
  display:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "clamp(1.75rem, 4.5vw, 2.25rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "0.04em"
  display-hero:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "clamp(2.25rem, 5vw, 3.375rem)"
    fontWeight: 400
    lineHeight: 1.06
    letterSpacing: "0.02em"
  wordmark:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "1.3125rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.1em"
  headline:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  section:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.1em"
  title:
    fontFamily: "Marcellus, Times New Roman, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.06em"
  body:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.55
  numeral:
    fontFamily: "Archivo, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.04em"
    fontFeature: "tnum"
rounded:
  cut-xs: "2px"
  cut-sm: "5px"
  cut: "8px"
  cut-lg: "12px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4.5rem"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.on-color}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1.5rem"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-deep}"
  button-signal:
    backgroundColor: "{colors.groc}"
    textColor: "{colors.on-groc}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1.5rem"
    height: "46px"
  button-signal-hover:
    backgroundColor: "{colors.groc-hover}"
  button-danger:
    textColor: "{colors.vermell}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1.5rem"
    height: "46px"
  button-danger-hover:
    backgroundColor: "{colors.vermell}"
    textColor: "{colors.on-color}"
  button-quiet:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1.5rem"
    height: "46px"
  button-compact:
    padding: "0.5rem 1rem"
    height: "38px"
  input:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "0px"
    padding: "0.75rem 1rem"
    height: "46px"
  plaque:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.cut}"
    padding: "0.75rem 0.75rem 0.75rem 1rem"
    height: "88px"
  plaque-number-voted:
    backgroundColor: "{colors.groc}"
    textColor: "{colors.on-groc}"
    size: "2.5rem"
  card:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cut}"
  split-block-top:
    backgroundColor: "{colors.terracotta}"
    rounded: "{rounded.cut-xs}"
    size: "18px"
  split-block:
    backgroundColor: "{colors.terracotta-pale}"
    rounded: "{rounded.cut-xs}"
    size: "18px"
  rail:
    backgroundColor: "{colors.terracotta}"
    textColor: "{colors.on-color}"
    typography: "{typography.wordmark}"
    height: "62px"
  theme-toggle:
    textColor: "{colors.on-color}"
    rounded: "{rounded.cut-sm}"
    size: "36px"
  countdown:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cut-sm}"
    padding: "0.5rem 1rem"
  countdown-low:
    backgroundColor: "{colors.groc}"
    textColor: "{colors.vermell-on-groc}"
  sheet:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cut-lg}"
    padding: "3rem 2.5rem"
    width: "520px"
  open-form:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.ink}"
    rounded: "{rounded.cut-lg}"
    padding: "2rem"
  toast:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1rem"
  rail-dark:
    backgroundColor: "{colors.night-rail}"
    textColor: "{colors.on-color}"
  plaque-dark:
    backgroundColor: "{colors.night-enamel}"
    textColor: "{colors.lamplight}"
    typography: "{typography.title}"
    rounded: "{rounded.cut}"
    padding: "0.75rem 0.75rem 0.75rem 1rem"
  card-dark:
    backgroundColor: "{colors.night-enamel}"
    textColor: "{colors.lamplight}"
    rounded: "{rounded.cut}"
  button-primary-dark:
    backgroundColor: "{colors.night-primary}"
    textColor: "{colors.night-on-primary}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1.5rem"
    height: "46px"
  button-primary-dark-hover:
    backgroundColor: "{colors.night-primary-hover}"
  button-signal-dark:
    backgroundColor: "{colors.night-groc}"
    textColor: "{colors.on-groc}"
    rounded: "{rounded.cut-sm}"
    padding: "0.75rem 1.5rem"
    height: "46px"
---

# Design System: PokerEstima

## Overview

**Creative North Star: "Placa del Xamfrà"**

Every player is a Barcelona corner street plaque, the enamel sign mounted on the 45° chamfer of an Eixample block. Their name is set in carved capitals, and their vote lands in the box where a real plaque carries its district number. The rest of the screen is the street around it: a soft panot-cement grey ground, a terracotta band taken from the rooftops at golden hour, and the Senyera's yellow and red kept for specific jobs.

This is the quiet edition of that street. It is used in a narrow window beside a video call for long stretches, so the system is minimal and easy on the eyes: lighter ground, softened ink, a slightly muted yellow and red, faces drawn with 1px hairlines instead of heavy rims, and semibold rather than bold type. There are no glass panels, gradients or decorative containers. Type, one terracotta rail and hairlines do the organising. Pieces still feel tactile: cards lift when you point at them, and plaques stamp their numbers in when the votes are revealed, both gently. Character comes from the chamfer and the carved lettering, not ornament.

It replaces an earlier midnight-indigo glass-and-gradient look completely, and the heavier double-rimmed first edition of this world. Nothing from the glass look carries forward.

**Key Characteristics:**
- 45° bevelled corners (the xamfrà) on plaques, cards, buttons and sheets; never rounded.
- Enamel faces drawn with a single 1px hairline that follows the bevel; operable things get the stronger hairline.
- One committed terracotta rail at the top of every page; the terracotta primary button is its only echo below it.
- Carved roman capitals for names, titles and section heads; a plain grotesque for everything operated, numerals included.
- State shown by line form (dashed, solid, struck through, dotted) as well as colour.

## Colors

The panot pavement and the enamel plaque form a soft stone-and-ink base. Terracotta owns the top band and the one primary action, and the two Senyera colours each have one job.

### Primary
- **Eixample Terracotta** (terracotta): the rail across the top of every page, the theme colour, the primary button, focus outlines and the caret, the selected card's rim and bar, your own plaque's rim, the card corner index, step numbers, the landing headline's figure, and the most-voted split blocks. **Deep Roof Tile** (terracotta-deep) is the primary button's hover, the selected card's number, the "Facilitator" and "· You" tags, and link hover. **Terracotta Mist** (terracotta-mist) is only the input focus halo. **Pale Terracotta** (terracotta-pale) is a 55% mix of terracotta into enamel, used only for the split blocks that are not the top row.

### Secondary
- **Senyera Groc** (groc): means "voted / act now". Used for the filled number box of a player who has voted, the Reveal and New round buttons, the closing-soon strip, the low-time countdown, and text selection. **Groc hover** (groc-hover) is the signal button's hover only.
- **Senyera Vermell** (vermell): means "ending". Used for the End session button, the error toast, field errors and the "Not sent" status. **Vermell on groc** (vermell-on-groc) is a deeper red only for the countdown digits under two minutes, on the groc face.

### Neutral
- **Panot Grey** (panot): the page ground, the cool grey of Barcelona's cement pavement tiles, lifted for comfort. It is not cream.
- **Panot Joint** (panot-line): 1px dividers under section heads, between the average and the split, above the notes, steps and support note, and on the facilitator bar.
- **Enamel** (enamel): every face, including plaques, cards, inputs, sheets, the open-a-room form and the countdown on the page.
- **Hairline** (line): the 1px outline of every face (plaques, cards, sheets, dialog, countdown, the sample-round results).
- **Strong hairline** (line-strong): the 1px outline of things you operate or that wait for input: inputs, quiet buttons, the dashed waiting box and the revealed number box (3.4:1 on enamel).
- **Soft Ink** (ink): body text, headings, and the toast face.
- **Weathered Ink** (ink-soft): secondary text, section heads, plaque state lines, ledes.
- **Faded Ink** (ink-faint): placeholders and optional-field hints, on enamel only (4.75:1); on the panot ground it falls below 4.5:1.

### Named Rules
**The Colour Has a Job Rule.** Yellow means "voted / act now" and red means "ending". Neither is ever decoration. Any colour that isn't the rail, the primary action, a state or a selection is stone or ink.

**The No-Cream Rule.** The ground is cool cement grey (panot), with blue held within a few points of red. Warming it toward cream turns the world into the generic terracotta-on-cream Mediterranean look; a lighter ground is allowed, a warmer one is not.

**The Fixed-Text Rule.** Text on groc is always `--on-groc` and text on the rail or a vermell fill is always `--on-color`, in both themes. Faces are outlined with `--line` or `--line-strong`, never `--ink`, so the dark theme can soften them.

**The Guest Colour Rule.** The Ko-fi widget's purple (#8073f5) is the user's own support button, kept by their instruction. It lives only inside the landing page's support note and is never a palette colour. The rail's support link is drawn in the rail's own colours instead.

### Dark theme: "Nit a l'Eixample"

The same street after dark, composed rather than inverted. It follows `prefers-color-scheme` unless the rail toggle has set a theme. The choice is stored in `localStorage` (`pokerestima-theme`) and applied by an inline script in `<head>` before first paint. A choice that matches the system is forgotten, so the page follows the system again. The toggle shows a moon in light and a sun in dark.

These are the `night-*` and `lamplight*` keys in the frontmatter.

| Role | Light key | Dark key | Name in dark |
|---|---|---|---|
| `--panot` (ground) | panot | night-basalt | Night basalt, still cool, never brown |
| `--panot-line` | panot-line | night-joint | Wet joint |
| `--enamel` (faces) | enamel | night-enamel | Dark vitreous enamel, one step above the ground |
| `--ink` (text) | ink | lamplight | Lamplight |
| `--ink-soft` / `--ink-faint` | ink-soft / ink-faint | lamplight-soft / lamplight-faint | 7.1:1 / 4.7:1 on faces |
| `--line` / `--line-strong` | line / line-strong | night-line / night-line-strong | Hairlines stay quiet; the strong one keeps 3.2:1 |
| `--rail` | terracotta | night-rail | Fired-clay roof at night |
| `--primary` / hover | terracotta / terracotta-deep | night-primary / night-primary-hover | Muted terracotta with dark text (`night-on-primary`), so the button doesn't glare |
| `--terracotta` | terracotta | night-terracotta | Selected rim, focus, top split blocks, corner index |
| `--terracotta-deep` | terracotta-deep | lifted-tile | Becomes the *lifted* tile: role tags, selected number, link hover |
| `--terracotta-mist` | terracotta-mist | night-mist | Focus halo |
| pale split blocks | terracotta-pale | night-terracotta-pale | The same 55% mix, into dark enamel |
| `--groc` / hover | groc / groc-hover | night-groc / night-groc-hover | Lowered to avoid glare |
| `--vermell` | vermell | night-vermell | Text and hairlines on dark faces |
| `--vermell-fill` | vermell | night-vermell-fill | Fills with light text (danger hover, error toast) |
| `--vermell-on-groc` | vermell-on-groc | night-vermell-on-groc | Low-time countdown digits |

Shadows go black and deeper (`--drop-hover`, `--drop-selected`, `--shadow-toast`, `--shadow-dialog`), the dialog backdrop becomes `rgb(6 7 8 / 0.66)`, and the pavement texture ink drops to 5% lamplight. Toasts become lamplight faces with dark text. `color-scheme` switches with the theme, so native controls and scrollbars follow. The `theme-color` meta is the light terracotta in light and the night rail in dark.

## Typography

**Carved Font:** Marcellus (with Times New Roman, serif), self-hosted from `public/fonts/`
**UI Font:** Archivo, variable 400–700 (with Segoe UI, system-ui, sans-serif), self-hosted from `public/fonts/`

**Character:** Marcellus brings the flared, incised capitals of a stone or enamel street sign. Archivo is a sober workhorse grotesque that keeps the operating surface legible beside a video call. The quiet edition works at 600 and below; nothing is set at 700.

### Hierarchy
- **Hero display** (Marcellus 400, clamp(2.25rem, 5vw, 3.375rem), 1.06, 0.02em, uppercase, balanced): the landing page's carved headline, the largest text in the product. Its number is an Archivo 600 tabular figure in terracotta that stamps in.
- **Display** (Marcellus 400, clamp(1.75rem, 4.5vw, 2.25rem), 1.1, 0.04em, uppercase): sheet titles on the create and join pages ("Open a room", "Join the room").
- **Carved heads** (Marcellus 400, 1.15, uppercase): on the landing page, "How a round goes" (clamp(1.5rem, 3vw, 1.875rem)), the support title (clamp(1.375rem, 3vw, 1.75rem)) and note titles (1.25rem) at 0.05em; the open-a-room title (1.375rem, 0.06em). The dialog title is 1.5rem at 0.04em.
- **Wordmark** (Marcellus 400, 1.3125rem, 0.1em, uppercase): "POKERESTIMA" in the rail; 1.125rem at ≤480px, 1.0625rem at 0.07em at ≤400px.
- **Headline** (Archivo 600, clamp(1.5rem, 3vw, 2.125rem), 1.2, -0.015em, balanced): the task title, the largest text in a room. The join page's task title is Archivo 600 at 1.25rem.
- **Section** (Marcellus 400, 1rem, 1.2, 0.1em, uppercase, weathered ink): room section heads ("At the table", "Your estimate", "The split"), which are the headings themselves, carved like the lettering on a street sign.
- **Title** (Marcellus 400, 1.0625rem, 1.2, 0.06em, uppercase): player names on plaques; 0.9375rem at ≤760px and on mini plaques.
- **Body** (Archivo 400, 1rem, 1.55): descriptions and ledes, with task descriptions capped at 68ch and `pre-wrap`. The hero lede is 1.0625rem at 52ch.
- **Label** (Archivo 600, 0.875rem, sentence case): field labels. The countdown label is Archivo 600 at 0.75rem, 0.06em, uppercase; card labels are Archivo 500, uppercase, 0.04em.
- **Numeral** (Archivo 600, tabular): the average (clamp(2.75rem, 7vw, 4.25rem), -0.04em), card numbers (container-scaled, up to 2.375rem, -0.03em), plaque values, split values and the countdown.

### Named Rules
**The Legible Figure Rule.** Numbers are always Archivo semibold with tabular figures. Marcellus's "1" reads as "I", so 100 looks like "IOO". Carved capitals are for words only. When a carved line carries a number (the landing headline's "it's an 8"), the number is pulled out into Archivo.

**The Carved Caps Rule.** Marcellus is only ever set in uppercase with positive tracking (0.02–0.1em). It never sets running text.

## Layout

There is one centred column, max 1040px with 1.25rem gutters, under a full-bleed terracotta rail (62px tall; 52px at ≤480px, as `--rail-h`). The rail holds the flag and wordmark on the left, the tagline, and a countdown plate and the theme toggle on the right. Pages open 3rem below the rail and leave 4.5rem at the foot. In the room, sections are spaced 3rem apart (2rem at ≤760px), and each opens with a carved section head and a right-aligned meta line over a 1px panot-joint rule.

- **Task row:** title and description on the left; the invite field and Copy button in a 280–340px column on the right, bottom-aligned.
- **Table:** plaques in an auto-fill grid (min 164px; 124px at ≤760px).
- **Deck:** one row of ten cards above 860px so the actions stay in the first screen; two rows of five below 860px. Card type scales with container query units.
- **Actions:** facilitator only (Reveal / New round, End), right-aligned under the deck. Players have no action row: tapping a card is the vote. At ≤760px the actions become a bar pinned to the bottom of the screen (panot ground, panot-joint top rule, safe-area padding). Reveal fills the row and End sits compact beside it, always within thumb reach.
- **After reveal:** the split sits directly under the table, above the folded deck, in the DOM as well as visually, so the result leads for everyone, screen readers included. On a live reveal, once the plaque stamps land (700ms), the page glides the split into view only if it is mostly off-screen (`scroll-margin` keeps it clear of the facilitator bar). Rejoins never scroll.
- **Narrow (≤760px):** the task block flattens (`display: contents`) and items are reordered so the order is task, table, results, deck, actions, then invite (behind a panot-joint rule). Getting to a vote comes before inviting. The rail tagline is hidden. At ≤480px the rail stops wrapping, so wordmark, countdown and toggle share one row, and the countdown's "Closes in" label becomes visually hidden; at ≤400px the gaps, wordmark and countdown tighten so all three fit at 360px.
- **Create and join:** a single 520px sheet, centred. The full create sheet stays at `/play` for rooms that need a description or links.
- **Landing (`/`):** one calm street in the same 1040px column, its blocks 4.5rem apart (3rem at ≤700px). Above 900px a 7/5 hero grid puts the carved headline and lede on the left with the sample round under them, and the open-a-room form on the right, spanning both rows, so the form is in the first screen. At ≤900px it becomes one column: headline, form, sample round. Under the hero, two plain notes sit side by side (one column at ≤700px), then "How a round goes" in four columns (two at ≤900px, one at ≤560px with panot-joint rules between steps), then the support note, centred. Each of those three blocks opens on a panot-joint rule; none sits in a container.

## Elevation & Depth

The system is flat at rest. Faces are separated from the ground by tone and a 1px inset hairline (an inset shadow, so it follows the bevel), not by shadows. Only things that float cast a shadow: a hovered or selected card lifts and casts a soft warm drop shadow, toasts carry a single ambient shadow, and the end dialog sits over a dimmed room.

### Shadow Vocabulary
- **Card hover** (`filter: drop-shadow(0 6px 8px rgb(70 32 14 / 0.1))` with `translateY(-3px)`): a pointer is over a card.
- **Card selected** (`filter: drop-shadow(0 10px 12px rgb(70 32 14 / 0.16))` with `translateY(-8px)`): the card currently in hand.
- **Toast** (`box-shadow: 0 10px 24px -10px rgb(38 35 31 / 0.35)`): transient messages.
- **Dialog** (`box-shadow: 0 24px 48px -20px rgb(38 35 31 / 0.4)`, plus the hairline): the end-session dialog, over a `rgb(38 35 31 / 0.4)` backdrop.

### Named Rules
**The Hairline Rule.** Every face is drawn with one 1px inset hairline: `--line` for faces you read (plaques, cards, sheets, the form, the dialog), `--line-strong` for things you operate or that wait for input (inputs, quiet buttons, dashed waiting boxes). Never double a rim, and never put a resting face under a soft shadow; only floating things cast one. Emphasis is a 2px terracotta rim (your plaque, your card), never a thicker ink one.

## Shapes

The form language is the Eixample chamfer: 45° bevelled corners, built with `border-radius` plus `corner-shape: bevel` inside `@supports`. Browsers without `corner-shape` fall back to **square** corners, never rounded ones.

- **cut-sm** (5px): buttons, the countdown, toasts, the theme toggle, the closing-soon strip and the step figure's Copy chip.
- **cut** (8px): plaques, cards and the step figure's mini cards.
- **cut-xs** (2px): split blocks.
- **cut-lg** (12px): create and join sheets, the dialog, and on the landing page the open-a-room form and the sample-round field.
- **Inputs:** square, with a 1px strong hairline.
- **Plaque number boxes:** square.
- **Flag:** a plain 30×20 rectangle with a 1px enamel keyline at 70%.
- **Panot de flor:** behind the landing's sample round only, a 40px repeating outline of Barcelona's flower pavement tile, masked in `--tile-ink` (7% ink; 5% lamplight in dark) and clipped to the bevel. It is a stroked tile, not a fade.

## Components

### Plaques (signature)
Each player's corner street plaque.
- **Face:** enamel with a 1px `--line` hairline, at least 88px tall (72px at ≤760px).
- **Name:** across the plaque's full width in carved capitals, like the street name on a real sign. It wraps only between words (break-word, hyphens break naturally), clamps to two lines with an ellipsis, and carries the full name as a `title`. Names are capped at 40 characters (input `maxlength` and a server check).
- **Your plaque:** a 2px terracotta rim (the same colour that marks your card) plus "· You" in deep roof tile, 600, on the state line.
- **State line:** below the name, 0.8125rem weathered ink. The facilitator also gets a "Facilitator" tag on its own line in deep roof tile, 500.
- **Number box (2.5rem square, 2.125rem at ≤760px, bottom-right, beside the state line):**
  - waiting: 1px dashed `--line-strong`, empty
  - voted: a groc fill with no rim
  - revealed: the value in Archivo 600 on enamel with a solid `--line-strong` hairline (groc stays for voters). It stamps in (`scale(1.35) rotate(-5deg)` to rest, 460ms expo-out), staggered 70ms per plaque from left to right.
  - offline: the plaque drops to 50% opacity, the name is struck through (1px) and the box rim is dotted.
- **After reveal:** players who didn't vote read "Didn't vote".

### Cards (deck)
A playing card with a 3:4 bevelled enamel face and a 1px `--line` hairline.
- **Content:** the number at the top in Archivo 600, with a small emoji (one glyph per card; 100 is 💀 alone) and an uppercase label under it, and a terracotta corner index. The corner index hides when the card is narrower than 84px; the label hides at ≤480px.
- **Hover:** lifts 3px and the hairline strengthens to `--line-strong`.
- **One tap is the vote:** tapping a card sends it at once; tapping another changes it until the reveal. The status line beside "Your estimate" reads "Sending…", then "Sent · 13 points · tap another card to change", or a red "Not sent" if the server refuses or times out.
- **Voted** (`aria-pressed="true"`): lifts 8px, with a 2px terracotta rim, a deep-roof-tile number and a short 3px terracotta bar near the bottom. While sending, the bar pulses.
- **Keyboard:** toggle buttons with a roving focus; arrow keys move focus only, Enter or Space votes. Anywhere outside a text field, typing a card's number votes (multi-digit values wait 600ms for the next digit). The facilitator also has Shift+R to reveal and Shift+N for a new round. A hint under the deck shows only where `(hover: hover) and (pointer: fine)`, with keys set as small enamel `<kbd>` caps: a `--line` hairline with a `--line-strong` bottom edge.
- **After reveal:** cards are `disabled` and the deck folds to its heading line, which reads "You voted 8 points. Waiting for the facilitator." (or "You didn't vote."). New round unfolds it.

### Buttons
- **Shape:** bevelled 5px, at least 46px tall, Archivo 600. Compact buttons are 38px at 0.9375rem.
- **Primary:** terracotta face with `--on-primary` text (Start the room, Take a seat, Open a room). Hover turns it deep roof tile. In dark it is the muted night primary with dark text.
- **Signal:** groc face with `--on-groc` text and no rim (Reveal votes, New round); hover lightens to groc hover. Reveal carries a live voted count ("Reveal votes · 3/5"), and its accessible name reads "Reveal votes, 3 of 5 voted".
- **Danger:** transparent face with a 1px vermell hairline and vermell text. Hover floods it `--vermell-fill` with `--on-color` text (End session, End for everyone).
- **Quiet:** enamel face with a 1px `--line-strong` hairline. Hover darkens the hairline to ink and tints the face 30% toward panot (Copy link, which reads "Copied" for 2s; Deal another round; Read the code on GitHub).
- **All buttons:** press nudges 1px down; disabled is 45% opacity.

### Inputs / Fields
- **Style:** enamel, square, with a 1px `--line-strong` border and 46px minimum height (the invite link field is 42px, in weathered ink). Hover darkens the border to weathered ink.
- **Focus:** the border turns terracotta, plus a 3px terracotta-mist halo.
- **Error:** vermell 600 text at 0.9375rem with an 18px warning icon below the field.
- **Labels:** sentence case, with "optional" in faded ink at 400.

### Rail & Countdown
- **Rail:** the full-width terracotta band. It holds a flag with an enamel keyline, the POKERESTIMA wordmark linking to `/` (accessible name "PokerEstima home"), and the tagline. Focus rings inside the rail are `--on-color`, because a terracotta ring would vanish into it.
- **Support link (rail):** on every page except a room (the room render passes `inRoom`), a hairline plate just before the theme toggle: an 18px stroked Ko-fi cup with a filled heart and "Support on Ko-fi" in Archivo 500 at 0.875rem, linking to the maintainer's Ko-fi page in a new tab. Same 36px height, 1px `--on-color` hairline at 45% and 14% hover wash as the toggle. At ≤480px it collapses to a 34px icon-only plate (accessible name "Support PokerEstima on Ko-fi"). It uses the rail's own colours, never Ko-fi purple.
- **Theme toggle:** the last item in the rail, a 36px bevelled plate (34px at ≤480px) with a 1px `--on-color` hairline at 45% and an 18px stroked icon: a moon in light, a sun in dark (the theme it switches to). Hover washes it with 14% `--on-color`. Its accessible name reads "Switch to dark theme" or "Switch to light theme".
- **Countdown:** "Closes in" plus tabular mm:ss. On the page it is an enamel plate with a `--line` hairline; in the rail it is a transparent plate with the same 45% `--on-color` hairline as the toggle, so the band stays one calm field. Under 2 minutes the face turns groc (no rim) and the digits vermell on groc. It counts down to the room's real expiry from the server (corrected for local clock skew), so late joiners and reloads see the true time; at 0:00 the label reads "Closing" until the server closes the room.

### Results (the split)
- **Average:** a large Archivo numeral beside the split, separated by a panot-joint rule, with "Nearest card 8" under it (the deck value closest to the average; ties go to the larger card). They stay side by side down to 360px so a full table's result fits above the facilitator bar; below 360px they stack. The block rises in over 420ms.
- **Split rows:** the value, a small emoji, then **one 18px bevelled block per vote** (4px apart) and a ×count. The bar length *is* the count. The most-voted rows use terracotta blocks; the others use pale terracotta.

### Closing-soon prompt
The facilitator's one chance to add time.
- **When:** only for the facilitator, only in the room's last 2 minutes, and only if the room hasn't been extended.
- **Look:** a groc strip with no rim, bevelled 5px: "The room closes soon." (600) plus a compact enamel "Add 5 minutes" button without its hairline. On desktop it sits at the left of the action row; on narrow screens it stacks above Reveal in the facilitator bar.
- **After:** everyone's countdown jumps forward and players get a toast, "The room has 5 more minutes".

### Links in the task
Plain URLs in the description become links that open in a new tab: ink text with a 1px terracotta underline at a 0.22em offset, turning deep roof tile with a 2px underline on hover. They wrap anywhere so long URLs never overflow. The open-a-room note's link uses the same treatment.

### Confirmation dialog
Used only for ending the session, the one action that can't be undone.
- **Element:** a native `<dialog>` opened with `showModal()`, so focus is trapped and Esc cancels. Browsers without it fall back to `confirm()`. It sets `margin: auto` because the global reset removes the browser's centring.
- **Look:** an enamel sheet with a `--line` hairline and the dialog shadow, bevelled 12px, max 440px, over the 40% ink backdrop, rising in over 320ms.
- **Content:** a carved-caps title ("End this session?"), one plain sentence on the consequence, then "Keep the room" (quiet, focused first) and "End for everyone" (danger). On narrow screens the buttons stack with "Keep the room" at the bottom.

### Toasts
Ink plates (bevelled 5px, Archivo 500, enamel text) just under the rail (`--rail-h` + 0.75rem): top-right on desktop, top-centre at ≤760px, so they never cover the wordmark, the countdown or the facilitator bar. The toasts carry their own `role=status` / `role=alert`; the container is not a live region, so nothing is announced twice. A separate visually hidden status region announces the reveal ("Votes revealed. Average 7.2, nearest card 8. 3 for 5, 1 for 8, 1 for 13."). Errors are `--vermell-fill` with an 18px warning icon. They are plain text, without emoji.

### Landing (`/`)
The landing page reuses plaques, the split, the countdown, buttons and fields at their room styles; only the pieces below are its own.
- **Hero copy:** the carved hero headline ("Team agrees: it's an 8", with the figure pulled out into terracotta Archivo) and a weathered-ink lede. Nothing sits above the headline.
- **Open a room:** the working form (your name and task title, posting to `/register`) on an enamel face with a `--line` hairline, bevelled 12px, 2rem padding (1.5rem at ≤560px). A carved title, the fields, a full-width primary "Open a room", and a 0.875rem note linking to `/play` to add a description or links.
- **The sample round:** a bevelled 12px field with a `--panot-line` hairline over the panot de flor texture. Five revealed plaques (min 112px, 96px at ≤560px, 2.125rem number boxes) stamp in on the standard stagger; the results sit on an enamel face with a `--line` hairline, the split's blocks grow in from the left (360ms, starting at 420ms, 60ms per block), and the headline figure stamps at 420ms. A caption says it is a sample with made-up names, beside a compact quiet "Deal another round" button (shown only when the script runs). It deals a new round, rewrites the headline around the new figure and re-stamps everything.
- **Notes:** two plain columns, each a 1.25rem carved title, a figure built from real components (mini plaques waiting and voted; the countdown at 10:00), and 48ch weathered-ink text.
- **How a round goes:** a carved title with a short weathered-ink meta line, then four steps. Each step sits under a small figure built from real parts (a focused field, a link with a Copy chip, three 46px mini cards with one picked, a revealed mini plaque), then an Archivo 600 title numbered "1." in terracotta, then weathered-ink text.
- **Support note:** centred, with a carved title, 54ch weathered-ink text, the Ko-fi widget (with a primary-button `<noscript>` fallback) and a quiet "Read the code on GitHub" button with an 18px GitHub mark.

## Do's and Don'ts

### Do:
- **Do** bevel every plaque, card, button and sheet with `corner-shape: bevel` behind `@supports`, and let unsupported browsers fall back to square.
- **Do** draw faces with a single 1px hairline: `--line` for faces, `--line-strong` for inputs, controls and dashed waiting boxes.
- **Do** show state by line form as well as colour: dashed for waiting, a yellow fill for voted, struck through and dotted for offline.
- **Do** set numerals in Archivo 600 with tabular figures, and words on plaques, titles and section heads in Marcellus uppercase.
- **Do** keep the terracotta rail as the one committed colour field on every page; below it, terracotta marks the primary action, selection and the top of the split, never a background.
- **Do** build landing figures from the real components (plaques, split, countdown, cards) so the page shows the product itself, and label sample data as a sample.
- **Do** keep the whole deck in the first screen at 390×844 and in a 420px window beside a call.
- **Do** compose the dark theme by remapping roles (`--panot`, `--enamel`, `--ink`, `--line`, `--line-strong`, `--rail`, `--primary`), never by inverting; text on groc stays `--on-groc` and text on the rail or a vermell fill stays `--on-color` in both themes.
- **Do** honour `prefers-reduced-motion`. All lifts, stamps and rises collapse to near-instant.

### Don't:
- **Don't** round corners, and don't use pills.
- **Don't** double a rim or thicken an ink outline for emphasis; emphasis is a 2px terracotta rim.
- **Don't** use gradient fades, glass, blur or gradient text. This world replaced exactly that look. The panot de flor is a stroked tile, not a fade.
- **Don't** use yellow or red decoratively. Yellow is "voted / act now" and red is "ending", nothing else.
- **Don't** warm the panot ground toward cream.
- **Don't** set numbers in Marcellus.
- **Don't** set type at 700; the quiet edition stops at 600.
- **Don't** put emoji in chrome (buttons, headings, toasts). Emoji live only on cards, as the card's meaning.
- **Don't** reintroduce the ad sidebar or any side column that narrows the room.
- **Don't** put the Ko-fi widget, or any support prompt, in a room. The widget lives only in the landing page's support note; the rail's Ko-fi link shows on the landing, create and join pages and is left out of rooms.
- **Don't** float a small uppercase line above a headline. That is a kicker, not part of this world; the hero opens on the carved headline.

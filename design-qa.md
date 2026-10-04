# Design QA

Result: passed

## Scope
Dictionary page implemented from dictionary.png; shared purple theme, header and bottom navigation applied to the existing app. The other supplied screens informed the shared style and were not reproduced pixel for pixel.

## Evidence
- Reference: /Users/alex/Desktop/dictionary.png
- Desktop viewport: 1584 × 993; outputs/dictionary-redesign.png
- Side-by-side review: outputs/dictionary-comparison.jpg (same viewport)
- Mobile viewport: 390 × 844; outputs/dictionary-mobile.png

## Visual acceptance
White rounded dictionary cards, two columns, lavender background, actual source book illustration and logo, purple filters/search/add action, top profile/stat pills, persistent bottom navigation reproduced. Mobile has one column and no document overflow (scrollWidth = innerWidth = 390).

Fixed during review: oversized eyebrow, illustration hard side boundaries, mobile profile clipping, server crash when a resource is missing.

## Functional observations
Search for книга returned kniha; word filter returned the word subset; add-word flow created učiteľ in local preview; favorite persisted across reload and was restored to its original state; all four bottom navigation routes displayed their matching headings. Browser error log empty. Audio visibility still depends on the browser providing a Slovak voice; audible pronunciation was not independently assessed.

## Minor differences / P3
Existing live data preserved: 98 base cards plus one locally added preview card, versus 63 shown in the mockup. Existing ordering remains. Small horizontal offsets, type metrics, icon artwork and background confetti differ from the reference. Icons use Bootstrap Icons; main illustration and logo use crops of the supplied reference.

No outstanding P0–P2 findings in this dictionary scope.

## Illustration containment follow-up — 2026-10-04
Source visual truth: /Users/alex/Desktop/practice.png and the supplied illustration sheet.
Scope: containment, readable text, consistent illustration frames; exact reconstruction of every mockup remains outside this correction.
Viewports: 1584×993 desktop, 390×844 mobile (CSS pixels; screenshots at 1×). Reference practice normalized to 1584×993. Combined comparison: outputs/layout-comparison.jpg. Final desktop evidence: outputs/layout-practice-final.png, outputs/layout-today-final.png. Full-page captures for all four routes: outputs/layout-desktop-*.png, outputs/layout-mobile-*.png (their height exceeds viewport).

Earlier P2 findings: absolute lesson artwork overlapped titles; hero image exceeded its allocated grid track; progress art compressed heading; narrow practice text conflicted with arrows.
Fixes: explicit grid tracks, flow-positioned art, minimum-zero text tracks, consistent lavender rounded image frames; wider practice menu and reserved arrow space.
Post-fix evidence: all four routes loaded their images without horizontal page overflow at both viewports; mobile card image containment count 0, desktop today count 0. Screenshots inspected for typography, spacing, colors, image quality, and retained copy. Full-view combined reference comparison inspected; individual full-size cards/mobile images also inspected for wrapping. No functional logic changed.
Residual differences: artwork now uses the user-supplied newer sheet; its backgrounds are retained rather than transparent. General mockup typography/header illustration scale differs; this correction accepts these existing differences. Decorative hero art is hidden on narrow mobile to preserve space.
Final result: passed

## Transparent asset correction
All 18 illustration PNGs replaced with image-generation cutouts with real alpha; contact sheet on white inspected in outputs/assets-transparent-white.png. Removed image backgrounds and list thumbnail parent backgrounds. Desktop art sizes: home mini 185×165, practice 92×92, list thumbnail 112×66; mobile practice65×65 and list58×58. Explicit thumbnail height fixes earlier clipping. Header book illustration raised to avoid search overlap. Practice hero positioned without increasing menu header height.
Source: Desktop main.png, practice.png, lesson.png, dictionary.png. Comparison evidence: outputs/transparent-compare-*.jpg, implementation outputs/transparent-final-*.png. Normalized comparison at1584×993, density1×. Main layout still differs from reference; this task covers background removal and image sizing rather than redoing screen architecture. Current data count also differs intentionally. All four mobile routes390×844 had zero horizontal overflow and zero images outside card bounds; desktop images loaded on all four routes. Typography/copy unchanged; white/lavender palette retained; image edges inspected on white. No outstanding P0–P2 issue in transparency/containment scope. Final result: passed.

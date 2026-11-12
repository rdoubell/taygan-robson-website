# 1INC motion studio rules

Each film lives in its own folder (e.g. `glp1/`) with an `index.html`, `timeline.json`
(voice cue offsets) and `audio/`. Shared code lives here: `render.mjs`, `lib/motion.js`, `fonts/`.

## Render contract
- Every film is a pure function of time: `window.seek(t)` paints frame t onto `<canvas id="c">`.
- No CSS transitions, no setTimeout, no requestAnimationFrame in render mode,
  no state carried between frames. Seeded noise only, never Math.random.
- The page sets `window.__ready` (a Promise) that resolves once fonts and images are loaded.
- Render: `node ../render.mjs --dur <s>` from inside the film folder. H.264 yuv420p, CRF 16.

## Look (1INC brand)
- Navy #1B2A4A / deep #14213D, cream #F7F6EF, gold #C7A14C. One accent: gold.
  Red-amber #B23A48 only for an explicit "problem" state.
- Montserrat 800–900 headlines ending in a full stop, one gold phrase per headline.
  Gold eyebrows in tracked caps. Source Sans 3 for body. Real logo PNGs only.
- Banned: centered title on a gradient, everything fading in, corner labels and frame
  borders, glow on UI, generic particle bursts.
- Every 2 to 4 seconds something new must happen on screen.

## Copy (1INC brand voice)
- Never: PT, personal trainer, fitness, wellness, coach/coaching, transformation, journey,
  workout, training, client, S&C (except Taygan's degree in his credentials line).
- Use: consultation, specialist, assessment, programme, periodised, performance, athletes,
  active individuals.

## Sound
- Voice clips from ElevenLabs are the timeline. Music + SFX synthesized in code.
- Music ducks under the voice. Final mix -14 LUFS.

## Loop before showing anything
1. Render one still per beat as a contact sheet and LOOK at it.
2. Score 1-10: hook in first 2s, readability at phone size, motion quality, variety,
   brand accuracy, sound sync.
3. Fix the 3 worst problems. Repeat until every score is 8+.
4. Only then do the full render.

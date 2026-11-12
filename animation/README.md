# 1INC motion studio

Instagram Story animations rendered entirely from code (Playwright + ffmpeg).
House rules for Claude live in `CLAUDE.md`.

## Films
- `glp1/` — Campaign 02, GLP-1 (9:16, ~56s, voice by ElevenLabs "Peter").

## Make a video (from inside a film folder, e.g. `cd glp1`)
```bash
node ../render.mjs --dur 56.5 --fps 60 --sub 4   # pictures -> out/silent.mp4
node ../mix.mjs                                  # music + SFX + voice -> out/final.mp4
```
Quick checks:
```bash
node ../render.mjs --stills 1,5,10,20            # single frames -> out/stills/
open index.html#play                             # live preview in a browser (no sound)
```

## Swapping in photos
Drop JPGs into the film's `assets/` folder and re-render; no code changes:
- `photo-hook.jpg` — scene 01 (hook)
- `photo-reveal.jpg` — scene 06 (1INC reveal)
Until they exist, a navy placeholder is drawn. Portrait photos (1080×1920 or larger) work best.

## Layout
- `render.mjs` — renders frames by calling `window.seek(t)` on the page.
- `mix.mjs` — synthesizes music/SFX, ducks music under the voice, -14 LUFS.
- `lib/motion.js` — closed-form springs (no easing curves).
- `fonts/` — Montserrat + Source Sans 3 (local, so renders are identical offline).
- `<film>/timeline.js` — voice clip offsets and phrase cues; the one place to change timing.

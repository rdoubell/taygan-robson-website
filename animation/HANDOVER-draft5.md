# 1INC GLP-1 Story — Draft 5 handover (21 Oct 2026)

Read this together with HANDOVER.md and CLAUDE.md. This file supersedes their script and timings.

## Status
- The pictures are approved as a first draft for the client: `glp1/index.html` + `glp1/timeline.js` (draft 5f).
  Silent preview: `1INC-GLP1-Story-draft-v5f-preview.mp4`.
- The voiceover is recorded as ONE continuous take but not yet processed. That is the next job.
- Review hub (Campaign Studio artifact): https://claude.ai/artifact/5NHczQX46M7nkwGsuY5qLZ
  It runs its own copy of the film (`film.js`, built from `glp1/index.html`). Rebuild and republish it after retiming.

## Scene order (draft 5f)
| Key | Scene | Notes |
|---|---|---|
| s1 | Hook | Pens fan in over "GLP-1 medication" → "The scale drops fast." → pens exit right → "But what's actually lost?". No top logo. |
| s3 | The block | Scale 98 → 86 kg. One white block builds ("12 kg lost"), the bottom third wipes gold, then FAT · 8 kg / MUSCLE · 4 kg. Caption: "Research: up to 1 in 3 kg lost can be muscle." |
| sm | The mistake | "Don't take GLP-1 medication without a structured strength programme." Plan card: medication ✓, strength programme MISSING. |
| s4 | Less… | Less muscle. / energy. / performance. |
| s2 | SA stat | Ranking chart #170 (2023) → #12 (2024) → #1 (2025) → caption "And it's here to stay." |
| s5 | Taygan | Photo, credentials, chips: nutrition / strength / performance. |
| s6 | Book | The phone slides up from the bottom and covers the footer; then the logo + 1inc.co.za rise from behind it. |

The footer (logo + 1inc.co.za) shows at the bottom for the whole film until the phone covers it.

## Voiceover (approved script, as sent to TTS)
> GLP1 medication makes the scale drop fast. But what is it actually taking off? Research has shown up to a third of the total weight lost can be muscle. So don't make the mistake of taking GLP1 medication without a structured strength programme. Less muscle. Less energy. Less performance. In just two years, GLP1s became South Africa's best-selling medicine. And it's here to stay, so the plan around it matters. One ink builds that plan: nutrition, strength and performance. Book a GLP1 consultation at one ink dot co zah.

- Take: Peter (voice_id `wldVCiOxtkWPlsr2mHyo`), eleven_v4, 523 credits, **37.44 s raw**.
- Flow: https://elevenlabs.io/app/flows/feqqBZlEQQe8OsNAEwvQ — generation `lyhVexIgATaXf6jCDVfJ`, history item `xmafCcOaqcCJpBJ5ywni` (newest take on the flow).
- Download it from the Flow or the ElevenLabs history, and save it as `glp1/audio/v5/take1.mp3`.

## Next steps
1. **Process:** tighten long pauses to about 0.2 s and speed up 10%, as in draft 4:
   `ffmpeg -i audio/v5/take1.mp3 -af "silenceremove=stop_periods=-1:stop_duration=0.22:stop_threshold=-40dB:stop_silence=0.18,atempo=1.10" audio/v5/take1-fast.wav`
   Target: the voice ends by about 28 s, so the end frame holds about 2 s. If it is still over about 28.5 s, tell the user before doing anything else. The options are:
   - (a) atempo 1.15;
   - (b) re-record without "of the total" and "so the plan around it matters" (about 480 credits, generations_count: 1);
   - (c) a 32 s film. The client asked for a 30 s maximum.
2. **Measure word times:** run silencedetect on the processed file, or a word-level transcription. Get the start time of each sentence and of the key words.
3. **Retime `timeline.js`:** use one voice entry `{ file: 'audio/v5/take1-fast.wav', at: 0.3 }`. Then set:
   - **Scene starts:** each scene starts about 0.15 s before its sentence.
     - s3 → "Research…"
     - sm → "So don't…"
     - s4 → "Less muscle"
     - s2 → "In just two years…"
     - s5 → "One ink…"
     - s6 → "Book…"
   - **Hook cues:**
     - `goldPen` → "makes the scale…"
     - `pensOut` → just before "But what…"
     - `question` → "But what…"
   - **The block:**
     - `weigh` → the start of s3 + 0.3
     - `split` → "a third"
     - `muscle` → "muscle"
   - **The mistake:** `planIn` / `row1` / `row2` / `missing` spread across that sentence, with `missing` on "strength programme".
   - **Less:** `less1` / `less2` / `less3` on each "Less".
   - **SA stat:** spread `card`, `p2023`, `p2024`, `p2025` across "In just two years… best-selling medicine". Put `stay` on "here to stay".
   - **Taygan:** `oneInk` on "One ink"; `nutrition` / `strength` / `performance` on those words.
   - **Book:** `phoneWipe` on "Book"; `brandUp` about 0.9 s later.
   - **SFX list:** move it to the new cues.
4. Check stills every 0.5 s and the safe zone (text within y 270–1250, x 65–1015).
5. **Render:**
   - `node ../render.mjs --dur 30 --fps 60 --sub 2` → `node ../mix.mjs`
   - organic cut: composite the footer per HANDOVER.md, or `--variant organic` (the footer is now always on; the organic variant adds the gold progress bar).
6. Save as `1INC-GLP1-Story-draft-v5-ad.mp4` and `-organic.mp4`.
7. **Update the hub:**
   - Copy `timeline.js` into the hub.
   - Rebuild `film.js`: wrap the script body in an IIFE and replace the VARIANT line with `let VARIANT='ad'; window.setVariant=v=>{VARIANT=v}`. Drop the `window.__ready.then(...)` block.
   - Update the SCENES key times.
   - Put the mixed audio at `audio/mix.mp3`, and set the "Old voice" button back to "Sound".

## Sound (client notes, 21 Oct 2026). Apply these in `mix.mjs` before the draft-5 render.
The draft-4 mix had two problems. The client didn't like the click sound. And the music overpowered the voice, especially towards the end.
1. **No clicks.** Remove every `click` from the `sfx` list in `timeline.js`. Remove the `tick`s too; they're the same family. Keep only soft `whoosh`es on scene changes and a few gentle `pop`s on the chart points and the block split, at a lower level.
2. **Music sits well under the voice.**
   - Cut the music bed by about 6 dB overall: `pad` 0.035 → about 0.018, `kick` 0.12 → about 0.06. Drop the `hat`, or halve it.
   - Duck harder: `sidechaincompress=threshold=0.01:ratio=10:attack=20:release=800`.
   - In the final `amix`, use weights of about `1 0.5 0.6` (voice, music, SFX).
   - Target: during speech, the voice is at least 12–15 dB louder than the music. Check it by rendering the voice-only and music-only stems and comparing their loudness with `ebur128`.
3. **The ending stays quiet.**
   - The music must not swell back up after the last line. Hold it ducked through the end frame, and start its fade at "Book…" so it is gone by the last frame.
   - Make sure `loudnorm` isn't pushing the music up in the gaps. If it is, normalise the voice stem on its own first, then mix the music in at a fixed lower level.
4. Before the full render, export `out/mix.wav` and play the last 8 seconds to check the balance.

## Clean-up of `animation/` (the user asked for this on 21 Oct)
Move everything below into `animation/_to_delete/`, keeping its folder structure, with `mv`. Don't `rm`. Then show the user the list so they can check it and bin the folder. Stay inside `animation/`; ask before touching anything elsewhere in `client-websites/`.
- **Old renders:** `1INC-GLP1-Story-draft-v1.mp4`, `-v2.mp4`, `-v3.mp4`, `-v5c-preview.mp4`, `-v5d-preview.mp4`, `-v5e-preview.mp4`, `GLP1-draft2-storyboard.png`
  - Keep `-v4-ad.mp4` and `-v4-organic.mp4` (the last cut the client saw) and `-v5f-preview.mp4`.
- **Old film code:** `glp1/index-v1.html` (archived 56s v1; it doesn't run anymore)
  - Keep `index-v4.html` and `timeline-v4.js` until draft 5 is signed off.
- **Scratch output:** all of `glp1/out/`, including `stills/`. It's regenerated by every render. Recreate an empty `glp1/out/` afterwards.
- **Old audio:** `glp1/audio/01.mp3`–`06.mp3`, `glp1/audio/fast/`, `v1/`, `v2/`, `v3/` and `tests/` (draft 1–4 takes and pronunciation tests)
  - Rename `glp1/audio/New tts node.mp3` (the first 37s take) to `glp1/audio/v5/take1-37s.mp3`, and keep it as a backup.
  - The new short take becomes `glp1/audio/v5/take2.mp3`.
- **Unused assets:** `glp1/assets/site-contact.png` and `site-home.png`. The film only loads `site-booking.png`, `taygan.jpg` and `1inc-gold.png`.
- **System files:** every `.DS_Store`.
- **Update, don't delete:**
  - `glp1/voice-script.md`: replace it with the draft-5 script and sources.
  - `HANDOVER.md`: add a line at the top pointing to `HANDOVER-draft5.md`.

## Still open
- The client's iPhone mockup PNG will replace the code-drawn phone in `phone()` (index.html). The screen is `assets/site-booking.png`, and the button should go to the pricing page.
- "Strength programme" is used because "training" is banned. Ask whether Taygan wants "training" allowed here.
- "Two years" (2023 → 2025) is used rather than "three", to match the sources.

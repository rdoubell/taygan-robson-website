> **Superseded for draft 5:** read `HANDOVER-draft5.md` first. It replaces this file's script, timings and audio plan (21 Oct 2026).

# 1INC GLP-1 Story Animation — Handover

_Last updated: 16 Oct 2026. Paste this whole file into a new chat to continue the project._

---

## 1. What this is

A **30-second, 9:16 (1080×1920) Instagram Story / Reels ad** for **1INC Consulting** (Taygan Robson, www.1inc.co.za),
Campaign 02 — GLP-1 & Peptides. It is rendered **entirely from code**: an HTML canvas page with a
`window.seek(t)` function draws any frame; Playwright screenshots every frame; ffmpeg encodes the MP4
(method from the "How to Build a Motion Design Studio With Opus 5.5" guide).

**Goal of the ad:** educate GLP-1 users that weight lost isn't all fat (muscle loss), and nudge them to
**book a GLP-1 consultation** at 1inc.co.za. **No price is shown** (client decision).

**Current version:** draft 4 → `1INC-GLP1-Story-draft-v4-ad.mp4` (Reels-ad cut) and `1INC-GLP1-Story-draft-v4-organic.mp4` (organic cut with footer). 30.0s, 60fps.

---

## 2. Brand rules (always apply)

| Rule | Value |
|---|---|
| Background | Navy `#1B2A4A` (deep `#14213D` vignette) + faint dot grid. Every scene. |
| Text | **White**, with **gold `#C7A14C`** accents/icons. Exception: scene 1 myth = red `#E5484D`, fact = green `#30C77B`. |
| Card fill | `#22355A` @ 92%, 2px white @ 9% border, radius 40–48 |
| Fonts | **Montserrat** 700–900 (headlines/UI), **Source Sans 3** (body/labels) |
| Headline size | 56–76px, tight, **centred** (client dislikes big text) |
| Safe zone | All text inside **y 270–1250, x 65–1015**. Bottom ~35% is covered by Meta's Reels-ad caption + CTA. |
| Logo | Real PNGs only: `assets/1inc-gold.png` (also navy/white). Keep it small (~130–200px wide). |
| Banned words | PT, personal trainer, fitness, wellness, coach/coaching, transformation, journey, workout, training, client, S&C (except Taygan's degree) |
| Preferred words | consultation, specialist, assessment, programme, periodised, performance, athletes, active individuals |
| Banned looks | Centred title on a gradient, everything fading in, glow on UI, generic particle bursts, corner labels/frame borders |
| Don't name | "Ozempic"/"Wegovy" in ads (Meta prescription-drug ad policy). Pens must be **unbranded**. |
| Motion | Closed-form **springs**, not easing curves. Something new every 2–4s. One idea per scene. |

**Pronunciation (for TTS only — always write the voice prompt like this):**
| On screen | Write in the TTS prompt | Why |
|---|---|---|
| 1INC | `One ink` | client's pronunciation |
| 1inc.co.za | `one ink dot co zah` | client's pronunciation |
| GLP-1 / GLP-1s | `GLP1` / `GLP1s` (no hyphen) | **client-approved (test A, 16 Oct 2026)** — the hyphen made Peter pause between "P" and "one" |

---

## 3. The script (draft 4)

| # | Time | Voice line (as spoken) | On screen / animation |
|---|---|---|---|
| 1 | 0–6.2s | "GLP1 medication works. But the weight you lose isn't always fat. Up to a third can be muscle." | **Opens on 3 unbranded pens** (fanned, gently floating) + "GLP-1 **medication**" + **1INC logo top-centre**. At 2.1s pens swipe off sideways. Red **MYTH** tag + "The weight you lose / is all fat." (red) → white strike-through at 3.3s, myth dims → green **FACT** tag + "Up to 1 in 3 kg lost / can be muscle." (green) at 4.38s. "Myth/Fact" are **never spoken**. |
| 2 | 6.2–12.3s | "In two years, GLP1s went from a hundred and seventieth to South Africa's best-selling medicine." | Dashboard card "Medicine ranking": line chart, years 2023–2025 on x, rank (#1–#200, log scale) on y. Line grows **organically** (wobbles, hesitates) through **#170 (2023) → #12 (2024) → #1 (2025)**. Caption under card swaps **horizontally**: "2023 #170 in medical aid spend" → "2024 #12…" → "2025 #1 best-selling medicine". Small sources line on card. |
| 3 | 12.3–16.2s | "Twelve kilos down on the scale? Up to four of them could be muscle." | Smart-scale app card: weight ticks **98.0 → 86.0 kg**, chip "−12 kg ✓". Cursor taps "View breakdown →". One **12 kg bar** fills, then the first third splits off in gold: **MUSCLE 4 kg** / **FAT 8 kg**. Chip flips to "4 kg was muscle". |
| 4 | 16.2–19.8s | "Less muscle. Less energy. Less performance." | "Less **muscle.**" → "Less energy." → "Less **performance.**" — last word swaps **horizontally**, colours alternate gold/white/gold, underline resizes to each word. Transition in: the gold muscle bar stretches into the underline. |
| 5 | 19.8–24.4s | "One ink builds the plan around your medication, nutrition and performance." | "performance." flies down into a chip. Eyebrow "YOUR GLP-1 SPECIALIST", subtle credentials ("MSc Sports Injuries & Return to Performance" · "PgDip Performance Nutrition · Distinction"), Taygan's photo in a gold rounded frame + badge "Taygan Robson · Consultant". Chips **medication / nutrition / performance** tick ✓ on the voice. |
| 6 | 24.4–30s | "Book your GLP1 consultation at one ink dot co zah." | Chips merge into a gold pill button "Book your GLP-1 consultation" → cursor taps → button grows into a **phone** showing the real 1inc.co.za booking screen. Small gold logo + "1inc.co.za" above. Fade to black last 0.5s. |

### Sources for claims (keep on-screen source line)
- **#170 (2023) → #12 (2024):** Mediscor Medicines Review 2024 (published Sept 2025) — medical-scheme medicine spend (Ozempic/semaglutide). Via Spotlight, Feb 2026.
- **#1 best-selling medicine (Nov 2025):** Mounjaro (tirzepatide) per IQVIA sales data, quoted by Aspen CEO Dr Stavros Nicolaou. Via Spotlight, Feb 2026. ⚠ IQVIA data isn't public, and the #1 is a different metric (sales) from #170/#12 (medical-aid spend) — client should be comfortable with this framing.
  - https://www.spotlightnsp.co.za/2026/02/04/blockbuster-weight-loss-and-diabetes-medicines-sales-surge-despite-cost-barriers/
- **"Up to a third can be muscle":** clinical range of 25–40% lean-mass loss on higher-dose incretin therapy (1INC Creative Library research).
- **No newer published rank exists** for 2026; that's why the chart ends at 2025.

---

## 4. Voice (ElevenLabs)

- Connector: ElevenLabs (voice-only "creative" connector) is connected in Claude. For SFX/music, the
  **full** connector would be needed: Settings → Connectors → Add custom connector → `https://api.elevenlabs.io/v1/mcp`.
- Voice: **Peter — Warm & articulate educator**, South African English, `voice_id: wldVCiOxtkWPlsr2mHyo`
- Model: **eleven_v4**. Always `generations_count: 1` (connector default is 4 = 4× cost).
- Flow (all takes live here): https://elevenlabs.io/app/flows/feqqBZlEQQe8OsNAEwvQ
- Plan: Starter (75,000 chars/month on v4). Spend so far ≈ **1,500 credits** total (v1 700, v2 344, draft-3 161, pronunciation tests 52, GLP1 re-record 238).
- Processing: `audio/fast/*.wav` = takes with long pauses tightened to ~0.2s and **sped up 10%**
  (`silenceremove … stop_duration=0.22:stop_silence=0.18, atempo=1.10`) so the film fits 30s.

---

## 5. Project files (`1inc/animation/`)

```
animation/
  HANDOVER.md          ← this file
  CLAUDE.md            house rules for Claude (render contract, look, sound, critique loop)
  README.md            how to render
  render.mjs           Playwright frame renderer → out/silent.mp4 (--stills, --variant, --out)
  mix.mjs              synth music bed + SFX, ducks under voice, loudnorm -14 LUFS → out/final.mp4 (--in/--out)
  serve.mjs            local server for the browser scrubber (port 5190)
  lib/motion.js        springs: spring(), track(), ui/type/heavy presets
  fonts/               Montserrat + Source Sans 3 (local woff2)
  glp1/
    index.html         THE FILM (all scenes, transitions, ?variant=organic footer, #scrub/#play modes)
    index-v1.html      archived 56s v1 (won't run with current timeline)
    timeline.js        voice offsets, scene starts, every cue time, SFX list — the ONE place for timing
    voice-script.md    script + sources
    audio/01–06.mp3    current takes · audio/fast/*.wav processed · audio/v1, v2, v3 archives · audio/tests
    assets/            logos, taygan.jpg, site-booking.png (live booking modal), site-home.png
    refs/              5 carousel reference slides from 1INC's Instagram
    out/               renders, stills, storyboard (git-ignored)
  1INC-GLP1-Story-draft-v1/v2/v3.mp4, draft-v4-ad.mp4, draft-v4-organic.mp4, GLP1-draft2-storyboard.png
```

### Commands (run inside `animation/glp1/`)
```bash
node ../render.mjs --dur 30 --fps 60 --sub 2                                   # Reels-ad cut, pictures
node ../mix.mjs                                                                 # + voice/music/SFX → out/final.mp4
node ../render.mjs --dur 30 --fps 60 --sub 2 --variant organic --out out/silent-organic.mp4
node ../mix.mjs --in out/silent-organic.mp4 --out out/final-organic.mp4        # organic cut with footer (full browser render)

# Lighter way to make the organic cut (used for draft 4, when the Mac was low on memory):
# composite the footer onto the finished ad cut. assets/footer-organic.png comes from footer.html.
ffmpeg -y -i ../1INC-GLP1-Story-draft-v4-ad.mp4 -loop 1 -framerate 60 -t 30 -i assets/footer-organic.png -filter_complex \
 "[1:v]format=rgba,fade=t=out:st=26.1:d=0.45:alpha=1[f];color=c=0xC7A14C:s=440x6:r=60:d=30,format=rgba[g];\
  color=c=black@0.0:s=440x6:r=60:d=30,format=rgba[z];[z][g]overlay=x='-440+440*t/30':y=0:eval=frame:format=auto,\
  fade=t=out:st=26.1:d=0.45:alpha=1[bar];[0:v][f]overlay=0:0[v1];[v1][bar]overlay=320:1550:format=auto,format=yuv420p[v]" \
 -map "[v]" -map 0:a -c:v libx264 -crf 16 -c:a copy -t 30 ../1INC-GLP1-Story-draft-v4-organic.mp4
# (26.1 = cue.phone + 0.3 — update it if the timeline changes)
node ../render.mjs --stills 1,5,10                                             # single frames → out/stills/
node ../serve.mjs   # then open http://localhost:5190/glp1/#scrub  (frame-by-frame scrubber)
```
A full 60fps render takes ~6 minutes on a healthy machine. If the Mac is low on free RAM (long-running apps), headless Chrome crawls/crashes — restart apps, or render in chunks with --from/--to.

### Key timings (from `timeline.js`)
Scenes: s1 0 · s2 6.2 · s3 12.3 · s4 16.2 · s5 19.8 · s6 24.4 · end 30.0 (CTA holds ~1.9s after the last word).
Voice clip starts: 0.35 · 6.35 · 12.45 · 16.35 · 19.95 · 24.55.

---

## 6. Decision log (what the client asked for, in order)

1. Built Campaign 02 (GLP-1) first. Voice first, animation timed to the voice.
2. Replaced unsourced "100 000 South Africans" claim with the sourced rank stat.
3. Removed price from CTA → booking nudge. 1INC pronounced "One ink"; URL "one ink dot co zah".
4. v1 was 56s → cut to **30s max**. Dropped the long "without a plan" scenes → one snappy statement (scene 4).
5. SaaS-style direction: UI cards, smaller centred type, creative transitions; navy bg, white text + gold.
6. Graph: years on x, organic growth, horizontal caption swaps. 12 kg = **one bar**, a third = muscle.
7. Scene 5: Taygan's photo in a frame with subtle credentials (not all of them).
8. Opening rewritten: "Everyone's on GLP-1, almost nobody has a plan" rejected (most people *do* have a plan).
   Chose educational **Myth vs Fact**; "myth/fact" shown, not spoken; myth red → struck out → fact green.
9. Opening must **start with pens on screen** + "GLP-1 medication" heading + **logo top-centre**; pens swipe off, then text.
10. No sound on the pens. Animation felt "sloppy" → simplified to one idea per scene.
11. Two versions: **Reels-ad cut** (bottom 35% clear) + **organic cut** (persistent footer: logo + URL + progress bar).
12. Phone at the end: **client will supply an iPhone mockup PNG**; the live website screenshot goes inside it.

---

## 7. Skills installed (global, `~/.claude/skills/`)
remotion-best-practices · remotion-create · remotion-render (official) · gsap-core · gsap-timeline · gsap-plugins (official)
· threejs-fundamentals · threejs-animation · threejs-materials · react-three-fiber · animejs · image (Satori, Vercel Labs)
· motion-canvas · rive-interactive · ffmpeg. They load in new Claude Code sessions.
Most promising next uses: **Three.js** for real 3D lit pens/phone; **GSAP timeline** or **Remotion** for a cleaner rebuild.

---

## 8. Quality levers (agreed, not all done yet)
1. **A reference ad the client loves** (10–30s Reel / Stripe / Whoop-style). Extract a style guide before the next build. ← biggest lever
2. **3 unbranded pen renders** (transparent PNG) or Three.js 3D pens instead of code-drawn pens.
3. **Better SFX** via the full ElevenLabs connector, or voice + music only.
4. Build at **xhigh/max effort**; run ≥3 critique rounds with slow-motion transition strips before showing.

---

## 9. Open items / next steps
- [x] **"GLP-1" pronunciation:** client picked test A (`GLP1`, no hyphen). Lines 1, 2 and 6 re-recorded with it (238 credits); previous takes archived in `audio/v3/`.
- [ ] **iPhone mockup PNG** from the client → replace the code-drawn phone in scene 6 (screen = `assets/site-booking.png`, or the homepage).
- [x] Graph exit fixed: removed camera push + whip pan → in-place dissolve into the scale card.
- [x] Organic variant footer built (`?variant=organic`): small logo + 1inc.co.za + gold progress bar, fades out at the end card.
- [x] Draft 4 rendered: both cuts (ad + organic) with the GLP1 voice fix.
- [ ] Client review of draft 4.
- [ ] Optional: a reference video → style guide; pen renders; Campaign 01 (Return to Performance) reuses this engine and voice.

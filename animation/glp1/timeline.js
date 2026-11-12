// Single source of truth for timing. Read by index.html (visuals) and ../mix.mjs (sound).
// DRAFT 5 (30s), retimed 21 Oct 2026 to the one-take voiceover:
//   audio/v5/take2-1.10.wav = take 2 (Peter, eleven_v4, 34.1s raw) with lead/tail trimmed, pauses cut to 0.15s, atempo 1.10 -> 28.97s.
// Order: S1 hook (question) · S3 the block (answer) · SM the mistake · S4 less… · S2 SA stat (here to stay) · S5 Taygan · S6 book
// Measured line starts in the film (voice at 0.20s): hook 0.20 · "But what" 3.39 · "Research" 5.44 · "Don't take" 8.80 ·
//   "Less muscle" 12.57 · "Less energy" 13.52 · "Less performance" 14.52 · "In just two years" 15.68 · "best-selling" 18.74 ·
//   "and they're here to stay" 19.95 · "One ink" 21.51 · "nutrition" 23.50 · "strength" 24.21 · "Book" 25.87 · voice ends 29.17
window.TIMELINE = {
  dur: 30,
  voice: [{ file: 'audio/v5/take2-1.10.wav', at: 0.2 }],
  scene: { s1: 0, s3: 5.3, sm: 8.65, s4: 12.42, s2: 15.5, s5: 21.35, s6: 25.7 },
  cue: {
    goldPen: 1.15, pensOut: 3.0, question: 3.35,                   // "makes the scale…" · pens exit · "But what…"
    weigh: 5.6, winning: 6.6, split: 7.0, muscle: 8.0,             // the block: builds · −12 kg ✓ · gold wipe on "a third" · labels on "muscle"
    planIn: 9.75, row1: 10.05, row2: 10.55, missing: 11.3,          // the mistake · MISSING on "strength programme"
    less1: 12.57, less2: 13.52, less3: 14.52,                       // each "Less"
    card: 15.6, p2023: 16.2, p2024: 17.4, p2025: 18.75, stay: 20.0, push: 99, // chart · #1 on "best-selling" · "here to stay"
    oneInk: 21.5, nutrition: 23.5, strength: 24.2, performance: 24.85,       // Taygan + chips on the words
    phoneWipe: 25.8, brandUp: 26.9,                                 // phone slides up on "Book" · logo + URL rise once it's set
  },
  // Client notes 21 Oct: no clicks or ticks. Soft whooshes on scene changes, a few quiet pops only.
  sfx: [
    ['whoosh', 5.3], ['pop', 7.0], ['whoosh', 8.65], ['whoosh', 12.42],
    ['whoosh', 15.5], ['pop', 16.2], ['pop', 17.4], ['pop', 18.75],
    ['whoosh', 21.35], ['whoosh', 25.7],
  ],
  musicOut: 25.87, // music fades from "Book" and is gone by the last frame
};

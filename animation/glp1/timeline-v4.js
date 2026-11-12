// Single source of truth for timing. Read by index.html (visuals) and ../mix.mjs (sound).
// Draft 4 (30s). GLP-1 is written "GLP1" in TTS prompts (client-approved). audio/fast/*.wav = ElevenLabs takes with long pauses tightened to ~0.2s
// and sped up 10% (silenceremove + atempo 1.10). Phrase onsets measured with silencedetect.
window.TIMELINE = {
  dur: 30,
  voice: [
    { file: 'audio/fast/01.wav', at: 0.35 },  // GLP1 medication works. But the weight you lose isn't always fat. Up to a third can be muscle.
    { file: 'audio/fast/02.wav', at: 6.35 },  // In two years, GLP1s went from 170th to SA's best-selling medicine.
    { file: 'audio/fast/03.wav', at: 12.45 }, // Twelve kilos down on the scale? Up to four of them could be muscle.
    { file: 'audio/fast/04.wav', at: 16.35 }, // Less muscle. Less energy. Less performance.
    { file: 'audio/fast/05.wav', at: 19.95 }, // One ink builds the plan around your medication, nutrition and performance.
    { file: 'audio/fast/06.wav', at: 24.55 }, // Book your GLP1 consultation at one ink dot co zah.
  ],
  scene: { s1: 0, s2: 6.2, s3: 12.3, s4: 16.2, s5: 19.8, s6: 24.4 },
  cue: {
    pensOut: 2.1, myth: 2.3, strike: 3.3, fact: 4.38,
    card: 6.3, p2023: 8.2, p2024: 10.18, p2025: 10.98, push: 99,
    weigh: 12.45, winning: 13.4, cursor: 13.55, tap: 14.1, barFill: 14.25, split: 14.85, muscle: 15.55,
    less1: 16.35, less2: 17.45, less3: 18.59,
    oneInk: 19.95, medication: 22.0, nutrition: 22.75, performance: 23.6,
    book: 24.55, cursor2: 25.1, tap2: 25.65, phone: 25.8, url: 27.0,
  },
  // Gentle SFX only. No sound on the pens (client note).
  sfx: [
    ['tick', 3.3], ['pop', 4.38],
    ['whoosh', 6.2], ['pop', 8.2], ['pop', 10.18], ['pop', 10.98], ['whoosh', 12.3],
    ['tick', 13.4], ['click', 14.1], ['pop', 14.85], ['whoosh', 16.2],
    ['tick', 16.35], ['tick', 17.45], ['tick', 18.59], ['whoosh', 19.8],
    ['pop', 22.0], ['pop', 22.75], ['pop', 23.6], ['whoosh', 24.4],
    ['click', 25.65], ['tick', 27.0],
  ],
};

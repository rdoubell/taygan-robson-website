// Run from inside a film folder after render.mjs:  node ../mix.mjs
// Synthesizes a music bed + SFX in code, lays the voice clips at their timeline offsets,
// ducks the music under the voice, normalises to -14 LUFS, muxes with out/silent.mp4.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const window = {};
new Function('window', readFileSync('timeline.js', 'utf8'))(window);
const TL = window.TIMELINE;
const arg = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
const IN = arg('in', 'out/silent.mp4'), OUT = arg('out', 'out/final.mp4'); // node ../mix.mjs --in out/silent-organic.mp4 --out out/final-organic.mp4
const SR = 44100, N = Math.ceil(TL.dur * SR);
mkdirSync('out', { recursive: true });

// ---------- tiny synth ----------
const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };
const midi = (m) => 440 * Math.pow(2, (m - 69) / 12);
function writeWav(path, L, R) {
  const buf = Buffer.alloc(44 + N * 4);
  buf.write('RIFF', 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write('WAVEfmt ', 8);
  buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34);
  buf.write('data', 36); buf.writeUInt32LE(N * 4, 40);
  for (let i = 0; i < N; i++) {
    buf.writeInt16LE(Math.max(-1, Math.min(1, L[i])) * 32767 | 0, 44 + i * 4);
    buf.writeInt16LE(Math.max(-1, Math.min(1, R[i])) * 32767 | 0, 46 + i * 4);
  }
  writeFileSync(path, buf);
}

// ---------- music: calm, clinical pad + soft pulse, 96 BPM ----------
const BPM = 96, beat = 60 / BPM, bar = beat * 4;
// D minor-ish progression, 2 bars per chord: Dm9, Bbmaj7, Fmaj7, C(add9)
const chords = [[50, 57, 60, 64, 65], [46, 53, 57, 62, 65], [41, 53, 57, 60, 64], [48, 55, 62, 64, 67]];
const mL = new Float32Array(N), mR = new Float32Array(N);
for (let i = 0; i < N; i++) {
  const t = i / SR;
  const ci = Math.floor(t / (bar * 2)) % chords.length;
  const ct = t % (bar * 2);
  const env = Math.min(1, ct / 1.2) * Math.min(1, (bar * 2 - ct) / 0.6 + 0.35);
  let l = 0, r = 0;
  chords[ci].forEach((m, k) => {
    const f = midi(m);
    const v = Math.sin(2 * Math.PI * f * t) * 0.6 + Math.sin(2 * Math.PI * f * 1.003 * t) * 0.4;
    l += v * (k % 2 ? 0.7 : 1); r += v * (k % 2 ? 1 : 0.7);
  });
  const pad = 0.03 * env; // client 21 Oct: music well under the voice
  // soft kick on beats 1 and 3, felt more than heard
  const bt = t % (beat * 2);
  const kick = Math.sin(2 * Math.PI * (48 + 60 * Math.exp(-bt * 30)) * bt) * Math.exp(-bt * 9) * 0.08;
  // closed hat on off-beats after the hook
  const ht = (t + beat / 2) % beat;
  const hat = 0 && t > 4.5 ? (hash(i) * 2 - 1) * Math.exp(-ht * 70) * 0.018 : 0;
  // fade in/out
  const mo = TL.musicOut ?? TL.dur - 1.5; // hold low, then fade out from the last line so the ending never swells
  const fade = Math.min(1, t / 1.5) * (t < mo ? 1 : Math.max(0, 1 - (t - mo) / (TL.dur - mo)));
  mL[i] = (l * pad + kick + hat) * fade;
  mR[i] = (r * pad + kick + hat * 0.8) * fade;
}
writeWav('out/music.wav', mL, mR);

// ---------- SFX: whoosh on scene changes, ticks on stats, thumps on reveals ----------
const sL = new Float32Array(N), sR = new Float32Array(N);
const add = (t0, len, fn) => {
  const a = Math.floor(t0 * SR);
  for (let j = 0; j < len * SR && a + j < N; j++) { const v = fn(j / SR, a + j); sL[a + j] += v; sR[a + j] += v; }
};
let lp = 0;
const whoosh = (t0) => add(t0 - 0.25, 0.7, (t, i) => {
  const env = Math.sin(Math.PI * Math.min(1, t / 0.7)) ** 2;
  lp += (hash(i) * 2 - 1 - lp) * (0.02 + 0.12 * env); // swept low-pass noise
  return lp * env * 0.12;
});
const tick = (t0, f = 1600) => add(t0, 0.08, (t) => Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 60) * 0.16);
const thump = (t0) => add(t0, 0.5, (t) => Math.sin(2 * Math.PI * (55 + 50 * Math.exp(-t * 25)) * t) * Math.exp(-t * 7) * 0.4);

const pop = (t0) => add(t0, 0.12, (t) => Math.sin(2 * Math.PI * (900 - 2500 * t) * t) * Math.exp(-t * 35) * 0.1);
const click = (t0) => add(t0, 0.03, (t, i) => (hash(i) * 2 - 1) * Math.exp(-t * 300) * 0.35);
const kinds = { whoosh, tick, thump, pop, click };
for (const [kind, t] of TL.sfx) kinds[kind](t);
writeWav('out/sfx.wav', sL, sR);

// ---------- mix ----------
const inputs = ['-i', 'out/music.wav', '-i', 'out/sfx.wav'];
TL.voice.forEach((v) => inputs.push('-i', v.file));
const STEMS = process.argv.includes('--stems');
const vchains = TL.voice.map((v, k) => `[${k + 2}:a]aformat=sample_rates=${SR}:channel_layouts=stereo,adelay=${Math.round(v.at * 1000)}:all=1[v${k}]`);
const vlabels = TL.voice.map((_, k) => `[v${k}]`).join('');
const fc = [
  ...vchains,
  `${vlabels}amix=inputs=${TL.voice.length}:normalize=0,apad=whole_dur=${TL.dur}[voice]`,
  `[voice]asplit=2[vo][key]`,
  `[0:a][key]sidechaincompress=threshold=0.03:ratio=5:attack=20:release=700[duck]`,
  `[vo][duck][1:a]amix=inputs=3:normalize=0:weights=1 1.05 0.6,atrim=0:${TL.dur},loudnorm=I=-14:TP=-1.5:LRA=11[out]`,
].join(';');
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', fc, '-map', '[out]', '-ar', String(SR), 'out/mix.wav'], { stdio: 'inherit' });
if (STEMS) { // check the balance: voice stem vs ducked music stem
  const fc2 = [...vchains, `${vlabels}amix=inputs=${TL.voice.length}:normalize=0,apad=whole_dur=${TL.dur}[voice]`, `[voice]asplit=2[vo][key]`,
    `[0:a][key]sidechaincompress=threshold=0.03:ratio=5:attack=20:release=700[duck]`, `[duck]volume=1.05[dm]`].join(';');
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', ...inputs, '-filter_complex', fc2, '-map', '[vo]', 'out/stem-voice.wav', '-map', '[dm]', 'out/stem-music.wav']);
}
execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-i', IN, '-i', 'out/mix.wav',
  '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', OUT], { stdio: 'inherit' });
console.log('wrote ' + OUT);

// Run from inside a film folder:
//   node ../render.mjs --dur 55 --fps 60 --sub 4        full render -> out/silent.mp4
//   node ../render.mjs --stills 0.5,3,8.2               PNG stills  -> out/stills/
//   node ../render.mjs --from 20 --to 26 --fps 30       partial render -> out/part.mp4
//   node ../render.mjs --dur 30 --variant organic --out out/silent-organic.mp4
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';

const raw = (k) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : undefined; };
const num = (k, d) => (raw(k) === undefined ? d : Number(raw(k)));
const FPS = num('fps', 60), SUB = num('sub', 4), DUR = num('dur', 15);
const FROM = num('from', 0), TO = num('to', DUR);
const STILLS = raw('stills');
const VARIANT = raw('variant'); // e.g. --variant organic
const OUT = raw('out');         // e.g. --out out/silent-organic.mp4
mkdirSync('out/stills', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
page.on('pageerror', (e) => console.error('page error:', e.message));
await page.goto('file://' + process.cwd() + '/index.html' + (VARIANT ? '?variant=' + VARIANT : ''));
await page.evaluate(() => window.__ready);
// Full-frame clip capture: no element stability checks (those time out on a busy machine).
const shot = async (opts = {}) => {
  for (let attempt = 0; ; attempt++) {
    try { return await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1080, height: 1920 }, timeout: 60000, ...opts }); }
    catch (e) { if (attempt >= 2) throw e; console.error('screenshot retry', attempt + 1); }
  }
};

if (STILLS) {
  for (const t of STILLS.split(',').map(Number)) {
    await page.evaluate((t) => window.seek(t), t);
    await shot({ path: `out/stills/${t.toFixed(2).padStart(6, '0')}.png` });
  }
  console.log(`wrote ${STILLS.split(',').length} stills to out/stills/`);
} else {
  const outFile = OUT || (FROM === 0 && TO === DUR ? 'out/silent.mp4' : 'out/part.mp4');
  const vf = `tmix=frames=${SUB},select='eq(mod(n\\,${SUB})\\,${SUB - 1})',setpts=N/${FPS}/TB`;
  const ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS * SUB), '-i', '-',
    ...(SUB > 1 ? ['-vf', vf] : []), '-r', String(FPS), '-c:v', 'libx264', '-crf', '16', '-pix_fmt', 'yuv420p', outFile],
    { stdio: ['pipe', 'inherit', 'inherit'] });

  const total = Math.round((TO - FROM) * FPS * SUB);
  for (let i = 0; i < total; i++) {
    await page.evaluate((t) => window.seek(t), FROM + i / (FPS * SUB));
    const png = await shot();
    if (!ff.stdin.write(png)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % (FPS * SUB) === 0) console.log(`rendered ${(FROM + i / (FPS * SUB)).toFixed(0)}s / ${TO}s`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  console.log('wrote ' + outFile);
}
await browser.close();

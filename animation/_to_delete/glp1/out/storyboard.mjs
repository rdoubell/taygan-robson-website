import { chromium } from 'playwright';
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
const window = {}; new Function('window', readFileSync('timeline.js', 'utf8'))(window);
const S = window.TIMELINE.scene;
const names = { s1: '01 · Hook: pens', s2: '02 · Chart #170 → #1', s3: '03 · Scale twist', s4: '04 · Less…', s5: '05 · Taygan', s6: '06 · Booking' };
const sceneAt = (t) => Object.entries(S).filter(([, v]) => v <= t).pop()[0];
const files = readdirSync('out/stills').filter((f) => f.endsWith('.png')).sort();
const cells = files.map((f) => {
  const t = parseFloat(f), sc = sceneAt(t);
  return `<figure><img src="stills/${f}"><figcaption><b>${t.toFixed(2)}s</b><span>${names[sc]}</span></figcaption></figure>`;
}).join('');
writeFileSync('out/storyboard.html', `<!doctype html><meta charset=utf-8><style>
body{margin:0;background:#0B1220;font:600 15px -apple-system,sans-serif;color:#cbd3e1;padding:24px}
h1{font:800 26px -apple-system;color:#fff;margin:0 0 4px}p{margin:0 0 18px;color:#8b97ad}
.g{display:grid;grid-template-columns:repeat(6,250px);gap:14px}
figure{margin:0}img{width:250px;height:444px;display:block;border-radius:8px}
figcaption{display:flex;justify-content:space-between;padding:6px 2px}b{color:#C7A14C}span{color:#8b97ad;font-size:12px}
</style><h1>1INC GLP-1 Story — draft 2 storyboard</h1><p>One frame every 0.5s · each row = 3 seconds · 30.0s total</p><div class=g>${cells}</div>`);
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1620, height: 800 } });
await p.goto('file://' + process.cwd() + '/out/storyboard.html'); await p.waitForTimeout(800);
await p.screenshot({ path: 'out/storyboard.png', fullPage: true }); await b.close();

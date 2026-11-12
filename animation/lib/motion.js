// Closed-form motion helpers. Classic script (not a module) so it loads from file://.
// Everything is a pure function of time.
(function () {
  const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const lerp = (a, b, p) => a + (b - a) * p;

  // Damped spring from 0 to 1. Stiffer k = snappier; higher d = less overshoot.
  function spring(t, k = 170, d = 26) {
    if (t <= 0) return 0;
    const w0 = Math.sqrt(k), z = d / (2 * w0);
    if (z < 1) {
      const wd = w0 * Math.sqrt(1 - z * z);
      return 1 - Math.exp(-z * w0 * t) * (Math.cos(wd * t) + (z * w0 / wd) * Math.sin(wd * t));
    }
    return 1 - Math.exp(-w0 * t) * (1 + w0 * t);
  }

  // keys: [[time, value], ...]. One spring per change, stacked.
  function track(t, keys, k = 170, d = 26) {
    let v = keys[0][1];
    for (let i = 1; i < keys.length; i++)
      v += (keys[i][1] - keys[i - 1][1]) * spring(t - keys[i][0], k, d);
    return v;
  }

  // Presets: UI gets a hair of overshoot, type gets none.
  const ui = (t) => spring(t, 260, 24);    // snappy, ~3% overshoot
  const type = (t) => spring(t, 140, 24);  // critically damped-ish, no overshoot
  const heavy = (t) => spring(t, 70, 17);  // logos, big moves

  // Visible window: springs in at a, out at b.
  const win = (t, a, b, inFn = type, outFn = type) => clamp(inFn(t - a)) * (1 - clamp(outFn(t - b)));

  // Seeded hash noise in [0,1).
  const hash = (n) => { const x = Math.sin(n * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

  window.M = { clamp, lerp, spring, track, ui, type, heavy, win, hash };
})();

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

// Ascending bar data — each value is % height (0–100)
const bars = [
  { value: 28, delay: 0.5 },
  { value: 44, delay: 0.62 },
  { value: 38, delay: 0.74 },
  { value: 60, delay: 0.86 },
  { value: 54, delay: 0.98 },
  { value: 76, delay: 1.1 },
  { value: 94, delay: 1.22 },
]

const W = 300, H = 200
const PAD_T = 18, PAD_B = 32, PAD_H = 16
const chartH = H - PAD_T - PAD_B
const chartW = W - PAD_H * 2
const BAR_W = 28
const gap = (chartW - bars.length * BAR_W) / (bars.length - 1)

const bx = (i: number) => PAD_H + i * (BAR_W + gap)
const bh = (v: number) => (v / 100) * chartH
const by = (v: number) => PAD_T + chartH - bh(v)

// SVG path for trend line connecting bar tops
const trendPath = bars
  .map((b, i) => `${i === 0 ? "M" : "L"} ${bx(i) + BAR_W / 2} ${by(b.value)}`)
  .join(" ")

function PerformanceChart() {
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-[340px]" aria-hidden="true">
      {/* Baseline */}
      <line
        x1={PAD_H} y1={H - PAD_B}
        x2={W - PAD_H} y2={H - PAD_B}
        stroke="rgba(255,255,255,0.12)" strokeWidth={1}
      />

      {/* Horizontal guide lines */}
      {[25, 50, 75].map((pct) => (
        <line
          key={pct}
          x1={PAD_H} y1={PAD_T + chartH * (1 - pct / 100)}
          x2={W - PAD_H} y2={PAD_T + chartH * (1 - pct / 100)}
          stroke="rgba(255,255,255,0.06)" strokeWidth={1} strokeDasharray="3 4"
        />
      ))}

      {/* Bars — grow from baseline */}
      {bars.map((bar, i) => {
        const isLast = i === bars.length - 1
        return (
          <motion.rect
            key={i}
            x={bx(i)}
            width={BAR_W}
            rx={4}
            fill={isLast ? "#C9A84C" : "rgba(255,255,255,0.18)"}
            initial={{ height: 0, y: H - PAD_B }}
            animate={{ height: bh(bar.value), y: by(bar.value) }}
            transition={{ duration: 0.65, delay: bar.delay, ease: [0.22, 1, 0.36, 1] }}
          />
        )
      })}

      {/* Trend line draws in after bars */}
      <motion.path
        d={trendPath}
        fill="none"
        stroke="#C9A84C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.35, ease: "easeOut" }}
      />

      {/* Dots at each bar top */}
      {bars.map((bar, i) => (
        <motion.circle
          key={`d${i}`}
          cx={bx(i) + BAR_W / 2}
          cy={by(bar.value)}
          r={i === bars.length - 1 ? 5 : 3.5}
          fill={i === bars.length - 1 ? "#C9A84C" : "white"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5 + i * 0.05 }}
          style={{ transformOrigin: `${bx(i) + BAR_W / 2}px ${by(bar.value)}px` }}
        />
      ))}

      {/* Chart label */}
      <motion.text
        x={W / 2} y={H - 6}
        textAnchor="middle"
        fill="rgba(255,255,255,0.22)"
        fontSize="7"
        fontFamily="DM Mono, monospace"
        letterSpacing="2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        CLIENT PERFORMANCE INDEX
      </motion.text>
    </svg>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0])
  const contentY      = useTransform(scrollY, [0, 380], [0, -50])
  const scrollOpacity = useTransform(scrollY, [0, 150], [1, 0])

  return (
    <section
      id="hero"
      className="sticky top-0 z-10 w-full h-screen overflow-hidden bg-[#1A3B6E]"
    >
      {/* Subtle dot-grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      {/* Content — fades + lifts on scroll */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* LEFT — animated performance chart */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center"
          >
            <p
              className="text-[9px] tracking-[0.38em] uppercase text-white/30 mb-5"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Performance Trajectory
            </p>
            <PerformanceChart />
          </motion.div>

          {/* RIGHT — text + CTA */}
          <div className="text-white lg:text-right">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-6"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Performance · Rehabilitation · Science
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-white mb-7"
              style={{
                fontFamily: "'Tinos', Georgia, serif",
                fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                fontWeight: 700,
                lineHeight: 1.0,
                letterSpacing: "-0.01em",
              }}
            >
              Sports Injury<br />
              <span style={{ color: "#C9A84C" }}>&amp; Rehabilitation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-white/50 text-base lg:text-lg font-light leading-relaxed mb-10 lg:ml-auto"
              style={{ maxWidth: "22rem" }}
            >
              Three decades. Two practices.<br />One conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex lg:justify-end"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-9 py-3.5 bg-white text-[#1A3B6E] text-[11px] tracking-[0.22em] uppercase font-semibold rounded-full hover:bg-[#C9A84C] hover:text-white hover:shadow-[0_0_28px_rgba(201,168,76,0.4)] hover:scale-[1.02] transition-all duration-300"
              >
                Book Appointment
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>

        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span
          className="text-[9px] tracking-[0.35em] uppercase text-white/25"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}

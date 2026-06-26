import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Activity } from "lucide-react"

// Live-metrics data
const metrics = [
  { label: "VO₂", value: "52", unit: "ml/kg/min" },
  { label: "VE", value: "117", unit: "L/min" },
  { label: "HR", value: "152", unit: "bpm" },
  { label: "PACE", value: "4:07", unit: "/km" },
]

// Sparkline data (normalised 0–1)
const sparkline = [0.35, 0.52, 0.44, 0.68, 0.61, 0.79, 0.72, 0.88, 0.83, 0.94]

function SparkLine() {
  const W = 120, H = 36, pad = 4
  const pts = sparkline
    .map((v, i) => {
      const x = pad + (i / (sparkline.length - 1)) * (W - pad * 2)
      const y = H - pad - v * (H - pad * 2)
      return `${x},${y}`
    })
    .join(" ")
  const last = sparkline[sparkline.length - 1]
  const lx = W - pad
  const ly = H - pad - last * (H - pad * 2)

  return (
    <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
      <polyline points={pts} fill="none" stroke="#4ADE80" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={lx} cy={ly} r={2.5} fill="#4ADE80" />
    </svg>
  )
}

function MetricsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-8 top-1/2 -translate-y-1/2 lg:right-[6%] xl:right-[10%] z-10 w-[240px] rounded-xl overflow-hidden"
      style={{
        background: "rgba(20,33,61,0.82)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(199,161,76,0.25)",
        boxShadow: "0 24px 64px rgba(0,0,0,0.45)",
      }}
    >
      <div className="flex items-center gap-2 px-4 pt-4 pb-3 border-b border-white/10">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-[10px] tracking-[0.22em] uppercase text-white/40 flex-1" style={{ fontFamily: "var(--font-display)" }}>Live Session</span>
        <Activity size={12} className="text-white/30" />
      </div>

      <div className="grid grid-cols-2 gap-px bg-white/5 mx-4 my-3 rounded-lg overflow-hidden">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 + i * 0.08 }}
            className="bg-[rgba(20,33,61,0.7)] px-3 py-2.5"
          >
            <p className="text-[9px] tracking-[0.18em] uppercase text-white/35 mb-0.5" style={{ fontFamily: "var(--font-display)" }}>{m.label}</p>
            <p className="text-white font-bold leading-none" style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem" }}>{m.value}</p>
            <p className="text-[9px] text-white/30 mt-0.5">{m.unit}</p>
          </motion.div>
        ))}
      </div>

      <div className="px-4 pb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] tracking-[0.15em] uppercase text-white/30" style={{ fontFamily: "var(--font-display)" }}>Performance Index</span>
          <span className="text-[10px] font-semibold text-green-400" style={{ fontFamily: "var(--font-display)" }}>↑ 12.4%</span>
        </div>
        <SparkLine />
      </div>
    </motion.div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const contentY      = useTransform(scrollY, [0, 500], [0, -60])
  const scrollOpacity = useTransform(scrollY, [0, 180], [1, 0])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden" style={{ background: "#14213D" }}>

      {/* Background photo */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }} />

      {/* Left→right gradient overlay */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(20,33,61,0.96) 0%, rgba(20,33,61,0.88) 38%, rgba(20,33,61,0.52) 62%, rgba(20,33,61,0.18) 100%)" }} />

      {/* Overall subtle dark layer */}
      <div className="absolute inset-0 bg-[rgba(8,14,28,0.22)]" />

      {/* Content */}
      <motion.div style={{ opacity: contentOpacity, y: contentY }} className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative">

          {/* Left — text block */}
          <div className="max-w-[520px] lg:max-w-[560px]">

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[10px] tracking-[0.42em] uppercase mb-7 text-white/40"
              style={{ fontFamily: "var(--font-display)" }}
            >
              1INC Consulting · Est. South Africa
            </motion.p>

            {/* Three-line headline */}
            <div className="mb-8">
              {[
                { text: "SCIENCE BACKED.", gold: true },
                { text: "ATHLETE-BUILT.", gold: false },
                { text: "RESULTS PROVEN.", gold: true },
              ].map(({ text, gold }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.75, delay: 0.35 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h1
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.2rem, 5.2vw, 4.2rem)",
                      fontWeight: 800,
                      lineHeight: 1.08,
                      letterSpacing: "-0.01em",
                      color: gold ? "var(--color-gold)" : "#FFFFFF",
                    }}
                  >
                    {text}
                  </h1>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.75 }}
              className="text-white/55 leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-body)", fontSize: "clamp(0.95rem, 1.7vw, 1.05rem)", maxWidth: "40ch" }}
            >
              Specialised sports science and nutrition programmes designed to optimise performance, recovery, and long-term athletic development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.92 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-bold transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--color-gold)",
                  color: "#14213D",
                  borderRadius: "var(--radius-pill)",
                  boxShadow: "0 8px 32px rgba(199,161,76,0.38)",
                }}
              >
                Book Consultation
                <ArrowRight size={14} />
              </a>
              <span className="text-white/28 text-[11px] leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                45-min session · via Microsoft Teams
              </span>
            </motion.div>
          </div>

          {/* Floating metrics card — desktop only */}
          <div className="hidden lg:block">
            <MetricsCard />
          </div>

        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div style={{ opacity: scrollOpacity }} className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.35em] uppercase text-white/25" style={{ fontFamily: "var(--font-display)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  )
}

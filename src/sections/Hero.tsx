import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// ── Floating data metrics (right side, desktop only) ──────────────────────
const metrics = [
  { label: "VO₂ Max",         value: "78.4", unit: "ml/kg/min",  delay: 1.05, floatY: -10 },
  { label: "Force Output",    value: "3.2×", unit: "Bodyweight", delay: 1.25, floatY: -7  },
  { label: "Recovery HRV",   value: "94",   unit: "ms",          delay: 1.45, floatY: -12 },
  { label: "Asymmetry Index", value: "4.1",  unit: "%",           delay: 1.6,  floatY: -8  },
]

// Positions in the right 40% of the screen
const metricPositions = [
  { top: "22%", right: "9%"  },
  { top: "41%", right: "16%" },
  { top: "56%", right: "7%"  },
  { top: "70%", right: "18%" },
]

// ── Word-clip reveal ──────────────────────────────────────────────────────
const wordReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.55 } },
}
const word = {
  hidden:  { y: "108%", opacity: 0 },
  visible: { y: "0%",   opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// ── Content fade/drift on scroll ──────────────────────────────────────────
const metaStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 1.55 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0,   transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

// Helper: wrap each word in a clip container
function ClipWord({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block overflow-hidden align-bottom ${className}`}>
      <motion.span className="inline-block" variants={word}>
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()

  const imageScale    = useTransform(scrollY, [0, 700], [1.06, 0.94])
  const contentOpacity = useTransform(scrollY, [0, 360], [1, 0])
  const contentY      = useTransform(scrollY, [0, 360], [0, -50])
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.62, 0.82])
  const scrollOpacity = useTransform(scrollY, [0, 140], [1, 0])

  return (
    <section
      id="hero"
      className="sticky top-0 z-10 w-full h-screen overflow-hidden bg-black"
    >
      {/* Background image — parallax zoom-out */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero.jpg'), url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&q=90&auto=format&fit=crop')`,
          scale: imageScale,
        }}
        aria-hidden="true"
      />

      {/* Darkening overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ backgroundColor: "black", opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Subtle left vignette to push eye toward text */}
      <div
        className="absolute inset-y-0 left-0 w-1/2 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.38), transparent)" }}
        aria-hidden="true"
      />

      {/* ── Main content — fades out on scroll ─────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 z-10 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

          {/* Gold accent line — draws in from left */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0, height: 2, width: 52, background: "#C9A84C", marginBottom: "1.5rem" }}
          />

          {/* Mono label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[10px] tracking-[0.45em] uppercase text-white/40 mb-6"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Performance · Rehabilitation · Science
          </motion.p>

          {/* Heading — word-by-word clip reveal */}
          <motion.h1
            variants={wordReveal}
            initial="hidden"
            animate="visible"
            className="text-white mb-8 max-w-3xl"
            style={{
              fontFamily: "'Tinos', Georgia, serif",
              fontSize: "clamp(3.2rem, 7.5vw, 7rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
            }}
          >
            <ClipWord className="mr-[0.3em]">Sports</ClipWord>
            <ClipWord className="mr-[0.3em]">Injury</ClipWord>
            <br />
            <ClipWord className="mr-[0.25em]" >
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>&amp;</span>
            </ClipWord>
            <ClipWord>
              <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Rehabilitation.</span>
            </ClipWord>
          </motion.h1>

          {/* Subtitle + CTA */}
          <motion.div variants={metaStagger} initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              className="text-white/55 text-base lg:text-[1.1rem] font-light max-w-sm leading-relaxed mb-10"
            >
              Three decades. Two practices.<br />One conversation.
            </motion.p>

            <motion.div variants={fadeUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-4 px-10 py-4 bg-[#1A3B6E] text-white text-[11px] tracking-[0.25em] uppercase font-semibold hover:bg-[#0F2A52] hover:shadow-[0_0_32px_rgba(26,59,110,0.55)] hover:scale-[1.02] transition-all duration-300"
              >
                Book Appointment
                <span className="w-5 h-px bg-white/50 inline-block" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Floating metric cards — desktop only ──────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute inset-0 z-10 pointer-events-none hidden lg:block"
        aria-hidden="true"
      >
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: m.delay, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "absolute", ...metricPositions[i] }}
          >
            {/* Subtle float loop */}
            <motion.div
              animate={{ y: [0, m.floatY, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
              className="backdrop-blur-md border border-white/12 px-5 py-4 min-w-[140px]"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              {/* Gold dot */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span
                  className="text-[9px] tracking-[0.28em] uppercase text-white/40"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {m.label}
                </span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span
                  className="text-white font-bold leading-none"
                  style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "1.6rem" }}
                >
                  {m.value}
                </span>
                <span
                  className="text-white/35 text-[10px] tracking-wide"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {m.unit}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Scroll indicator — bottom left ───────────────────────────── */}
      <motion.div
        style={{ opacity: scrollOpacity }}
        className="absolute bottom-8 left-6 lg:left-12 z-10 flex items-center gap-3"
      >
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.9, delay: 2, ease: [0.22, 1, 0.36, 1] }}
          style={{ originY: 0, width: 1, height: 40, background: "rgba(255,255,255,0.2)" }}
        />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-[9px] tracking-[0.4em] uppercase text-white/30"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Scroll
        </motion.span>
      </motion.div>
    </section>
  )
}

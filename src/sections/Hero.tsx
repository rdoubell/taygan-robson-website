import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Globe, Activity } from "lucide-react"

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const contentY      = useTransform(scrollY, [0, 500], [0, -60])

  // Slow the DNA video to a dramatic crawl — CSS can't control playback rate
  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.35
    }
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden" style={{ background: "#14213D" }}>

      {/* DNA video — full-hero background, visible against pure navy */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        src="/dna-loop.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          opacity: 0.55,
          transform: "scale(1.08)",          /* zoom in — clips dark edge at bottom via section overflow:hidden */
          filter: "blur(2.5px) brightness(0.45) saturate(0.6)",  /* soften + shift to dark navy */
        }}
      />

      {/* Dark navy overlay — integrates DNA tone with #14213D brand colour */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(14,24,50,0.68)" }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="flex items-center gap-12 xl:gap-20">

            {/* ── Left — text block (unchanged) ── */}
            <div className="flex-1 min-w-0">

              {/* Three-line headline — each phrase forced onto a single line */}
              <div className="mb-8 overflow-hidden">
                {[
                  { text: "TWO DECADES.", gold: true },
                  { text: "THREE PRACTICES.", gold: false },
                  { text: "ONE STRATEGY.", gold: true },
                ].map(({ text, gold }, i) => (
                  <div key={text} style={{ overflow: "clip" }}>
                    <motion.h1
                      initial={{ x: "-105%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.72,
                        delay: 0.2 + i * 0.14,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.75rem, 4vw, 3.8rem)",
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                        whiteSpace: "nowrap",
                        color: gold ? "var(--color-gold)" : "#FFFFFF",
                      }}
                    >
                      {text}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.75 }}
                className="text-white/55 leading-relaxed mb-10"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
                  maxWidth: "42ch",
                }}
              >
                Sports Injuries &amp; Return-to-Performance · Clinical Sports Nutrition · Performance Science. Athletes, active individuals, and anyone seeking data-driven guidance on performance, nutrition, or rehabilitation — online, globally. Every client begins with a 1INC consultation with Taygan directly.
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
                  Book a 1INC Consultation
                  <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>

            {/* ── Right — 2×2 card grid (desktop only) ── */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:grid grid-cols-2 gap-4 flex-shrink-0"
              style={{ width: "468px" }}
            >

              {/* ── Top Left — Image card ── */}
              <div
                className="overflow-hidden"
                style={{ borderRadius: "20px", height: "218px", boxShadow: "0 16px 48px rgba(0,0,0,0.35)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=85&auto=format&fit=crop"
                  alt="Sports science consultation"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                />
              </div>

              {/* ── Top Right — Info card ── */}
              <div
                className="flex flex-col justify-between p-5"
                style={{
                  borderRadius: "20px",
                  height: "218px",
                  background: "var(--color-gold)",
                  boxShadow: "0 16px 48px rgba(199,161,76,0.30)",
                }}
              >
                {/* Icon badge */}
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(20,33,61,0.18)", borderRadius: "10px" }}
                >
                  <Globe size={17} color="#14213D" strokeWidth={1.8} />
                </div>

                {/* Copy */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(0.85rem, 1.25vw, 1rem)",
                      color: "#14213D",
                      lineHeight: 1.45,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    Helping athletes around the world perform, recover, and thrive.
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      color: "rgba(20,33,61,0.6)",
                    }}
                  >
                    Global expertise. Personalised performance.
                  </p>
                </div>
              </div>

              {/* ── Bottom Left — Info card ── */}
              <div
                className="flex flex-col justify-between p-5"
                style={{
                  borderRadius: "20px",
                  height: "218px",
                  background: "var(--color-gold)",
                  boxShadow: "0 16px 48px rgba(199,161,76,0.30)",
                }}
              >
                {/* Icon badge */}
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(20,33,61,0.18)", borderRadius: "10px" }}
                >
                  <Activity size={17} color="#14213D" strokeWidth={1.8} />
                </div>

                {/* Copy */}
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(0.85rem, 1.25vw, 1rem)",
                      color: "#14213D",
                      lineHeight: 1.45,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    Rehab. Performance. Nutrition.
                  </p>
                  <p
                    className="mt-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      color: "rgba(20,33,61,0.6)",
                    }}
                  >
                    Evidence-based strategies tailored to your goals.
                  </p>
                </div>
              </div>

              {/* ── Bottom Right — Image card ── */}
              <div
                className="overflow-hidden"
                style={{ borderRadius: "20px", height: "218px", boxShadow: "0 16px 48px rgba(0,0,0,0.35)" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=85&auto=format&fit=crop"
                  alt="Athlete rehabilitation and recovery"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center center" }}
                />
              </div>

            </motion.div>
            {/* ── end right grid ── */}

          </div>
        </div>
      </motion.div>

    </section>
  )
}

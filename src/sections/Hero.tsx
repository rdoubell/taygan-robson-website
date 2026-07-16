import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const contentY      = useTransform(scrollY, [0, 500], [0, -60])
  const { open } = useBookingModal()

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
          filter: "blur(6px) brightness(0.45) saturate(0.6)",    /* soften + shift to dark navy */
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
                Wherever you are in the world — structured, evidence-based support for your performance, nutrition, and recovery.
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

            {/* ── Right — "What 1INC Is" card (desktop only) ── */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col flex-shrink-0 p-7"
              style={{
                width: "468px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(199,161,76,0.22)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
              }}
            >
              <p
                className="text-[9px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Data-driven conversation &middot; Evidence-based direction.
              </p>

              <p
                className="mb-5"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", fontSize: "0.87rem", lineHeight: 1.6 }}
              >
                Every client begins with a personal consultation with Taygan directly, covering your training load, injury history, nutrition, performance and training structure. From there, a written guidance report, a clear plan, and a programme. That is 1INC.
              </p>

              <div className="flex items-end justify-between gap-4 mb-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div>
                  <p className="text-[9px] tracking-[0.18em] uppercase mb-1.5" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.4)" }}>
                    45-Minute Online Session
                  </p>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                      color: "var(--color-gold)",
                      lineHeight: 1,
                    }}
                  >
                    R 1 250
                  </div>
                  <p className="text-[9px] tracking-[0.15em] uppercase mt-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>
                    Online Consultation
                  </p>
                </div>
                <button
                  onClick={open}
                  className="inline-flex items-center gap-2 px-5 py-3 text-[10px] tracking-[0.16em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "#FFFFFF",
                    color: "var(--color-navy)",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  Book Now
                  <ArrowRight size={12} />
                </button>
              </div>

              <p className="text-[10.5px] italic mb-3" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                Invoice issued post-session. Payment due within 7 days. Booked via Appointment Guru. Delivered via Microsoft Teams.
              </p>

              <p className="text-[10.5px] italic" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                Taygan &nbsp;|&nbsp; BSc S&amp;C &middot; MSc Sports Injuries &amp; Return to Performance &middot; PG Dip Performance Nutrition &middot; MSc Sports Nutrition (c)
              </p>
            </motion.div>
            {/* ── end right card ── */}

          </div>
        </div>
      </motion.div>

    </section>
  )
}

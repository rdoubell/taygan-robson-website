import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

const soundFamiliarCards = [
  { label: "Performance", sub: "& Training" },
  { label: "Nutrition", sub: "& Fueling" },
  { label: "Injury &", sub: "Rehabilitation" },
  { label: "GLP-1", sub: "& Recovery" },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const contentY = useTransform(scrollY, [0, 500], [0, -60])
  const { open } = useBookingModal()

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.35
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      style={{ background: "#14213D" }}
    >
      {/* DNA video background */}
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
          transform: "scale(1.08)",
          filter: "blur(6px) brightness(0.45) saturate(0.6)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(14,24,50,0.68)" }}
      />

      {/* Content — fills full hero height */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex flex-col"
      >
        <div className="flex-1 flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-14 min-h-0">

          {/* ── Upper section: left text + right pricing ── */}
          <div className="flex gap-8 xl:gap-14 flex-1 min-h-0">

            {/* Left column */}
            <div className="flex-1 flex flex-col justify-center min-w-0">

              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[9px] tracking-[0.38em] uppercase mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Online &middot; Data-Driven Conversation &middot; Evidence-Based Direction
              </motion.p>

              {/* 3-line headline */}
              <div className="mb-6 overflow-hidden">
                {[
                  { text: "ONE CONVERSATION.", gold: true },
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
                        fontSize: "clamp(1.75rem, 3.6vw, 3.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.08,
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

              {/* Body */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.7 }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.85rem, 1.4vw, 0.97rem)",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.78,
                  maxWidth: "52ch",
                }}
              >
                Injured. Undertrained. Under fuelled. Managing GLP-1 related muscle loss. Your numbers are dropping. Lost and need someone to be accountable to. Whatever brought you here — your training load, injury history, nutrition, endurance data and performance goals assessed in a personal online consultation with Taygan directly. A written report, a clear plan and a programme built around your findings. One conversation. That is 1INC.
              </motion.p>

            </div>

            {/* Right column — vertical pricing card (desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col flex-shrink-0 justify-between p-7"
              style={{
                width: "220px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(199,161,76,0.22)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
              }}
            >
              {/* Top */}
              <div>
                <p
                  className="text-[8px] tracking-[0.32em] uppercase mb-5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
                >
                  45-Minute Online Session
                </p>

                <div className="w-6 h-[1.5px] mb-5" style={{ background: "var(--color-gold)", opacity: 0.55 }} />

                {/* SA price */}
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.5rem, 2.2vw, 1.9rem)",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  R 1 250
                </div>
                <p
                  className="text-[8px] tracking-[0.14em] uppercase mb-5"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.42)", fontWeight: 600 }}
                >
                  South Africa
                </p>

                {/* International price */}
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1,
                    marginBottom: "0.3rem",
                  }}
                >
                  $150 USD
                </div>
                <p
                  className="text-[8px] tracking-[0.14em] uppercase"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.42)", fontWeight: 600 }}
                >
                  International
                </p>
              </div>

              {/* Book button */}
              <button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-[10px] tracking-[0.16em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] mt-6"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--color-gold)",
                  color: "#14213D",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Book Now
                <ArrowRight size={11} />
              </button>
            </motion.div>

          </div>

          {/* ── Cards strip — spans full width ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.88 }}
            className="mt-6"
          >
            <p
              className="text-[8.5px] tracking-[0.36em] uppercase mb-3"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)", fontWeight: 600 }}
            >
              Sound Familiar?
            </p>
            <div
              className="flex gap-2.5 overflow-x-auto"
              style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              {soundFamiliarCards.map((card) => (
                <div
                  key={card.label}
                  className="flex-shrink-0 flex flex-col justify-center px-5 py-3"
                  style={{
                    background: "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(199,161,76,0.18)",
                    borderRadius: "10px",
                    backdropFilter: "blur(6px)",
                    minWidth: "155px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.77rem",
                      color: "#FFFFFF",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.77rem",
                      color: "var(--color-gold)",
                      lineHeight: 1.3,
                    }}
                  >
                    {card.sub}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Fine print ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="mt-4 flex flex-col gap-1"
          >
            <p
              className="italic"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.63rem", color: "rgba(255,255,255,0.32)" }}
            >
              Payment due on completion of the intake form. Booked via Appointment Guru. Delivered online via Microsoft Teams. Available globally.
            </p>
            <p
              className="italic"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.63rem", color: "rgba(255,255,255,0.32)" }}
            >
              Taygan &nbsp;|&nbsp; BSc S&amp;C &middot; MSc Sports Injuries &amp; Return to Performance &middot; PG Dip Performance Nutrition &middot; MSc Sports Nutrition (c) &nbsp;|&nbsp; 20+ Years Applied Experience
            </p>
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}

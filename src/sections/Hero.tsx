import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

const soundFamiliarCards = [
  {
    id: "performance",
    heading: "Performance\n& Training",
    quotes: [
      "I have entered the ABSA Cape Epic to be competitive in my age category and I have no structured training plan. I do not know if I can ride hard for 8 days, let alone race it.",
      "I am 45 and want to run my first Comrades. I have never had my training load, recovery capacity, or physiological age assessed. I do not know what my body can actually handle before I start building.",
      "I have been told I am overtraining, doing too much mileage, but I do not know what to cut, what to keep, or how to structure my week.",
      "I am training for 500 to 1000km gravel races and have no idea how to structure the volume and intensity across a week without breaking down or burning out.",
    ],
  },
  {
    id: "nutrition",
    heading: "Nutrition\n& Fueling",
    quotes: [
      "I know I should eat before and after training but I never know the right timing, the right amount, or what type of food actually supports recovery versus performance.",
      "I eat well during the week but on race morning I have no idea what to eat, how much, or how long before I start. I always feel either too full or completely empty at the start line.",
      "I race Motocross early morning fasted. By gate drop I have no energy and my reactions are slow. Nobody has built a fuelling plan around my start time.",
      "I do 5-hour rides and have no idea how many carbs to take per hour or why the ratio of glucose to fructose matters. I just take whatever gel is cheapest and wonder why I blow up at hour four.",
    ],
  },
  {
    id: "injury",
    heading: "Injury &\nRehabilitation",
    quotes: [
      "I fractured my collarbone in a mountain bike crash and lost strength while I could not train. I do not know how to rebuild the muscle.",
      "I tore my ACL two years ago. I was cleared to return but I do not trust my knee and my nutrition during recovery has been non-existent.",
      "I have a rotator cuff tear and I have been told to rest from swimming. I have lost fitness, lost muscle, and nobody has given me a structured plan to rebuild either.",
      "My back goes into spasm while playing golf. I have changed my clubs but need to fix my strength, posture and core.",
    ],
  },
  {
    id: "glp1",
    heading: "GLP-1\n& Recovery",
    quotes: [
      "I am on GLP-1 medication and have no appetite. I know I am not eating enough protein but I do not know how much I need or when to eat it.",
      "I have been on Ozempic for eight months. I have lost weight but my body composition looks worse. I have no muscle tone and I am weaker than before I started.",
      "I am on GLP-1 medication and my resting heart rate has been 10 beats higher than normal for months. I do not know why or how it is affecting my training and racing.",
    ],
  },
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
      className="relative w-full h-screen min-h-[700px] overflow-hidden"
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
      <div className="absolute inset-0" style={{ background: "rgba(14,24,50,0.68)" }} />

      {/* Content — fills full hero height */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex flex-col"
      >
        <div className="flex-1 flex flex-col w-full px-8 lg:px-16 py-8 lg:py-10">

          {/* ── Upper row: left text + right pricing (aligned at top) ── */}
          <div className="flex gap-10 xl:gap-14 items-start">

            {/* Left column — content pinned to top */}
            <div className="flex-1 flex flex-col min-w-0">

              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-[9px] tracking-[0.38em] uppercase mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Online &middot; Data-Driven Conversation &middot; Evidence-Based Direction
              </motion.p>

              {/* 3-line headline */}
              <div className="mb-8 overflow-hidden">
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
                        fontSize: "clamp(2rem, 4.2vw, 4.2rem)",
                        fontWeight: 800,
                        lineHeight: 1.06,
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
                  fontSize: "clamp(0.88rem, 1.3vw, 1rem)",
                  color: "rgba(255,255,255,0.62)",
                  lineHeight: 1.82,
                  maxWidth: "56ch",
                }}
              >
                Injured. Undertrained. Under fuelled. Managing GLP-1 related muscle loss. Your numbers are dropping. Lost and need someone to be accountable to. Whatever brought you here — your training load, injury history, nutrition, endurance data and performance goals assessed in a personal online consultation with Taygan directly. A written report, a clear plan and a programme built around your findings. One conversation. That is 1INC.
              </motion.p>

            </div>

            {/* Right column — pricing card, top-aligned, vertical */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col flex-shrink-0"
              style={{
                width: "230px",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(199,161,76,0.22)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
                padding: "1.6rem",
              }}
            >
              <p
                className="text-[8px] tracking-[0.32em] uppercase mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                45-Minute Online Session
              </p>

              <div className="w-6 h-[1.5px] mb-5" style={{ background: "var(--color-gold)", opacity: 0.5 }} />

              {/* SA price */}
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem, 2.4vw, 2.1rem)",
                  color: "var(--color-gold)",
                  lineHeight: 1,
                  marginBottom: "0.35rem",
                }}
              >
                R 1 250
              </div>
              <p
                className="text-[8px] tracking-[0.14em] uppercase mb-5"
                style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)", fontWeight: 600 }}
              >
                Online Consultation
              </p>

              {/* Book button */}
              <button
                onClick={open}
                className="inline-flex items-center justify-center gap-2 w-full py-3 text-[10px] tracking-[0.16em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] mb-5"
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

              {/* Fine print inside card */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem" }}>
                <p
                  className="italic mb-2"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.61rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}
                >
                  Payment due on completion of the intake form. Booked via Appointment Guru. Delivered online via Microsoft Teams.
                </p>
                <p
                  className="italic"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.61rem", color: "rgba(255,255,255,0.3)", lineHeight: 1.6 }}
                >
                  Taygan &nbsp;|&nbsp; BSc S&amp;C &middot; MSc Sports Injuries &amp; Return to Performance &middot; PG Dip Performance Nutrition &middot; MSc Sports Nutrition (c) &nbsp;|&nbsp; 20+ Years Applied Experience
                </p>
              </div>
            </motion.div>

          </div>

          {/* ── Sound Familiar cards — pinned to bottom ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.88 }}
            className="mt-auto pt-6"
          >
            <p
              className="text-[8.5px] tracking-[0.36em] uppercase mb-3"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.35)", fontWeight: 600 }}
            >
              Sound Familiar?
            </p>
            <div
              className="flex gap-3 overflow-x-auto pb-1"
              style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              {soundFamiliarCards.map((card) => (
                <div
                  key={card.id}
                  className="flex-shrink-0 flex flex-col"
                  style={{
                    width: "290px",
                    height: "185px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(199,161,76,0.16)",
                    borderRadius: "12px",
                    backdropFilter: "blur(6px)",
                    padding: "1rem 1.2rem",
                    overflow: "hidden",
                  }}
                >
                  {/* Card heading */}
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.72rem",
                      color: "var(--color-gold)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {card.heading}
                  </p>

                  <div className="w-5 h-[1px] mb-3" style={{ background: "var(--color-gold)", opacity: 0.35 }} />

                  {/* Quotes */}
                  <div className="flex flex-col gap-2.5">
                    {card.quotes.map((q, qi) => (
                      <p
                        key={qi}
                        className="italic"
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "0.69rem",
                          color: "rgba(255,255,255,0.5)",
                          lineHeight: 1.6,
                        }}
                      >
                        "{q}"
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>

    </section>
  )
}

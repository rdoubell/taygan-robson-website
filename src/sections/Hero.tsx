import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

const soundFamiliarCards = [
  { category: "Performance & Training", quote: "I have entered the ABSA Cape Epic to be competitive in my age category and I have no structured training plan. I do not know if I can ride hard for 8 days, let alone race it." },
  { category: "Performance & Training", quote: "I am 45 and want to run my first Comrades. I have never had my training load, recovery capacity, or physiological age assessed against my training. I do not know what my body can actually handle before I start building." },
  { category: "Performance & Training", quote: "I have been told I am overtraining, doing too much millage, but I do not know what to cut, what to keep, or how to structure my week." },
  { category: "Performance & Training", quote: "I am training for 500 to 1000km gravel races and have no idea how to structure the volume and intensity across a week without breaking down or burning out." },
  { category: "Nutrition & Fuelling", quote: "I know I should eat before and after training but I never know the right timing, the right amount, or what type of food actually supports recovery versus performance." },
  { category: "Nutrition & Fuelling", quote: "I eat well during the week but on race morning I have no idea what to eat, how much, or how long before I start. I always feel either too full or completely empty at the start line." },
  { category: "Nutrition & Fuelling", quote: "I race Motocross early morning fasted. By gate drop I have no energy and my reactions are slow. Nobody has built a fuelling plan around my start time." },
  { category: "Nutrition & Fuelling", quote: "I do 5-hour rides and have no idea how many carbs to take per hour or why the ratio of glucose to fructose matters. I just take whatever gel is cheapest and wonder why I blow up at hour four." },
  { category: "Injury & Rehabilitation", quote: "I fractured my collarbone in a mountain bike crash and lost strength while I could not train. I do not know how to rebuild the muscle." },
  { category: "Injury & Rehabilitation", quote: "I tore my ACL two years ago. I was cleared to return but I do not trust my knee and my nutrition during recovery has been non-existent." },
  { category: "Injury & Rehabilitation", quote: "I have a rotator cuff tear and I have been told to rest from swimming. I have lost fitness, lost muscle, and nobody has given me a structured plan to rebuild either." },
  { category: "Injury & Rehabilitation", quote: "My back goes into spasm while playing golf. I have changed my clubs but need to fix my strength, posture and core." },
  { category: "GLP-1 & Recovery", quote: "I am on GLP-1 medication and have no appetite. I know I am not eating enough protein but I do not know how much I need or when to eat it." },
  { category: "GLP-1 & Recovery", quote: "I have been on Ozempic for eight months. I have lost weight but my body composition looks worse. I have no muscle tone and I am weaker than before I started." },
  { category: "GLP-1 & Recovery", quote: "I am on GLP-1 medication and my resting heart rate has been 10 beats higher than normal for months. I do not know why or how it is affecting my training and racing." },
  { category: "GLP-1 & Recovery", quote: "I started GLP-1 medication six months ago. My weight is down but I feel I am getting slower on my rides. Nobody has connected my medication, my strength, and my nutrition into one conversation." },
]

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const contentY      = useTransform(scrollY, [0, 500], [0, -60])
  const { open } = useBookingModal()

  const videoRef = useRef<HTMLVideoElement>(null)
  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 0.35
  }, [])

  // Auto-scroll strip
  const stripRef = useRef<HTMLDivElement>(null)
  const pauseRef = useRef(false)

  useEffect(() => {
    const el = stripRef.current
    if (!el) return
    let lastTime = 0
    let raf: number
    const speed = 0.05 // px / ms ≈ 48 px / s

    const tick = (now: number) => {
      if (lastTime) {
        if (!pauseRef.current) {
          el.scrollLeft += speed * (now - lastTime)
          const half = el.scrollWidth / 2
          if (el.scrollLeft >= half) el.scrollLeft -= half
        }
      }
      lastTime = now
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden" style={{ background: "#14213D" }}>

      {/* DNA video */}
      <video
        ref={videoRef}
        autoPlay loop muted playsInline
        src="/dna-loop.mp4"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.55, transform: "scale(1.08)", filter: "blur(6px) brightness(0.45) saturate(0.6)" }}
      />

      {/* Navy overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(14,24,50,0.68)" }} />

      {/* Content — vertically centred as a single block (content + strip together) */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex flex-col justify-center"
      >

        {/* ── Main content row ── */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-5">
          {/* items-stretch: right card matches the left column height exactly */}
          <div className="flex items-stretch gap-12 xl:gap-20">

            {/* Left — text block */}
            <div className="flex-1 min-w-0">

              {/* Headline — font size reduced so "ONE CONVERSATION." never clips on any desktop */}
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
                      transition={{ duration: 0.72, delay: 0.2 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.6rem, 3.5vw, 3.5rem)",
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

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.75 }}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(0.85rem, 1.45vw, 0.98rem)",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.7,
                  maxWidth: "52ch",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <p>Injured. Undertrained. Under fuelled. Managing GLP-1 related muscle loss. Your numbers are dropping. Lost and need someone to be accountable to.</p>
                <p>Whatever brought you here — your training load, injury history, nutrition, endurance data numbers and performance goals assessed in a personal online consultation with Taygan directly.</p>
                <p>A written report, a clear plan and a programme built around your findings.</p>
                <p>One conversation. That is 1INC.</p>
              </motion.div>

            </div>

            {/* Right — pricing card, stretches to match left column height via items-stretch on parent */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col flex-shrink-0 p-8 justify-between"
              style={{
                width: "468px",
                borderRadius: "20px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(199,161,76,0.22)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
              }}
            >
              {/* Top — eyebrow + description */}
              <div>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
                >
                  Data-driven conversation &middot; Evidence-based direction.
                </p>
                <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", fontSize: "0.92rem", lineHeight: 1.7 }}>
                  Every client begins with a personal consultation with Taygan directly, covering your training load, injury history, nutrition, performance and training structure. From there, a written guidance report, a clear plan, and a programme. That is 1INC.
                </p>
              </div>

              {/* Middle — pricing row */}
              <div className="pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-[10px] tracking-[0.18em] uppercase mb-2" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.4)" }}>
                  45-Minute Online Session
                </p>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(2rem, 3.2vw, 2.6rem)", color: "var(--color-gold)", lineHeight: 1 }}>
                      R 1 250
                    </div>
                    <p className="text-[10px] tracking-[0.15em] uppercase mt-1.5" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                      Online Consultation
                    </p>
                  </div>
                  <button
                    onClick={open}
                    className="inline-flex items-center gap-2 px-5 py-3 text-[10px] tracking-[0.16em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
                    style={{ fontFamily: "var(--font-display)", background: "#FFFFFF", color: "var(--color-navy)", borderRadius: "var(--radius-pill)" }}
                  >
                    Book Now
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              {/* Bottom — fine print + credentials */}
              <div>
                <p className="text-[11.5px] italic mb-2.5" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                  Payment due on completion of the intake form. Booked via Appointment Guru. Delivered online via Microsoft Teams.
                </p>
                <p className="text-[11.5px] italic" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                  Taygan &nbsp;|&nbsp; BSc S&amp;C &middot; MSc Sports Injuries &amp; Return to Performance &middot; PG Dip Performance Nutrition &middot; MSc Sports Nutrition (c)
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ── Sound Familiar strip — flows directly below content ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          style={{ borderTop: "1px solid rgba(199,161,76,0.18)", flexShrink: 0 }}
        >
          {/* Label */}
          <div className="px-6 lg:px-12" style={{ paddingTop: "0.55rem", paddingBottom: "0.45rem" }}>
            <p style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontSize: "8.5px", letterSpacing: "0.32em", fontWeight: 600 }}>
              SOUND FAMILIAR?
            </p>
          </div>

          {/* Scrolling cards — seamless infinite loop, 4 visible */}
          <div
            ref={stripRef}
            className="[&::-webkit-scrollbar]:hidden"
            style={{ overflowX: "scroll", scrollbarWidth: "none" } as React.CSSProperties}
            onMouseEnter={() => { pauseRef.current = true }}
            onMouseLeave={() => { pauseRef.current = false }}
          >
            <div style={{ display: "flex" }}>
              {[...soundFamiliarCards, ...soundFamiliarCards].map((card, i) => (
                <div
                  key={i}
                  style={{
                    width: "25vw",
                    minWidth: "200px",
                    flexShrink: 0,
                    padding: "0.7rem 1.1rem 0.9rem",
                    borderRight: "1px solid rgba(255,255,255,0.06)",
                    height: "110px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                  }}
                >
                  <p style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontSize: "7.5px", letterSpacing: "0.24em", textTransform: "uppercase", fontWeight: 600, marginBottom: "0.4rem", flexShrink: 0 }}>
                    {card.category}
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.42)", fontSize: "0.72rem", lineHeight: 1.55, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 4, WebkitBoxOrient: "vertical" } as React.CSSProperties}>
                    {card.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>

    </section>
  )
}

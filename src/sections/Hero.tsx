import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { scrollY } = useScroll()
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0])
  const contentY      = useTransform(scrollY, [0, 500], [0, -60])

  return (
    <section id="hero" className="relative w-full h-screen min-h-[640px] overflow-hidden" style={{ background: "#14213D" }}>

      {/* Mobile background position override */}
      <style>{`
        @media (max-width: 768px) {
          .hero-bg { background-position: right center !important; background-size: auto 115% !important; }
        }
      `}</style>

      {/* Background photo — positioned so head is always in frame */}
      <div className="hero-bg absolute inset-0 bg-no-repeat" style={{ backgroundImage: "url('/hero-new.jpg')", backgroundPosition: "right center", backgroundSize: "auto 115%" }} />

      {/* Left→right gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(20,33,61,0.96) 0%, rgba(20,33,61,0.88) 38%, rgba(20,33,61,0.52) 62%, rgba(20,33,61,0.18) 100%)",
        }}
      />

      {/* Right edge blur — fades image into navy */}
      <div
        className="absolute inset-y-0 right-0 w-40"
        style={{
          background: "linear-gradient(to right, transparent, rgba(20,33,61,0.82))",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
        }}
      />

      {/* Top + bottom subtle vignette */}
      <div className="absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(to bottom, rgba(20,33,61,0.55), transparent)" }} />
      <div className="absolute inset-x-0 bottom-0 h-32" style={{ background: "linear-gradient(to top, rgba(20,33,61,0.55), transparent)" }} />

      {/* Overall subtle dark layer */}
      <div className="absolute inset-0 bg-[rgba(8,14,28,0.18)]" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

          {/* Left — text block */}
          <div className="max-w-[660px]">

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

        </div>
      </motion.div>

    </section>
  )
}

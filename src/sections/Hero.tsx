import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

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
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(20,33,61,0.96) 0%, rgba(20,33,61,0.88) 38%, rgba(20,33,61,0.52) 62%, rgba(20,33,61,0.18) 100%)",
        }}
      />

      {/* Overall subtle dark layer */}
      <div className="absolute inset-0 bg-[rgba(8,14,28,0.22)]" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">

          {/* Left — text block */}
          <div className="max-w-[560px]">

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
                      fontSize: "clamp(2.4rem, 5.5vw, 4.8rem)",
                      fontWeight: 800,
                      lineHeight: 1.06,
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
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 1.7vw, 1.1rem)",
                maxWidth: "42ch",
              }}
            >
              Specialised sports science and nutrition programmes designed to optimise
              performance, recovery, and long-term athletic development.
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
              <span
                className="text-[11px] leading-tight"
                style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.28)" }}
              >
                45-min session · via Microsoft Teams
              </span>
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
          style={{ fontFamily: "var(--font-display)" }}
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

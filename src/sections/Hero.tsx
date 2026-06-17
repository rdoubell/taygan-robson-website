import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const { scrollY } = useScroll()

  // Image starts slightly zoomed in, pulls back as you scroll (zoom-out effect)
  const imageScale = useTransform(scrollY, [0, 700], [1.06, 0.94])

  // Hero text fades out and drifts upward as About slides over
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0])
  const contentY = useTransform(scrollY, [0, 380], [0, -55])

  // Overlay darkens slightly to reinforce the "receding" feel
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.68, 0.82])

  // Scroll hint disappears quickly
  const scrollHintOpacity = useTransform(scrollY, [0, 160], [1, 0])

  return (
    <section
      id="hero"
      className="sticky top-0 z-10 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* Zoomable hero image */}
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

      {/* Hero content — fades + drifts up on scroll */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto"
      >
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUp}
            className="text-xs tracking-[0.35em] uppercase text-white/50 mb-7"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Performance · Rehabilitation · Science
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-white leading-[1.0] mb-7"
            style={{
              fontFamily: "'Tinos', Georgia, serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 700,
            }}
          >
            Sports Injury<br />
            <span className="text-[#C9A84C]">&amp; Rehabilitation.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/60 text-base lg:text-lg font-light max-w-md mx-auto leading-relaxed mb-10"
          >
            Three decades. Two practices. One conversation.
          </motion.p>

          <motion.div variants={fadeUp} className="hero-cta-wrap">
            <a
              href="#contact"
              className="hero-cta inline-flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-white text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#A08030] hover:shadow-[0_0_28px_rgba(201,168,76,0.45)] hover:scale-[1.02] transition-all duration-300"
            >
              Book Appointment <span className="text-white/50">+</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll hint fades out immediately */}
      <motion.div
        style={{ opacity: scrollHintOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={13} className="text-white/25" />
        </motion.div>
      </motion.div>
    </section>
  )
}

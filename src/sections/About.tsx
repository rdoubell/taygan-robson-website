import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] } },
})

const tags = [
  "Performance Science",
  "Sports Rehabilitation",
  "Sports Nutrition",
  "Endurance Analytics",
  "Return-to-Performance",
  "Injury Prevention",
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id="about"
      className="section-pad bg-white"
      style={{ boxShadow: "0 -24px 80px rgba(0,0,0,0.35)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Centred heading */}
        <div className="text-center mb-12">
          <motion.p
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-[10px] tracking-[0.35em] uppercase text-[#1A3B6E]/60 mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            About Taygan
          </motion.p>
          <motion.h2
            variants={fadeUp(0.06)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mb-3"
            style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em", color: "#C9A84C" }}
          >
            About
          </motion.h2>
          <motion.p
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-black/70 text-lg lg:text-xl font-semibold leading-snug"
          >
            Built on data, discipline, and systems — not guesswork.
          </motion.p>
          <motion.span
            variants={fadeUp(0.14)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rule-green mx-auto mt-6 block"
          />
        </div>

        {/* Two-column body */}
        <div className="grid lg:grid-cols-[320px_1fr] gap-8 lg:gap-10 items-stretch">

          {/* Left — photo placeholder */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="about-image-col relative w-full"
          >
            <div className="about-image-inner h-full min-h-[300px] border-2 border-dashed border-[#1A3B6E]/20 bg-[#F7F7F5] flex flex-col items-center justify-center gap-4">
              <div className="w-12 h-12 border-2 border-dashed border-[#1A3B6E]/30 rounded-full flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B6E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.35">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
              <p className="text-[#1A3B6E]/35 text-[10px] tracking-[0.22em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                Insert Photo
              </p>
            </div>
            <div className="absolute bottom-0 left-0 w-1 h-20 bg-[#C9A84C]" />
          </motion.div>

          {/* Right — text, centred vertically with image */}
          <div className="flex flex-col justify-center">
            <motion.p variants={fadeUp(0.17)} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-black/65 text-[15px] leading-[1.85] mb-4">
              With over two decades of experience across performance science, sports nutrition, and rehabilitation, Taygan works with athletes and teams requiring a complete performance overview before intervention begins.
            </motion.p>

            <motion.p variants={fadeUp(0.23)} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-black/65 text-[15px] leading-[1.85] mb-4">
              His approach integrates training load analysis, injury history, movement screening, nutrition strategy, and return-to-performance planning into one evidence-based system.
            </motion.p>

            <motion.p variants={fadeUp(0.29)} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-black/65 text-[15px] leading-[1.85] mb-8">
              Through{" "}
              <span className="text-[#1A3B6E] font-medium">1INC Consulting</span>,
              clients receive direct high-level guidance tailored to their performance goals, rehabilitation needs, and long-term athletic development. Currently working with elite athletes and motorsport teams, Taygan combines practical experience with advanced academic research in sports nutrition and sports injury rehabilitation.
            </motion.p>

            {/* Specialisation tags */}
            <motion.div
              variants={fadeUp(0.35)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 border border-[#1A3B6E]/20 text-[#1A3B6E]/70 text-[10px] tracking-[0.18em] uppercase bg-[#F7F7F5]"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

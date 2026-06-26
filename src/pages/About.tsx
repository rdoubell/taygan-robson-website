import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Users, Microscope, Quote } from "lucide-react"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

const credentials = [
  {
    icon: BookOpen,
    category: "Education",
    items: [
      "MSc Sports Nutrition — University of Portsmouth",
      "BSc Sports Rehabilitation — Hons",
      "Postgraduate Certificate in Strength & Conditioning",
    ],
  },
  {
    icon: Award,
    category: "Certifications",
    items: [
      "BASES Accredited Sport & Exercise Scientist",
      "SENr Registered Sports Nutritionist",
      "NSCA Certified Strength & Conditioning Specialist",
    ],
  },
  {
    icon: Users,
    category: "Clientele",
    items: [
      "Elite Motorsport Athletes & Teams",
      "Professional Endurance Athletes",
      "Premiership & Academy Football",
    ],
  },
  {
    icon: Microscope,
    category: "Research Focus",
    items: [
      "Sports Injury Biomechanics & Load Management",
      "Nutritional Periodisation for Performance",
      "Return-to-Sport Outcome Frameworks",
    ],
  },
]

const quoteCard = {
  quote: "Every recommendation is grounded in peer-reviewed science and clinical experience — not trends, not guesswork.",
}

const allCards = [...credentials, quoteCard, ...credentials, quoteCard]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
})

export default function AboutPage() {
  const bioRef = useRef(null)
  const credRef = useRef(null)
  const bioInView = useInView(bioRef, { once: true, margin: "-80px" })
  const credInView = useInView(credRef, { once: true, margin: "-60px" })

  return (
    <div className="grain">
      <Navbar />

      {/* ── Page header ── */}
      <div
        className="pt-32 pb-16 text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[9px] tracking-[0.45em] uppercase mb-4"
          style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.35)" }}
        >
          1INC Consulting
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Meet{" "}
          <span style={{ color: "var(--color-gold)" }}>Taygan.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-4 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
        >
          Built on data, discipline, and systems — not guesswork.
        </motion.p>
      </div>

      {/* ── Photo + Bio ── */}
      <section
        ref={bioRef}
        className="section-pad bg-white"
        style={{ boxShadow: "0 -24px 80px rgba(0,0,0,0.12)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

            {/* Photo */}
            <motion.div
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              className="relative overflow-hidden"
              style={{ aspectRatio: "3/4", maxHeight: "540px" }}
            >
              <img
                src="/about page photo.png"
                alt="Taygan Robson"
                className="w-full h-full object-cover"
                style={{ objectPosition: "50% 18%", transform: "scale(1.35)", transformOrigin: "50% 18%" }}
              />
              {/* Gold accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: "var(--color-gold)" }}
              />
              {/* Subtle name tag */}
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5"
                style={{ background: "rgba(20,33,61,0.82)", backdropFilter: "blur(6px)" }}
              >
                <p className="text-white text-[10px] tracking-[0.22em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Taygan Robson
                </p>
                <p style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontSize: "8px", letterSpacing: "0.18em" }} className="uppercase mt-0.5">
                  Sports Scientist · Nutritionist · Rehabilitation Specialist
                </p>
              </div>
            </motion.div>

            {/* Bio text */}
            <div className="flex flex-col justify-center gap-6 py-2">
              <motion.div variants={fadeUp(0.14)} initial="hidden" animate={bioInView ? "visible" : "hidden"}>
                <div className="w-8 h-[2px] mb-5" style={{ background: "var(--color-gold)" }} />
                <p
                  className="leading-[1.9]"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.65)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
                >
                  With over two decades of experience across performance science, sports nutrition, and rehabilitation, Taygan works with athletes and teams requiring a complete performance overview before intervention begins.
                </p>
              </motion.div>

              <motion.p
                variants={fadeUp(0.2)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.65)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
              >
                His approach integrates training load analysis, injury history, movement screening, nutrition strategy, and return-to-performance planning into one evidence-based system.
              </motion.p>

              <motion.p
                variants={fadeUp(0.26)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.65)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
              >
                Through{" "}
                <span style={{ color: "var(--color-navy)", fontWeight: 600 }}>1INC Consulting</span>,
                clients receive direct high-level guidance tailored to their performance goals, rehabilitation needs, and long-term athletic development. Currently working with elite athletes and motorsport teams, Taygan combines practical experience with advanced academic research in sports nutrition and sports injury rehabilitation.
              </motion.p>

              {/* Quick-stat row */}
              <motion.div
                variants={fadeUp(0.32)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="grid grid-cols-3 gap-4 pt-4 mt-2 border-t"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                {[
                  { value: "20+", label: "Years Experience" },
                  { value: "MSc", label: "Sports Nutrition" },
                  { value: "Elite", label: "Clientele" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1 }}
                    >
                      {value}
                    </span>
                    <span
                      style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontSize: "9px", letterSpacing: "0.22em" }}
                      className="uppercase"
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp(0.38)} initial="hidden" animate={bioInView ? "visible" : "hidden"}>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-7 py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "var(--color-gold)",
                    color: "#14213D",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  Book a Consultation
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials carousel ── */}
      <section
        ref={credRef}
        className="section-pad"
        style={{ background: "var(--color-cream, #F7F6EF)" }}
      >
        <style>{`
          @keyframes cred-scroll-about {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .cred-track-about {
            animation: cred-scroll-about 32s linear infinite;
          }
          .cred-track-about:hover {
            animation-play-state: paused;
          }
          .cred-mask-about {
            mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
            -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.42em] uppercase mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
          >
            Qualifications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              color: "var(--color-navy)",
              lineHeight: 1.1,
            }}
          >
            Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted, rgba(0,0,0,0.5))", fontSize: "1rem" }}
          >
            Academic depth. Industry credentials.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={credInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="cred-mask-about overflow-hidden"
        >
          <div className="cred-track-about flex gap-5 w-max">
            {allCards.map((card, i) => {
              if ("quote" in card) {
                return (
                  <div
                    key={`quote-${i}`}
                    className="flex-shrink-0 w-72 p-7 flex flex-col justify-center"
                    style={{ background: "var(--color-navy)" }}
                  >
                    <Quote size={20} className="mb-4" style={{ color: "rgba(255,255,255,0.3)" }} />
                    <p className="text-[14px] leading-[1.85] italic" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)" }}>
                      {card.quote}
                    </p>
                  </div>
                )
              }

              const cred = card as typeof credentials[0]
              return (
                <div
                  key={`${cred.category}-${i}`}
                  className="flex-shrink-0 w-72 p-7"
                  style={{ background: "var(--color-navy)" }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                      style={{ border: "1px solid rgba(255,255,255,0.25)" }}
                    >
                      <cred.icon size={14} className="text-white" />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.22em] uppercase"
                      style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.6)" }}
                    >
                      {cred.category}
                    </span>
                  </div>
                  <div className="w-6 h-[1.5px] mb-5" style={{ background: "rgba(199,161,76,0.6)" }} />
                  <ul className="flex flex-col gap-3">
                    {cred.items.map((item) => (
                      <li key={item} className="text-[13px] leading-snug flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.8)" }}>
                        <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(199,161,76,0.6)" }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}

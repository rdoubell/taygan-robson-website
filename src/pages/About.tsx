import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Users, Microscope, Quote } from "lucide-react"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
})

const disciplines = [
  {
    num: "01",
    title: "Sports Injury & Rehabilitation",
    desc: "Evidence-based return-to-performance systems built around the individual — from initial movement screening and injury analysis through to full return-to-performance clearance. Available in-house at The Campus Wellness Centre and online via Physitrack globally.",
  },
  {
    num: "02",
    title: "Clinical Sports Nutrition",
    desc: "Nutritional periodisation, race fuelling, supplementation strategy, and body composition analysis grounded in clinical sports nutrition science. Delivered online via Microsoft Teams with a written report included.",
  },
  {
    num: "03",
    title: "Performance Science",
    desc: "Structured online performance consulting via TrainingPeaks. Training load monitoring, periodised annual planning, race-taper design, and data-driven programme adjustments — every session reviewed, every plan tailored.",
  },
]

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "3", label: "Specialist Practices" },
  { value: "Global", label: "Online Delivery" },
]

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
  quote:
    "Every recommendation is grounded in peer-reviewed science and clinical experience — not trends, not guesswork.",
}

// Duplicate for seamless infinite scroll
const allCards = [...credentials, quoteCard, ...credentials, quoteCard]

export default function AboutPage() {
  const heroRef    = useRef(null)
  const bioRef     = useRef(null)
  const credRef    = useRef(null)
  const discRef    = useRef(null)
  const quoteRef   = useRef(null)

  const bioInView   = useInView(bioRef,   { once: true, margin: "-80px" })
  const credInView  = useInView(credRef,  { once: true, margin: "-60px" })
  const discInView  = useInView(discRef,  { once: true, margin: "-60px" })
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" })

  return (
    <div className="grain">
      <Navbar />

      {/* ── Page header ── */}
      <div
        ref={heroRef}
        className="pt-36 pb-14 text-center"
        style={{ background: "var(--color-navy)" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[9px] tracking-[0.48em] uppercase mb-4"
          style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.32)" }}
        >
          1INC Consulting
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
            color: "#FFFFFF",
          }}
        >
          Meet{" "}
          <span style={{ color: "var(--color-gold)" }}>Taygan.</span>
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 mx-auto"
          style={{ width: "48px", height: "2px", background: "var(--color-gold)", transformOrigin: "center" }}
        />
      </div>

      {/* ── Photo + Bio ── */}
      <section
        ref={bioRef}
        className="bg-white"
        style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.10)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 lg:py-20">
          <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-20 items-start">

            {/* Photo */}
            <motion.div
              variants={fadeUp(0.06)}
              initial="hidden"
              animate={bioInView ? "visible" : "hidden"}
              className="relative"
            >
              <div
                className="overflow-hidden"
                style={{ aspectRatio: "3/4", maxHeight: "520px" }}
              >
                <img
                  src="/about-photo.png"
                  alt="Taygan Robson"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 18%", transform: "scale(1.35)", transformOrigin: "50% 18%" }}
                />
              </div>

              {/* Gold accent bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[3px]"
                style={{ background: "var(--color-gold)" }}
              />

              {/* Name tag */}
              <div
                className="absolute bottom-5 left-5 px-4 py-2"
                style={{ background: "rgba(20,33,61,0.85)", backdropFilter: "blur(8px)" }}
              >
                <p
                  className="text-white text-[10px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
                >
                  Taygan Robson
                </p>
                <p
                  className="uppercase mt-0.5"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--color-gold)",
                    fontSize: "8px",
                    letterSpacing: "0.16em",
                  }}
                >
                  Director &amp; Founder · 1INC Consulting
                </p>
              </div>
            </motion.div>

            {/* Bio text */}
            <div className="flex flex-col justify-center gap-6 py-2">

              <motion.div
                variants={fadeUp(0.12)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
              >
                <div className="w-8 h-[2px] mb-6" style={{ background: "var(--color-gold)" }} />
                <p
                  className="leading-[1.9]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(0,0,0,0.65)",
                    fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                  }}
                >
                  With over two decades of experience across performance science, sports nutrition, and rehabilitation, Taygan works with athletes and active individuals who need a complete performance picture before any intervention begins.
                </p>
              </motion.div>

              <motion.p
                variants={fadeUp(0.18)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="leading-[1.9]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(0,0,0,0.65)",
                  fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                }}
              >
                His approach integrates training load analysis, injury history, movement screening, nutrition strategy, and return-to-performance planning into one evidence-based system — delivered directly, without referrals or hand-offs at the first touchpoint.
              </motion.p>

              <motion.p
                variants={fadeUp(0.24)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="leading-[1.9]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(0,0,0,0.65)",
                  fontSize: "clamp(1rem, 1.6vw, 1.1rem)",
                }}
              >
                Through{" "}
                <span style={{ color: "var(--color-navy)", fontWeight: 600 }}>1INC Consulting</span>,
                clients receive direct access to Taygan and the three specialist practices — Sports Injury &amp; Rehabilitation, Clinical Sports Nutrition, and Pure Science Performance — with every programme overseen from consultation through to outcomes.
              </motion.p>

              {/* Stats row */}
              <motion.div
                variants={fadeUp(0.30)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="grid grid-cols-3 gap-4 pt-6 mt-2 border-t"
                style={{ borderColor: "rgba(0,0,0,0.08)" }}
              >
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "var(--color-gold)",
                        fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      {value}
                    </span>
                    <span
                      className="uppercase"
                      style={{
                        fontFamily: "var(--font-display)",
                        color: "rgba(0,0,0,0.38)",
                        fontSize: "9px",
                        letterSpacing: "0.24em",
                      }}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials carousel ── */}
      <section
        ref={credRef}
        className="py-14 lg:py-20"
        style={{ background: "var(--color-cream, #F7F6EF)" }}
      >
        <style>{`
          @keyframes cred-scroll-about {
            0%   { transform: translateX(0); }
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

        {/* Section heading */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[9px] tracking-[0.48em] uppercase mb-3"
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
              letterSpacing: "-0.01em",
            }}
          >
            Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-3"
            style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)", fontSize: "1rem" }}
          >
            Academic depth. Industry credentials.
          </motion.p>
        </div>

        {/* Scrolling track */}
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
                    <Quote size={20} className="mb-4" style={{ color: "rgba(255,255,255,0.28)" }} />
                    <p
                      className="text-[14px] leading-[1.85] italic"
                      style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.9)" }}
                    >
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
                      style={{ border: "1px solid rgba(255,255,255,0.22)" }}
                    >
                      <cred.icon size={14} className="text-white" />
                    </div>
                    <span
                      className="text-[10px] tracking-[0.22em] uppercase"
                      style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.55)" }}
                    >
                      {cred.category}
                    </span>
                  </div>
                  <div className="w-6 h-[1.5px] mb-5" style={{ background: "rgba(199,161,76,0.55)" }} />
                  <ul className="flex flex-col gap-3">
                    {cred.items.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] leading-snug flex items-start gap-2.5"
                        style={{ color: "rgba(255,255,255,0.78)" }}
                      >
                        <span
                          className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "rgba(199,161,76,0.6)" }}
                        />
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

      {/* ── Three disciplines ── */}
      <section
        ref={discRef}
        className="py-14 lg:py-20"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="mb-10 lg:mb-12">
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              animate={discInView ? "visible" : "hidden"}
              className="text-[9px] tracking-[0.48em] uppercase mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
            >
              The Practice
            </motion.p>
            <motion.h2
              variants={fadeUp(0.06)}
              initial="hidden"
              animate={discInView ? "visible" : "hidden"}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Three Practices.{" "}
              <span style={{ color: "var(--color-gold)" }}>One Entry Point.</span>
            </motion.h2>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {disciplines.map((disc, i) => (
              <motion.div
                key={disc.num}
                variants={fadeUp(0.08 + i * 0.1)}
                initial="hidden"
                animate={discInView ? "visible" : "hidden"}
                className="flex flex-col p-8 lg:p-10"
                style={{ background: "var(--color-navy)" }}
              >
                {/* Number */}
                <span
                  className="mb-6 leading-none select-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "3.5rem",
                    fontWeight: 800,
                    color: "rgba(255,255,255,0.06)",
                    letterSpacing: "-0.03em",
                  }}
                  aria-hidden="true"
                >
                  {disc.num}
                </span>

                {/* Gold bar */}
                <div className="w-7 h-[2px] mb-5" style={{ background: "var(--color-gold)" }} />

                {/* Title */}
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
                    color: "#FFFFFF",
                    lineHeight: 1.25,
                    letterSpacing: "-0.005em",
                  }}
                >
                  {disc.title}
                </h3>

                {/* Description */}
                <p
                  className="leading-[1.85] flex-1"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.52)",
                    fontSize: "13.5px",
                  }}
                >
                  {disc.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy pull-quote ── */}
      <section
        ref={quoteRef}
        className="py-12 lg:py-16 bg-white"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={quoteInView ? "visible" : "hidden"}
            className="mb-6"
          >
            <div
              className="inline-block text-[60px] leading-none select-none"
              style={{ color: "var(--color-gold)", fontFamily: "Georgia, serif", lineHeight: 0.8, marginBottom: "0.2em" }}
              aria-hidden="true"
            >
              "
            </div>
          </motion.div>

          <motion.blockquote
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={quoteInView ? "visible" : "hidden"}
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
              color: "var(--color-navy)",
              lineHeight: 1.4,
              letterSpacing: "-0.01em",
            }}
          >
            Every recommendation is grounded in peer-reviewed science and clinical experience — not trends, not guesswork.
          </motion.blockquote>

          <motion.p
            variants={fadeUp(0.16)}
            initial="hidden"
            animate={quoteInView ? "visible" : "hidden"}
            className="mt-6 text-[11px] tracking-[0.28em] uppercase"
            style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}
          >
            Taygan Robson · 1INC Consulting
          </motion.p>

        </div>
      </section>

      <Footer />
    </div>
  )
}

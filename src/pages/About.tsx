import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
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

export default function AboutPage() {
  const heroRef    = useRef(null)
  const bioRef     = useRef(null)
  const discRef    = useRef(null)
  const quoteRef   = useRef(null)

  const bioInView   = useInView(bioRef,   { once: true, margin: "-80px" })
  const discInView  = useInView(discRef,  { once: true, margin: "-60px" })
  const quoteInView = useInView(quoteRef, { once: true, margin: "-60px" })

  return (
    <div className="grain">
      <Navbar />

      {/* ── Page header ── */}
      <div
        ref={heroRef}
        className="pt-36 pb-20 text-center"
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

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="mt-5 max-w-sm mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.42)", fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)" }}
        >
          Built on data, discipline, and systems — not guesswork.
        </motion.p>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.46, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 mx-auto"
          style={{ width: "48px", height: "2px", background: "var(--color-gold)", transformOrigin: "center" }}
        />
      </div>

      {/* ── Photo + Bio ── */}
      <section
        ref={bioRef}
        className="bg-white"
        style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.10)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
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

              {/* CTA */}
              <motion.div
                variants={fadeUp(0.36)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
              >
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-3 px-7 py-3.5 text-[10px] tracking-[0.22em] uppercase font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "var(--color-gold)",
                    color: "#14213D",
                    borderRadius: "var(--radius-pill)",
                    boxShadow: "0 6px 24px rgba(199,161,76,0.32)",
                  }}
                >
                  Book a 1INC Consultation
                  <ArrowRight size={13} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three disciplines ── */}
      <section
        ref={discRef}
        className="py-20 lg:py-28"
        style={{ background: "var(--color-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Heading */}
          <div className="mb-14 lg:mb-16">
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
        className="py-20 lg:py-28 bg-white"
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

          <motion.div
            variants={fadeUp(0.22)}
            initial="hidden"
            animate={quoteInView ? "visible" : "hidden"}
            className="mt-10"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-[10px] tracking-[0.22em] uppercase font-bold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-gold)",
                color: "#14213D",
                borderRadius: "var(--radius-pill)",
                boxShadow: "0 6px 24px rgba(199,161,76,0.30)",
              }}
            >
              Book a 1INC Consultation
              <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

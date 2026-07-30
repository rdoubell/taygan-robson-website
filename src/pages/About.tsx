import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { BookOpen, Activity, Dumbbell, Linkedin, ArrowRight } from "lucide-react"
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
      "BSc Strength & Conditioning",
      "PG Dip Performance Nutrition (IOPN)",
      "MSc Sports Injuries & Return to Performance Management — Setanta / Irish American University (Ireland)",
      "MSc Sports Nutrition — University of Portsmouth (UK) · candidate",
    ],
  },
  {
    icon: Activity,
    category: "Currently",
    items: [
      "Clinical movement screening & rehabilitation — The Campus Wellness Centre, Bryanston",
      "Performance analyst & nutritionist — Dash Youth Elite Racing Team",
      "Performance nutrition product development — Elite Labs",
    ],
  },
  {
    icon: Dumbbell,
    category: "What I Work With",
    items: [
      "VALD ForceDecks · VALD DynaMo",
      "FMS · Posture Grid Analysis",
      "TrainingPeaks (ATL / CTL / TSB)",
      "VO₂ & Metabolic Cart Testing",
      "Physitrack Online Rehab",
      "HRV & Sleep Optimisation Systems",
    ],
  },
]

const methods = [
  {
    category: "Physical Profile Assessment",
    description:
      "Strength deficits, force production asymmetries and limb-to-limb imbalances quantified before any programme commences. Working alongside Dr Peter van der Meulen, specialist prosthodontist, analysing RFD, peak force, RSI, balance and concentric strength — with custom performance mouth guards designed around individual athlete bite and jaw alignment data.",
    tools: "VALD ForceDecks · VALD DynaMo · FMS · Posture Grid",
  },
  {
    category: "Performance Science",
    description:
      "FTP testing, lactate threshold assessment and VO₂ and metabolic cart testing for threshold and performance profiling. Training load monitored via ATL, CTL and TSB across TrainingPeaks. Power, HR, GPS and RPE integrated across disciplines.",
    tools: "TrainingPeaks · VO₂ & Metabolic Cart · FTP & Lactate Testing",
  },
  {
    category: "Sports Injury & Rehabilitation",
    description:
      "Clinical movement screening, VALD DynaMo dynamometry, Physitrack programme delivery and return-to-performance protocols. Sport-specific rehabilitation designed and progressed from objective baseline data.",
    tools: "VALD DynaMo · Physitrack · Clinical Movement Screening",
  },
  {
    category: "Performance Nutrition",
    description:
      "Macro-nutrient periodisation, energy availability assessment, race and competition fuelling strategy and clinical body composition analysis. Calibrated across low, medium and high training demand days using the TTT framework.",
    tools: "TTT Framework · Energy Availability · Race Fuelling",
  },
  {
    category: "Advanced Recovery",
    description:
      "HRV monitoring, TSS and chronic training load management and sleep optimisation systems. Working alongside specialist practitioners to refine the art of recovery. Evidence informing every decision.",
    tools: "HRV Monitoring · TSS · Sleep Optimisation",
  },
  {
    category: "Research & Writing",
    description:
      "Ongoing authorship of mini research papers across sports injury, performance nutrition and return-to-performance. Unpublished but informing every consultation.",
    tools: "Sports Injury · Performance Nutrition · Return-to-Performance",
  },
]

export default function AboutPage() {
  const bioRef      = useRef(null)
  const credRef     = useRef(null)
  const methodsRef  = useRef(null)
  const closingRef  = useRef(null)
  const linkedinRef = useRef(null)

  const bioInView      = useInView(bioRef,      { once: true, margin: "-80px" })
  const credInView     = useInView(credRef,     { once: true, margin: "-60px" })
  const methodsInView  = useInView(methodsRef,  { once: true, margin: "-60px" })
  const closingInView  = useInView(closingRef,  { once: true, margin: "-60px" })
  const linkedinInView = useInView(linkedinRef, { once: true, margin: "-60px" })

  return (
    <div className="grain">
      <Navbar />

      {/* ── Page header ── */}
      <div className="pt-36 pb-14 text-center" style={{ background: "var(--color-navy)" }}>
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1rem, 2vw, 1.3rem)",
            color: "rgba(255,255,255,0.50)",
            letterSpacing: "-0.005em",
          }}
        >
          Two decades. Three practices. One strategy.
        </motion.p>

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
              <div className="overflow-hidden" style={{ aspectRatio: "3/4", maxHeight: "520px" }}>
                <img
                  src="/about-photo.png"
                  alt="Taygan Robson"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 18%", transform: "scale(1.35)", transformOrigin: "50% 18%" }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: "var(--color-gold)" }} />
              <div className="absolute bottom-5 left-5 px-4 py-2" style={{ background: "rgba(20,33,61,0.85)", backdropFilter: "blur(8px)" }}>
                <p className="text-white text-[10px] tracking-[0.22em] uppercase" style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}>
                  Taygan Robson
                </p>
                <p className="uppercase mt-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontSize: "8px", letterSpacing: "0.16em" }}>
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
                <p className="leading-[1.9]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.65)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
                  I have been an athlete my entire life. Competitive club 1st team rugby, football from five to thirteen — A team, provincial colours in youth dinghy sailing, then racing competitively and placing in mountain biking across more than 50 events over fifteen years including ABSA Cape Epic, Joberg2c, and other three to four-day stage race events, Xterra off-road triathlon and adventure racing across South Africa from 2006 to 2024. The last two years have been my own rehabilitation, managing a significant back injury from Muay Thai training and navigating return-to-performance firsthand. That experience shapes every consultation.
                </p>
              </motion.div>

              <motion.p
                variants={fadeUp(0.18)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.65)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
              >
                I founded and direct <span style={{ color: "var(--color-navy)", fontWeight: 600 }}>1INC Consulting</span> across three specialist practices with a multi-disciplinary team: sports injury and rehabilitation, performance science, and clinical sports nutrition. Every client begins with a personal online consultation with me directly. Training load, injury history, nutrition, and performance goals assessed — then mapped to a written report, a clear plan, and a programme. Data-driven consulting. Evidence-based direction.
              </motion.p>

              <motion.p
                variants={fadeUp(0.24)}
                initial="hidden"
                animate={bioInView ? "visible" : "hidden"}
                className="leading-[1.9]"
                style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.65)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
              >
                This includes athletes, active individuals, and those managing GLP-1-related muscle loss, sarcopenia, or bone health concerns — where rehabilitation, nutrition, and structured load management intersect.
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
                    <span style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 800, lineHeight: 1 }}>
                      {value}
                    </span>
                    <span className="uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.38)", fontSize: "9px", letterSpacing: "0.24em" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section ref={credRef} className="py-14 lg:py-20" style={{ background: "var(--color-cream, #F7F6EF)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
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
            style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-navy)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={credInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {credentials.map((cred) => (
            <div key={cred.category} className="flex flex-col p-7" style={{ background: "var(--color-navy)" }}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 flex items-center justify-center flex-shrink-0" style={{ border: "1px solid rgba(255,255,255,0.22)" }}>
                  <cred.icon size={14} className="text-white" />
                </div>
                <span className="text-[10px] tracking-[0.22em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.55)" }}>
                  {cred.category}
                </span>
              </div>
              <div className="w-6 h-[1.5px] mb-5" style={{ background: "rgba(199,161,76,0.55)" }} />
              <ul className="flex flex-col gap-3">
                {cred.items.map((item) => (
                  <li key={item} className="text-[13px] leading-snug flex items-start gap-2.5" style={{ color: "rgba(255,255,255,0.78)" }}>
                    <span className="mt-[7px] w-1 h-1 rounded-full flex-shrink-0" style={{ background: "rgba(199,161,76,0.6)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── What I Work With — expanded ── */}
      <section ref={methodsRef} className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={methodsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[9px] tracking-[0.48em] uppercase mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
            >
              Methods &amp; Tools
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={methodsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-navy)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
            >
              What I Work With
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={methodsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {methods.map((method, i) => (
              <motion.div
                key={method.category}
                initial={{ opacity: 0, y: 18 }}
                animate={methodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
                className="flex flex-col p-7"
                style={{ background: "var(--color-navy)", borderTop: "2px solid var(--color-gold)" }}
              >
                <p className="text-[9px] tracking-[0.28em] uppercase mb-4 font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}>
                  {method.category}
                </p>
                <p className="text-[13.5px] leading-relaxed flex-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.65)" }}>
                  {method.description}
                </p>
                <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <p className="text-[10px] tracking-[0.16em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(199,161,76,0.55)" }}>
                    {method.tools}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Closing mission statement ── */}
      <section ref={closingRef} className="py-20 lg:py-28" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={closingInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mb-10"
            style={{ width: "40px", height: "2px", background: "var(--color-gold)", transformOrigin: "center" }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={closingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.4vw, 1.75rem)",
              fontWeight: 700,
              color: "rgba(255,255,255,0.88)",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
            }}
          >
            The standard I hold every consultation to is the kind of integrated, data-led performance environment found at elite athlete performance centres globally.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={closingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.2rem, 2.4vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.88)" }}>Where rehabilitation, performance science and nutrition are not separate conversations — </span>
            <span style={{ color: "var(--color-gold)" }}>they are 3 in 1. That is 1INC.</span>
          </motion.p>
        </div>
      </section>

      {/* ── LinkedIn ── */}
      <section ref={linkedinRef} className="py-16 lg:py-20" style={{ background: "#FFFFFF" }}>
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={linkedinInView ? "visible" : "hidden"}
            className="flex justify-center mb-6"
          >
            <div
              className="w-14 h-14 flex items-center justify-center"
              style={{ border: "1px solid rgba(27,42,74,0.15)", borderRadius: "var(--radius-sm)", color: "var(--color-navy)" }}
            >
              <Linkedin size={22} />
            </div>
          </motion.div>
          <motion.h2
            variants={fadeUp(0.06)}
            initial="hidden"
            animate={linkedinInView ? "visible" : "hidden"}
            className="mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "var(--color-navy)", lineHeight: 1.15 }}
          >
            Follow the conversation.
          </motion.h2>
          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            animate={linkedinInView ? "visible" : "hidden"}
            className="mb-8 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.7 }}
          >
            Clinical insights, case studies, and evidence-based thinking — posted weekly.
          </motion.p>
          <motion.div
            variants={fadeUp(0.18)}
            initial="hidden"
            animate={linkedinInView ? "visible" : "hidden"}
          >
            <a
              href="https://www.linkedin.com/in/tayganrobson/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-bold transition-all duration-300 hover:scale-[1.02]"
              style={{ fontFamily: "var(--font-display)", background: "var(--color-navy)", color: "#FFFFFF", borderRadius: "var(--radius-pill)" }}
            >
              Follow Taygan on LinkedIn
              <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

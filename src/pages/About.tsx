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

const disciplines = [
  {
    num: "01",
    title: "Pure Science Performance",
    subtitle: "Online endurance and sport-specific training via TrainingPeaks",
    desc: "Periodised around your schedule, events, and performance goals. Data-driven total stress balance and chronic training load management, race preparation and performance analytics across all endurance disciplines.",
    taygan: "BSc S&C · MSc Sports Injuries & Return to Performance",
    team: "Sports-Specific S&C Trainer · Registered Biokineticist",
    addOns: [
      {
        title: "Sports Specific and RAMP Mobility & Video Protocol Programme",
        desc: "Structured sports specific training, pre-event or pre-session warm-up programme delivered via TrainingPeaks. Raise, Activate, Mobilise, Potentiate. Video-guided mobility and neuromuscular priming protocols designed around your sport, discipline, and event. Loaded alongside your training plan.",
      },
    ],
  },
  {
    num: "02",
    title: "Clinical Sports Nutrition",
    subtitle: "Online one-on-one nutrition consulting",
    desc: "Evidence-based fuelling, macro periodisation, race and competition nutrition strategy, and clinical body composition management. For GLP-1 users, protein periodisation and lean body mass preservation are central to every plan.",
    taygan: "PG Dip Performance Nutrition · MSc Sports Nutrition (c)",
    team: "Registered Dietitian",
    addOns: [
      {
        title: "Race Nutrition Consultation",
        desc: "Pre, intra, and post-race fuelling protocol designed around your event, discipline, and training load.",
      },
      {
        title: "Clinical Nutrition Consultation",
        desc: "Body composition, GLP-1 management, sarcopenia, Diabetic and bone health nutrition strategy.",
      },
    ],
  },
  {
    num: "03",
    title: "Prehab | Sports Injury & Rehabilitation",
    subtitle: "In-house at The Campus Wellness Centre, Bryanston · Online via Physitrack globally",
    desc: "Movement screening, injuries & rehabilitation and return-to-performance programming. Supporting GLP-1-related muscle loss, osteoporosis, and low skeletal mass with structured strength programming to rebuild and protect.",
    taygan: "MSc Sports Injuries & Return to Performance · BSc S&C",
    team: "Registered Biokineticist",
    addOns: [
      {
        title: "Sports Injury Assessment & Force Plate Screening",
        desc: "Comprehensive sports injury analysis, functional movement screening, and VALD ForceDecks and DynaMo assessment. Quantifying force production asymmetries, strength deficits, and limb-to-limb imbalances. Baseline data informing all programme design and return-to-performance clearance.",
      },
    ],
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
      "TrainingPeaks",
      "VALD ForceDecks · VALD DynaMo",
      "FMS",
      "VO₂ & Metabolic Cart Testing",
      "Physitrack Online Rehab",
    ],
  },
]

// Duplicate for seamless infinite scroll
const allCards = [...credentials, ...credentials]

export default function AboutPage() {
  const heroRef     = useRef(null)
  const bioRef      = useRef(null)
  const credRef     = useRef(null)
  const discRef     = useRef(null)
  const linkedinRef = useRef(null)

  const bioInView      = useInView(bioRef,      { once: true, margin: "-80px" })
  const credInView     = useInView(credRef,     { once: true, margin: "-60px" })
  const discInView     = useInView(discRef,     { once: true, margin: "-60px" })
  const linkedinInView  = useInView(linkedinRef, { once: true, margin: "-60px" })

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
                  I founded and direct <span style={{ color: "var(--color-navy)", fontWeight: 600 }}>1INC Consulting</span> — spanning sports injury &amp; rehabilitation, performance science, and sports &amp; clinical nutrition. Every client begins with a personal consultation with me directly, before anything else begins.
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
                I consult — I do not coach. I analyse your training load, injury history, nutrition, and performance goals, then map the findings to a written report — a plan — with a programme — directing you to the right path or the right practitioner within my team.
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
                I know what it means to train seriously. I raced mountain bikes, Xterra off-road triathlons, and trail running from 2006 to 2024, competing across the country — which means I've sat on the athlete side of the conversation. I understand the data, the fatigue, the fuelling errors, and the sporting injuries that derail months of structured work. The last two years have dealt with my own injury — managing a significant back injury sustained in Muay Thai training camp, navigating the rehabilitation process, and understanding from the inside what return-to-performance actually demands. That experience shapes every consultation.
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

          {/* What I work with — tool pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={credInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-7 flex flex-wrap justify-center gap-2"
          >
            {["TrainingPeaks", "VALD ForceDecks", "VALD DynaMo", "FMS", "VO₂ & Metabolic Cart Testing", "Physitrack Online Rehab"].map((tool) => (
              <span
                key={tool}
                className="text-[9px] tracking-[0.18em] uppercase px-3 py-1.5"
                style={{
                  fontFamily: "var(--font-display)",
                  color: "var(--color-navy)",
                  background: "rgba(20,33,61,0.07)",
                  border: "1px solid rgba(20,33,61,0.15)",
                }}
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Scrolling track */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={credInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="cred-mask-about overflow-hidden"
        >
          <div className="cred-track-about flex gap-5 w-max">
            {allCards.map((cred, i) => {
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
                  className="mb-2"
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

                {/* Subtitle */}
                <p
                  className="mb-4 italic"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.38)",
                    fontSize: "12px",
                    lineHeight: 1.5,
                  }}
                >
                  {disc.subtitle}
                </p>

                {/* Description */}
                <p
                  className="leading-[1.85] mb-6"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "rgba(255,255,255,0.52)",
                    fontSize: "13.5px",
                  }}
                >
                  {disc.desc}
                </p>

                {/* Credentials */}
                <div className="flex flex-col gap-3 mb-6 pt-5 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
                  <div>
                    <p className="text-[9px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                      Taygan
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "12.5px", lineHeight: 1.5 }}>
                      {disc.taygan}
                    </p>
                  </div>
                  <div>
                    <p className="text-[9px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                      Team
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.6)", fontSize: "12.5px", lineHeight: 1.5 }}>
                      {disc.team}
                    </p>
                  </div>
                </div>

                {/* Add-ons */}
                <div className="flex flex-col gap-3 mt-auto">
                  {disc.addOns.map((addOn) => (
                    <div
                      key={addOn.title}
                      className="p-4"
                      style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(199,161,76,0.15)", borderRadius: "var(--radius-sm)" }}
                    >
                      <p className="text-[9px] tracking-[0.25em] uppercase mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>
                        Add-On
                      </p>
                      <p className="mb-1.5" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "#FFFFFF", fontSize: "12.5px", lineHeight: 1.4 }}>
                        {addOn.title}
                      </p>
                      <p className="mb-2" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.48)", fontSize: "12px", lineHeight: 1.6 }}>
                        {addOn.desc}
                      </p>
                      <p className="italic" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.35)", fontSize: "11.5px" }}>
                        Pricing on request.
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Closing line */}
          <motion.p
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={discInView ? "visible" : "hidden"}
            className="text-center mt-10 text-[12.5px]"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}
          >
            All programmes overseen by Taygan throughout. &nbsp;|&nbsp; One consultation. Three practices. One Team.
          </motion.p>
        </div>
      </section>


      {/* ── LinkedIn ── */}
      <section
        ref={linkedinRef}
        className="py-16 lg:py-20"
        style={{ background: "var(--color-cream, #F7F6EF)" }}
      >
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
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "var(--color-navy)",
              lineHeight: 1.15,
            }}
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
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-navy)",
                color: "#FFFFFF",
                borderRadius: "var(--radius-pill)",
              }}
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

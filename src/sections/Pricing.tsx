import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight, Check } from "lucide-react"

// ── Pricing Data ──────────────────────────────────────────────
const cards = [
  {
    id: "nutrition",
    title: "Sports Nutrition",
    startingFrom: "R880",
    period: "",
    description:
      "Evidence-based assessment of your diet, macros, timing and training load — with race-prep strategy and a written findings report.",
    rows: [
      { service: "45-Minute Nutrition Consultation", price: "R880", detail: "Diet, macros, timing, training load, race/competition prep" },
      { service: "Written Findings & Recommendations Report", price: "Included", detail: "Detailed post-session Word document" },
      { service: "Registered Dietitian Session", price: "On request", detail: "Clinical & medical nutrition therapy" },
    ],
  },
  {
    id: "training",
    title: "Training Programme",
    startingFrom: "R1,050",
    period: "/ month",
    description:
      "Structured online coaching via TrainingPeaks. Every session reviewed, plan adjusted to your data, feedback and schedule.",
    rows: [
      { service: "Tier 2 — 2 sessions/week", price: "R1,050 / mo", detail: "Single sport · Monthly analysis · Weekly plan" },
      { service: "Tier 3 — 3 sessions/week", price: "R1,450 / mo", detail: "Single sport · Monthly analysis · Weekly plan" },
      { service: "Tier 4 — 4 sessions/week", price: "R1,850 / mo", detail: "Multi sport · Weekly analysis · Daily flexible plan" },
      { service: "Tier 6 — 6 sessions/week", price: "R2,350 / mo", detail: "Multi sport · Full-week coverage · Limited availability" },
    ],
    footnote: "All tiers: personalised TrainingPeaks plan · annual periodised ATP · mesocycle testing · race-taper planning.",
  },
  {
    id: "rehab",
    title: "Rehab & Sports Injury",
    startingFrom: "R880",
    period: "",
    description:
      "Full injury and movement assessment, then an individualised rehab programme with video-guided exercises — tracked monthly.",
    rows: [
      { service: "45-Minute Assessment", price: "R880", detail: "Baseline, injury profile, movement screening" },
      { service: "Programme Design + Physitrack Integration", price: "R420", detail: "Individualised rehab with video-guided exercises" },
      { service: "Ongoing Rehab / Prehab Session (30 min)", price: "R560 / session", detail: "One-on-one, tracked monthly, invoiced month-end" },
    ],
  },
  {
    id: "strength",
    title: "Performance & Strength",
    startingFrom: "R560",
    period: "/ session",
    description:
      "One-on-one guided strength and conditioning for measurable performance gains, after an initial functional screening.",
    rows: [
      { service: "Strength & Performance Session", price: "R560 / session", detail: "One-on-one guided S&C" },
      { service: "In-House S&C Trainer", price: "On request", detail: "Sport-specific performance sessions" },
      { service: "Initial Functional Screening Assessment", price: "R880", detail: "Required before any programme begins" },
    ],
  },
  {
    id: "sc",
    title: "Sports-Specific S&C",
    startingFrom: "R880",
    period: "",
    description:
      "Sport-tailored strength & conditioning for cycling, swimming, Ironman and endurance athletes — matched to your discipline.",
    rows: [
      { service: "Functional Screening Assessment", price: "R880", detail: "Required baseline before any programme" },
      { service: "Sport-Specific S&C Programme", price: "On request", detail: "Cycling · Swimming · Ironman · Endurance" },
      { service: "In-House Practitioners", price: "On request", detail: "Physio / Dietitian / S&C at The Campus, Bryanston" },
    ],
  },
]

// ── Expandable row ─────────────────────────────────────────────
function PricingCard({ card, delay }: { card: typeof cards[number]; delay: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-white flex flex-col"
      style={{ boxShadow: "var(--shadow-sm)", borderRadius: "var(--radius-md)" }}
    >
      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3
          className="mb-1"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 600,
            fontSize: "0.95rem",
            letterSpacing: "0.01em",
            color: "var(--color-navy)",
            textTransform: "uppercase",
          }}
        >
          {card.title}
        </h3>

        {/* Starting from label */}
        <p className="text-[11px] tracking-[0.12em] text-[--text-muted] mb-1" style={{ fontFamily: "var(--font-display)" }}>
          Starting from
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1 mb-4">
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--color-navy)",
              lineHeight: 1,
            }}
          >
            {card.startingFrom}
          </span>
          {card.period && (
            <span className="text-[11px] text-[--text-muted]" style={{ fontFamily: "var(--font-display)" }}>
              {card.period}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-[13.5px] leading-relaxed flex-1 mb-5" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
          {card.description}
        </p>

        {/* See more button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="self-start flex items-center gap-1.5 text-[11px] tracking-[0.14em] uppercase font-semibold transition-all duration-200"
          style={{
            fontFamily: "var(--font-display)",
            color: open ? "var(--color-navy)" : "var(--color-gold)",
            background: "transparent",
            border: `1px solid ${open ? "var(--color-navy)" : "var(--color-gold)"}`,
            borderRadius: "var(--radius-pill)",
            padding: "0.4rem 1rem",
          }}
          aria-expanded={open}
        >
          {open ? "See less" : "See more"}
          <ChevronDown
            size={13}
            className="transition-transform duration-250"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>
      </div>

      {/* Accordion panel */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-6 border-t" style={{ borderColor: "var(--border)" }}>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[400px] text-left text-[12.5px]" style={{ fontFamily: "var(--font-body)" }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid var(--border)` }}>
                      <th className="pb-2 pr-4 font-semibold" style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Service</th>
                      <th className="pb-2 pr-4 font-semibold whitespace-nowrap" style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Price</th>
                      <th className="pb-2 font-semibold" style={{ color: "var(--color-navy)", fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {card.rows.map((row, i) => (
                      <tr key={i} style={{ borderBottom: i < card.rows.length - 1 ? `1px solid var(--border)` : "none" }}>
                        <td className="py-2.5 pr-4 leading-snug" style={{ color: "var(--text)" }}>{row.service}</td>
                        <td className="py-2.5 pr-4 font-semibold whitespace-nowrap" style={{ color: "var(--color-gold)", fontFamily: "var(--font-display)" }}>{row.price}</td>
                        <td className="py-2.5 leading-snug" style={{ color: "var(--text-muted)" }}>{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {"footnote" in card && card.footnote && (
                  <p className="mt-3 text-[11.5px] leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)", fontStyle: "italic" }}>
                    {card.footnote}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Main section ───────────────────────────────────────────────
export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="pricing" className="bg-white" style={{ paddingTop: "5rem", paddingBottom: 0 }} ref={ref}>

      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[11px] tracking-[0.38em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
        >
          Investment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-navy)",
            lineHeight: 1.1,
          }}
        >
          Transparent pricing.<br className="hidden sm:block" /> Direct access. No guesswork.
        </motion.h2>
      </div>

      {/* ── Consultation block ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.12 }}
        className="mx-auto max-w-7xl px-6 lg:px-12 mb-10"
      >
        <div
          className="relative overflow-hidden"
          style={{
            background: "var(--color-navy)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(2rem, 5vw, 3.5rem)",
          }}
        >
          {/* Background accent */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: "var(--color-gold)", transform: "translate(30%, -40%)", filter: "blur(60px)" }}
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
            {/* Left */}
            <div>
              <p
                className="text-[10px] tracking-[0.38em] uppercase mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Featured · Full Package
              </p>
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  lineHeight: 1.1,
                }}
              >
                1INC Consultation
              </h3>
              <p className="mb-6 max-w-2xl" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", fontSize: "0.97rem", lineHeight: 1.7 }}>
                A personal 45-minute online session with Taygan across performance, sports nutrition, and injury &amp; rehabilitation.
                Includes a <strong style={{ color: "rgba(255,255,255,0.8)" }}>written specialised report</strong> and a clear direction before anything else begins.
              </p>

              {/* Feature list */}
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                {[
                  "45-minute full performance overview",
                  "Injury & medical history review",
                  "Training load & recovery analysis",
                  "Nutritional habits & supplementation audit",
                  "Written specialised report included",
                  "Strategic action plan & next steps",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={13} className="mt-1 flex-shrink-0" style={{ color: "var(--color-gold)" }} strokeWidth={2.5} />
                    <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.62)", fontSize: "0.88rem" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11.5px]" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.28)" }}>
                Sessions via Microsoft Teams · Bookings via Appointment Guru · Invoice issued post-session, payable within 7 days.
              </p>
            </div>

            {/* Right — price + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-5 lg:min-w-[180px]">
              <div className="lg:text-right">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(2.8rem, 5vw, 3.8rem)",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                  }}
                >
                  R950
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                  ZAR · Full package
                </p>
                <p className="text-[10px] mt-0.5" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.22)" }}>
                  International: $130 USD
                </p>
              </div>
              <a
                href="https://appointmentguru.co/taygan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "#FFFFFF",
                  color: "var(--color-navy)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Book Consultation
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Five pricing cards ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 pb-6">
          {cards.map((card, i) => (
            <PricingCard key={card.id} card={card} delay={0.07 * i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[12px] py-6 border-t"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", borderColor: "var(--border)" }}
        >
          All service pricing is provided on application following the 1INC Initial Consultation.{" "}
          Contact <a href="mailto:taygan@1inc.co.za" style={{ color: "var(--color-gold)" }}>taygan@1inc.co.za</a> for further information.
        </motion.p>
      </div>

      {/* ── Contact / CTA block ── */}
      <div id="contact" className="mt-0" style={{ background: "var(--color-navy)", padding: "4rem 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-10 lg:gap-0 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="lg:pr-16"
            >
              <p
                className="text-[10px] tracking-[0.38em] uppercase mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Get in Touch
              </p>
              <h2
                className="text-white mb-5"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.1 }}
              >
                Start the conversation.
              </h2>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", fontSize: "0.97rem", lineHeight: 1.7, maxWidth: "38ch" }}>
                Whether you're an athlete managing a complex injury, a team building performance systems, or a professional ready
                to take control of your physical output — the first step is one conversation.
              </p>
            </motion.div>

            <div className="hidden lg:block w-px self-stretch" style={{ background: "rgba(255,255,255,0.08)" }} />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:pl-16 flex flex-col gap-6"
            >
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>Email</p>
                <a href="mailto:taygan@1inc.co.za" className="text-white hover:text-[#C7A14C] transition-colors text-[15px]" style={{ fontFamily: "var(--font-body)" }}>taygan@1inc.co.za</a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>Bookings</p>
                <a href="https://appointmentguru.co/taygan" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C7A14C] transition-colors text-[15px]" style={{ fontFamily: "var(--font-body)" }}>Appointment Guru</a>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.25em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>Location</p>
                <p className="text-white/70 text-[15px]" style={{ fontFamily: "var(--font-body)" }}>The Campus, Bryanston · Available Worldwide</p>
              </div>
              <a
                href="https://appointmentguru.co/taygan"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-bold transition-all duration-300 hover:scale-[1.02]"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--color-gold)",
                  color: "#14213D",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Schedule Appointment
                <ArrowRight size={13} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check, ChevronDown } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"
import { useRegion } from "../lib/region-context"

// ── Main section ───────────────────────────────────────────────
export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { open, openFollowUp } = useBookingModal()
  const region = useRegion()
  const [addOnsOpen, setAddOnsOpen] = useState(false)
  const isIntl = region === "intl"
  const consultPrice = isIntl ? "$320" : "R 2 250"
  const followUpPrice = isIntl ? "$220" : "R 1 250"
  const inHousePrice = "R 2 800"
  const priceLabel = "Online Consultation"
  const footerNote = isIntl
    ? "All ongoing programme pricing follows the initial 1INC consultation. $320 all-in."
    : "All ongoing programme pricing follows the initial 1INC consultation. R 2 250 all-in."

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

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.75, delay: 0.12 }}
        className="mx-auto max-w-7xl px-6 lg:px-12 mb-10 flex flex-col gap-5"
      >

        {/* ── Free Call slim banner ── */}
        <div
          className="flex items-center justify-between gap-4 flex-wrap"
          style={{
            background: "var(--color-gold)",
            borderRadius: "var(--radius-lg)",
            padding: "0.9rem 1.75rem",
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", color: "#14213D", fontSize: "0.9rem", fontWeight: 600, margin: 0 }}>
            New clients start with a <strong>free 10-minute call</strong> — no forms, no commitment.
          </p>
          <button
            onClick={open}
            className="inline-flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase font-bold whitespace-nowrap transition-all duration-200 hover:opacity-80"
            style={{
              fontFamily: "var(--font-display)",
              background: "#14213D",
              color: "#FFFFFF",
              borderRadius: "var(--radius-pill)",
              padding: "0.5rem 1.25rem",
            }}
          >
            Book Free Call <ArrowRight size={10} />
          </button>
        </div>

        {/* ── Row 1: Full-width 1INC Consultation ── */}
        <div
          className="relative overflow-hidden"
          style={{
            background: "var(--color-navy)",
            borderRadius: "var(--radius-lg)",
            padding: "clamp(1.75rem, 4vw, 2.75rem)",
          }}
        >
          {/* Background accent */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
            style={{ background: "var(--color-gold)", transform: "translate(30%, -40%)", filter: "blur(60px)" }}
          />

          <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center">
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
                  fontSize: "clamp(1.4rem, 2.4vw, 2rem)",
                  lineHeight: 1.1,
                }}
              >
                1INC Consultation
              </h3>
              <p className="mb-5 max-w-2xl" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", fontSize: "0.93rem", lineHeight: 1.7 }}>
                A personal 1INC consultation with Taygan directly — across any or all three disciplines.
                Includes a <strong style={{ color: "rgba(255,255,255,0.8)" }}>written specialised report</strong> and a clear direction before anything else begins.
              </p>

              {/* Feature list */}
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-5">
                {[
                  "1INC consultation with Taygan directly — across any or all three disciplines",
                  "Training load & history, injury background and rehabilitation analysis",
                  "Nutritional tracking, race fuelling & supplementation assessment",
                  "Performance goals mapped to findings",
                  "Written Specialised Report — findings and recommendations",
                  "Programme direction: Consult — Analysis — Report — Plan — Programme",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={13} className="mt-1 flex-shrink-0" style={{ color: "var(--color-gold)" }} strokeWidth={2.5} />
                    <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.62)", fontSize: "0.85rem" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11px]" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.28)" }}>
                Delivered via Microsoft Teams · Booked via Appointment Guru.
              </p>
            </div>

            {/* Right — price + CTA */}
            <div className="flex flex-col items-start lg:items-end gap-4 lg:min-w-[160px]">
              <div className="lg:text-right">
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                  }}
                >
                  {consultPrice}
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                  {priceLabel}
                </p>
              </div>
              <button
                onClick={open}
                className="inline-flex items-center gap-2.5 px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "#FFFFFF",
                  color: "var(--color-navy)",
                  borderRadius: "var(--radius-pill)",
                }}
              >
                Book a 1INC Consultation
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* ── Row 2: Follow-Up + In-House Assessment (In-House hidden for intl) ── */}
        <div className="grid gap-5 items-stretch lg:grid-cols-2">

          {/* ── Follow-Up ── */}
          <div
            className="flex flex-col justify-between"
            style={{
              background: "var(--color-navy)",
              borderRadius: "var(--radius-lg)",
              padding: "2rem",
              border: "1px solid rgba(199,161,76,0.22)",
            }}
          >
            <div>
              <p
                className="text-[9px] tracking-[0.38em] uppercase mb-3"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Returning & Existing Clients
              </p>
              <h3
                className="text-white mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                  lineHeight: 1.15,
                }}
              >
                Book a Follow-Up
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                A focused check-in to review your progress and adjust the plan. Returning and existing clients only.
              </p>

              <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(2rem, 3vw, 2.6rem)",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                  }}
                >
                  {followUpPrice}
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1.5" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                  45-Minute Session
                </p>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {[
                  "Returning & existing clients only",
                  "Written report delivered within 7 days",
                  "Limited to one topic — clients must select one discipline to focus on",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check size={11} className="mt-[3px] flex-shrink-0" style={{ color: "var(--color-gold)" }} strokeWidth={2.5} />
                    <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", fontSize: "0.82rem" }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={openFollowUp}
              className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] tracking-[0.18em] uppercase font-bold transition-all duration-300 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-gold)",
                color: "#14213D",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Book a Follow-Up
              <ArrowRight size={11} />
            </button>
          </div>

          {/* ── Specialist Assessment (SA only) ── */}
          {!isIntl && (
            <div
                  className="flex flex-col justify-between"
                  style={{
                    background: "var(--color-navy)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    border: "1px solid rgba(199,161,76,0.22)",
                  }}
                >
                  <div>
                    <p
                      className="text-[9px] tracking-[0.38em] uppercase mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
                    >
                      South Africa · In Person
                    </p>
                    <h3
                      className="text-white mb-3"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)",
                        lineHeight: 1.15,
                      }}
                    >
                      Specialist Assessment
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                      A specialised assessment with a registered specialist practitioner and Taygan directly.
                    </p>

                    <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 800,
                          fontSize: "clamp(2rem, 3vw, 2.6rem)",
                          color: "var(--color-gold)",
                          lineHeight: 1,
                        }}
                      >
                        From {inHousePrice}
                      </div>
                      <p className="text-[10px] tracking-[0.2em] uppercase mt-1.5" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                        60–90 Minute Session
                      </p>
                    </div>

                    {/* Equipment tags */}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {["VALD ForceDecks", "DynaMo", "ROM", "Grip", "Balance", "Asymmetry", "Reaction Lights"].map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "0.65rem",
                            fontWeight: 600,
                            letterSpacing: "0.06em",
                            color: "rgba(199,161,76,0.85)",
                            background: "rgba(199,161,76,0.1)",
                            border: "1px solid rgba(199,161,76,0.2)",
                            borderRadius: "999px",
                            padding: "0.2rem 0.6rem",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-4 flex flex-col gap-2.5">
                      {[
                        "Movement screening included",
                        "Written clinical report within 7 working days",
                      ].map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check size={11} className="mt-[3px] flex-shrink-0" style={{ color: "var(--color-gold)" }} strokeWidth={2.5} />
                          <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)", fontSize: "0.82rem" }}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Programme Add-Ons dropdown */}
                    <div className="mt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1rem" }}>
                      <button
                        onClick={() => setAddOnsOpen((v) => !v)}
                        className="flex items-center justify-between w-full"
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                      >
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
                          Programme Add-Ons
                        </span>
                        <ChevronDown
                          size={13}
                          style={{
                            color: "rgba(199,161,76,0.6)",
                            transform: addOnsOpen ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "transform 0.2s ease",
                          }}
                        />
                      </button>
                      {addOnsOpen && (
                        <ul className="mt-3 flex flex-col gap-2.5">
                          {[
                            "Data-Driven Strength & Mobility Plan — bespoke rehabilitation and performance programme tailored to your VALD diagnostic findings and full injury assessment.",
                            "Data-Driven Nutrition Plan — bespoke dietary strategy tailored to your physiological assessment and comprehensive consultation findings.",
                          ].map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <Check size={11} className="mt-[3px] flex-shrink-0" style={{ color: "var(--color-gold)" }} strokeWidth={2.5} />
                              <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", lineHeight: 1.6 }}>{f}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={open}
                    className="mt-7 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] tracking-[0.18em] uppercase font-bold transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      fontFamily: "var(--font-display)",
                      background: "var(--color-gold)",
                      color: "#14213D",
                      borderRadius: "var(--radius-pill)",
                    }}
                  >
                    Book an In-House Assessment
                    <ArrowRight size={11} />
                  </button>
            </div>
          )}

        </div>
      </motion.div>

      <div id="contact" className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[12px] py-6 border-t"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", borderColor: "var(--border)" }}
        >
          {footerNote}{" "}
          Booked via <a href="https://appointmentguru.co/taygan" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>Appointment Guru</a> · Delivered via Microsoft Teams · Invoice issued post-session, payable within 7 days.
        </motion.p>
      </div>

    </section>
  )
}

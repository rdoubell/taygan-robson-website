import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

// ── Main section ───────────────────────────────────────────────
export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const { open } = useBookingModal()

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
                A personal 1INC consultation with Taygan directly — across any or all three disciplines.
                Includes a <strong style={{ color: "rgba(255,255,255,0.8)" }}>written specialised report</strong> and a clear direction before anything else begins.
              </p>

              {/* Feature list */}
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
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
                    <span style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.62)", fontSize: "0.88rem" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[11.5px]" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.28)" }}>
                Consultations via Microsoft Teams · Bookings via Appointment Guru · Invoice issued post-session, payable within 7 days.
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
                  R 1 250
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                  Online Consultation
                </p>
              </div>
              <button
                onClick={open}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
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
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-[12px] py-6 border-t"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", borderColor: "var(--border)" }}
        >
          All ongoing programme pricing follows the initial 1INC consultation. R 1 250 all-in.{" "}
          Booked via <a href="https://appointmentguru.co/taygan" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>Appointment Guru</a> · Delivered via Microsoft Teams · Invoice issued post-session, payable within 7 days.
        </motion.p>
      </div>

      {/* ── Contact / CTA block ── */}
      <div id="contact" className="mt-0" style={{ background: "var(--color-navy)", padding: "2.5rem 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center"
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
            <p className="mb-8" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.5)", fontSize: "0.97rem", lineHeight: 1.7, maxWidth: "48ch" }}>
              Whether you're an amateur or professional athlete, a team, an active individual, or simply someone seeking clarity on your training, nutrition, or recovery — every client starts with one conversation. A 1INC consultation with Taygan directly. The rest follows from there.
            </p>
            <button
              onClick={open}
              className="inline-flex items-center gap-3 px-8 py-4 text-[11px] tracking-[0.22em] uppercase font-bold transition-all duration-300 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-gold)",
                color: "#14213D",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Book a 1INC Consultation
              <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

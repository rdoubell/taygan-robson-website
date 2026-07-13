import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function WhatIs1Inc() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      id="what-is-1inc"
      className="section-pad"
      style={{ background: "var(--color-cream)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75 }}
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
                className="text-[10px] tracking-[0.38em] uppercase mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                Data-driven conversation &middot; Evidence-based direction.
              </p>

              <p
                className="mb-6 max-w-2xl"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", lineHeight: 1.75 }}
              >
                Every client begins with a personal consultation with Taygan directly, covering your training load, injury history, nutrition, performance and training structure. From there, a written guidance report, a clear plan, and a programme. That is 1INC.
              </p>

              <p className="text-[11.5px] italic mb-4" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                Invoice issued post-session. Payment due within 7 days. Booked via Appointment Guru. Delivered via Microsoft Teams.
              </p>

              <p className="text-[11.5px] italic" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.4)" }}>
                Taygan &nbsp;|&nbsp; BSc S&amp;C &middot; MSc Sports Injuries &amp; Return to Performance &middot; PG Dip Performance Nutrition &middot; MSc Sports Nutrition (c)
              </p>
            </div>

            {/* Right — session length + price */}
            <div className="flex flex-col items-start lg:items-end gap-5 lg:min-w-[200px]">
              <div className="lg:text-right">
                <p className="text-[10px] tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.4)" }}>
                  45-Minute Online Session
                </p>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "clamp(2.4rem, 4.5vw, 3.4rem)",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                  }}
                >
                  R 1 250
                </div>
                <p className="text-[10px] tracking-[0.2em] uppercase mt-1" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.3)" }}>
                  All-in &middot; SA
                </p>
                <p className="text-[13px] mt-2" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>
                  $150 USD
                </p>
                <p className="text-[10px] tracking-[0.15em] uppercase mt-0.5" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.25)" }}>
                  International
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
                Book a 1INC Consultation
                <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

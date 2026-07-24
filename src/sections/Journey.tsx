import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  { num: "01", label: "1INC Consultation", caption: "With Taygan directly" },
  { num: "02", label: "Analysis", caption: "Training load, injury, nutrition, goals" },
  { num: "03", label: "Report", caption: "Written findings and recommendations" },
  { num: "04", label: "Plan", caption: "Programme direction mapped to solution" },
  { num: "05", label: "Programme", caption: "Delivered via TrainingPeaks / Physitrack" },
  { num: "06", label: "Results", caption: "Measurable outcomes tracked and built upon" },
]

export default function Journey({ showHeading = true }: { showHeading?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      className="section-pad"
      style={{ background: "var(--color-cream)" }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "var(--color-navy)",
                lineHeight: 1.1,
              }}
            >
              The Process<span style={{ color: "var(--color-gold)" }}>.</span>
            </h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                border: "1.5px solid var(--color-navy)",
                borderRadius: "6px",
                overflow: "hidden",
              }}
            >
              {/* Gold header — step label in navy */}
              <div
                style={{
                  background: "var(--color-gold)",
                  padding: "0.7rem 1.1rem",
                  borderBottom: "1.5px solid var(--color-navy)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    color: "var(--color-navy)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                  }}
                >
                  {step.label}
                </p>
              </div>

              {/* Body — yellow number + navy description */}
              <div style={{ background: "#FFFFFF", padding: "1rem 1.1rem 1.25rem" }}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                    color: "var(--color-gold)",
                    lineHeight: 1,
                    marginBottom: "0.45rem",
                  }}
                >
                  {step.num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "var(--color-navy)",
                    lineHeight: 1.6,
                  }}
                >
                  {step.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

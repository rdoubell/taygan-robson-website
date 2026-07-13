import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    num: "01",
    label: "1INC Consultation",
    caption: "With Taygan directly",
  },
  {
    num: "02",
    label: "Analysis",
    caption: "Training load, injury, rehabilitation, nutrition, performance and training structure",
  },
  {
    num: "03",
    label: "Report",
    caption: "Written findings and recommendations",
  },
  {
    num: "04",
    label: "Plan",
    caption: "Programme direction mapped to solution",
  },
  {
    num: "05",
    label: "Programme",
    caption: "Delivered via TrainingPeaks or Physitrack Videos",
  },
  {
    num: "06",
    label: "Results",
    caption: "Measurable outcomes tracked and driven by data",
  },
]

export default function Journey({ showHeading = true }: { showHeading?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      className="section-pad overflow-hidden"
      style={{ background: "var(--color-cream)", ...(showHeading ? {} : { paddingTop: "1.5rem" }) }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        {showHeading && (
          <div className="text-center mb-14">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-[10px] tracking-[0.42em] uppercase mb-3"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
            >
              The Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.05 }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                color: "var(--color-navy)",
                lineHeight: 1.1,
              }}
            >
              The Process — Consult · Analyse · Report · Plan · Programme
            </motion.h2>
          </div>
        )}

        {/* Horizontal timeline — desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[28px] left-0 right-0 h-[2px] origin-left"
            style={{ background: `linear-gradient(90deg, var(--color-gold), var(--gold-300))` }}
          />

          <div className="relative grid grid-cols-6 gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Node */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 flex-shrink-0"
                  style={{
                    background: "var(--color-navy)",
                    border: "2px solid var(--color-gold)",
                    boxShadow: "0 0 0 4px var(--color-cream)",
                  }}
                >
                  <span
                    className="font-bold text-[11px]"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", letterSpacing: "0.05em" }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Label */}
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "var(--color-navy)",
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                  }}
                >
                  {step.label}
                </h3>

                {/* Caption */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  {step.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vertical timeline — mobile */}
        <div className="lg:hidden relative pl-10">
          {/* Vertical line */}
          <div
            className="absolute left-[1.25rem] top-0 bottom-0 w-[2px]"
            style={{ background: `linear-gradient(180deg, var(--color-gold), var(--gold-300))` }}
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08 }}
                className="relative flex flex-col"
              >
                {/* Node */}
                <div
                  className="absolute -left-[2.75rem] top-0 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "var(--color-navy)",
                    border: "2px solid var(--color-gold)",
                    boxShadow: "0 0 0 3px var(--color-cream)",
                  }}
                >
                  <span className="font-bold text-[10px]" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}>
                    {step.num}
                  </span>
                </div>

                <h3
                  className="mb-1"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.92rem",
                    color: "var(--color-navy)",
                    textTransform: "uppercase",
                  }}
                >
                  {step.label}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  {step.caption}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

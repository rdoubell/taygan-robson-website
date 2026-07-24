import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    num: "01",
    stage: "1INC Consultation",
    whatYouGet: "A personal conversation. Your training structure, injury background, nutrition, and the specific programme or guidance you are looking for.",
  },
  {
    num: "02",
    stage: "Analysis",
    whatYouGet: "Your full picture assessed. Training load, injury history, rehabilitation status, nutrition, performance goals and where the gap is between where you are and where you want to be.",
  },
  {
    num: "03",
    stage: "Report",
    whatYouGet: "A clear written document. What was found, what it means for your training and health, and a specific set of recommendations you can act on.",
  },
  {
    num: "04",
    stage: "Plan",
    whatYouGet: "A structured direction built around your data, your schedule, and your goals. Exactly what needs to happen and in what order.",
  },
  {
    num: "05",
    stage: "Programme",
    whatYouGet: "An online programme. Endurance or strength training via TrainingPeaks, rehabilitation via Physitrack, or nutritional guidance. Designed, loaded, and ready to follow.",
  },
  {
    num: "06",
    stage: "Results",
    whatYouGet: "Measurable outcomes tracked against your starting point. Not opinion, not feel. Data.",
  },
]

const NAVY = "var(--color-navy)"
const GOLD = "var(--color-gold)"
const ROW_BORDER = "1px solid rgba(27,42,74,0.14)"

export default function Journey({ showHeading = true }: { showHeading?: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="section-pad" style={{ background: "var(--color-cream)" }} ref={ref}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        {showHeading && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: NAVY, lineHeight: 1.1 }}>
              The Process<span style={{ color: GOLD }}>.</span>
            </h2>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflowX: "auto" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", border: `1.5px solid ${NAVY}`, tableLayout: "fixed" }}>

            {/* Header row — gold background, navy text */}
            <thead>
              <tr style={{ background: GOLD }}>
                {(["Step", "Stage", "What You Get"] as const).map((col, ci) => (
                  <th
                    key={col}
                    style={{
                      width: ci === 0 ? "80px" : ci === 1 ? "200px" : undefined,
                      padding: "0.75rem 1.1rem",
                      borderBottom: `1.5px solid ${NAVY}`,
                      borderRight: ci < 2 ? `1px solid ${NAVY}` : undefined,
                      fontFamily: "var(--font-display)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      color: NAVY,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      textAlign: "left",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Data rows */}
            <tbody>
              {steps.map((step, i) => {
                const isLast = i === steps.length - 1
                const rowBorder = isLast ? "none" : ROW_BORDER
                return (
                  <tr key={step.num} style={{ background: "#FFFFFF" }}>

                    {/* Step number — gold */}
                    <td style={{
                      padding: "0.9rem 1.1rem",
                      borderBottom: rowBorder,
                      borderRight: `1px solid ${NAVY}`,
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "1.15rem",
                      color: GOLD,
                      verticalAlign: "top",
                    }}>
                      {step.num}
                    </td>

                    {/* Stage — navy bold */}
                    <td style={{
                      padding: "0.9rem 1.1rem",
                      borderBottom: rowBorder,
                      borderRight: `1px solid ${NAVY}`,
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      color: NAVY,
                      verticalAlign: "top",
                      lineHeight: 1.4,
                    }}>
                      {step.stage}
                    </td>

                    {/* What you get — navy body text */}
                    <td style={{
                      padding: "0.9rem 1.1rem",
                      borderBottom: rowBorder,
                      fontFamily: "var(--font-body)",
                      fontSize: "0.88rem",
                      color: NAVY,
                      verticalAlign: "top",
                      lineHeight: 1.65,
                    }}>
                      {step.whatYouGet}
                    </td>

                  </tr>
                )
              })}
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  )
}

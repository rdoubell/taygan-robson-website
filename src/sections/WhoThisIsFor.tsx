import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const personas = [
  {
    id: "golfer",
    label: "The Golfer / Padel Player",
    problem:
      "Recurring elbow, Achilles or back pain affecting your swing? Rehabilitation and return-to-performance, plus nutrition to support recovery.",
  },
  {
    id: "glp1",
    label: "The GLP-1 User",
    problem:
      "Losing weight but worried about muscle loss? Structured strength training and protein periodisation to protect what matters.",
  },
  {
    id: "endurance",
    label: "The Endurance Athlete",
    problem:
      "Training load, race nutrition, and performance data — for cycling, running, triathlon, and multisport.",
  },
  {
    id: "stagerace",
    label: "The Stage Race & Multi-Discipline Athlete",
    problem:
      "Training for your 6th Comrades, 5th ABSA Cape Epic, or 20th Half Ironman? Periodised load management and race-specific nutrition for athletes who measure their season in milestones, not single events.",
  },
  {
    id: "muscle",
    label: "Low Muscle Tone & Skeletal Mass",
    problem:
      "Noticing strength or muscle decline with age, illness, or inactivity? A structured strength programme and tailored nutrition plan to rebuild and protect what matters — one conversation gets you both.",
  },
  {
    id: "injured",
    label: "The Injured Athlete",
    problem:
      "Recurring or new injury? Movement screening, rehabilitation, and a return-to-performance plan.",
  },
  {
    id: "adventurer",
    label: "The Adventurer",
    problem:
      "Taking on something out of your comfort zone — Antarctica, a mountain summit, an Ocean swim? I'll analyse your data and HR, and build a structured training plan to get you there prepared, not just willing.",
  },
]

export default function WhoThisIsFor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      id="who-this-is-for"
      className="section-pad"
      style={{ background: "var(--color-navy)" }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.42em] uppercase mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
          >
            Who This Is For
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
              lineHeight: 1.1,
            }}
          >
            Built For Every Body, Every Goal
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Whether you're a professional athlete or someone simply looking for clarity — if you have a performance, nutrition, or rehabilitation goal, there is a place for you here.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col p-6"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "var(--radius-md)",
              }}
            >
              {/* Gold accent line */}
              <div className="w-6 h-[2px] mb-4" style={{ background: "var(--color-gold)" }} />

              {/* Persona label */}
              <h3
                className="mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#FFFFFF",
                  lineHeight: 1.3,
                  letterSpacing: "0.01em",
                }}
              >
                {persona.label}
              </h3>

              {/* Problem description */}
              <p
                className="flex-1 mb-5"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.88rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                }}
              >
                {persona.problem}
              </p>

              {/* CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold transition-all duration-200 hover:gap-2.5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
              >
                Start with a 1INC consultation
                <ArrowRight size={11} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

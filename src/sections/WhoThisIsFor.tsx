import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, TrendingDown, Timer, Trophy, Dumbbell, HeartPulse, Compass } from "lucide-react"
import PersonaFanCarousel from "../components/ui/persona-fan-carousel"
import type { PersonaItem } from "../components/ui/persona-fan-carousel"

const personas: PersonaItem[] = [
  {
    id: "golfer",
    label: "The Golfer / Padel Player",
    problem:
      "Recurring elbow, Achilles or back pain affecting your swing? Rehabilitation and return-to-performance, plus nutrition to support recovery.",
    icon: Target,
  },
  {
    id: "glp1",
    label: "The GLP-1 User",
    problem:
      "Losing weight but worried about muscle loss? Structured strength training and protein periodisation to protect what matters.",
    icon: TrendingDown,
  },
  {
    id: "endurance",
    label: "The Endurance Athlete",
    problem:
      "Training load, race nutrition, and performance data — for cycling, running, triathlon, and multisport.",
    icon: Timer,
  },
  {
    id: "stagerace",
    label: "The Stage Race & Multi-Discipline Athlete",
    problem:
      "Training for your 6th Comrades, 5th ABSA Cape Epic, or 20th Half Ironman? Periodised load management and race-specific nutrition for athletes who measure their season in milestones, not single events.",
    icon: Trophy,
  },
  {
    id: "muscle",
    label: "Low Muscle Tone & Skeletal Mass",
    problem:
      "Noticing strength or muscle decline with age, illness, or inactivity? A structured strength programme and tailored nutrition plan to rebuild and protect what matters — one conversation gets you both.",
    icon: Dumbbell,
  },
  {
    id: "injured",
    label: "The Injured Athlete",
    problem:
      "Recurring or new injury? Movement screening, rehabilitation, and a return-to-performance plan.",
    icon: HeartPulse,
  },
  {
    id: "adventurer",
    label: "The Adventurer",
    problem:
      "Taking on something out of your comfort zone — Antarctica, a mountain summit, an Ocean swim? I'll analyse your data and HR, and build a structured training plan to get you there prepared, not just willing.",
    icon: Compass,
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
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-4">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.42em] uppercase mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
          >
            Built For Every Body, Every Goal
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
            Who This Is For.
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
      </div>

      {/* ── Mobile: horizontal scroll strip ── */}
      <div className="md:hidden w-full overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: "touch" }}>
        <div className="flex gap-3 px-6" style={{ width: "max-content" }}>
          {personas.map((persona) => {
            const Icon = persona.icon
            return (
              <div
                key={persona.id}
                className="flex flex-col flex-shrink-0"
                style={{
                  width: "220px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(199,161,76,0.18)",
                  borderRadius: "var(--radius-md)",
                  padding: "1.25rem",
                  backdropFilter: "blur(6px)",
                }}
              >
                <div style={{ marginBottom: "0.7rem" }}>
                  <Icon size={16} style={{ color: "var(--color-gold)" }} strokeWidth={1.75} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                    marginBottom: "0.55rem",
                  }}
                >
                  {persona.label}
                </h3>
                <div
                  style={{
                    width: "22px",
                    height: "1.5px",
                    background: "var(--color-gold)",
                    opacity: 0.5,
                    marginBottom: "0.55rem",
                    flexShrink: 0,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.73rem",
                    color: "rgba(255,255,255,0.48)",
                    lineHeight: 1.6,
                  }}
                >
                  {persona.problem}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Desktop: fan carousel ── */}
      <div className="hidden md:block w-full mb-6">
        <PersonaFanCarousel personas={personas} trigger={inView} />
      </div>

    </section>
  )
}

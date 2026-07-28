import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Target, TrendingDown, Timer, Trophy, Compass, Flame, Briefcase, GraduationCap, RotateCcw, Award } from "lucide-react"
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
      "Training load, race nutrition, and performance data for cycling, running, triathlon, and multisport.",
    icon: Timer,
  },
  {
    id: "stagerace",
    label: "The Stage Race & Multi-Discipline Athlete",
    problem:
      "Training for your 6th Comrades, 5th ABSA Cape Epic, or 10th Half Ironman? Periodised load management and race-specific nutrition for athletes who measure their season in milestones, not single events.",
    icon: Trophy,
  },
  {
    id: "adventurer",
    label: "The Adventurer",
    problem:
      "Taking on something out of your comfort zone, Antarctica, a mountain summit, an ocean swim? Data and HR analysed, and a structured training plan built to get you there prepared.",
    icon: Compass,
  },
  {
    id: "crossfitter",
    label: "The Cross Fitter / HYROX Athlete",
    problem:
      "High-load, high-frequency training with a recurring shoulder, knee, or lower back issue? Movement screening to identify the root cause, a rehabilitation plan to fix it, and a nutrition strategy to keep up with your training demands.",
    icon: Flame,
  },
  {
    id: "corporate",
    label: "The Corporate / Desk Worker",
    problem:
      "Sitting all day, training when you can, and wondering why your back, hips, or shoulders never feel right? A movement screen and structured programme built around your reality, not a gym ideal.",
    icon: Briefcase,
  },
  {
    id: "youth",
    label: "The Youth Athlete",
    problem:
      "Training hard but not recovering well? For young athletes navigating high training loads, sport-specific nutrition, and the physical demands of development, the foundation matters more than the result right now.",
    icon: GraduationCap,
  },
  {
    id: "returning",
    label: "The Returning Athlete",
    problem:
      "Coming back after surgery, a long break, or a serious injury? A structured return-to-performance plan built on objective data, not guesswork or optimism.",
    icon: RotateCcw,
  },
  {
    id: "masters",
    label: "The Masters Athlete",
    problem:
      "Still competing in your 40s, 50s, or beyond? Training load, recovery nutrition, and injury management look different at this level, and the science backs a smarter, not harder, approach.",
    icon: Award,
  },
]

export default function WhoThisIsFor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const innerStripRef = useRef<HTMLDivElement>(null)
  const pauseStrip  = () => { if (innerStripRef.current) innerStripRef.current.style.animationPlayState = "paused" }
  const resumeStrip = () => { if (innerStripRef.current) innerStripRef.current.style.animationPlayState = "running" }

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
            From Injury to Active or Performance: For Everyone Who Moves.
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
            Who This Is For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Whether you are an athlete, an active individual, or someone seeking clarity on your training, nutrition, or rehabilitation, there is a place for you here.
          </motion.p>
        </div>
      </div>

      {/* ── Mobile: horizontal scroll strip ── */}
      <div
        className="md:hidden w-full"
        style={{ overflow: "hidden", paddingBottom: "1rem" }}
        onTouchStart={pauseStrip}
        onTouchEnd={resumeStrip}
      >
        <div ref={innerStripRef} className="flex gap-3 px-6" style={{ width: "max-content", animation: "scroll-left 50s linear infinite" }}>
          {[...personas, ...personas].map((persona, i) => {
            const Icon = persona.icon
            return (
              <div
                key={`${persona.id}-${i}`}
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
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "0.73rem",
                    color: "var(--color-gold)",
                    lineHeight: 1.5,
                    marginTop: "0.65rem",
                  }}
                >
                  Start with a 1INC consultation.
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

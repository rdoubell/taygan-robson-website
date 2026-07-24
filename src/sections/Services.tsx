import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowRight, ChevronUp } from "lucide-react"

// Detailed content from the About page disciplines — shown when "See More" is expanded
const practiceDetails: Record<string, {
  num: string
  subtitle: string
  desc: string
  taygan: string
  team: string
  addOns: { title: string; desc: string }[]
}> = {
  "Pure Science Performance — Training Programme": {
    num: "01",
    subtitle: "Online endurance and sport-specific training via TrainingPeaks",
    desc: "Periodised around your schedule, events, and performance goals. Data-driven total stress balance and chronic training load management, race preparation and performance analytics across all endurance disciplines.",
    taygan: "BSc S&C · MSc Sports Injuries & Return to Performance",
    team: "Sports-Specific S&C Trainer · Registered Biokineticist",
    addOns: [
      {
        title: "Sports Specific and RAMP Mobility & Video Protocol Programme",
        desc: "Structured sports specific training, pre-event or pre-session warm-up programme delivered via TrainingPeaks. Raise, Activate, Mobilise, Potentiate. Video-guided mobility and neuromuscular priming protocols designed around your sport, discipline, and event. Loaded alongside your training plan.",
      },
    ],
  },
  "Clinical Sports Nutrition": {
    num: "02",
    subtitle: "Online one-on-one nutrition consulting",
    desc: "Evidence-based fuelling, macro periodisation, race and competition nutrition strategy, and clinical body composition management. For GLP-1 users, protein periodisation and lean body mass preservation are central to every plan.",
    taygan: "PG Dip Performance Nutrition · MSc Sports Nutrition (c)",
    team: "Registered Dietitian",
    addOns: [
      {
        title: "Race Nutrition Consultation",
        desc: "Pre, intra, and post-race fuelling protocol designed around your event, discipline, and training load.",
      },
      {
        title: "Clinical Nutrition Consultation",
        desc: "Body composition, GLP-1 management, sarcopenia, Diabetic and bone health nutrition strategy.",
      },
    ],
  },
  "Prehab — Sports Injury & Rehabilitation": {
    num: "03",
    subtitle: "In-house at The Campus Wellness Centre, Bryanston · Online via Physitrack globally",
    desc: "Movement screening, injuries & rehabilitation and return-to-performance programming. Supporting GLP-1-related muscle loss, osteoporosis, and low skeletal mass with structured strength programming to rebuild and protect.",
    taygan: "MSc Sports Injuries & Return to Performance · BSc S&C",
    team: "Registered Biokineticist",
    addOns: [
      {
        title: "Sports Injury Assessment & Force Plate Screening",
        desc: "Comprehensive sports injury analysis, functional movement screening, and VALD ForceDecks and DynaMo assessment. Quantifying force production asymmetries, strength deficits, and limb-to-limb imbalances. Baseline data informing all programme design and return-to-performance clearance.",
      },
    ],
  },
}

const services = [
  {
    num: "01",
    title: "Pure Science Performance — Training Programme",
    desc: "Structured online performance consulting via TrainingPeaks. Every completed session is reviewed and the plan is adjusted around your data, feedback and weekly schedule. Includes a periodised annual plan and race-taper planning.",
    image: "/service-image-2.jpeg",
    hasDetail: true,
  },
  {
    num: "02",
    title: "Clinical Sports Nutrition",
    desc: "Evidence-based assessment of your current diet, macros, nutrient timing and training load — with race and competition fuelling strategy. No generic meal plans — calibrated to low, medium and high training-demand days. Delivered online via Microsoft Teams. Post-session written report included.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=85&auto=format&fit=crop",
    hasDetail: true,
  },
  {
    num: "03",
    title: "Prehab — Sports Injury & Rehabilitation",
    desc: "Comprehensive evaluation — baseline, injury profile and movement screening — followed by an individualised rehab programme with video-guided exercises via the Physitrack app, tracked monthly. Available in-house at The Campus Wellness Centre, Bryanston, South Africa, and online via Physitrack globally.",
    image: "/service-image-3.jpeg",
    imagePosition: "28% 70%",
    hasDetail: true,
  },
  {
    num: "04",
    title: "1INC Consulting — The Entry Point",
    desc: "A personal consultation with Taygan directly. I analyse your training load and history, injury background, nutrition, and performance goals — then map the findings to a written guidance report and plan, directing you to the right path or the right qualified practitioner within my team.",
    image: "/service-image-4.png",
    hasDetail: false,
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)

  return (
    <section id="services" className="bg-white" style={{ paddingTop: "5rem" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "var(--color-navy)",
            lineHeight: 1.1,
          }}
        >
          Three Practices<span style={{ color: "var(--color-gold)" }}>:</span>
        </motion.h2>

      </div>

      {/* Breaker */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="border-t" style={{ borderColor: "var(--border)" }} />
      </div>

      {/* Services list */}
      <div className="flex flex-col">
        {services.map((svc, i) => {
          const imageRight = i % 2 === 0
          const isExpanded = expandedIdx === i
          const detail = practiceDetails[svc.title]

          return (
            <div key={svc.num} className="border-b" style={{ borderColor: "var(--border)" }}>

              {/* ── Service row ── */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-2 group"
              >
                {/* Image column */}
                <div className={`overflow-hidden h-64 lg:h-[360px] ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: (svc as any).imagePosition ?? "center center" }}
                    loading="lazy"
                  />
                </div>

                {/* Text column */}
                <div
                  className={`flex flex-col justify-center px-8 py-12 lg:px-14 transition-colors duration-300 ${imageRight ? "lg:order-2" : "lg:order-1"}`}
                  style={{ background: "var(--surface)" }}
                >
                  <span
                    className="text-[11px] tracking-[0.3em] mb-4"
                    style={{ fontFamily: "var(--font-display)", color: "rgba(27,42,74,0.35)", fontWeight: 600 }}
                  >
                    {svc.num}
                  </span>
                  <div className="w-8 h-[2px] mb-5" style={{ background: "var(--color-gold)" }} />
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                      color: "var(--color-navy)",
                      lineHeight: 1.2,
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="mb-8"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.97rem", lineHeight: 1.8 }}
                  >
                    {svc.desc}
                  </p>

                  {/* See More / See Pricing button */}
                  {svc.hasDetail ? (
                    <button
                      onClick={() => setExpandedIdx(isExpanded ? null : i)}
                      className="self-start inline-flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-[0.16em] uppercase font-bold transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "var(--color-gold)",
                        color: "#FFFFFF",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      {isExpanded ? (
                        <>See Less <ChevronUp size={12} /></>
                      ) : (
                        <>See More <ArrowRight size={12} /></>
                      )}
                    </button>
                  ) : (
                    <a
                      href="#pricing"
                      className="self-start inline-flex items-center gap-2 px-5 py-2.5 text-[10px] tracking-[0.16em] uppercase font-bold transition-all duration-200 hover:scale-[1.02]"
                      style={{
                        fontFamily: "var(--font-display)",
                        background: "var(--color-gold)",
                        color: "#FFFFFF",
                        borderRadius: "var(--radius-pill)",
                      }}
                    >
                      See More <ArrowRight size={12} />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* ── Expanded detail panel ── */}
              <AnimatePresence>
                {isExpanded && detail && (
                  <motion.div
                    key="detail"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: "#FFFFFF" }}
                  >
                    <div className="max-w-7xl mx-auto px-8 lg:px-14 py-6 lg:py-8">
                      <div className="grid lg:grid-cols-[170px_1fr_200px] gap-6 lg:gap-8 items-start">

                        {/* Col 1 — subtitle + credentials only (title already in service row) */}
                        <div className="flex flex-col gap-3">
                          <p
                            className="italic"
                            style={{ fontFamily: "var(--font-body)", color: "rgba(27,42,74,0.45)", fontSize: "11.5px", lineHeight: 1.5 }}
                          >
                            {detail.subtitle}
                          </p>
                          <div className="w-5 h-[1.5px]" style={{ background: "var(--color-gold)" }} />
                          <div>
                            <p className="text-[9px] tracking-[0.25em] uppercase mb-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                              Taygan
                            </p>
                            <p style={{ fontFamily: "var(--font-body)", color: "rgba(27,42,74,0.65)", fontSize: "11.5px", lineHeight: 1.5 }}>
                              {detail.taygan}
                            </p>
                          </div>
                          <div>
                            <p className="text-[9px] tracking-[0.25em] uppercase mb-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                              Team
                            </p>
                            <p style={{ fontFamily: "var(--font-body)", color: "rgba(27,42,74,0.65)", fontSize: "11.5px", lineHeight: 1.5 }}>
                              {detail.team}
                            </p>
                          </div>
                        </div>

                        {/* Col 2 — description */}
                        <p
                          className="leading-[1.8]"
                          style={{ fontFamily: "var(--font-body)", color: "rgba(27,42,74,0.62)", fontSize: "0.9rem" }}
                        >
                          {detail.desc}
                        </p>

                        {/* Col 3 — add-ons, slim column so cards stretch tall */}
                        <div className="flex flex-col gap-3">
                          {detail.addOns.map((addOn) => (
                            <div
                              key={addOn.title}
                              className="p-3.5 flex flex-col"
                              style={{
                                background: "var(--color-cream, #F7F6EF)",
                                border: "1px solid rgba(199,161,76,0.2)",
                                borderRadius: "var(--radius-sm)",
                              }}
                            >
                              <p className="text-[9px] tracking-[0.25em] uppercase mb-1.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>
                                Add-On
                              </p>
                              <p className="mb-1" style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--color-navy)", fontSize: "11.5px", lineHeight: 1.4 }}>
                                {addOn.title}
                              </p>
                              <p style={{ fontFamily: "var(--font-body)", color: "rgba(27,42,74,0.55)", fontSize: "11px", lineHeight: 1.55 }}>
                                {addOn.desc}
                              </p>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          )
        })}
      </div>
    </section>
  )
}

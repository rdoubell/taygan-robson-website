import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const disciplines = [
  "Registered Biokineticists",
  "Sports Nutritionists",
  "Sports Scientists",
  "Performance Specialists",
]

const services = [
  {
    num: "01",
    title: "Sports Nutrition",
    desc: "Evidence-based assessment of your current diet, macros, nutrient timing and training load — with race and competition fuelling strategy. No generic meal plans — calibrated to low, medium and high training-demand days.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Training Programme (Customised)",
    desc: "Structured online performance coaching via TrainingPeaks. Every completed session is reviewed and the plan is adjusted around your data, feedback and weekly schedule. Includes a periodised annual plan and race-taper planning.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Rehabilitation & Sports Injury",
    desc: "Comprehensive evaluation — baseline, injury profile and movement screening — followed by an individualised rehab programme with video-guided exercises via the Physitrack app, tracked monthly.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Performance & Strength Training",
    desc: "One-on-one guided strength and conditioning sessions built for measurable performance gains, delivered by in-house specialists after an initial functional screening.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Sports-Specific Strength & Conditioning",
    desc: "Sport-tailored S&C for cycling, swimming, Ironman and endurance athletes — programming matched to the demands of your discipline and competition calendar.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85&auto=format&fit=crop",
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="services" className="bg-white" style={{ paddingTop: "5rem" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Credibility block ── */}
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.42em] uppercase mb-5"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
          >
            A Multidisciplinary Team
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="max-w-2xl mx-auto mb-7"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            1INC brings together Registered Biokineticists, Sports Nutritionists, Sports Scientists, and Performance Specialists — every plan starts with an objective assessment.
          </motion.p>

          {/* Discipline pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {disciplines.map((d, i) => (
              <span
                key={d}
                className="px-4 py-1.5 text-[11px] tracking-[0.12em] uppercase font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  background: i === 0 ? "var(--color-navy)" : "var(--slate-50)",
                  color: i === 0 ? "#fff" : "var(--color-navy)",
                  borderRadius: "var(--radius-pill)",
                  border: `1px solid ${i === 0 ? "transparent" : "var(--border)"}`,
                }}
              >
                {d}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-center mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "var(--color-navy)",
            lineHeight: 1.1,
          }}
        >
          A Complete Performance System
        </motion.h2>

      </div>

      {/* Services list — full-width with max-width content */}
      <div className="flex flex-col">
        {services.map((svc, i) => {
          const imageRight = i % 2 === 0
          return (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="grid lg:grid-cols-2 border-b group"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Image column */}
              <div className={`overflow-hidden h-64 lg:h-[360px] ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                <a
                  href="#pricing"
                  className="self-start inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-semibold transition-all duration-200 hover:gap-3"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
                >
                  See pricing <ArrowRight size={12} />
                </a>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

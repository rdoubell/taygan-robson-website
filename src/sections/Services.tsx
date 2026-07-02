import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const services = [
  {
    num: "01",
    title: "Clinical Sports Nutrition",
    desc: "Evidence-based assessment of your current diet, macros, nutrient timing and training load — with race and competition fuelling strategy. No generic meal plans — calibrated to low, medium and high training-demand days. Delivered online via Microsoft Teams. Post-session written report included.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Pure Science Performance — Training Programme",
    desc: "Structured online performance consulting via TrainingPeaks. Every completed session is reviewed and the plan is adjusted around your data, feedback and weekly schedule. Includes a periodised annual plan and race-taper planning.",
    image: "/service-image-2.jpeg",
  },
  {
    num: "03",
    title: "Prehab — Sports Injury & Rehabilitation",
    desc: "Comprehensive evaluation — baseline, injury profile and movement screening — followed by an individualised rehab programme with video-guided exercises via the Physitrack app, tracked monthly. Available in-house at The Campus Wellness Centre, Bryanston, South Africa, and online via Physitrack globally.",
    image: "/service-image-3.jpeg",
    imagePosition: "28% 70%",
  },
  {
    num: "04",
    title: "1INC Consulting — The Entry Point",
    desc: "A personal consultation with Taygan directly. I analyse your training load and history, injury background, nutrition, and performance goals — then map the findings to a written guidance report and plan, directing you to the right path or the right qualified practitioner within my team.",
    image: "/service-image-4.png",
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
            One Director. Three Practices.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="max-w-2xl mx-auto mb-5"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.7 }}
          >
            Founded and directed by Taygan — Sports Injuries &amp; Return-to-Performance Specialist, Clinical Sports Nutritionist, and Performance Scientist with 20+ years applied experience. Every client begins with a 1INC consultation. Programmes are then delivered by a qualified practitioner within the relevant practice — Registered Dietitian · Sports-Specific S&amp;C Trainer · Registered Biokineticist — overseen throughout.
          </motion.p>

          {/* Process line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="text-[11px] tracking-[0.18em] uppercase font-semibold"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
          >
            Consult — Analysis — Report — Plan — Programme
          </motion.p>
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
          Three Practices. One Entry Point.
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

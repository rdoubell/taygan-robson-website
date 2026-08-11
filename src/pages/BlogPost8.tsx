import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import SEOMeta from "../components/SEOMeta"
import { ArticleSchema } from "../components/SchemaOrg"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
})

const HERO_IMAGE = "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=1400&q=85&auto=format&fit=crop"

const models = [
  {
    num: "01",
    label: "General Adaptation Syndrome",
    body: "Selye's framework: a training stressor disrupts homeostasis, the organism resists, and, given adequate recovery, it adapts to a new performance ceiling. Without structured recovery, there is no supercompensation — only accumulated load dressed up as progress.",
  },
  {
    num: "02",
    label: "The Fitness-Fatigue Model",
    body: "Preparedness at any given moment is not simply a product of accumulated fitness. It is the net difference between fitness gains and residual fatigue. An athlete can carry a genuinely high fitness ceiling and simultaneously be unable to express it because the fatigue side of the equation has not been managed.",
  },
  {
    num: "03",
    label: "Block Periodisation",
    body: "Issurin (2016) demonstrated that block periodisation — targeting a small number of highly concentrated training qualities across sequential mesocycles — produces superior adaptation in elite and sub-elite athletes compared to simultaneous multi-quality development. Aerobic base adaptations persist for weeks; maximal speed and event-specific readiness dissipate within days. Sequencing must account for these decay timelines.",
  },
]

export default function BlogPost8() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Periodisation, Fatigue & Athletic Adaptation"
      description="How training load, fatigue, and supercompensation interact to build athletic capacity — and how to structure a programme that produces results without breakdown."
      canonical="/blog/periodisation-fatigue-and-the-architecture-of-athletic-adaptation"
      ogType="article"
    />
    <ArticleSchema
      title="Periodisation, Fatigue & Athletic Adaptation"
      description="How training load, fatigue, and supercompensation interact to build athletic capacity without breakdown."
      url="/blog/periodisation-fatigue-and-the-architecture-of-athletic-adaptation"
    />
    <div className="grain">
      <Navbar />

      <div className="pt-36 pb-0 relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-14">
          <motion.a href="/blog" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="inline-flex items-center gap-2 mb-8 text-[10px] tracking-[0.22em] uppercase transition-colors hover:text-white" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.4)" }}>
            <ArrowLeft size={12} />
            Blog
          </motion.a>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mb-5">
            <span className="text-[9px] tracking-[0.3em] uppercase px-3 py-1.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.12)", border: "1px solid rgba(199,161,76,0.3)" }}>
              Performance Science
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            Periodisation, Fatigue, and the{" "}
            <span style={{ color: "var(--color-gold)" }}>Architecture of Athletic Adaptation</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>August 2025</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>7 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="Athlete strength training — periodisation and adaptation" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Adaptation does not happen during training. It happens during rest — and it is the detail most athletes get wrong.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Bompa and Buzzichelli (2018) identify the systematic alternation of volume, intensity, and bioenergetic specificity across training phases as the defining feature of long-term adaptation, precisely because the body does not respond indefinitely to the same stimulus. Accommodation occurs. The training variable must change before the physiological ceiling will.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                An athlete can carry a genuinely high fitness ceiling and simultaneously be unable to express it because the fatigue side of the equation has not been managed.
              </p>
            </motion.blockquote>

            <motion.div variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 p-7 flex flex-col gap-6" style={{ background: "var(--color-navy)" }}>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Three Models
              </p>
              {models.map(({ num, label, body }) => (
                <div key={num} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 leading-none mt-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800, color: "rgba(199,161,76,0.35)", letterSpacing: "-0.02em" }} aria-hidden="true">{num}</span>
                  <div>
                    <p className="mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", letterSpacing: "0.01em" }}>{label}</p>
                    <p className="text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The emerging tension in the literature is worth naming directly. Steele et al. (2023) argue that periodisation as a concept lacks the empirical testability required to meet rigorous scientific standards, particularly in resistance training contexts. This is not a fringe position — it is a legitimate methodological critique from researchers with strong publication records.
            </motion.p>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The honest practitioner-researcher sits with that discomfort, recognising that the weight of applied evidence still supports systematic load-recovery cycling as a driver of both supercompensation and competitive readiness. The model is not settled.
            </motion.p>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Which is precisely why remaining critically engaged with the literature matters.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Bompa, T.O. and Buzzichelli, C.A. (2018). <em>Periodization: Theory and Methodology of Training</em>. 6th edn. Champaign, IL: Human Kinetics.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Issurin, V.B. (2016). Benefits and limitations of block periodized training approaches to athletes' preparation: a review. <em>Sports Medicine</em>. 46(3), pp. 329–338. doi:10.1007/s40279-015-0425-5.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Steele, J., Fisher, J., Loenneke, J. and Buckner, S. (2023). Evidence-based resistance training: examining periodisation through the lens of scientific scrutiny. doi:10.51224/SRXIV.323.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
            <a href="/blog" className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase transition-colors hover:opacity-80" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
              <ArrowLeft size={12} />
              Back to Blog
            </a>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
    </>
  )
}

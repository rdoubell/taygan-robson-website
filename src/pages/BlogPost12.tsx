import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
})

const HERO_IMAGE = "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=1400&q=85&auto=format&fit=crop"

const findings = [
  {
    num: "01",
    label: "Rapid load increases predict injury",
    body: "Craddock et al. (2020) found that acute spikes in training load — measured by the acute:chronic workload ratio — were significantly associated with injury and illness in ultramarathon populations. Athletes who increased their weekly training load more than 10% above the chronic average in the preceding weeks carried substantially elevated risk in the following training block.",
  },
  {
    num: "02",
    label: "The ACWR sweet spot is narrow",
    body: "Gabbett (2016) identified an ACWR range of 0.8 to 1.3 as the lowest-risk training zone. Above 1.5, injury risk increases substantially. Below 0.8, detraining effects reduce protective fitness. The therapeutic margin between underprepared and overloaded is tighter than most athletes and coaches appreciate.",
  },
  {
    num: "03",
    label: "Chronic fitness is protective",
    body: "High chronic workload — consistently maintained over 4-week rolling periods — reduces injury risk at any given acute load. This is the fitness buffer: athletes who have built progressively over months tolerate higher spikes more safely than athletes with low chronic bases. Building slowly is not just cautious; it is biologically necessary.",
  },
]

export default function BlogPost12() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
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
              Endurance · Performance Science
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            Training Load, Injury and Illness in{" "}
            <span style={{ color: "var(--color-gold)" }}>Ultramarathon Runners</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>August 2025</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>6 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="Ultramarathon runners — training load and injury" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Ultramarathon running demands an extraordinary volume of training load. The injuries and illnesses that cut those training blocks short are, in most cases, not random. They are predictable — and preventable — when load is monitored correctly.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Craddock et al. (2020) examined training load and injury or illness incidence in ultramarathon runners across a competitive season. Their findings align with the broader framework established by Gabbett (2016): the acute:chronic workload ratio (ACWR) — the relationship between an athlete's recent training load and their longer-term load average — is a reliable predictor of injury risk across endurance populations.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                The question is not how much load an athlete can handle this week. It is how much load they have consistently handled over the past four to eight weeks — and whether this week's training is coherent with that history.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The ACWR framework divides acute load — typically the most recent 7 days of training — by chronic load, typically the rolling 28-day average. This ratio provides a window into whether an athlete is training within their adaptive capacity or exceeding it. What makes it particularly useful in ultramarathon populations is that these athletes often operate with both very high chronic volumes and very high inter-week variability — long runs punctuate compressed recovery windows in ways that standard training load monitoring tools were not built to detect.
            </motion.p>

            <motion.div variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 p-7 flex flex-col gap-6" style={{ background: "var(--color-navy)" }}>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Key Findings
              </p>
              {findings.map(({ num, label, body }) => (
                <div key={num} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 leading-none mt-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800, color: "rgba(199,161,76,0.35)", letterSpacing: "-0.02em" }} aria-hidden="true">{num}</span>
                  <div>
                    <p className="mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", letterSpacing: "0.01em" }}>{label}</p>
                    <p className="text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The practical application for practitioners working with ultramarathon athletes is clear: event-specific preparation blocks that require large weekly load increases should be preceded by months of progressively built chronic volume. Race-block mileage that would represent a 30% spike over the preceding month is a structural injury risk — regardless of how well the athlete feels in the days before the block begins.
            </motion.p>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              There are methodological limitations to acknowledge. The ACWR remains contested in its precise injury-prediction power, and absolute load thresholds differ substantially between athletes based on history, recovery capacity, and training age. But the directional finding is consistent across populations and sports: rapid load increases are the most modifiable injury risk factor available to the practitioner.
            </motion.p>

            <motion.p variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Training load is not the only predictor of injury. But it is the one you have most direct control over. That makes it the right place to start.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Craddock, J., Skinner, T.L., Peoples, G.E. and Wall, B.T. (2020). Training load and injury and illness incidence in ultramarathon runners. <em>International Journal of Sports Physiology and Performance</em>. [Reference as cited.]
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Gabbett, T.J. (2016). The training-injury prevention paradox: should athletes be training smarter and harder? <em>British Journal of Sports Medicine</em>. 50(5), pp. 273–280. doi:10.1136/bjsports-2015-095788.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.50)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
            <a href="/blog" className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase transition-colors hover:opacity-80" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
              <ArrowLeft size={12} />
              Back to Blog
            </a>
          </motion.div>
        </div>
      </article>
      <Footer />
    </div>
  )
}

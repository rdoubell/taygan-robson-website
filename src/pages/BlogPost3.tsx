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

export default function BlogPost3() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Efficiency Factor, Decoupling & Variability"
      description="A breakdown of EF, aerobic decoupling, and variability index — three endurance metrics that reveal whether your aerobic base is built to race. By 1INC Consulting."
      canonical="/blog/efficiency-factor-decoupling-what-your-data-is-telling-you"
      ogType="article"
    />
    <ArticleSchema
      title="Efficiency Factor, Decoupling & Variability"
      description="A breakdown of EF, aerobic decoupling, and variability index — three endurance metrics that reveal whether your aerobic base is built to race."
      url="/blog/efficiency-factor-decoupling-what-your-data-is-telling-you"
    />
    <div className="grain">
      <Navbar />

      {/* ── Hero header ── */}
      <div className="pt-36 pb-0 relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-14">
          {/* Back link */}
          <motion.a
            href="/blog"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 text-[10px] tracking-[0.22em] uppercase transition-colors hover:text-white"
            style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.4)" }}
          >
            <ArrowLeft size={12} />
            Blog
          </motion.a>

          {/* Category pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-5"
          >
            <span
              className="text-[9px] tracking-[0.3em] uppercase px-3 py-1.5"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--color-gold)",
                background: "rgba(199,161,76,0.12)",
                border: "1px solid rgba(199,161,76,0.3)",
              }}
            >
              Performance Science
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.015em",
              color: "#FFFFFF",
            }}
          >
            Efficiency Factor, Decoupling, and{" "}
            <span style={{ color: "var(--color-gold)" }}>What Your Data Is Actually Telling You</span>
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex items-center gap-4 mt-6"
          >
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>July 2025</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>7 min read</span>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-6 lg:px-12"
        >
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img
              src="/blog-post-3.jpeg"
              alt="Efficiency Factor, Decoupling, and What Your Data Is Actually Telling You"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
        </motion.div>
      </div>

      {/* ── Article body ── */}
      <article
        ref={bodyRef}
        className="bg-white"
        style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">

          {/* Gold rule */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-8 h-[2px] mb-10"
            style={{ background: "var(--color-gold)" }}
          />

          {/* Body copy */}
          <div
            className="flex flex-col gap-7"
            style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}
          >

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Most athletes collect training data. Fewer know what to do with it when aerobic progress stops appearing where they expected.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Three metrics answer a question raw power and pace data cannot: is the aerobic engine actually improving, and can it sustain the demands of the target event?
            </motion.p>

            {/* EF callout */}
            <motion.div
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 p-7"
              style={{ background: "var(--color-navy)" }}
            >
              <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Efficiency Factor (EF)
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "#FFFFFF", lineHeight: 1.65 }}>
                Normalised power or pace ÷ average heart rate.
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>
                A rising EF across comparable workouts indicates output is increasing for the same cardiac cost. When EF plateaus despite continued training, the aerobic stimulus has been exhausted — the response is to raise the ceiling, not accumulate more volume at the same intensity.
              </p>
            </motion.div>

            <motion.p variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Efficiency Factor (EF) — the ratio of normalised power or pace to average heart rate — tracks aerobic adaptation longitudinally. A rising EF across comparable workouts indicates output is increasing for the same cardiac cost. When EF plateaus despite continued training, the aerobic stimulus has been exhausted and the response is to raise the ceiling, not accumulate more volume at the same intensity.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp(0.20)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 pl-6 py-1"
              style={{ borderLeft: "3px solid var(--color-gold)" }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                An athlete with strong aerobic endurance resists cardiac drift. One whose base is insufficient will not — and no amount of race-day pacing strategy compensates for that gap.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Decoupling — Pw:Hr for cycling and Pa:Hr for running — quantifies cardiac drift by comparing EF across the first and second halves of a session. Cardiovascular drift proposes that stroke volume declines as rising core temperature drives sympathetic tachycardia, with heart rate compensating for falling stroke volume rather than cutaneous redistribution being the primary driver (Coyle and González-Alonso, 2001). An athlete with strong aerobic endurance resists this drift; one whose base is insufficient will not.
            </motion.p>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Smyth et al. (2022) examined the decoupling of pace and heart rate in marathon runners and identified those with the least drift at a lower effort maintained greater speed and better finish times. The results support an applied threshold of less than 5%, and provide further evidence connecting the metric to the durability construct Jones (2024) identified as the fourth determinant of endurance performance.
            </motion.p>

            {/* VI callout */}
            <motion.div
              variants={fadeUp(0.32)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 p-7"
              style={{ background: "var(--color-navy)" }}
            >
              <p className="text-[10px] tracking-[0.35em] uppercase mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Variability Index (VI)
              </p>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "#FFFFFF", lineHeight: 1.65 }}>
                Normalised power ÷ average power.<br />
                Target: as close to 1.0 as possible.
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>
                Values above 1.05 signal power variability and higher metabolic cost. For time trialists and triathletes competing at sustained sub-threshold output, high VI is wasted energy — and aerobic base cannot compensate for poor energy distribution on race day.
              </p>
            </motion.div>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Variability Index (VI) — the ratio of normalised power to average power — captures pacing quality independently of fitness level. A VI approaching 1.0 reflects metabolic efficiency. Values above 1.05 signal power variability and higher metabolic cost. For time trialists and triathletes competing at sustained sub-threshold output, high VI is wasted energy and aerobic base cannot compensate for poor energy distribution on race day.
            </motion.p>

            <motion.p variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              These three metrics together answer the question practitioners should always be asking: does this athlete need more endurance capacity, more output, or better pacing? Getting that wrong wastes an entire training phase.
            </motion.p>

          </div>

          {/* References */}
          <motion.div
            variants={fadeUp(0.44)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-14 pt-8 border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>
              References
            </p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              {[
                "Coyle, E.F. and González-Alonso, J. (2001). Cardiovascular drift during prolonged exercise: new perspectives. Exercise and Sport Sciences Reviews. 29(2), pp. 88–92. doi:10.1097/00003677-200104000-00009.",
                "Jones, A.M. (2024). The fourth dimension: physiological resilience as an independent determinant of endurance exercise performance. The Journal of Physiology. 602(17), pp. 4113–4128. doi:10.1113/JP284205.",
                "Smyth et al. (2022). Decoupling of internal and external workload during a marathon: an analysis of durability in 82,303 recreational runners. Sports Medicine. 52(9), pp. 2283–2295. doi:10.1007/s40279-022-01680-5.",
              ].map((ref) => (
                <li key={ref} className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                  {ref}
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Back to blog */}
          <motion.div
            variants={fadeUp(0.48)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-12"
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase transition-colors hover:opacity-80"
              style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
            >
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

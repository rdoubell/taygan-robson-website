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

const HERO_IMAGE = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1400&q=85&auto=format&fit=crop"

const errors = [
  {
    num: "01",
    label: "Strength criteria are necessary but not sufficient",
    body: "An athlete achieving 90% of contralateral maximal strength while carrying a 40% early-phase RFD deficit is not functionally ready for reactive, high-velocity sport demands, regardless of what the strength screen shows.",
  },
  {
    num: "02",
    label: "Early-phase RFD reflects neural drive",
    body: "Maffiuletti et al. (2016) established that early-phase RFD, measured within the first 50 to 150 milliseconds of contraction onset, primarily reflects neural drive and motor unit recruitment. An athlete can restore maximal strength following injury while carrying persistent early-phase RFD deficits — meaning the motor cortex is failing to recruit motor units at the rate required for explosive athletic movement.",
  },
  {
    num: "03",
    label: "Conventional resistance training does not develop RFD",
    body: "Ballistic and explosive training modalities represent the most effective stimuli for RFD development in trained populations, where conventional moderate-load resistance training produces minimal RFD gain. Programming as if these qualities are interchangeable will consistently produce athletes who look strong in the gym and expose themselves to injury in the field.",
  },
]

export default function BlogPost7() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Rate of Force Development: Beyond Maximal"
      description="Maximal strength is only part of the picture. Rate of force development reveals how quickly that strength is expressed — the number that determines athletic performance."
      canonical="/blog/rate-of-force-development-what-maximal-strength-does-not-tell-you"
      ogType="article"
    />
    <ArticleSchema
      title="Rate of Force Development: Beyond Maximal"
      description="Maximal strength is only part of the picture. Rate of force development reveals how quickly that strength is expressed in athletic performance."
      url="/blog/rate-of-force-development-what-maximal-strength-does-not-tell-you"
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
              Performance Science · Rehabilitation
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            Rate of Force Development:{" "}
            <span style={{ color: "var(--color-gold)" }}>What Maximal Strength Does Not Tell You</span>
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
            <img src={HERO_IMAGE} alt="Sprinter leaving starting blocks" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              An athlete clears their strength criteria. Two weeks later they tear their ACL on a deceleration. The strength test was fine. The rate of force development was not measured.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Rate of force development — the slope of the force-time curve during rapid voluntary contraction — quantifies how quickly an athlete can generate force, not how much force they can ultimately produce. The distinction is functionally critical. Ground contact during sprint acceleration lasts approximately 80 to 100 milliseconds. Rapid joint stabilisation following perturbation requires force expression within 50 milliseconds. The time to reach maximal voluntary isometric force is typically 300 milliseconds or more, meaning that in most athletic actions, the ceiling of maximal strength is irrelevant — the system never has time to reach it.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                In most athletic actions, the ceiling of maximal strength is irrelevant — the system never has time to reach it.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Aagaard et al. (2002) demonstrated that resistance training significantly increases RFD alongside neural drive, with improvements preceding structural adaptations and pointing toward neural mechanisms as the primary driver of early-phase explosive strength.
            </motion.p>

            <motion.div variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 p-7 flex flex-col gap-6" style={{ background: "var(--color-navy)" }}>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                What Strength Testing Misses
              </p>
              {errors.map(({ num, label, body }) => (
                <div key={num} className="flex gap-5 items-start">
                  <span className="flex-shrink-0 leading-none mt-1" style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800, color: "rgba(199,161,76,0.35)", letterSpacing: "-0.02em" }} aria-hidden="true">{num}</span>
                  <div>
                    <p className="mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", letterSpacing: "0.01em" }}>{label}</p>
                    <p className="text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>{body}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Explosive strength and maximal strength are related. They are not the same quality.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Aagaard, P., Simonsen, E.B., Andersen, J.L., Magnusson, P. and Dyhre-Poulsen, P. (2002). Increased rate of force development and neural drive of human skeletal muscle following resistance training. <em>Journal of Applied Physiology</em>. 93(4), pp. 1318–1326. doi:10.1152/japplphysiol.00307.2002.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Maffiuletti, N.A., Aagaard, P., Blazevich, A.J., Folland, J., Tillin, N. and Duchateau, J. (2016). Rate of force development: physiological and methodological considerations. <em>European Journal of Applied Physiology</em>. 116(6), pp. 1091–1116. doi:10.1007/s00421-016-3346-6.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
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

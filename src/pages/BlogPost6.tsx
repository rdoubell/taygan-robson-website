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

const HERO_IMAGE = "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=1400&q=85&auto=format&fit=crop"

const principles = [
  {
    num: "01",
    label: "Train high for quality",
    body: "High-intensity sessions, lactate threshold work, and competition-specific efforts require full carbohydrate availability to protect training quality. These are not candidates for restriction.",
  },
  {
    num: "02",
    label: "Train low for adaptation",
    body: "Low-to-moderate intensity sessions targeting aerobic base or fat oxidation become the primary vehicle for train-low strategies. Reduced glycogen availability during these sessions amplifies the cell signalling response.",
  },
  {
    num: "03",
    label: "Adjust meal by meal, not week by week",
    body: "Morton et al. (2025) are explicit: carbohydrate availability must be adjusted based upon the energy expenditure of each session, not arbitrarily restricted across the week. The unit of periodisation is the session.",
  },
]

export default function BlogPost6() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Carbohydrate Periodisation: Fuel the Work"
      description="Fuelling every session the same way leaves performance on the table. Taygan Robson explains carbohydrate periodisation and how to match intake to training demand."
      canonical="/blog/carbohydrate-periodisation-fuelling-for-the-work-required"
      ogType="article"
    />
    <ArticleSchema
      title="Carbohydrate Periodisation: Fuel the Work"
      description="Fuelling every session the same way leaves performance on the table. How to match carbohydrate intake to training demand."
      url="/blog/carbohydrate-periodisation-fuelling-for-the-work-required"
    />
    <div className="grain">
      <Navbar />

      <div className="pt-36 pb-0 relative overflow-hidden" style={{ background: "var(--color-navy)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-14">
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

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mb-5">
            <span className="text-[9px] tracking-[0.3em] uppercase px-3 py-1.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.12)", border: "1px solid rgba(199,161,76,0.3)" }}>
              Sports Nutrition · Performance Science
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}
          >
            Carbohydrate Periodisation:{" "}
            <span style={{ color: "var(--color-gold)" }}>Fuelling for the Work Required</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>August 2025</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>5 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="Carbohydrate periodisation — sports nutrition" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Not every training session deserves the same fuel. Getting this wrong does not just limit performance — it limits adaptation.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Carbohydrate periodisation is not a dietary trend. It is a structured nutritional strategy that matches carbohydrate availability to the demands and objectives of each training session. The theoretical framework was formalised by Impey et al. (2018), whose glycogen threshold hypothesis proposed that beginning certain sessions with reduced glycogen availability amplifies cell signalling responses — including up-regulation of PGC-1alpha and mitochondrial transcription factor A (Tfam) — producing training adaptations and promoting mitochondrial biogenesis that high-carbohydrate conditions systematically blunt.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Nutrition and training are not parallel systems. At the elite level, they are the same system.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The nuance matters here. Training low is not training depleted. Chronic reduction of available carbohydrate can lead to impaired performance, prolonged suppression of recovery, and increased injury potential. Morton et al. (2025) have clearly articulated that carbohydrate availability must be adjusted meal-by-meal and day-to-day based upon the energy expenditure of each session, rather than arbitrarily restricting it throughout the week.
            </motion.p>

            <motion.div variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 p-7 flex flex-col gap-6" style={{ background: "var(--color-navy)" }}>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Practical Architecture
              </p>
              {principles.map(({ num, label, body }) => (
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
              What complicates this further is the emerging evidence that the performance benefit of train-low protocols may be partly attributable to transient energy restriction rather than carbohydrate restriction per se. Whether the mechanism is carbohydrate-specific or calorie-mediated remains an open question, and practitioners should hold that uncertainty rather than overclaiming the effect.
            </motion.p>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Periodising one without periodising the other produces a plan that works against itself.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Impey, S.G., Hearris, M.A., Hammond, K.M., Bartlett, J.D., Louis, J., Close, G.L. and Morton, J.P. (2018). Fuel for the work required: a theoretical framework for carbohydrate periodization and the glycogen threshold hypothesis. <em>Sports Medicine</em>. 48(5), pp. 1031–1048. doi:10.1007/s40279-018-0867-7.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Morton, J.P. et al. (2025). Carbohydrate availability and training adaptation: meal-by-meal periodisation in practice. [Reference as cited.]
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

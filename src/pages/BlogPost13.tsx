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

const HERO_IMAGE = "/blog-post-13.jpg"

const findings = [
  {
    num: "01",
    label: "25–39% of weight lost is lean mass without intervention",
    body: "Wilding et al. (2021) found that between 25 and 39% of total weight lost on GLP-1 receptor agonist therapy is lean mass when resistance programming and protein intake are not actively managed. In a 58-year-old with declining anabolic hormones and no resistance history, this is not an incidental side effect — it is the primary risk to address.",
  },
  {
    num: "02",
    label: "Low-load and high-load protocols produce equivalent outcomes",
    body: "Schoenfeld et al. (2017) demonstrated in a systematic review and meta-analysis that strength and hypertrophy outcomes are comparable between low-load, high-repetition and high-load, low-repetition protocols when effort is matched — provided the load is sufficient to recruit high-threshold motor units. For an individual with no resistance background, low-load work taken to a challenging level of effort is both appropriate and effective.",
  },
  {
    num: "03",
    label: "Tirzepatide produces the smallest heart rate rise of six GLP-1 agents",
    body: "A 2026 network meta-analysis (Zhang et al.) comparing heart rate effects across six GLP-1 receptor agonists found that tirzepatide produced a smaller resting heart rate increase than semaglutide at every dose tested, ranking lowest of all six drugs studied. This informs the intensity ceiling applied to aerobic sessions in this programme.",
  },
]

const session = [
  { label: "Push-ups", tag: "Upper push", sets: "3 × 5" },
  { label: "Band or dumbbell rows", tag: "Upper pull", sets: "3 × 5" },
  { label: "Goblet squats", tag: "Lower push", sets: "3 × 5" },
  { label: "Romanian deadlifts", tag: "Lower pull", sets: "3 × 5" },
  { label: "Dead bug or plank", tag: "Core", sets: "3 × 30 s" },
]

export default function BlogPost13() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Rebuilding Strength and Lean Muscle After Significant GLP-1 Weight Loss"
      description="Combining structured resistance loading, protein-targeted nutrition, and progressive load to protect skeletal muscle. A case study in what comes after GLP-1-assisted weight loss."
      canonical="/blog/lean-mass-preservation-strength-programming-glp1"
      ogType="article"
    />
    <ArticleSchema
      title="Rebuilding Strength and Lean Muscle After Significant GLP-1 Weight Loss"
      description="Combining structured resistance loading, protein-targeted nutrition, and progressive load to protect skeletal muscle. A case study in what comes after GLP-1-assisted weight loss."
      url="/blog/lean-mass-preservation-strength-programming-glp1"
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
              Clinical Nutrition · Performance Management
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            Rebuilding Strength and Lean Muscle After Significant{" "}
            <span style={{ color: "var(--color-gold)" }}>GLP-1 Weight Loss</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>August 2026</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>7 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="Strength programming after GLP-1 weight loss — lean mass preservation" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A 58-year-old woman. Six months post-weight-loss phase. Nineteen kilograms lost over eight months on tirzepatide. Walking is her entire structured physical activity — thirty to sixty minutes every day, no rest days. The scale has moved. The question that matters now is what else moved with it.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Weight loss without managed resistance stimulus and adequate protein intake produces lean mass loss in everyone — regardless of age, medication, or how the deficit was achieved. In GLP-1 receptor agonist populations specifically, the lean mass proportion of total weight lost is substantial when resistance programming is absent. In a 58-year-old woman with declining anabolic hormone levels and no resistance history, this is not a minor consideration. It is the central clinical problem to solve.
            </motion.p>

            <motion.p variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Walking, for all its value as a low-impact aerobic modality, does not produce the mechanical loading signal required to stimulate muscle protein synthesis and preserve skeletal muscle during a caloric deficit. Aerobic activity and resistance stimulus are not interchangeable for this purpose — they serve distinct physiological functions, and one cannot substitute for the other.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Walking built the foundation. Two resistance sessions per week — twenty minutes each — provide the mechanical stimulus aerobic work cannot replicate.
              </p>
            </motion.blockquote>

            <motion.div variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 p-7 flex flex-col gap-6" style={{ background: "var(--color-navy)" }}>
              <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Key Evidence
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

            <motion.h2 variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Programme Structure
            </motion.h2>

            <motion.p variants={fadeUp(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The restructured programme operates on a three-days-on, one-day-off cycle: four aerobic sessions per week, two resistance sessions per week, and one full rest day. The aerobic sessions — thirty to sixty minutes of low Zone 2 walking — are retained as the foundation. They serve a purpose distinct from the resistance sessions: building genuine aerobic base, supporting cardiovascular health, and preserving the daily movement habit she has already established. Intensity is kept deliberately low to avoid adding recovery cost on top of the resistance stimulus.
            </motion.p>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The rest day is non-negotiable. Recovery is the period in which adaptation occurs — not the sessions themselves. For a 58-year-old beginning a resistance programme, adequate rest between stimulus and the next session is where the physiological return is generated.
            </motion.p>

            <motion.h2 variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Resistance Session Design
            </motion.h2>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Each resistance session is twenty minutes. Five exercises covering every major movement pattern: one upper push, one upper pull, one lower push, one lower pull, one core. Five repetitions per exercise, three sets. The brevity is intentional — adherence is the primary variable at this stage, and a manageable session that gets done consistently outperforms an elaborate one that does not.
            </motion.p>

            <motion.div variants={fadeUp(0.34)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
                <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>Example Session — 5 Reps · 3 Sets</p>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                {session.map(({ label, tag, sets }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="flex-shrink-0 text-[9px] tracking-[0.25em] uppercase px-2 py-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.1)", border: "1px solid rgba(199,161,76,0.25)" }}>{tag}</span>
                      <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{label}</span>
                    </div>
                    <span className="flex-shrink-0 text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{sets}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The load is intentionally low. This is not a compromise — it is evidence-based programme design. What matters at this stage is that the load is sufficient to recruit high-threshold motor units and that effort is appropriately challenging. Both conditions are met with bodyweight and light external load for an individual beginning resistance work at this level.
            </motion.p>

            <motion.h2 variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Tirzepatide and Resting Heart Rate
            </motion.h2>

            <motion.p variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A mild rise in resting heart rate is a known pharmacological effect of GLP-1 receptor agonists. For this individual on tirzepatide, the aerobic sessions are kept in low Zone 2 not to limit cardiovascular stimulus, but to ensure that perceived effort accurately reflects her physiological state. The Zhang et al. (2026) data is reassuring in this regard: of the six GLP-1 agents studied, tirzepatide produced the smallest resting heart rate increase, ranking lowest at every dose tested. The Zone 2 ceiling remains appropriate as a programme design decision, not a restriction.
            </motion.p>

            <motion.h2 variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Nutrition Framework: Total, Type, Timing
            </motion.h2>

            <motion.p variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <strong style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>Total.</strong> Energy intake has been recalculated for a rebuilding phase — not further loss. The objective is no longer a caloric deficit. It is recomposition: preserving and progressively building lean mass while allowing the body to consolidate the weight already lost.
            </motion.p>

            <motion.p variants={fadeUp(0.48)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <strong style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>Type.</strong> Protein is set at 1.2 to 1.4 grams per kilogram, using the Weijs (2025) floor for weight-loss populations rather than an athlete-level target that would not be appropriate or sustainable at this stage. The 25 to 39% lean mass loss figure from Wilding et al. makes clear that without a managed protein target, the losses already incurred will continue — and the resistance programme alone cannot compensate for inadequate substrate.
            </motion.p>

            <motion.p variants={fadeUp(0.50)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <strong style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>Timing.</strong> Protein is distributed across three meals. On the two resistance session days, the daily target rises to 1.6 to 1.8 grams per kilogram to support the elevated anabolic signal generated by the resistance stimulus. The difference is intentional — protein needs are not uniform across a week when sessions produce different mechanical demands.
            </motion.p>

            <motion.p variants={fadeUp(0.54)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Walking pace and recovery have both improved. The resistance sessions are doing what aerobic work could not: delivering the mechanical loading signal required to maintain and progressively build lean tissue. The scale is no longer the primary outcome metric — lean mass retention is.
            </motion.p>

            <motion.p variants={fadeUp(0.58)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              This is not a fitness case. It is a clinical one. A 58-year-old on GLP-1 therapy, navigating the intersection of pharmacology, physiology, and performance — managed through one integrated programme across nutrition, aerobic conditioning, and resistance. This is the exact space 1INC was built for.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.62)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Schoenfeld, B.J. et al. (2017). Strength and hypertrophy adaptations between low- vs. high-load resistance training: a systematic review and meta-analysis. <em>Journal of Strength and Conditioning Research</em>, 31(12), pp.3508–3523.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Weijs, P.J.M. (2025). [Protein targets in weight-loss populations.] Available at: <a href="https://lnkd.in/daXkiQZY" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>https://lnkd.in/daXkiQZY</a>
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Wilding, J.P.H. et al. (2021). Once-weekly semaglutide in adults with overweight or obesity. <em>New England Journal of Medicine</em>, 384, pp.989–1002.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Zhang, Y., Zhang, C., Gong, X. et al. (2026). [Network meta-analysis: heart rate effects across GLP-1 receptor agonists.] Available at: <a href="https://lnkd.in/dikS2FeX" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>https://lnkd.in/dikS2FeX</a>
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.66)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
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

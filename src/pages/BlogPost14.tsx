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

const HERO_IMAGE = "/blog-post-14.jpg"

const findings = [
  {
    num: "01",
    label: "25–39% of weight lost is lean mass without managed resistance stimulus",
    body: "Wilding et al. (2021) and Rubino et al. (2022) both found that between 25 and 39% of total weight lost on GLP-1 receptor agonist therapy is lean mass when resistance loading and protein intake are not actively managed. In a field sport athlete performing two matches per week — with the eccentric hamstring demands that entails — unmanaged lean mass loss is not a cosmetic concern. It is a direct injury risk factor.",
  },
  {
    num: "02",
    label: "Low-rep, compound protocols produce equivalent strength outcomes",
    body: "Schoenfeld et al. (2017) demonstrated that strength outcomes are comparable across loading ranges when effort is matched. For an athlete managing two weekly matches and GLP-1 therapy simultaneously, sessions need to be short, recovery cost needs to be predictable, and the loading stimulus needs to be sufficient. Three sets of five compound reps at appropriate intensity meets all three criteria.",
  },
  {
    num: "03",
    label: "Semaglutide raises resting heart rate — and cardiovascular benefit is real",
    body: "Lincoff et al. (2023) confirmed that semaglutide produces meaningful cardiovascular risk reduction in obesity populations without diabetes. A mild rise in resting heart rate is a known pharmacological effect and does not contradict the cardiovascular benefit — both findings sit alongside each other. This distinction matters for how perceived effort during matches is interpreted and how post-match recovery is managed.",
  },
]

const sessionA = [
  { label: "Push-ups", tag: "Upper push", sets: "3 × 5" },
  { label: "Lat pulldowns", tag: "Upper pull", sets: "3 × 5" },
  { label: "D/B Bulgarian split squat", tag: "Lower push", sets: "3 × 5 each" },
  { label: "Nordic hamstring curl", tag: "Lower pull · eccentric", sets: "3 × 5 each" },
  { label: "Band woodchop", tag: "Rotational core", sets: "3 × 8 each" },
  { label: "Back extension", tag: "Spinal extension", sets: "3 × 10" },
]

const sessionB = [
  { label: "D/B overhead press", tag: "Upper push", sets: "3 × 5" },
  { label: "Band-assisted pull-up", tag: "Upper pull", sets: "3 × 5" },
  { label: "D/B goblet squat", tag: "Lower push", sets: "3 × 5" },
  { label: "D/B single-leg RDL", tag: "Lower pull · eccentric", sets: "3 × 8 each" },
  { label: "Single-leg Pallof press", tag: "Anti-rotation core", sets: "3 × 8 each" },
  { label: "Dead bug", tag: "Spinal flexion", sets: "3 × 10" },
]

export default function BlogPost14() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="GLP-1, Five-a-Side Football, and a Strength Programme Built for the Sport"
      description="A 38-year-old on semaglutide playing two matches a week. The strength programme was built around eccentric hamstring loading, single-leg stability, and rotational core control — not generic resistance work."
      canonical="/blog/semaglutide-field-sport-strength-football"
      ogType="article"
    />
    <ArticleSchema
      title="GLP-1, Five-a-Side Football, and a Strength Programme Built for the Sport"
      description="A 38-year-old on semaglutide playing two matches a week. The strength programme was built around eccentric hamstring loading, single-leg stability, and rotational core control — not generic resistance work."
      url="/blog/semaglutide-field-sport-strength-football"
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
              Clinical Nutrition · Strength &amp; Conditioning
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            GLP-1, Five-a-Side, and a{" "}
            <span style={{ color: "var(--color-gold)" }}>Strength Programme Built for the Sport</span>
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
            <img src={HERO_IMAGE} alt="Five-a-side football and GLP-1 strength programming" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A 38-year-old male. Six weeks into semaglutide therapy. Playing five-a-side weekly and Sunday league — two competitive matches per week. No formal structured programme before this.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Field sport places a different demand on the body than a structured resistance session. Sprint, decelerate, change direction, repeat — for ninety minutes, with the legs progressively fatiguing throughout. The eccentric hamstring load generated during high-speed deceleration and direction change is substantial. In a player with no history of structured loading, that demand is landing on tissue that has never been specifically prepared for it.
            </motion.p>

            <motion.p variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Add GLP-1 therapy to that picture. Semaglutide produces meaningful weight loss — but between 25 and 39% of total weight lost is lean mass without managed resistance loading and protein intake. In a field sport athlete performing two matches per week, unmanaged lean mass loss is not a cosmetic concern. It is a direct injury risk factor. The sport is built on repeated high-speed deceleration and change of direction. Those demands require tissue capacity. GLP-1 therapy alone does not build it.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Two resistance sessions per week, twenty minutes each — structured around what the sport actually demands: eccentric hamstring loading, single-leg stability, and rotational core control.
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
              The weekly structure is four days of activity: two matches, two resistance sessions. The resistance sessions do not sit on top of the matches — they are positioned around them, with recovery considered as part of the architecture. Each session is twenty minutes. The brevity is deliberate: the matches already carry significant physical cost, and the resistance sessions are designed to complement that load rather than add to it indiscriminately.
            </motion.p>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Two sessions, two different core demands. Session A targets rotational core control and spinal extension — the mechanics of producing and absorbing force through the trunk during directional changes. Session B targets anti-rotation and spinal flexion — the stabilising capacity required to decelerate, absorb, and redirect. Both are required for field sport. Generic core work addresses neither specifically.
            </motion.p>

            <motion.h2 variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Session A — Rotational Core · 20 min
            </motion.h2>

            <motion.div variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
                <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>Compound lifts — 2–3 min rest · Low reps</p>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                {sessionA.map(({ label, tag, sets }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex items-center gap-3 min-w-0 flex-wrap">
                      <span className="flex-shrink-0 text-[9px] tracking-[0.25em] uppercase px-2 py-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.1)", border: "1px solid rgba(199,161,76,0.25)" }}>{tag}</span>
                      <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{label}</span>
                    </div>
                    <span className="flex-shrink-0 text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{sets}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.h2 variants={fadeUp(0.34)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Session B — Anti-Rotation Core · 20 min
            </motion.h2>

            <motion.div variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
              <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
                <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>Compound lifts — 2–3 min rest · Low reps</p>
              </div>
              <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
                {sessionB.map(({ label, tag, sets }) => (
                  <div key={label} className="flex items-center justify-between px-5 py-4 gap-4">
                    <div className="flex items-center gap-3 min-w-0 flex-wrap">
                      <span className="flex-shrink-0 text-[9px] tracking-[0.25em] uppercase px-2 py-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.1)", border: "1px solid rgba(199,161,76,0.25)" }}>{tag}</span>
                      <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{label}</span>
                    </div>
                    <span className="flex-shrink-0 text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{sets}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The eccentric focus in both lower pull movements — Nordic hamstring curls in Session A, single-leg RDL in Session B — is not incidental. Research on hamstring injury in field sport consistently implicates eccentric hamstring weakness during high-speed deceleration as the primary mechanical risk factor. These two exercises target that capacity specifically. The three-by-five loading prescription keeps the session short, the recovery cost predictable, and the stimulus sufficient to drive adaptation (Schoenfeld et al., 2017).
            </motion.p>

            <motion.h2 variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Semaglutide and Resting Heart Rate
            </motion.h2>

            <motion.p variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A mild rise in resting heart rate is expected on GLP-1 therapy. This does not contradict the cardiovascular benefit — the two findings sit alongside each other. Lincoff et al. (2023) confirmed meaningful cardiovascular risk reduction with semaglutide in obesity populations without diabetes. The relevant practical implication here is that perceived effort during matches may be slightly elevated relative to actual cardiovascular output, and post-match recovery should be interpreted with that in mind. It is a contextual variable to account for, not a reason to limit sport participation.
            </motion.p>

            <motion.h2 variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Nutrition Framework: Total, Type, Timing
            </motion.h2>

            <motion.p variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <strong style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>Total.</strong> Energy needs are calculated against two weekly matches, not a sedentary baseline. Match day energy expenditure is substantially higher than a rest day — fuelling for the correct context matters as much as the total weekly number.
            </motion.p>

            <motion.p variants={fadeUp(0.48)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <strong style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>Type.</strong> Protein is set at 1.6 g/kg — above the standard weight-loss target (Weijs, 2025), and closer to the upper end supported for active populations (Cava, Yeat and Mittendorfer, 2017). The rationale is clear: between 25 and 39% of weight lost on GLP-1 therapy is lean mass without managed resistance loading and protein intake (Wilding et al., 2021; Rubino et al., 2022). In a field sport athlete with eccentric hamstring demands across two matches per week, that risk is not acceptable. Protein is the primary lever for managing it.
            </motion.p>

            <motion.p variants={fadeUp(0.50)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <strong style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>Timing — match day specifically.</strong> Pre-match, two to three hours before kick-off: 100g rice, 150g grilled chicken, one small banana. Carbohydrate-forward, moderate protein — approximately 40g protein and enough carbohydrate to sustain ninety minutes without sitting heavy. Post-match, within sixty minutes: 30g whey isolate with one banana or 40g oats. Later that evening: 150g salmon, 100g potatoes, vegetables. On non-match days: protein distributed across three to four meals, no timing emphasis required.
            </motion.p>

            <motion.p variants={fadeUp(0.54)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The match day protocol is built around a simple principle: fuel for the output, recover for the adaptation. The pre-match meal supports ninety minutes of intermittent high-intensity effort. The post-match window closes the anabolic gap before the evening meal. Neither is optional when lean mass preservation is the parallel objective.
            </motion.p>

            <motion.p variants={fadeUp(0.58)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Nutrition timed to the medication. Strength built for the sport. One client, two matches a week, one integrated plan across clinical nutrition and sport-specific conditioning. This is the exact space 1INC was built for.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.62)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Schoenfeld, B.J. et al. (2017). Strength and hypertrophy adaptations between low- vs. high-load resistance training: a systematic review and meta-analysis. <em>Journal of Strength and Conditioning Research</em>, 31(12), pp.3508–3523.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Weijs, P.J.M. (2025). Protein requirements in weight-loss populations. Available at: <a href="https://lnkd.in/daXkiQZY" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>https://lnkd.in/daXkiQZY</a>
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Cava, E., Yeat, N.C. and Mittendorfer, B. (2017). Preserving healthy muscle during weight loss. <em>Advances in Nutrition</em>, 8(3), pp.511–519.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Wilding, J.P.H. et al. (2021). Once-weekly semaglutide in adults with overweight or obesity. <em>New England Journal of Medicine</em>, 384, pp.989–1002.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Rubino, D.M. et al. (2022). Effect of weekly subcutaneous semaglutide vs daily liraglutide on body weight in adults with overweight or obesity without diabetes. <em>JAMA</em>, 327(2), pp.138–150.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Lincoff, A.M. et al. (2023). Semaglutide and cardiovascular outcomes in obesity without diabetes. <em>New England Journal of Medicine</em>, 389(24), pp.2221–2232. Available at: <a href="https://lnkd.in/dkKKNQwn" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-gold)" }}>https://lnkd.in/dkKKNQwn</a>
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

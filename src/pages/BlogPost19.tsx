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

const HERO_IMAGE = "/blog-post-19.jpg"

const proteinTargetRows = [
  { level: "Minimum floor", target: "1.2 g/kg", context: "Current body weight · prevents acute muscle loss" },
  { level: "Clinical target", target: "1.6 g/kg", context: "Current body weight · lean mass preservation + recovery" },
  { level: "Hard ceiling", target: "2.0 g/kg", context: "No added benefit beyond this point" },
]

const bodyWeightRows = [
  { weight: "70 kg", floor: "84 g", target: "112 g", ceiling: "140 g" },
  { weight: "80 kg", floor: "96 g", target: "128 g", ceiling: "160 g" },
  { weight: "120 kg", floor: "144 g", target: "192 g", ceiling: "240 g" },
]

function ProteinTargetTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
          Protein Targets on GLP-1 Therapy · Clinical Reference
        </p>
      </div>
      <div className="grid grid-cols-3 px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}>
        {["Level", "Target", "Context"].map((h) => (
          <span key={h} className="text-[9px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{h}</span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {proteinTargetRows.map(({ level, target, context }) => (
          <div key={level} className="grid grid-cols-3 items-start px-5 py-4 gap-4">
            <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{level}</span>
            <span className="text-[14px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontVariantNumeric: "tabular-nums" }}>{target}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.5)" }}>{context}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BodyWeightTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
          Daily Protein Targets by Body Weight · Based on Current Weight
        </p>
      </div>
      <div className="grid grid-cols-4 px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}>
        {["Body Weight", "Floor (1.2g/kg)", "Target (1.6g/kg)", "Ceiling (2.0g/kg)"].map((h) => (
          <span key={h} className="text-[9px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{h}</span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {bodyWeightRows.map(({ weight, floor, target, ceiling }) => (
          <div key={weight} className="grid grid-cols-4 items-center px-5 py-4 gap-4">
            <span className="text-[14px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{weight}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.55)" }}>{floor}</span>
            <span className="text-[14px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontVariantNumeric: "tabular-nums" }}>{target}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.55)" }}>{ceiling}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost19() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="How Much Protein Do You Actually Need on GLP-1 Therapy?"
      description="The RDA for protein was not designed for weight loss. On GLP-1 therapy, reduced appetite means reduced protein intake — and without a deliberate target, muscle loss follows. Here is the number and how to hit it."
      canonical="/blog/protein-requirements-glp1-therapy"
      ogType="article"
    />
    <ArticleSchema
      title="How Much Protein Do You Actually Need on GLP-1 Therapy?"
      description="The RDA for protein was not designed for weight loss. On GLP-1 therapy, reduced appetite means reduced protein intake — and without a deliberate target, muscle loss follows. Here is the number and how to hit it."
      url="/blog/protein-requirements-glp1-therapy"
      datePublished="2026-11-13"
      image={`https://www.1inc.co.za${HERO_IMAGE}`}
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
              Clinical Nutrition · GLP-1 · Body Composition
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            How Much Protein Do You{" "}
            <span style={{ color: "var(--color-gold)" }}>Actually Need on GLP-1?</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>November 2026</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>6 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="High-protein meal preparation for GLP-1 therapy nutrition" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              GLP-1 receptor agonists are the most effective pharmacological weight loss tools in clinical use. Semaglutide and tirzepatide suppress appetite so reliably that my clients routinely struggle to eat enough — which sounds like a problem most people would want. The issue is that "not eating enough" disproportionately means not eating enough protein. And when protein is chronically insufficient during active weight loss, a significant portion of what you lose will be muscle, not fat.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              I see this across the board: clients losing 15 to 25 kg on GLP-1 therapy, feeling physically lighter, but losing strength alongside it. Their body weight is down. Their functional capacity is not up. That is not a successful outcome by any measure I use in performance nutrition.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                The question is not whether you should prioritise protein on GLP-1. It is by how much — and how to actually hit that number when the medication has halved your appetite.
              </p>
            </motion.blockquote>

            <motion.h2 variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Why the RDA Is the Wrong Starting Point
            </motion.h2>

            <motion.p variants={fadeUp(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The recommended dietary allowance for protein is 0.8 grams per kilogram of body weight per day. That figure is built for sedentary adults at weight maintenance — it represents the minimum needed to prevent deficiency in a population that is not losing weight, not training, and not recovering from anything. It was never designed as a target for body recomposition, and applying it to GLP-1 therapy is a clinical mismatch.
            </motion.p>

            <motion.p variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Weijs (2025) reviewed protein requirements in the context of obesity management and confirmed what the sports science literature has shown for over a decade: during active caloric restriction, protein needs increase substantially above the RDA to protect lean mass. The deficit itself is the driver — the larger the energy deficit, the greater the risk of lean mass loss, and the higher the protein requirement needed to offset it. GLP-1 therapy creates very large energy deficits. The protein requirement follows accordingly.
            </motion.p>

            <motion.h2 variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Number I Use in Clinical Practice
            </motion.h2>

            <motion.p variants={fadeUp(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              My floor is 1.2 grams per kilogram of current body weight per day. This is where the evidence places the lower boundary for meaningful lean mass preservation during caloric restriction, and I treat it as an absolute minimum — not a target. Johnson et al. (2025) tracked body composition in adults on GLP-1 therapy across a 24-week period and found that those consuming below 1.2 g/kg showed significantly greater reductions in fat-free mass compared to those meeting or exceeding that threshold.
            </motion.p>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              My clinical target is 1.6 grams per kilogram. This is where the literature converges for active individuals in a caloric deficit who are completing any form of structured resistance training. Volek et al. (2024) demonstrated that 1.6 g/kg, combined with resistance training, was sufficient to fully attenuate lean mass loss during significant weight reduction — a result that lower intakes did not replicate. Spreckley et al. (2025) found similar outcomes specifically in a GLP-1 cohort, with 1.6 g/kg emerging as the threshold above which lean mass outcomes were meaningfully better than controls.
            </motion.p>

            <motion.p variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              There is a ceiling, and it is around 2.0 grams per kilogram. Beyond that point, the additional protein does not translate to further lean mass preservation or improved recovery. It displaces carbohydrate and fat calories that support both training performance and satiety — and in a GLP-1 client whose appetite is already suppressed, that trade is rarely worth making.
            </motion.p>

            <motion.div variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <ProteinTargetTable />
            </motion.div>

            <motion.h2 variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Use Current Body Weight, Not Goal Weight
            </motion.h2>

            <motion.p variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A note on the calculation: use current body weight, not goal body weight. This is a point of confusion in practice. If someone weighs 110 kg and is working toward 85 kg, their protein target is calculated at 110 kg — approximately 176 g/day at 1.6 g/kg. The rationale is straightforward: they are carrying 110 kg of metabolically active tissue right now, and that tissue needs to be supported at its current mass during the transition. As body weight reduces, the target adjusts accordingly. Anchoring to goal weight underestimates the requirement at the start of the process, when the energy deficit — and therefore the risk to lean mass — is at its greatest.
            </motion.p>

            <motion.div variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <BodyWeightTable />
            </motion.div>

            <motion.h2 variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              How to Actually Hit the Number
            </motion.h2>

            <motion.p variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Here is where the practical challenge lies. GLP-1 therapy reduces hunger dramatically, and many clients find it genuinely difficult to consume the volume of food required to reach 128 to 160 grams of protein per day. Whole-food sources — chicken, fish, eggs, Greek yogurt — are the preferred delivery method, but on days when appetite is minimal, structure matters more than preference.
            </motion.p>

            <motion.p variants={fadeUp(0.48)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              I use two practical frameworks depending on where a client's appetite sits on a given day. The first is two protein-anchored meals and one shake: typically a mid-morning meal built around 50 to 60 grams of protein (eggs, smoked salmon, or cottage cheese with Greek yogurt), a second main meal of equivalent size, and a 25 to 30 gram protein shake at a time when appetite allows — often before a training session or as an evening supplement. For an 80 kg client, this structure reliably delivers 125 to 140 grams of protein with manageable food volume.
            </motion.p>

            <motion.p variants={fadeUp(0.50)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The second framework is one full meal and two shakes — applied on high-nausea days or in the first few weeks after a dose increase when GLP-1 side effects are most pronounced. One structured meal of 55 to 65 grams of protein, two shakes of 25 to 30 grams each. The total lands at 105 to 125 grams. It does not hit the full clinical target, but it protects against the floor — and consistency over days is more important than optimisation on a single difficult day.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.54)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                GLP-1 therapy is a tool for fat loss. Protein is the tool that determines how much of what you lose is actually fat. The two are not in conflict — but they require deliberate management alongside each other.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.58)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              1.6 g/kg of current body weight, every day, calculated at your weight today and adjusted as it changes. That is the number. Everything else is logistics.
            </motion.p>

          </div>

          <motion.div variants={fadeUp(0.62)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Johnson, R.L., Carter, B., Hewitt, A. and Thompson, D. (2025). Protein intake and lean mass preservation during GLP-1 receptor agonist-facilitated weight loss: a 24-week observational cohort study. <em>Obesity Reviews</em>, 26(3), pp. 214–229.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Spreckley, M., Adamczyk, B.S., Fairfield, B. and Rennie, K.L. (2025). Dietary protein and body composition outcomes in adults prescribed semaglutide: a secondary analysis of a randomised controlled trial. <em>Clinical Nutrition</em>, 44(1), pp. 101–110.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Volek, J.S., Phinney, S.D. and Fernandez, M.L. (2024). Resistance training and elevated protein intake attenuate lean mass loss during hypocaloric dietary interventions in overweight adults. <em>Journal of the International Society of Sports Nutrition</em>, 21(1), p. 2411090.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Weijs, P.J.M. (2025). Protein requirements in obesity management: moving beyond the RDA. <em>Current Opinion in Clinical Nutrition and Metabolic Care</em>, 28(1), pp. 44–51.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.68)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
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

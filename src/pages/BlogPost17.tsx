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

const HERO_IMAGE = "/blog-post-17.jpg"

const nutritionTiming = [
  { time: "08:00", label: "Meal 1", protein: "50g", detail: "Eggs, Greek yoghurt, oats — carbs first to fuel the rehab session" },
  { time: "10:00", label: "Rehab session", protein: "—", detail: "45 min · non-rotational · low-impact" },
  { time: "11:00", label: "Shake 1", protein: "30g", detail: "Post-rehab whey — immediate muscle protein synthesis window" },
  { time: "17:30", label: "Meal 2", protein: "60g", detail: "~200g chicken breast with rice and vegetables" },
  { time: "20:30", label: "Shake 2 (casein)", protein: "40g", detail: "Before sleep — increases overnight MPS after training (Res et al., 2012)" },
]

const rehabBlocks = [
  {
    heading: "Warm-Up",
    items: ["Stationary bike · 10 min easy — restore full knee flexion before any load"],
  },
  {
    heading: "Block 1 — Knee Control",
    items: [
      "Spanish squat hold · 4 × 30 seconds",
      "Banded terminal knee extension · 3 × 15",
    ],
  },
  {
    heading: "Block 2 — Strength",
    items: [
      "Dumbbell goblet box squat · 3 × 10",
      "Dumbbell step-up, low box · 3 × 8 each leg",
      "Glute bridge, heels on ball · 3 × 12",
    ],
  },
  {
    heading: "Block 3 — Hip Support",
    note: "Most important block. A weak hip lets the knee collapse inward — and inward collapse is exactly what stresses the MCL.",
    items: [
      "Banded lateral walk · 3 × 10 steps each way",
      "Kneeling side plank · 3 × 20 seconds each side",
    ],
  },
]

function NutritionTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>Daily Nutrition Plan · 91kg · 180g Protein Total</p>
      </div>
      <div className="grid border-b" style={{ gridTemplateColumns: "70px 90px 56px 1fr", borderColor: "rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}>
        {["Time", "Feed", "Protein", "Notes"].map((h) => (
          <span key={h} className="px-4 py-3 text-[9px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{h}</span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {nutritionTiming.map(({ time, label, protein, detail }) => (
          <div key={time} className="grid items-start" style={{ gridTemplateColumns: "70px 90px 56px 1fr" }}>
            <span className="px-4 py-4 text-[12px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{time}</span>
            <span className="px-4 py-4 text-[13px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{label}</span>
            <span className="px-4 py-4 text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: protein === "—" ? "rgba(0,0,0,0.25)" : "var(--color-navy)" }}>{protein}</span>
            <span className="px-4 py-4 text-[13px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)", lineHeight: 1.6 }}>{detail}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function RehabSession() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>Week 6 Rehab Session · 45 Minutes · MCL Sprain</p>
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {rehabBlocks.map(({ heading, note, items }) => (
          <div key={heading} className="px-5 py-4">
            <p className="text-[9px] tracking-[0.25em] uppercase mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{heading}</p>
            {note && (
              <p className="text-[12px] mb-3 italic" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)", lineHeight: 1.6 }}>{note}</p>
            )}
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <p key={item} className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", lineHeight: 1.65 }}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost17() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="MCL Sprain, GLP-1, and a Calorie Deficit. When Two Plans Have to Become One."
      description="A 62-year-old golfer on tirzepatide recovering from a Grade 2 MCL sprain. GLP-1 suppresses appetite. Rehab needs energy and protein. Running them as separate plans means both fail."
      canonical="/blog/mcl-rehab-glp1-tirzepatide-calorie-deficit"
      ogType="article"
    />
    <ArticleSchema
      title="MCL Sprain, GLP-1, and a Calorie Deficit. When Two Plans Have to Become One."
      description="A 62-year-old golfer on tirzepatide recovering from a Grade 2 MCL sprain. GLP-1 suppresses appetite. Rehab needs energy and protein. Running them as separate plans means both fail."
      url="/blog/mcl-rehab-glp1-tirzepatide-calorie-deficit"
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
              Sports Injury · Rehabilitation · GLP-1
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            MCL Sprain. GLP-1. A Calorie Deficit.{" "}
            <span style={{ color: "var(--color-gold)" }}>One Plan, Not Two.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>October 2026</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>7 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="A golfer mid-swing on a fairway" className="w-full h-full object-cover" style={{ objectPosition: "center 35%" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              This case is presented anonymously at the request of the client. Clinical details and assessment findings are reproduced with permission.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A 62-year-old male golfer. Car accident. Grade 2 MCL sprain. Golf on hold until his physiotherapist clears rotational work. He is also 91 kilograms, twelve months into tirzepatide therapy, and has lost approximately 20 kilograms over that period. He came in with a simple-sounding question: can we do rehab and weight loss at the same time?
            </motion.p>

            <motion.p variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The answer is yes — but not with two separate plans. A rehabilitation programme and a calorie deficit are not two processes that happen to run in parallel. They are competing demands on the same energy budget, and when a GLP-1 medication is suppressing appetite on top of both of them, the maths change in a way that most standard programmes do not account for.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Tissue repair needs protein and energy. A suppressed appetite works directly against both — at exactly the wrong time.
              </p>
            </motion.blockquote>

            <motion.h2 variants={fadeUp(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Compound Problem: GLP-1 and Injury Together
            </motion.h2>

            <motion.p variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              In the tirzepatide trials, approximately one in four kilograms of weight lost was lean mass rather than fat (Jastreboff et al., 2022). That is a known risk of GLP-1 therapy without structured resistance training alongside it. Add a Grade 2 MCL sprain to that picture and the risk compounds. An injured limb loses strength faster than the rest of the body — disuse atrophy sets in within days of reducing load, not weeks. Two lean mass threats, running simultaneously, on a 62-year-old who needs joint capacity intact to return to golf.
            </motion.p>

            <motion.p variants={fadeUp(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Losing muscle during rehab is not cosmetic. It means slower tissue healing, weaker return-to-sport strength, and a longer road back to the course. The goal of the programme was not to choose between weight loss and recovery. It was to structure both so that neither undermined the other.
            </motion.p>

            <motion.h2 variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Rehab Structure: Week 6
            </motion.h2>

            <motion.p variants={fadeUp(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The programme is phase-based, progressing to closed-chain dumbbell strength as MCL tolerance allows. One conditioning session per week — low-impact and non-rotational. Rotational golf mechanics do not return until the physiotherapist clears them. Below is the week-6 session in full.
            </motion.p>

            <motion.div variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <RehabSession />
            </motion.div>

            <motion.p variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The hip support block is not filler. The MCL is a medial structure — it resists the valgus (inward collapse) force at the knee. The primary muscular check on valgus is the hip abductor complex: the glute medius and the lateral hip rotators. A weak hip does not just limit power on the course. It concentrates stress directly on the healing ligament during every load-bearing movement. This is the mechanism that re-injures a recovering MCL. Building hip strength is not supplementary to MCL rehab — it is central to it.
            </motion.p>

            <motion.h2 variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Nutrition Framework: Total, Type, Timing
            </motion.h2>

            <motion.p variants={fadeUp(0.34)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Three variables. Total energy intake is set above the weight-loss baseline for the duration of the rehab window. Not abandoning the deficit — adjusting it. Energy balance during injury recovery is not a cosmetic concern; tissue repair has an energy cost, and protein synthesis cannot proceed adequately under severe restriction (Tipton, 2015). The weight loss trajectory slows slightly. The healing trajectory does not.
            </motion.p>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Protein is set at 1.8 to 2.0 grams per kilogram of bodyweight — 164 to 182 grams per day at 91 kilograms. This sits within the established range for muscle protein synthesis in trained individuals (Jäger et al., 2017), and it is not negotiable during rehab on GLP-1. The appetite suppression from tirzepatide makes hitting this target through whole food alone unrealistic on most days. Two of the four daily feeds are protein shakes. The daily total is 180 grams.
            </motion.p>

            <motion.div variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <NutritionTable />
            </motion.div>

            <motion.p variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Timing is structured around the rehab session. Carbohydrates at meal one fuel the morning session; a fast-absorbing protein source immediately after supports the acute muscle protein synthesis window. The casein shake at 20:30 is specific: protein consumed before sleep has been shown to increase overnight muscle protein synthesis rates following an evening training session (Res et al., 2012). This client does not train in the evening, but the principle applies to the repair state his body is in during sleep — and 40 grams of slow-releasing protein at night costs nothing in terms of appetite burden.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                GLP-1 suppresses appetite. It does not suppress the body's protein requirement. On low-appetite days, synthetic protein sources are the bridge.
              </p>
            </motion.blockquote>

            <motion.h2 variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Outcome: One Budget, Two Goals
            </motion.h2>

            <motion.p variants={fadeUp(0.48)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The goal at the end of this programme is a client who returns to golf with his joint capacity intact, his lean mass preserved, and his weight trajectory still moving in the right direction. Those three things are not in conflict — but they require a plan that treats them as one system rather than three competing priorities.
            </motion.p>

            <motion.p variants={fadeUp(0.52)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Rehab and nutrition run as one plan, not two processes competing for the same energy budget. The maths only work when they are built together.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.56)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Tipton, K.D. (2015). Nutritional support for exercise-induced injuries. <em>Sports Medicine</em>, 45(Suppl 1), pp. S93–S104. doi: 10.1007/s40279-015-0398-4
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Jäger, R., Kerksick, C.M., Campbell, B.I., Cribb, P.J., Wells, S.D., Skwiat, T.M., Purpura, M., Ziegenfuss, T.N., Ferrando, A.A., Arent, S.M., Smith-Ryan, A.E., Stout, J.R., Arciero, P.J., Ormsbee, M.J., Taylor, L.W., Wilborn, C.D., Kalman, D.S., Kreider, R.B., Willoughby, D.S., Hoffman, J.R., Krzykowski, J.L. and Antonio, J. (2017). International Society of Sports Nutrition Position Stand: protein and exercise. <em>Journal of the International Society of Sports Nutrition</em>, 14(20).
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Jastreboff, A.M., Aronne, L.J., Ahmad, N.N., Wharton, S., Connery, L., Alves, B., Kiyosue, A., Zhang, S., Liu, B., Bunck, M.C. and Stefanski, A. (2022). Tirzepatide once weekly for the treatment of obesity. <em>New England Journal of Medicine</em>, 387(3), pp. 205–216.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Res, P.T., Groen, B., Pennings, B., Beelen, M., Wallis, G.A., Gijsen, A.P., Senden, J.M.G. and Van Loon, L.J.C. (2012). Protein ingestion before sleep improves postexercise overnight recovery. <em>Medicine and Science in Sports and Exercise</em>, 44(8), pp. 1560–1569.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.60)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
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

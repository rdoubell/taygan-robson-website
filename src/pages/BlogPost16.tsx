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

const HERO_IMAGE = "/blog-post-16.png"

const assessmentFindings = [
  { test: "IMTP — Rate of Force Development", finding: "21% left-right asymmetry", note: "Force deficit, left limb" },
  { test: "Hop Test — Impulse Asymmetry", finding: "19% left-right asymmetry", note: "Reactive loading deficit" },
  { test: "CMJ — Eccentric Braking Phase", finding: "19% asymmetry", note: "Deceleration control deficit" },
  { test: "Single-Leg Balance — Sway Index", finding: "23% greater sway, right", note: "Proprioceptive compensation" },
]

const mesocycle = [
  { week: "Week 1", vol: "106%", int: "106%", note: "" },
  { week: "Week 2", vol: "113%", int: "113%", note: "" },
  { week: "Week 3", vol: "120%", int: "120%", note: "" },
  { week: "Week 4", vol: "64%", int: "120%", note: "Deload" },
]

function FindingsTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>Force Plate Assessment — Key Findings</p>
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {assessmentFindings.map(({ test, finding, note }) => (
          <div key={test} className="flex items-start justify-between px-5 py-4 gap-4 flex-wrap">
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{test}</span>
              <span className="text-[11px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.38)", fontStyle: "italic" }}>{note}</span>
            </div>
            <span className="flex-shrink-0 text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{finding}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MesocycleTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>28-Day Return-to-Running Mesocycle · % Relative to Baseline Load</p>
      </div>
      <div className="grid grid-cols-4 px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}>
        {["Week", "Volume", "Intensity", ""].map((h) => (
          <span key={h} className="text-[9px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{h}</span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {mesocycle.map(({ week, vol, int: intensity, note }) => (
          <div key={week} className="grid grid-cols-4 items-center px-5 py-4">
            <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{week}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: note ? "rgba(0,0,0,0.35)" : "var(--color-navy)" }}>{vol}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{intensity}</span>
            {note ? (
              <span className="text-[9px] tracking-[0.18em] uppercase px-2 py-0.5 self-center w-fit" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.1)", border: "1px solid rgba(199,161,76,0.25)" }}>{note}</span>
            ) : <span />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost16() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="3 Pairs of Shoes. Still in Pain. An ITB Syndrome Case Study."
      description="A recreational runner with 8 weeks of lateral knee pain and three failed footwear changes. Force plate screening showed a 21% left-right force asymmetry — and changed the entire direction of treatment."
      canonical="/blog/itb-syndrome-force-asymmetry-case-study"
      ogType="article"
    />
    <ArticleSchema
      title="3 Pairs of Shoes. Still in Pain. An ITB Syndrome Case Study."
      description="A recreational runner with 8 weeks of lateral knee pain and three failed footwear changes. Force plate screening showed a 21% left-right force asymmetry — and changed the entire direction of treatment."
      url="/blog/itb-syndrome-force-asymmetry-case-study"
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
              Sports Injury · Rehabilitation
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            3 Pairs of Shoes. Still in Pain.{" "}
            <span style={{ color: "var(--color-gold)" }}>An ITB Syndrome Case Study.</span>
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
            <img src={HERO_IMAGE} alt="Runner sitting on the ground holding their knee after a run" className="w-full h-full object-cover" style={{ objectPosition: "center 30%" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              This case is presented anonymously at the request of the client. The findings, assessment data, and return plan are accurate and reproduced with permission.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The runner had been dealing with lateral knee pain for more than eight weeks. Pain onset was consistent — downhill sections and the final third of any run longer than an hour. They had changed footwear three times, each time on advice from a different running store. The shoes were different in every respect: stack height, drop, cushioning category. The pain remained identical.
            </motion.p>

            <motion.p variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              ITB syndrome is frequently attributed to footwear, training surface, or hip flexibility. In most presentations these are secondary contributors at best. The primary driver is almost always a load management failure — too much mileage, too quickly, on a musculoskeletal system that did not have the force production capacity to handle the increase.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                The ITB doesn't tear. It gets overloaded. And it gets overloaded because the muscles it connects to — the glute med, the TFL, the quad — aren't absorbing their share of the work.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Force plate assessment was used to quantify what a functional movement screen would estimate but not measure: the actual left-right force production asymmetry across multiple movement patterns. This is the data that changes the clinical picture.
            </motion.p>

            {/* ASSESSMENT FINDINGS */}
            <motion.h2 variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              What the Assessment Showed
            </motion.h2>

            <motion.p variants={fadeUp(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Four tests were used: an isometric mid-thigh pull (IMTP) to assess maximal force and rate of force development, a single-leg hop for impulse, a countermovement jump (CMJ) focused on the eccentric braking phase, and a single-leg balance assessment for proprioceptive sway.
            </motion.p>

            <motion.div variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <FindingsTable />
            </motion.div>

            <motion.p variants={fadeUp(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The IMTP result was the most significant. A 21% left-right asymmetry in rate of force development means the left limb was producing force substantially more slowly than the right — not weaker in absolute peak terms, but less able to generate force quickly under load. In running, particularly on downhill gradients where the eccentric demand spikes, this deficit means the ITB is absorbing stress the hip and quad should be controlling.
            </motion.p>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The hop impulse asymmetry (19%) and CMJ eccentric braking asymmetry (19%) confirmed the same deficit across different movement contexts. The balance sway result (23% greater on the right) indicated a compensatory proprioceptive strategy — the body was redistributing load away from the left limb during single-leg stance, which is consistent with a limb that has become pain-avoidant over eight weeks of unmanaged irritation.
            </motion.p>

            {/* THE DIAGNOSIS */}
            <motion.h2 variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Diagnosis: Load, Not Footwear
            </motion.h2>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Weekly mileage had increased by approximately 35% over the preceding six weeks. There was no structured strength work in the programme and no deload weeks in the preceding twelve. The runner had been building continuously on a base that was not supported by the force production capacity required to absorb it.
            </motion.p>

            <motion.p variants={fadeUp(0.34)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              This is the ITB syndrome pattern that persists despite footwear changes, foam rolling, and stretching: the tissue is not the problem. The load distribution is. Until the force deficit is addressed directly — through structured strength work targeting the hip abductors, quad, and glute complex — the band will continue to be asked to do work it was not designed to perform.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Three different shoes, same biomechanics. You cannot outsole a force deficit.
              </p>
            </motion.blockquote>

            {/* THE RETURN PLAN */}
            <motion.h2 variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Return Plan: One Mesocycle, Four Weeks
            </motion.h2>

            <motion.p variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Return-to-running was structured as a 28-day mesocycle. The load percentages below are expressed relative to the runner's baseline training load at the time of assessment — the volume and intensity they were managing before the injury became unmanageable.
            </motion.p>

            <motion.div variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <MesocycleTable />
            </motion.div>

            <motion.p variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Weeks 1 through 3 apply progressive overload across both volume and intensity. Week 4 is a structured deload: volume drops to 64% of baseline to reduce accumulated mechanical stress, but intensity is maintained at 120%. The rationale is physiological — the adaptation signal comes from intensity, and reducing it during a deload blunts the adaptation being sought. Volume reduction manages fatigue; intensity maintenance preserves the stimulus.
            </motion.p>

            <motion.p variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Running was reintroduced progressively within this structure. Flat terrain only in weeks 1 and 2. Controlled gradient reintroduction from week 3. The downhill sessions that had originally provoked symptoms were the last element reintroduced — the eccentric braking demand on descent is the highest-force exposure in the runner's week, and it was treated accordingly.
            </motion.p>

            <motion.p variants={fadeUp(0.48)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Concurrent strength work ran alongside the running return. Two sessions per week, targeting hip abduction, single-leg press, Romanian deadlift, and lateral band work. The sessions were kept short — under 30 minutes — and timed away from the harder running days to avoid compounding neuromuscular fatigue. Strength is a separate stimulus from running, and it needs to be managed as one.
            </motion.p>

            <motion.p variants={fadeUp(0.52)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              The shoe was never the problem. The mileage was never the problem. The force deficit was — and it was the only thing the assessment directly measured. Treat what you can quantify.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.56)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Noehren, B., Schmitz, A., Hempel, R., Westlake, C. and Black, W. (2014). Assessment of strength, flexibility, and running mechanics in men with iliotibial band syndrome. <em>Journal of Orthopaedic and Sports Physical Therapy</em>, 44(3), pp. 217–222.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Fredericson, M. and Wolf, C. (2005). Iliotibial band syndrome in runners: innovations in treatment. <em>Sports Medicine</em>, 35(5), pp. 451–459.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                van der Worp, M.P., van der Horst, N., de Wijer, A., Backx, F.J.G. and Nijhuis-van der Sanden, M.W.G. (2012). Iliotibial band syndrome in runners: a systematic review. <em>Sports Medicine</em>, 42(11), pp. 969–992.
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

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

const HERO_IMAGE = "/blog-post-15.png"

const lowerBodySession = [
  { label: "Trap bar deadlift", tag: "Lower pull", sets: "3–4 × 5 @ 80–85%" },
  { label: "Single-leg press or Bulgarian split squat", tag: "Lower push", sets: "3 × 8 each" },
  { label: "Weighted hip thrust", tag: "Hip extension", sets: "3 × 8" },
  { label: "Calf raise — straight and bent knee", tag: "Ankle / Achilles", sets: "3 × 8, controlled tempo" },
]

const upperBodySession = [
  { label: "Weighted pull-up or lat pulldown", tag: "Upper pull", sets: "3 × 8 @ 80–85%" },
  { label: "Single-arm dumbbell row", tag: "Upper pull · unilateral", sets: "3 × 8 each" },
  { label: "Landmine or standing overhead press", tag: "Upper push", sets: "3 × 6–8" },
  { label: "Loaded carry — farmer's or suitcase", tag: "Postural / grip", sets: "2 × 20m" },
]

const combinedSession = [
  { label: "Pogo hops", tag: "Plyometric · reactive", sets: "2 × 15 · min contact time" },
  { label: "Bounding or single-leg hop for distance", tag: "Plyometric · power", sets: "2 × 10 each · landing control" },
  { label: "Nordic hamstring curl", tag: "Lower pull · eccentric", sets: "2 × 8" },
  { label: "Barbell deadlift", tag: "Lower pull", sets: "3 × 8 @ 80–85%" },
  { label: "Single-leg press or Bulgarian split squat", tag: "Lower push", sets: "3 × 8 each" },
  { label: "Sled push", tag: "Drive mechanics", sets: "2 × 20–30m" },
  { label: "Weighted pull-up or lat pulldown", tag: "Upper pull", sets: "3 × 8" },
  { label: "Single-arm dumbbell row", tag: "Upper pull · unilateral", sets: "3 × 8 each" },
]

function SessionTable({ rows, note }: { rows: { label: string; tag: string; sets: string }[]; note?: string }) {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      {note && (
        <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
          <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>{note}</p>
        </div>
      )}
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {rows.map(({ label, tag, sets }) => (
          <div key={label} className="flex items-center justify-between px-5 py-4 gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-wrap">
              <span className="flex-shrink-0 text-[9px] tracking-[0.25em] uppercase px-2 py-0.5" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.1)", border: "1px solid rgba(199,161,76,0.25)" }}>{tag}</span>
              <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{label}</span>
            </div>
            <span className="flex-shrink-0 text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{sets}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost15() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Force, Not Fatigue: Rethinking Strength Work for Endurance Sport"
      description="Strength training does not compete with endurance performance — it amplifies it. Three sessions across lower body, upper body, and plyometric loading explain why, and what each one looks like in practice."
      canonical="/blog/force-not-fatigue-rethinking-strength-work-for-endurance-sport"
      ogType="article"
    />
    <ArticleSchema
      title="Force, Not Fatigue: Rethinking Strength Work for Endurance Sport"
      description="Strength training does not compete with endurance performance — it amplifies it. Three sessions across lower body, upper body, and plyometric loading explain why, and what each one looks like in practice."
      url="/blog/force-not-fatigue-rethinking-strength-work-for-endurance-sport"
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
              Performance Science · Endurance
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            Force, Not Fatigue:{" "}
            <span style={{ color: "var(--color-gold)" }}>Rethinking Strength Work for Endurance Sport</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>September 2026</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>8 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="Strength training for endurance athletes" className="w-full h-full object-cover" style={{ objectPosition: "center center" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              An endurance athlete deep into a marathon training block asked why they were being handed weights. The concern was predictable: bulk, added mass, weight to carry uphill for the next four months. It also reflects a misunderstanding of the adaptation being targeted.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Strength is not a single trait. It resolves into three physiologically distinct pathways: neural recruitment, force production capacity, and hypertrophy — and only the third produces measurable increases in muscle cross-sectional area (Rønnestad and Mujika, 2014). In a structured strength block the dominant adaptation is neuromuscular — improved motor unit recruitment and firing rate, not tissue growth. Force output rises while muscle size remains largely unchanged.
            </motion.p>

            <motion.p variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A second mechanism works in the athlete's favour rather than against it. Concurrent high-volume endurance training suppresses hypertrophic signalling pathways — the interference effect — such that heavy resistance work performed alongside substantial aerobic volume yields strength gains without the corresponding hypertrophic response typically seen in resistance-trained populations (Rønnestad and Mujika, 2014).
            </motion.p>

            <motion.blockquote variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                What changes measurably is economy. A stronger athlete generates identical submaximal power output at a lower percentage of maximal voluntary force — a reduced relative physiological cost per unit of work over distance.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              On a sustained climb, two riders producing identical power differ in how long each can sustain it — determined by the fraction of their force ceiling each is drawing on. The ceiling itself is what strength work raises (Balsalobre-Fernández, Santos-Concejero and Grivas, 2016).
            </motion.p>

            {/* PART 1 — LOWER BODY */}
            <motion.h2 variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Part 1 — Lower Body Session
            </motion.h2>

            <motion.p variants={fadeUp(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Session structure: 2 to 3 minutes rest between sets. Load sits near maximal for the prescribed rep range. Sets stop two to three repetitions short of failure so each set is performed in a genuinely fresh neuromuscular state — this is not accumulated fatigue work.
            </motion.p>

            <motion.div variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <SessionTable rows={lowerBodySession} note="2–3 min rest between sets · Stop 2–3 reps short of failure" />
            </motion.div>

            <motion.p variants={fadeUp(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Total session time: approximately 30 minutes. The calf raise prescription covers both straight-knee (gastrocnemius, Achilles tendon) and bent-knee (soleus) loading — two structurally distinct tissues with different mechanical roles in running and cycling economy. Both are undertrained in most endurance athletes.
            </motion.p>

            {/* PART 2 — UPPER BODY */}
            <motion.h2 variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Part 2 — Upper Body Session
            </motion.h2>

            <motion.p variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A second question came up during a marathon block: why are upper body sessions included when the race is run entirely on legs? It reflects a misunderstanding of where force output actually breaks down late in a race.
            </motion.p>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Upper body strength contributes to running economy in a way that is easy to overlook. Arm drive and thoracic rotation govern running posture and stride mechanics as fatigue accumulates. In a swimmer, propulsive force originates almost entirely from the lat and shoulder girdle. A cyclist out of the saddle on a climb transfers force through the arms and torso to the bars. A stronger upper body generates the same postural and propulsive output at a lower percentage of maximal voluntary force — the same relative-cost principle established for lower body loading (Balsalobre-Fernández, Santos-Concejero and Grivas, 2016).
            </motion.p>

            <motion.div variants={fadeUp(0.34)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <SessionTable rows={upperBodySession} note="2–3 min rest between sets · 2 reps short of failure" />
            </motion.div>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The loaded carry at the end of this session is not a conditioning finisher. It is a postural and grip endurance stimulus — the specific capacity that determines how long an athlete can hold correct form when the upper body is fatiguing under sustained effort.
            </motion.p>

            {/* PART 3 — PLYOMETRICS + COMBINED */}
            <motion.h2 variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Part 3 — Rate of Force Development and the Combined Session
            </motion.h2>

            <motion.p variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              An athlete mid-way through their season, with upper and lower body strength work already established, needed progression. Maximal strength training alone does not train rate of force development efficiently. Plyometric work does.
            </motion.p>

            <motion.p variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Fast, reactive, stretch-shortening cycle movements improve tendon stiffness and neuromuscular firing rate specifically within short contact-time windows. This translates into measurable gains in running economy that are independent of — and additive to — maximal strength adaptations (Saunders et al., 2004). The mechanism differs from maximal strength: less energy cost per unit of force produced because the tendon absorbs and returns more of the work elastically, reducing the muscle's active contraction contribution. Two separate qualities. Training only one of them leaves the other as the limiting factor.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Plyometric work is sequenced first — while the nervous system is freshest. Strength work follows. This order is not arbitrary.
              </p>
            </motion.blockquote>

            <motion.div variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <SessionTable rows={combinedSession} note="Plyometrics first · then lower body · then upper body · 2–3 min rest" />
            </motion.div>

            <motion.p variants={fadeUp(0.50)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The sled push is included for its forward drive mechanics transfer — useful crossover for the running and cycling drive phase, and low eccentric cost compared to other lower body additions, making it a suitable volume add without significantly increasing recovery demand.
            </motion.p>

            <motion.p variants={fadeUp(0.54)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Strength training should assist and enhance endurance training — not compete with it. Maximal force, rate of force development, and postural strength are three separate physiological qualities. Training only one of them leaves the others as the limiting factor in the event that matters.
            </motion.p>
          </div>

          <motion.div variants={fadeUp(0.58)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Rønnestad, B.R. and Mujika, I. (2014). Optimizing strength training for running and cycling endurance performance. <em>Scandinavian Journal of Medicine and Science in Sports</em>, 24(4), pp. 603–612.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Balsalobre-Fernández, C., Santos-Concejero, J. and Grivas, G.V. (2016). Effects of strength training on running economy in highly trained runners. <em>Journal of Strength and Conditioning Research</em>, 30(8), pp. 2361–2368.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Saunders, P.U., Pyne, D.B., Telford, R.D. and Hawley, J.A. (2004). Factors affecting running economy in trained distance runners. <em>Sports Medicine</em>, 34(7), pp. 465–485.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.62)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
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

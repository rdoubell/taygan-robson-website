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

const HERO_IMAGE = "/RFD training image .webp"

const rfdDeficitRows = [
  { phase: "Early-phase RFD (<100 ms)", smd: "–1.07", ci: "–1.46 to –0.68", interpretation: "Large deficit" },
  { phase: "Late-phase RFD (>100 ms)", smd: "–0.85", ci: "–1.27 to –0.42", interpretation: "Large deficit" },
]

const trainingAdaptationRows = [
  { quality: "Explosive torque (all time points)", explosive: "↑ 17–34%", sustained: "↑ late-phase only (~12% at 150 ms)" },
  { quality: "Maximum voluntary torque", explosive: "↑ 17%", sustained: "↑ 23%" },
  { quality: "Mechanism", explosive: "Greater neural drive (↑ 17–28%)", sustained: "Larger quadriceps muscle volume" },
]

function RFDDeficitTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
          RFD Deficits Post-ACLR · Meta-Analysis (Turpeinen et al., 2020 · 246 participants, 10 studies)
        </p>
      </div>
      <div className="grid grid-cols-3 px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}>
        {["Phase", "SMD (95% CI)", "Magnitude"].map((h) => (
          <span key={h} className="text-[9px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{h}</span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {rfdDeficitRows.map(({ phase, smd, ci, interpretation }) => (
          <div key={phase} className="grid grid-cols-3 items-center px-5 py-4 gap-4">
            <span className="text-[14px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{phase}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontVariantNumeric: "tabular-nums" }}>
              {smd} <span className="text-[10px]" style={{ fontWeight: 400, color: "rgba(0,0,0,0.38)" }}>({ci})</span>
            </span>
            <span className="text-[11px] px-2 py-0.5 w-fit" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(199,161,76,0.1)", border: "1px solid rgba(199,161,76,0.25)" }}>{interpretation}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function TrainingAdaptationTable() {
  return (
    <div className="my-1 border" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
      <div className="px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.08)", background: "rgba(0,0,0,0.02)" }}>
        <p className="text-[9px] tracking-[0.35em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.4)", fontWeight: 600 }}>
          12-Week Training Adaptations · Explosive vs. Sustained Contraction (Balshaw et al., 2016)
        </p>
      </div>
      <div className="grid grid-cols-3 px-5 py-3 border-b" style={{ borderColor: "rgba(0,0,0,0.06)", background: "rgba(0,0,0,0.015)" }}>
        {["Quality", "Explosive Training", "Sustained Training"].map((h) => (
          <span key={h} className="text-[9px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 700 }}>{h}</span>
        ))}
      </div>
      <div className="divide-y" style={{ borderColor: "rgba(0,0,0,0.06)" }}>
        {trainingAdaptationRows.map(({ quality, explosive, sustained }) => (
          <div key={quality} className="grid grid-cols-3 items-start px-5 py-4 gap-4">
            <span className="text-[13.5px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)" }}>{quality}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)" }}>{explosive}</span>
            <span className="text-[13px]" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.55)" }}>{sustained}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function BlogPost18() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Cleared. Not Ready. The Rate of Force Development Gap in Return-to-Sport Testing."
      description="An athlete can restore maximal strength after injury while carrying a significant rate of force development deficit. The strength test passes. The movement system doesn't."
      canonical="/blog/rate-of-force-development-rfd-return-to-sport"
      ogType="article"
    />
    <ArticleSchema
      title="Cleared. Not Ready. The Rate of Force Development Gap in Return-to-Sport Testing."
      description="An athlete can restore maximal strength after injury while carrying a significant rate of force development deficit. The strength test passes. The movement system doesn't."
      url="/blog/rate-of-force-development-rfd-return-to-sport"
      datePublished="2026-10-22"
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
              Sports Injury · Rehabilitation · Performance
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.9rem, 4.5vw, 3.4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.015em", color: "#FFFFFF" }}>
            Cleared. Not Ready.{" "}
            <span style={{ color: "var(--color-gold)" }}>The Rate of Force Development Gap.</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="flex items-center gap-4 mt-6">
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>Taygan Robson</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>October 2026</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>8 min read</span>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="overflow-hidden" style={{ height: "420px" }}>
            <img src={HERO_IMAGE} alt="Athlete performing explosive jump training on force plate" className="w-full h-full object-cover" style={{ objectPosition: "center 35%" }} />
          </div>
        </motion.div>
      </div>

      <article ref={bodyRef} className="bg-white" style={{ boxShadow: "0 -20px 60px rgba(0,0,0,0.08)" }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={inView ? "visible" : "hidden"} className="w-8 h-[2px] mb-10" style={{ background: "var(--color-gold)" }} />

          <div className="flex flex-col gap-7" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.72)", fontSize: "clamp(1rem, 1.55vw, 1.08rem)", lineHeight: "1.9" }}>

            <motion.p variants={fadeUp(0.04)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Picture an athlete who clears every return-to-sport criterion. Strength symmetry above 90%. Hop test scores within threshold. Cleared by every measure in the battery. Then, two weeks later, they tear the same ACL on a deceleration.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The strength test was fine. Rate of force development was not measured.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Strength criteria measure how much force an athlete can produce. They do not measure how fast.
              </p>
            </motion.blockquote>

            <motion.h2 variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              Why Speed of Force Production Is the Relevant Variable
            </motion.h2>

            <motion.p variants={fadeUp(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Rate of force development (RFD) is the slope of the force-time curve during rapid voluntary contraction. It quantifies how quickly an athlete generates force, not the ceiling of what they can ultimately produce. That distinction is functionally critical.
            </motion.p>

            <motion.p variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Ground contact during sprint acceleration lasts approximately 80 to 100 milliseconds. Rapid joint stabilisation following perturbation requires force expression within 50 milliseconds. The time to reach maximal voluntary isometric force is typically 300 milliseconds or more. In most athletic actions, the system never has time to reach its strength ceiling — the contact phase is over before peak force can be achieved.
            </motion.p>

            <motion.p variants={fadeUp(0.22)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              This means an athlete can have fully restored maximal strength after injury and still be operating with a compromised protective mechanism in the 50 to 100 millisecond window that athletic movement actually occupies.
            </motion.p>

            <motion.h2 variants={fadeUp(0.26)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Neural Basis of Early-Phase RFD
            </motion.h2>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Maffiuletti et al. (2016) established that early-phase RFD — measured within the first 50 to 150 milliseconds of contraction onset — primarily reflects neural drive and motor unit recruitment. Late-phase RFD reflects a combination of neural and contractile factors. The early window is a direct measure of how well the motor cortex is doing its job under time pressure.
            </motion.p>

            <motion.p variants={fadeUp(0.30)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              An athlete can restore maximal strength following injury while carrying persistent early-phase RFD deficits. The muscle may be structurally intact and generating adequate peak force. The motor cortex is still failing to recruit motor units at the rate required for explosive athletic movement. Strength testing alone will not detect this.
            </motion.p>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Aagaard et al. (2002) demonstrated that resistance training increases RFD through improved neuromuscular drive, with significant improvements appearing before any observable structural changes. The RFD adaptation is neurological first. It is also lost neurologically first when training is disrupted — which is precisely the mechanism underlying the post-ACLR deficit.
            </motion.p>

            <motion.h2 variants={fadeUp(0.34)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The ACL Evidence: What the Testing Battery Misses
            </motion.h2>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Werner et al. (2026) examined patients after ACL reconstruction who had passed a clinical return-to-sport battery — at least 90% limb symmetry in standard laboratory strength. Isometric quadriceps rate of torque development in the involved limb was still up to 20.9% lower. Movement asymmetries persisted. The clearance criteria were satisfied. The motor system was not.
            </motion.p>

            <motion.p variants={fadeUp(0.38)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              This is not an isolated finding. A meta-analysis of 10 studies involving 246 participants with ACL reconstruction found sustained RFD suppression in the reconstructed limb — large effects at both early and late phases of contraction.
            </motion.p>

            <motion.div variants={fadeUp(0.40)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <RFDDeficitTable />
            </motion.div>

            <motion.p variants={fadeUp(0.42)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              A standardised mean difference of −1.07 in early-phase RFD is a large effect. These athletes are passing strength symmetry screens while carrying a substantial and clinically meaningful deficit in the variable most relevant to the demands of their sport.
            </motion.p>

            <motion.blockquote variants={fadeUp(0.44)} initial="hidden" animate={inView ? "visible" : "hidden"} className="my-2 pl-6 py-1" style={{ borderLeft: "3px solid var(--color-gold)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                An athlete achieving 90% of contralateral maximal strength while carrying a 20% early-phase RFD deficit has passed the strength screen. They have not demonstrated readiness for reactive, high-velocity return-to-sport demands.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.46)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Angelozzi et al. (2012) tracked RFD to 30%, 50%, and 90% of maximal voluntary isometric contraction in 45 male professional football players before reconstruction and at 6 and 12 months post-surgery. They concluded that RFD represents a useful adjunct to return-to-sport decisions. A useful adjunct — not a replacement for peak force measurement, but an addition to it.
            </motion.p>

            <motion.h2 variants={fadeUp(0.48)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              What to Train, and Why They Respond Differently
            </motion.h2>

            <motion.p variants={fadeUp(0.50)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Explosive and maximal strength are related qualities. They are not the same quality, and they do not respond to the same training stimuli. Ballistic and explosive training modalities produce the greatest RFD gains — substantially greater than standard moderate-load resistance training in trained individuals.
            </motion.p>

            <motion.p variants={fadeUp(0.52)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Balshaw et al. (2016) compared 12 weeks of explosive-contraction training against sustained-contraction training in healthy young men. The results show two distinct adaptation profiles.
            </motion.p>

            <motion.div variants={fadeUp(0.54)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <TrainingAdaptationTable />
            </motion.div>

            <motion.p variants={fadeUp(0.56)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Explosive training drove larger improvements in explosive torque through greater neural drive — a 17 to 28% increase. Sustained training drove larger gains in maximal torque through muscle volume. Neither approach alone is sufficient for a return-to-sport population. Both qualities require training, and the rehabilitation programme needs to include both stimuli, sequenced appropriately.
            </motion.p>

            <motion.p variants={fadeUp(0.58)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The practical implication is that a programme relying exclusively on conventional strength work — squats, leg press, standard loading progressions — will build the muscle volume and restore peak force. It will not restore the neural drive required for early-phase RFD. Jump variations, ballistic loading, and intent-focused training need to be present in the programme before return to sport, not introduced at the point of clearance.
            </motion.p>

            <motion.h2 variants={fadeUp(0.60)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.1rem, 2vw, 1.35rem)", color: "var(--color-navy)", letterSpacing: "-0.01em", lineHeight: 1.25, marginTop: "0.5rem" }}>
              The Limits of the Current Evidence
            </motion.h2>

            <motion.p variants={fadeUp(0.62)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              None of the studies reviewed have tested whether an RFD deficit directly predicts a second ACL injury. Maestroni et al. (2021), in a systematic review of adults more than six months post-reconstruction, found insufficient evidence on RFD because only one study met their inclusion criteria. The RFD deficit is documented. Its causal role in re-injury has not yet been established at the level of prospective evidence.
            </motion.p>

            <motion.p variants={fadeUp(0.64)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              That is not an argument for ignoring it. The biomechanical rationale is sound, the deficit is consistently observed, and the time-frame mismatch between athletic demand and the time required to reach peak force is well-established physiology. The absence of a prospective injury study does not mean the measure is irrelevant — it means the evidence base is incomplete, which is a different problem.
            </motion.p>

            <motion.p variants={fadeUp(0.66)} initial="hidden" animate={inView ? "visible" : "hidden"} style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}>
              Clearance criteria based on peak force are necessary. They are not sufficient. Add an early-phase RFD measure to the testing battery alongside peak force, and put explosive-intent work into the rehabilitation programme before the clearance decision is made — not after.
            </motion.p>

          </div>

          <motion.div variants={fadeUp(0.70)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-14 pt-8 border-t" style={{ borderColor: "rgba(0,0,0,0.08)" }}>
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>References</p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Maffiuletti, N.A., Aagaard, P., Blazevich, A.J., Folland, J., Tillin, N. and Duchateau, J. (2016). Rate of force development: physiological and methodological considerations. <em>European Journal of Applied Physiology</em>, 116(6), pp. 1091–1116.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Aagaard, P., Simonsen, E.B., Andersen, J.L., Magnusson, P. and Dyhre-Poulsen, P. (2002). Increased rate of force development and neural drive of human skeletal muscle following resistance training. <em>Journal of Applied Physiology</em>, 93(4), pp. 1318–1326.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Werner, D.M., Conlin, A., Murray, P. et al. (2026). Quadriceps strength and movement patterns in patients after ACLR who pass a clinic-based return-to-sport testing battery. <em>Orthopaedic Journal of Sports Medicine</em>, 14(2), 23259671251410098.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Turpeinen, J.T., Freitas, T.T., Rubio-Arias, J.A., Jordan, M.J. and Aagaard, P. (2020). Contractile rate of force development after anterior cruciate ligament reconstruction: a comprehensive review and meta-analysis. <em>Scandinavian Journal of Medicine & Science in Sports</em>.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Angelozzi, M. et al. (2012). Rate of force development as an adjunctive outcome measure for return-to-sport decisions after anterior cruciate ligament reconstruction. <em>Journal of Orthopaedic & Sports Physical Therapy</em>, 42(9), pp. 772–780.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Balshaw, T.G., Massey, G.J., Maden-Wilkinson, T.M., Tillin, N.A. and Folland, J.P. (2016). Training-specific functional, neural, and hypertrophic adaptations to explosive- vs. sustained-contraction strength training. <em>Journal of Applied Physiology</em>, 120(11), pp. 1364–1373.
              </li>
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Maestroni, L., Read, P., Turner, A., Korakakis, V. and Papadopoulos, K. (2021). Strength, rate of force development, power and reactive strength in adult male athletic populations post anterior cruciate ligament reconstruction: a systematic review and meta-analysis. <em>Physical Therapy in Sport</em>, 47, pp. 91–104.
              </li>
            </ol>
          </motion.div>

          <motion.div variants={fadeUp(0.74)} initial="hidden" animate={inView ? "visible" : "hidden"} className="mt-12">
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

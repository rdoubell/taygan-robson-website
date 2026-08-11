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

const HERO_IMAGE = "https://plus.unsplash.com/premium_photo-1664301432574-9b4e85c2b2d3?w=1400&q=85&auto=format&fit=crop"

const phases = [
  {
    num: "01",
    label: "Phase 1 · Minutes 12–15",
    sublabel: "Easy aerobic spin or jog",
    body: "Core temperature rises, enzyme kinetics accelerate, muscle viscosity drops, and nerve conduction velocity increases. This is not optional preparation — it is the physiological substrate every subsequent phase depends on.",
  },
  {
    num: "02",
    label: "Phase 2 · Minutes 10–25",
    sublabel: "Progressive intensity, building to threshold",
    body: "Motor unit recruitment patterns are primed and type II fibres engage for the first time. Skipping to high-intensity work before this phase is complete does not save time. It compromises the quality of every stimulus that follows.",
  },
  {
    num: "03",
    label: "Phase 3 · Minutes 30–38",
    sublabel: "Steady sub-threshold effort + gel intake",
    body: "Jeukendrup's work on exogenous carbohydrate oxidation establishes that peak oxidation of ingested carbohydrate typically occurs 60 to 90 minutes after ingestion. For events exceeding 90 minutes, the gel should be taken 10 to 15 minutes before Phase 1 begins, placing ingestion approximately 65 minutes before the gun and ensuring exogenous carbohydrate oxidation is rising through the early stages of competition. A maltodextrin-fructose blend at a 2:1 ratio achieves peak oxidation marginally faster through dual-transporter intestinal absorption. A gel taken at the gun contributes nothing to the event itself.",
  },
  {
    num: "04",
    label: "Phase 4 · Minutes 38–46",
    sublabel: "3–5 high-intensity sprint efforts",
    body: "These efforts serve a specific neuromuscular purpose: myosin regulatory light chain phosphorylation, which moves myosin heads closer to actin binding sites, increasing cross-bridge formation probability and rate of force development. This is the cellular mechanism underlying post-activation performance enhancement — not simply \"getting the legs going.\"",
  },
  {
    num: "05",
    label: "Phase 5 · Minutes 43–55",
    sublabel: "Rest before the gun",
    body: "Tillin and Bishop (2009) identified the optimal performance window following a conditioning contraction sits between 3 and 12 minutes post-stimulus, depending on training status and the fatigue-potentiation balance. In well-trained athletes, fatigue clears faster. In less conditioned athletes, the window shifts later. If Phase 4 leaves the athlete feeling heavy rather than sharp, extend this rest by two minutes or reduce Phase 4 to three sprints. The window is individually variable — it is not fixed by the protocol.",
  },
]

export default function BlogPost5() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Physiology-Based Warm-Up: Sequence Matters"
      description="A properly sequenced warm-up changes your physiology before the session starts. Evidence-based approach to pre-training preparation from 1INC Consulting."
      canonical="/blog/physiology-based-warmup-why-sequence-matters"
      ogType="article"
    />
    <ArticleSchema
      title="Physiology-Based Warm-Up: Sequence Matters"
      description="A properly sequenced warm-up changes your physiology before the session starts. Evidence-based approach to pre-training preparation."
      url="/blog/physiology-based-warmup-why-sequence-matters"
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
            The Physiology-Based Warm-Up:{" "}
            <span style={{ color: "var(--color-gold)" }}>Why Sequence Matters</span>
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
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>August 2025</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>5 min read</span>
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
              src={HERO_IMAGE}
              alt="Trail runner — physiology-based warm-up"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center center" }}
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
              Most warm-up protocols are built around time. This one is built around physiology.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Each phase targets a distinct mechanism. Sequence them correctly and the athlete arrives at the gun sharp. Get the order wrong and they arrive simply warm.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp(0.12)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 pl-6 py-1"
              style={{ borderLeft: "3px solid var(--color-gold)" }}
            >
              <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", color: "var(--color-navy)", lineHeight: 1.55, letterSpacing: "-0.005em" }}>
                Get the order wrong and they arrive simply warm.
              </p>
            </motion.blockquote>

            {/* Five phases callout */}
            <motion.div
              variants={fadeUp(0.16)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 p-7 flex flex-col gap-7"
              style={{ background: "var(--color-navy)" }}
            >
              <p className="text-[10px] tracking-[0.35em] uppercase mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Five Phases
              </p>

              {phases.map(({ num, label, sublabel, body }) => (
                <div key={num} className="flex gap-5 items-start">
                  <span
                    className="flex-shrink-0 leading-none mt-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800, color: "rgba(199,161,76,0.35)", letterSpacing: "-0.02em" }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div>
                    <p className="mb-0.5" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", letterSpacing: "0.01em" }}>
                      {label}
                    </p>
                    <p className="mb-2" style={{ fontFamily: "var(--font-display)", fontSize: "0.75rem", color: "var(--color-gold)", letterSpacing: "0.04em", textTransform: "uppercase", opacity: 0.75 }}>
                      {sublabel}
                    </p>
                    <p className="text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp(0.32)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
            >
              Each phase has a mechanism. Each mechanism has a timeframe. The warm-up that ignores this produces an athlete who is physiologically present but not physiologically ready.
            </motion.p>

          </div>

          {/* Reference */}
          <motion.div
            variants={fadeUp(0.38)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-14 pt-8 border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <p className="text-[10px] tracking-[0.35em] uppercase mb-5" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}>
              Reference
            </p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              <li className="text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}>
                Tillin, N.A. and Bishop, D. (2009). Factors modulating post-activation potentiation and its effect on performance of subsequent explosive activities. <em>Sports Medicine</em>. 39(2), pp. 147–166. doi:10.2165/00007256-200939020-00004.
              </li>
            </ol>
          </motion.div>

          {/* Back to blog */}
          <motion.div
            variants={fadeUp(0.42)}
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

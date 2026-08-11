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

export default function BlogPost2() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
    <>
    <SEOMeta
      title="Injuries in Sport: The Structure Behind"
      description="83% of sport injuries are non-contact. Taygan Robson examines the biomechanical, training load, and psychological factors that predict and prevent sports injuries."
      canonical="/blog/injuries-in-sport-structure-behind-the-incident"
      ogType="article"
    />
    <ArticleSchema
      title="Injuries in Sport: The Structure Behind"
      description="83% of sport injuries are non-contact. An examination of the biomechanical, training load, and psychological factors that predict and prevent sports injuries."
      url="/blog/injuries-in-sport-structure-behind-the-incident"
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
              Sports Injury · Rehabilitation
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
            Injuries in Sport:{" "}
            <span style={{ color: "var(--color-gold)" }}>The Structure Behind the Incident</span>
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex items-center gap-4 mt-6"
          >
            {[
              "Taygan Robson",
              "July 2025",
              "7 min read",
            ].map((item, i, arr) => (
              <>
                <span
                  key={item}
                  className="text-[10px] tracking-[0.18em] uppercase"
                  style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span key={`dot-${i}`} style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
                )}
              </>
            ))}
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
              src="/blog-post-2.jpeg"
              alt="Injuries in Sport — The Structure Behind the Incident"
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
              Injury is not random. It has a structure, a pattern, and identifiable contributing conditions that preceded it.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The cost of injury extends well beyond the event itself. Time loss disrupts adaptation. Accumulated absences compound fitness deficits. Recurrence — injury to the same structure following return to sport — is both biological and a systems failure.
            </motion.p>

            <motion.p variants={fadeUp(0.12)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Meeuwisse et al. (2007) dynamic recursive model moved the field away from the single-cause model toward a recognition that injury results from the interaction of intrinsic factors — those residing within the athlete — and extrinsic factors, those in the environment and competition structure. An athlete returning with residual strength or neuromuscular deficits carries a substantially different risk profile than before.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp(0.16)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 pl-6 py-1"
              style={{ borderLeft: "3px solid var(--color-gold)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                  color: "var(--color-navy)",
                  lineHeight: 1.55,
                  letterSpacing: "-0.005em",
                }}
              >
                83% of severe lower limb muscle injuries were non-contact in mechanism. These are not accidents — they are the predictable output of accumulated fatigue and neuromuscular control breakdown.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Della Villa et al. (2023), systematic video analysis of 103 severe lower limb muscle injuries across three Serie A seasons, found that 83% were non-contact in mechanism. Running and acceleration accounted for 34% of cases. Hamstring injuries represented 60% of the total, with 63% involving the dominant limb. These are not accidents. They are the predictable output of accumulated fatigue, inadequate deceleration capacity, and neuromuscular control breakdown under high-velocity loading.
            </motion.p>

            <motion.p variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Olympic Games epidemiological data report incidences of 6.5 per 1,000 athlete-days, with lower limb injuries accounting for the majority of burden. Hamstring strains, ACL injuries, ankle sprains, and Achilles tendinopathy are not simply the most commonly injured structures — they are most commonly re-injured, which is a meaningfully different problem.
            </motion.p>

            {/* Callout box */}
            <motion.div
              variants={fadeUp(0.28)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 p-7"
              style={{ background: "var(--color-navy)" }}
            >
              <p
                className="text-[10px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                The Monitoring Question
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                  color: "#FFFFFF",
                  lineHeight: 1.65,
                }}
              >
                Physical clearance is necessary. It is not sufficient.
              </p>
              <p
                className="mt-4 text-[13.5px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}
              >
                Clearing a limb symmetry index does not clear a fear-avoidance pattern. Both must be addressed before return to sport is considered complete.
              </p>
            </motion.div>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The monitoring question must shift beyond physical clearance. Liu and Noh (2025) confirmed that psychological readiness is an independent predictor of return-to-sport outcomes, with athletes reporting low confidence in the injured structure demonstrating measurably higher re-injury rates regardless of physical criteria. Clearing a limb symmetry index does not clear a fear-avoidance pattern. Both must be addressed.
            </motion.p>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Prevention programmes reduce incidence. Understanding why the gap persists is where the real work begins.
            </motion.p>

          </div>

          {/* References */}
          <motion.div
            variants={fadeUp(0.40)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-14 pt-8 border-t"
            style={{ borderColor: "rgba(0,0,0,0.08)" }}
          >
            <p
              className="text-[10px] tracking-[0.35em] uppercase mb-5"
              style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)", fontWeight: 600 }}
            >
              References
            </p>
            <ol className="flex flex-col gap-4 list-decimal list-inside">
              {[
                "Della Villa et al. (2023). Injury mechanisms and situational patterns of severe lower limb muscle injuries in male professional football players: a systematic video analysis study on 103 cases. British Journal of Sports Medicine. 57(24), pp. 1550–1558. doi:10.1136/bjsports-2023-106850.",
                "Liu, S. and Noh, Y.E. (2025). The utility of psychological readiness scales in predicting return to sport: a systematic review. BMC Psychology. 13(1), 1106. doi:10.1186/s40359-025-03378-5.",
                "Meeuwisse, W.H., Tyreman, H., Hagel, B. and Emery, C. (2007). A dynamic model of etiology in sport injury: the recursive nature of risk and causation. Clinical Journal of Sport Medicine. 17(3), pp. 215–219. doi:10.1097/JSM.0b013e3180592a48.",
              ].map((ref) => (
                <li
                  key={ref}
                  className="text-[13px] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.45)" }}
                >
                  {ref}
                </li>
              ))}
            </ol>
          </motion.div>

          {/* Back to blog */}
          <motion.div
            variants={fadeUp(0.44)}
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

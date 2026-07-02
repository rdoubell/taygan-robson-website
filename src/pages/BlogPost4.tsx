import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
})

const HERO_IMAGE = "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=1400&q=85&auto=format&fit=crop"

export default function BlogPost4() {
  const bodyRef = useRef(null)
  const inView  = useInView(bodyRef, { once: true, margin: "-60px" })

  return (
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
              Performance Science · Case Study
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
            HRV Misread:{" "}
            <span style={{ color: "var(--color-gold)" }}>When the Data Is Right and the Interpretation Is Wrong</span>
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
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>July 2025</span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span className="text-[10px] tracking-[0.18em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}>6 min read</span>
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-6 lg:px-12"
        >
          <div className="overflow-hidden" style={{ maxHeight: "420px" }}>
            <img
              src={HERO_IMAGE}
              alt="Competitive cyclist — HRV monitoring case study"
              className="w-full object-cover"
              style={{ objectPosition: "center bottom" }}
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
              Competitive cyclist. Eight months into a structured periodisation block. Aerobic base was strong. FTP trending upward. Then a three-week plateau, followed by regression. Power outputs dropping in sessions that should have been well within his capacity. He wasn't sick. He wasn't injured. His training calendar looked correct.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              His coach had been making load decisions based on HRV. The problem wasn't that he was using HRV. The problem was how.
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
                HRV is not a performance readiness score. It is a marker of autonomic nervous system status. That distinction matters more than most practitioners acknowledge.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              When I reviewed his monitoring data the pattern was clear. Morning HRV readings were being taken inconsistently — different times, different positions, within minutes of waking on some days and thirty minutes post-coffee on others. The coefficient of variation across his baseline was too wide to act on. He had been responding to noise, not signal. On days his HRV read low he was pulling back. On days it read high he was pushing. The load prescription was effectively random.
            </motion.p>

            <motion.p variants={fadeUp(0.18)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Three things were wrong.
            </motion.p>

            {/* Three errors callout */}
            <motion.div
              variants={fadeUp(0.22)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 p-7 flex flex-col gap-6"
              style={{ background: "var(--color-navy)" }}
            >
              <p className="text-[10px] tracking-[0.35em] uppercase mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}>
                Three Errors
              </p>

              {[
                {
                  num: "01",
                  label: "Baseline Validity",
                  body: "HRV requires a stable measurement protocol to produce actionable data. Same time, same position, same conditions every morning. Without a reliable baseline, individual readings are uninterpretable. His baseline had never been properly established — every decision downstream was built on an unstable foundation.",
                },
                {
                  num: "02",
                  label: "Context Stripping",
                  body: "A single low HRV reading is not an instruction to reduce load. It is a data point. Orthostatic response, resting heart rate trend, sleep quality, perceived exertion, and training load history all sit alongside HRV in a monitoring system. He was acting on one variable in isolation. That is not monitoring. That is reacting.",
                },
                {
                  num: "03",
                  label: "Chronic vs. Acute Misread",
                  body: "HRV suppression across several consecutive days in a high-load block is an expected adaptation signal, not a warning. His coach was reducing load during the exact weeks the physiology was responding to training stress. The stimulus was being withdrawn at the point it should have been respected.",
                },
              ].map(({ num, label, body }) => (
                <div key={num} className="flex gap-5 items-start">
                  <span
                    className="flex-shrink-0 leading-none mt-1"
                    style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem", fontWeight: 800, color: "rgba(199,161,76,0.35)", letterSpacing: "-0.02em" }}
                    aria-hidden="true"
                  >
                    {num}
                  </span>
                  <div>
                    <p className="mb-2" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "#FFFFFF", letterSpacing: "0.01em" }}>
                      {label}
                    </p>
                    <p className="text-[13.5px] leading-relaxed" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              We standardised the measurement protocol. Rebuilt his baseline over three weeks. Integrated HRV into a multi-metric decision framework alongside session RPE and a daily wellness screen.
            </motion.p>

            <motion.p variants={fadeUp(0.32)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Six weeks later his FTP had moved past the plateau. The training hadn't changed. The interpretation had.
            </motion.p>

            <motion.p
              variants={fadeUp(0.36)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--color-navy)", fontSize: "clamp(1rem, 1.6vw, 1.1rem)" }}
            >
              Data without context is just numbers.
            </motion.p>

          </div>

          {/* Reference */}
          <motion.div
            variants={fadeUp(0.40)}
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
                Plews, D.J., Laursen, P.B., Stanley, J., Kilding, A.E. and Buchheit, M. (2013). Training adaptation and heart rate variability in elite endurance athletes: opening the door to effective monitoring. Sports Medicine. 43(9), pp. 773–784. doi:10.1007/s40279-013-0071-8.
              </li>
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
  )
}

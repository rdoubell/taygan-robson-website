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

export default function BlogPost1() {
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
              Sports Nutrition · Rehabilitation
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
            Tendon Nutrition:{" "}
            <span style={{ color: "var(--color-gold)" }}>The Collagen–Vitamin C Protocol</span>
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="flex items-center gap-4 mt-6"
          >
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}
            >
              Taygan Robson
            </span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}
            >
              July 2025
            </span>
            <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "10px" }}>·</span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.38)" }}
            >
              6 min read
            </span>
          </motion.div>
        </div>

        {/* Hero image — bleeds to edge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto px-6 lg:px-12"
        >
          <div className="overflow-hidden" style={{ maxHeight: "420px" }}>
            <img
              src="/blog-post-1.jpeg"
              alt="Tendon Nutrition — Collagen and Vitamin C Protocol"
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
              Tendons are not passive cables. They are metabolically active structures, and both mechanical loading and nutritional substrate determine the quality of that activity.
            </motion.p>

            <motion.p variants={fadeUp(0.08)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The extracellular matrix of tendon is primarily collagen, synthesised by tenocytes from hydroxyproline, glycine, and proline. Under standard dietary conditions, circulating concentrations of these amino acids are insufficient to maximise tenocyte synthetic activity even when loading is adequate. Targeted collagen supplementation addresses exactly this gap.
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              variants={fadeUp(0.12)}
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
                Shaw et al. (2017): 15 grams of vitamin C-enriched gelatin consumed 60 minutes before intermittent loading significantly increased circulating collagen synthesis markers.
              </p>
            </motion.blockquote>

            <motion.p variants={fadeUp(0.16)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Shaw et al. (2017) produced the seminal experimental evidence: 15 grams of vitamin C-enriched gelatin consumed 60 minutes before intermittent loading significantly increased circulating collagen synthesis markers and improved the mechanical properties of engineered ligament constructs compared to placebo.
            </motion.p>

            <motion.p variants={fadeUp(0.20)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The 60-minute pre-loading window is mechanistically precise. It allows absorption and peak plasma aminoacidaemia to coincide with the exercise-induced tenocyte activation window — the period of maximal synthetic responsiveness. Vitamin C is not incidental to this. It is an essential cofactor for prolyl and lysyl hydroxylase, the enzymes responsible for collagen cross-link formation, and without it collagen fibril stability is compromised regardless of substrate availability.
            </motion.p>

            <motion.p variants={fadeUp(0.24)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Female soccer players evidence showed that collagen supplementation combined with resistance training produced significantly greater increases in patellar tendon stiffness and Young's constant than resistance training alone, with no change in tendon cross-sectional area (Lee et al., 2023). The adaptation is material property improvement, not tendon hypertrophy.
            </motion.p>

            <motion.p variants={fadeUp(0.28)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              Increased collagen fibril density and cross-linking are the structural mechanism, and they do not occur at the same rate without nutritional support.
            </motion.p>

            {/* Protocol callout box */}
            <motion.div
              variants={fadeUp(0.32)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="my-2 p-7"
              style={{ background: "var(--color-navy)" }}
            >
              <p
                className="text-[10px] tracking-[0.35em] uppercase mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
              >
                The Protocol
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
                15 g hydrolysed collagen or gelatin<br />
                + 50 mg vitamin C<br />
                60 minutes before tendon loading sessions.
              </p>
              <p
                className="mt-4 text-[13.5px] leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}
              >
                This does not replace progressive mechanical loading. It amplifies the synthetic response to it.
              </p>
            </motion.div>

            <motion.p variants={fadeUp(0.36)} initial="hidden" animate={inView ? "visible" : "hidden"}>
              The practical protocol is straightforward: 15 grams of hydrolysed collagen or gelatin with 50 milligrams of vitamin C, 60 minutes before tendon loading sessions. This does not replace progressive mechanical loading. It amplifies the synthetic response to it.
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
                "Lee, J., Bridge, J.E., Clark, D.R., Stewart, C.E. and Erskine, R.M. (2023). Collagen supplementation augments changes in patellar tendon properties in female soccer players. Frontiers in Physiology. 14, 1089971. doi:10.3389/fphys.2023.1089971.",
                "Shaw, G., Lee-Barthel, A., Ross, M.L., Wang, B. and Baar, K. (2017). Vitamin C-enriched gelatin supplementation before intermittent activity augments collagen synthesis. American Journal of Clinical Nutrition. 105(1), pp. 136–143. doi:10.3945/ajcn.116.138594.",
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
  )
}

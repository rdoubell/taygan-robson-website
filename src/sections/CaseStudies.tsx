import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const articles = [
  {
    id: "01",
    tag: "Recovery & Sleep Science",
    title: "Sleep: The Recovery Variable That Gets Scheduled Last",
    excerpt:
      "Sleep is not passive recovery. It is a biologically active process during which tissue repair, endocrine regulation, and motor memory consolidation occur in ways that cannot be replicated by any other intervention.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&q=85&auto=format&fit=crop",
    comingSoon: true,
  },
]

export default function CaseStudies() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="case-studies" className="py-16 bg-[#3D7A57]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Heading */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            1INC Consulting
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="text-white mb-3"
            style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em" }}
          >
            Insights &amp; Research
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-white/70 text-lg lg:text-xl font-semibold leading-snug"
          >
            Evidence-based thinking on performance, recovery, and rehabilitation.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-6 block"
            style={{ width: 48, height: 2, background: "rgba(255,255,255,0.5)" }}
          />
        </div>

        {/* Articles row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="case-studies-snap grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="group bg-white overflow-hidden"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                />
                {article.comingSoon && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="px-5 py-2 border border-white/70 text-white text-[10px] tracking-[0.3em] uppercase backdrop-blur-sm bg-black/20"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Coming Soon
                    </span>
                  </div>
                )}
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 bg-[#3D7A57] text-white text-[10px] tracking-[0.2em] uppercase"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {article.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <span
                  className="text-[10px] tracking-[0.3em] text-black/30 mb-2 block"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {article.id}
                </span>
                <h3
                  className="text-black mb-3 leading-tight"
                  style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.3 }}
                >
                  {article.title}
                </h3>
                <p className="text-black/55 text-[13px] leading-relaxed line-clamp-3">{article.excerpt}</p>
              </div>
            </div>
          ))}

          {/* Placeholder */}
          <div className="border border-dashed border-white/30 flex flex-col items-center justify-center gap-3 p-10 min-h-[300px]">
            <div className="w-8 h-8 border border-dashed border-white/40 rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
                <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </div>
            <p
              className="text-white/50 text-[10px] tracking-[0.25em] uppercase text-center"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              More articles coming
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

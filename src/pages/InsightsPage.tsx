import { useEffect } from "react"
import { motion } from "framer-motion"
import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function InsightsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="grain bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-[70px]">

        {/* Page header */}
        <section className="section-pad bg-white border-b border-[#E2E8E4]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[10px] tracking-[0.3em] uppercase text-[#3D7A57]/60 mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              1INC Consulting
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-[#3D7A57] mb-4"
              style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2.6rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em" }}
            >
              Insights &amp; Research
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-black/70 text-lg lg:text-xl font-semibold leading-snug max-w-xl mx-auto"
            >
              Evidence-based thinking on performance, recovery, and rehabilitation.
            </motion.p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="section-pad">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {articles.map((article) => (
                <motion.div
                  key={article.id}
                  variants={fadeUp}
                  className="group border border-[#E2E8E4] hover:border-[#3D7A57] transition-colors duration-300 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                    />
                    {article.comingSoon && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="px-6 py-2.5 border border-white/70 text-white text-[11px] tracking-[0.3em] uppercase backdrop-blur-sm bg-black/20"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          Coming Soon
                        </span>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1 bg-[#3D7A57] text-white text-[10px] tracking-[0.2em] uppercase"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {article.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 bg-white">
                    <span
                      className="text-[10px] tracking-[0.3em] text-[#3D7A57]/50 mb-3 block"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      {article.id}
                    </span>
                    <h2
                      className="text-black mb-4 leading-tight"
                      style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.25 }}
                    >
                      {article.title}
                    </h2>
                    <p className="text-black/55 text-[13px] leading-relaxed">{article.excerpt}</p>
                  </div>
                </motion.div>
              ))}

              {/* More coming placeholder */}
              <motion.div
                variants={fadeUp}
                className="border-2 border-dashed border-[#E2E8E4] flex flex-col items-center justify-center gap-4 p-12 min-h-[380px]"
              >
                <div className="w-10 h-10 border-2 border-dashed border-[#3D7A57]/30 rounded-full flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3D7A57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
                <p
                  className="text-[#3D7A57]/40 text-[11px] tracking-[0.25em] uppercase text-center"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  More articles coming
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

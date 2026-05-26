import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const affiliates = [
  { name: "University of Cape Town", type: "Higher Education", abbr: "UCT" },
  { name: "Taygan Sport Foundation", type: "Sport & Wellness", abbr: "TSF" },
  { name: "Africa Media Group", type: "Media & Publishing", abbr: "AMG" },
  { name: "Premier League Academy", type: "Football & Sport", abbr: "PLA" },
  { name: "Robson Consulting Group", type: "Strategic Advisory", abbr: "RCG" },
  { name: "SA Rugby", type: "National Governance", abbr: "SAR" },
  { name: "BrightPath Schools", type: "Education", abbr: "BPS" },
  { name: "PerformX Institute", type: "Performance & Health", abbr: "PXI" },
]

export default function Affiliates() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  const track = [...affiliates, ...affiliates]

  return (
    <section id="affiliates" className="section-pad bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-[#3D7A57] font-mono mb-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Affiliates &amp; Institutions
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.12,
          }}
          className="text-black"
        >
          Trusted by{" "}
          <em className="text-[#3D7A57]">leading organisations.</em>
        </motion.h2>
      </div>

      {/* Top divider */}
      <div className="border-t border-[#E2E8E4] mb-0" />

      {/* Ticker */}
      <div className="overflow-hidden py-0 border-b border-[#E2E8E4]">
        <div className="ticker-track flex items-stretch">
          {track.map((a, i) => (
            <div
              key={`${a.abbr}-${i}`}
              className="flex-shrink-0 flex items-center gap-6 px-10 py-8 border-r border-[#E2E8E4] group cursor-default hover:bg-[#F7F7F5] transition-colors duration-200"
            >
              <div className="w-12 h-12 border border-[#3D7A57]/30 group-hover:border-[#3D7A57] flex items-center justify-center transition-colors duration-200 flex-shrink-0">
                <span
                  className="text-[10px] tracking-widest text-[#3D7A57] font-mono font-medium"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {a.abbr}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-black whitespace-nowrap">{a.name}</span>
                <span className="text-xs text-[#2F5E45]/60 whitespace-nowrap">{a.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-7xl mx-auto px-6 lg:px-12 mt-10"
      >
        <p className="text-xs text-black/40 tracking-wide">
          Logos and full client list available on request. Select affiliations shown.
        </p>
      </motion.div>
    </section>
  )
}

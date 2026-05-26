import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    id: "01",
    title: "National Sport Rebrand",
    category: "Brand Strategy · Identity",
    desc: "Full brand overhaul for a national sport governing body — repositioning from legacy institution to modern performance brand, increasing sponsorship value by 3×.",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=85&auto=format&fit=crop",
    outcome: "+180% digital engagement",
    span: "full",
  },
  {
    id: "02",
    title: "University Growth Campaign",
    category: "Marketing · Content Systems",
    desc: "12-month content and digital marketing system that drove a 40% increase in applications for a top-tier South African university.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=85&auto=format&fit=crop",
    outcome: "+40% applications",
    span: "half",
  },
  {
    id: "03",
    title: "Performance Clinic Launch",
    category: "Campaign Direction · Digital",
    desc: "Go-to-market strategy and launch campaign for a premium physiotherapy and performance clinic entering a competitive urban market.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=85&auto=format&fit=crop",
    outcome: "Fully booked at launch",
    span: "half",
  },
  {
    id: "04",
    title: "Media Production Series",
    category: "Content Production · Video",
    desc: "Conceived and directed a multi-episode content series for a corporate brand, building a combined audience of 200k+ across platforms.",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=85&auto=format&fit=crop",
    outcome: "200k+ audience built",
    span: "full",
  },
]

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="work" className="section-pad bg-[#F7F7F5]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.3em] uppercase text-[#3D7A57] font-mono mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Selected Work
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
            Work that{" "}
            <em className="text-[#3D7A57]">speaks for itself.</em>
          </motion.h2>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="group relative overflow-hidden bg-white border border-[#E2E8E4] hover:border-[#3D7A57] transition-colors duration-300 cursor-pointer"
            >
              <div className={`flex flex-col ${cs.span === "full" ? "lg:flex-row" : "lg:flex-col"} gap-0`}>
                {/* Image */}
                <div
                  className={`overflow-hidden ${
                    cs.span === "full"
                      ? "lg:w-1/2 h-64 lg:h-80"
                      : "h-52"
                  }`}
                >
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="text-[10px] tracking-[0.3em] uppercase text-[#3D7A57]/60 font-mono"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {cs.id}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-black/20 group-hover:text-[#3D7A57] transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/40 mb-3">
                      {cs.category}
                    </p>
                    <h3
                      className="text-2xl font-light text-black mb-4 group-hover:text-[#3D7A57] transition-colors duration-300"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                    >
                      {cs.title}
                    </h3>
                    <p className="text-sm text-black/55 leading-relaxed">{cs.desc}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[#E2E8E4] flex items-center gap-3">
                    <span className="rule-green" style={{ width: "24px" }} />
                    <span className="text-xs font-medium text-[#3D7A57] tracking-wide">
                      {cs.outcome}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-4 border border-[#3D7A57] text-[#3D7A57] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#3D7A57] hover:text-white transition-all duration-300"
          >
            Start a Project
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

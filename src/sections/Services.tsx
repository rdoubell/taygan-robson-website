import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const services = [
  {
    num: "01",
    title: "Pure Science Performance",
    desc: "Evidence-based performance programming focused on training load management, endurance analytics, athlete monitoring, and periodisation systems designed for long-term athletic development.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Sports Nutrition",
    desc: "Advanced sports nutrition strategies tailored around training demands, race fuelling, macro periodisation, recovery, and evidence-based supplementation protocols.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Prehab & Rehabilitation",
    desc: "Comprehensive rehabilitation and return-to-performance systems designed to restore movement quality, reduce injury risk, and rebuild athletic confidence.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Performance Testing & Analytics",
    desc: "Objective data-driven testing using advanced sports science tools to assess movement, force production, asymmetries, readiness, and rehabilitation progress.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=900&q=85&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "1INC Consulting",
    desc: "A personalised 45-minute consultation designed to assess the full performance picture — injury history, training structure, nutrition, and performance goals — before creating a strategic direction.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85&auto=format&fit=crop",
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="services" className="section-pad bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Centred heading block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.35em] uppercase text-[#1A3B6E]/60 mb-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Services &amp; Offerings
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mb-3 services-heading"
            style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2rem, 3.8vw, 3.4rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em", color: "#C9A84C" }}
          >
            A Complete Performance System
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/70 text-lg lg:text-xl font-semibold leading-snug"
          >
            Delivered with clinical precision.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="rule-green mx-auto mt-6 block"
          />
        </div>

        {/* Services list */}
        <div className="flex flex-col gap-0">
          {services.map((svc, i) => {
            const imageRight = i % 2 === 0
            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.1 + i * 0.08 }}
                className="grid lg:grid-cols-2 border-b border-[#E2E8E4] last:border-b-0 group"
              >
                <div className={`services-img-col overflow-hidden h-64 lg:h-80 ${imageRight ? "lg:order-1" : "lg:order-2"}`}>
                  <img src={svc.image} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className={`flex flex-col justify-center px-8 py-10 lg:px-12 bg-white group-hover:bg-[#FAFAF9] transition-colors duration-300 ${imageRight ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-[11px] tracking-[0.3em] text-[#1A3B6E]/50 font-mono mb-4" style={{ fontFamily: "'DM Mono', monospace" }}>{svc.num}</span>
                  {/* Gold accent rule */}
                  <div className="w-6 h-[2px] bg-[#C9A84C] mb-5" />
                  <h3 className="text-black mb-4" style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 700, lineHeight: 1.2 }}>
                    {svc.title}
                  </h3>
                  <p className="text-black/55 text-[14px] leading-[1.85] mb-8">{svc.desc}</p>
                  <a href="#contact" className="self-start flex items-center gap-3 text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] font-medium hover:gap-5 transition-all duration-200">
                    Learn More <span className="w-6 h-px bg-[#C9A84C] inline-block" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

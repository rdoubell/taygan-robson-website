import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"

const practices = [
  {
    num: "01",
    label: "Sports Injury · Rehabilitation",
    title: "Sports Injury & Rehabilitation",
    desc: "Evidence-based return-to-performance systems built around individual athlete needs — from initial assessment to full clearance.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=900&q=85&auto=format&fit=crop",
    href: "#services",
  },
  {
    num: "02",
    label: "1INC · Consulting",
    title: "1INC Consulting",
    desc: "One conversation. The full performance picture — before any intervention begins. A 45-minute consultation covering injury, training, nutrition and goals.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85&auto=format&fit=crop",
    href: "#contact",
  },
  {
    num: "03",
    label: "Performance · Science Lab",
    title: "Performance Science Lab",
    desc: "Objective data-driven testing using advanced sports science tools to assess movement, force production, readiness and rehabilitation progress.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=85&auto=format&fit=crop",
    href: "#services",
  },
]

export default function ThreePractices() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })

  return (
    <section ref={ref} className="bg-white border-t border-[#E8E8E6]">

      {/* Optional eyebrow heading */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#1A3B6E]/60 mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Three Practices · One Standard
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="text-black/85"
          style={{
            fontFamily: "'Tinos', Georgia, serif",
            fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Evidence. Performance.{" "}
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Results.</span>
        </motion.h2>
      </div>

      {/* Three-column practice cards */}
      <div className="grid lg:grid-cols-3 border-t border-[#E8E8E6]">
        {practices.map((practice, i) => (
          <motion.div
            key={practice.num}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
            className={`group relative flex flex-col border-b lg:border-b-0 ${i < 2 ? "lg:border-r" : ""} border-[#E8E8E6]`}
          >
            {/* Image section */}
            <div className="relative h-60 lg:h-72 overflow-hidden">
              <img
                src={practice.image}
                alt={practice.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />

              {/* Number overlay */}
              <div
                className="absolute top-5 left-5 text-white/20 select-none leading-none font-bold"
                style={{
                  fontFamily: "'Tinos', Georgia, serif",
                  fontSize: "5rem",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {practice.num}
              </div>

              {/* Mono label — bottom of image */}
              <div className="absolute bottom-4 left-5 right-5">
                <span
                  className="text-[9px] tracking-[0.35em] uppercase text-white/55"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {practice.label}
                </span>
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col flex-1 px-7 py-8">
              {/* Gold accent rule */}
              <div className="w-8 h-[2px] bg-[#C9A84C] mb-5" />

              <h3
                className="text-black mb-4 leading-tight"
                style={{
                  fontFamily: "'Tinos', Georgia, serif",
                  fontSize: "clamp(1.15rem, 1.8vw, 1.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {practice.title}
              </h3>

              <p className="text-black/55 text-[13.5px] leading-[1.8] flex-1 mb-7">
                {practice.desc}
              </p>

              <a
                href={practice.href}
                className="self-start flex items-center gap-2.5 text-[11px] tracking-[0.2em] uppercase text-[#C9A84C] font-medium group-hover:gap-4 transition-all duration-250"
              >
                Learn More
                <span className="w-5 h-px bg-[#C9A84C] inline-block transition-all duration-250 group-hover:w-8" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

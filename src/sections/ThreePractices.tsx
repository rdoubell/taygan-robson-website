import { motion } from "framer-motion"
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

const cardVariants = {
  hidden: { opacity: 0, y: 52 },
  visible: { opacity: 1, y: 0 },
}

export default function ThreePractices() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-3">
        {practices.map((practice, i) => (
          <motion.div
            key={practice.num}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            transition={{
              duration: 0.55,
              delay: i * 0.13,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative flex flex-col ${
              i < 2 ? "lg:border-r" : ""
            } border-b lg:border-b-0 border-[#E8E8E6]`}
          >
            {/* Image */}
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
                style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "5rem", lineHeight: 1 }}
                aria-hidden="true"
              >
                {practice.num}
              </div>

              {/* Mono label */}
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

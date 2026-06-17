import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const consultationFeatures = [
  "45-minute full performance overview",
  "Detailed injury & medical history review",
  "Training load and recovery analysis",
  "Nutritional habits & supplementation audit",
  "Strategic action plan & next steps",
]

const services = [
  {
    id: "performance",
    title: "Pure Science Performance",
    price: "POA",
    priceNote: "Price on application",
    features: [
      "Training load management",
      "Endurance & periodisation programming",
      "Athlete monitoring & HRV analysis",
    ],
  },
  {
    id: "nutrition",
    title: "Sports Nutrition",
    price: "POA",
    priceNote: "Price on application",
    features: [
      "Macro periodisation planning",
      "Race fuelling & recovery protocols",
      "Evidence-based supplementation",
    ],
  },
  {
    id: "rehab",
    title: "Prehab & Rehabilitation",
    price: "POA",
    priceNote: "Price on application",
    features: [
      "Movement quality & FMS screening",
      "Return-to-performance planning",
      "Injury risk reduction systems",
    ],
  },
  {
    id: "testing",
    title: "Performance Testing & Analytics",
    price: "POA",
    priceNote: "Price on application",
    features: [
      "Force production & asymmetry testing",
      "VALD ForceDecks & DynaMo analysis",
      "Readiness & rehabilitation tracking",
    ],
  },
  {
    id: "monitoring",
    title: "Athlete Monitoring & Planning",
    price: "POA",
    priceNote: "Price on application",
    features: [
      "Ongoing performance data review",
      "Weekly programming & load cycles",
      "Long-term athletic development",
    ],
  },
]

function ServiceCard({ svc, delay }: { svc: typeof services[number]; delay: number }) {
  const [details, setDetails] = useState("")

  const handleEnquire = () => {
    const subject = encodeURIComponent(`Enquiry: ${svc.title}`)
    const body = encodeURIComponent(
      `Service Interest: ${svc.title}\n\n${details ? `My goals / details:\n${details}` : "I'd like to learn more about this service."}`
    )
    window.location.href = `mailto:hello@1inc-consulting.com?subject=${subject}&body=${body}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay }}
      className="bg-white border border-[#E2E8E4] flex flex-col hover:shadow-[0_8px_40px_rgba(26,59,110,0.08)] transition-shadow duration-400"
    >
      {/* Card header */}
      <div className="px-7 pt-7 pb-6 border-b border-[#E2E8E4]">
        <h3
          className="text-black mb-4 leading-tight"
          style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.25 }}
        >
          {svc.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span
            className="font-bold tracking-tight"
            style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "1.6rem", color: "#C9A84C" }}
          >
            {svc.price}
          </span>
          <span className="text-black/35 text-[11px] tracking-wide" style={{ fontFamily: "'DM Mono', monospace" }}>
            {svc.priceNote}
          </span>
        </div>
      </div>

      {/* Features */}
      <div className="px-7 py-5 flex-1">
        <ul className="space-y-2.5 mb-6">
          {svc.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check size={13} className="mt-[3px] flex-shrink-0" style={{ color: "#C9A84C" }} strokeWidth={2.5} />
              <span className="text-black/60 text-[13px] leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-full h-px bg-[#E2E8E4] mb-5" />

        {/* Enquiry textarea */}
        <label className="block">
          <span
            className="block text-[10px] tracking-[0.25em] uppercase text-black/35 mb-2"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Describe your goals / needs
          </span>
          <textarea
            rows={3}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Tell us about your current situation, goals, or what you'd like to achieve..."
            className="w-full resize-none border border-[#E2E8E4] bg-[#FAFAF9] px-4 py-3 text-[13px] text-black/70 placeholder:text-black/25 leading-relaxed outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-colors duration-200"
            style={{ fontFamily: "inherit" }}
          />
        </label>
      </div>

      {/* CTA */}
      <div className="px-7 pb-7">
        <button
          onClick={handleEnquire}
          className="w-full flex items-center justify-center gap-2.5 py-3 bg-[#F7F7F5] border border-[#E2E8E4] text-[11px] tracking-[0.2em] uppercase text-black/70 font-medium hover:bg-[#1A3B6E] hover:text-white hover:border-[#1A3B6E] transition-all duration-250"
        >
          Send Enquiry <ArrowRight size={12} />
        </button>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="pricing" className="section-pad pb-0 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="mb-3"
            style={{
              fontFamily: "'Tinos', Georgia, serif",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              color: "#C9A84C",
            }}
          >
            Investment in Your Performance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="text-black/60 text-lg font-semibold leading-snug"
          >
            Transparent pricing. Direct access. No guesswork.
          </motion.p>
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="rule-green mx-auto mt-6 block"
          />
        </div>

        {/* ── Featured: 1INC Consultation ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="pricing-featured bg-[#1A3B6E] mb-10 p-10 lg:p-14 grid lg:grid-cols-[1fr_auto] gap-10 items-center"
        >
          <div>
            <p
              className="text-[10px] tracking-[0.38em] uppercase mb-5"
              style={{ fontFamily: "'DM Mono', monospace", color: "#C9A84C" }}
            >
              Featured · Consultation
            </p>
            <h3
              className="text-white mb-4 leading-tight"
              style={{
                fontFamily: "'Tinos', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              1INC Initial Consultation
            </h3>
            <p className="text-white/50 text-[14px] leading-relaxed mb-8 max-w-xl">
              A 45-minute comprehensive consultation designed to assess the full performance picture —
              injury history, training structure, nutrition, and performance goals — before any
              intervention begins.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-0">
              {consultationFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check size={13} className="mt-[3px] flex-shrink-0" style={{ color: "#C9A84C" }} strokeWidth={2.5} />
                  <span className="text-white/65 text-[13px] leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price + CTA */}
          <div className="flex flex-col items-start lg:items-end gap-6 lg:min-w-[200px]">
            <div className="lg:text-right">
              <div
                className="font-bold leading-none mb-1"
                style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2.4rem, 4vw, 3.2rem)", color: "#C9A84C" }}
              >
                POA
              </div>
              <p
                className="text-white/30 text-[10px] tracking-[0.2em] uppercase"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Price on application
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-9 py-4 bg-white text-[#1A3B6E] text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-[#C9A84C] hover:text-white hover:shadow-[0_0_28px_rgba(201,168,76,0.35)] hover:scale-[1.02] transition-all duration-300 whitespace-nowrap"
            >
              Book Consultation
              <ArrowRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* ── 5 Service Pricing Cards ── */}
        <div className="pricing-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} delay={0.08 * i} />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-black/35 text-[12px] mt-10 mb-0 leading-relaxed"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          All service pricing is provided on application following the 1INC Initial Consultation.
          <br />
          Contact <span style={{ color: "#C9A84C" }}>hello@1inc-consulting.com</span> for further information.
        </motion.p>
      </div>

      {/* ── Book a Consultation CTA ── */}
      <div id="contact" className="mt-16 bg-[#1A3B6E] py-24 overflow-hidden">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="text-white mb-4"
            style={{
              fontFamily: "'Tinos', Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Book a{" "}
            <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Consultation.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/45 text-[15px] leading-relaxed mb-12 max-w-md mx-auto"
          >
            One conversation. The full performance picture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-3 px-12 py-4 bg-white text-[#1A3B6E] text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#C9A84C] hover:text-white hover:shadow-[0_0_40px_rgba(201,168,76,0.3)] hover:scale-[1.02] transition-all duration-300"
            >
              Schedule Appointment
              <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

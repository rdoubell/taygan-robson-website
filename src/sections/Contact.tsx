import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="contact" className="bg-[#0D0D0D] py-32 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.35em] uppercase mb-8"
          style={{ fontFamily: "'DM Mono', monospace", color: "#C9A84C" }}
        >
          1INC Consulting
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white mb-6"
          style={{
            fontFamily: "'Tinos', Georgia, serif",
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
          }}
        >
          Start With The<br />
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Full Picture.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/50 text-base leading-relaxed mb-14 max-w-lg mx-auto"
        >
          Book a one-on-one consultation to assess performance, rehabilitation
          history, training load, and long-term athletic goals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="contact-cta-group flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="flex items-center gap-3 px-10 py-4 bg-[#C9A84C] text-white text-xs tracking-[0.22em] uppercase font-medium hover:bg-[#A08030] hover:shadow-[0_0_28px_rgba(201,168,76,0.45)] hover:scale-[1.02] transition-all duration-300"
          >
            Schedule Appointment
            <ArrowRight size={14} />
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-10 py-4 border border-white/25 text-white text-xs tracking-[0.22em] uppercase font-medium hover:border-white/60 hover:bg-white/5 hover:scale-[1.02] transition-all duration-300"
          >
            WhatsApp Enquiry
            <MessageCircle size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

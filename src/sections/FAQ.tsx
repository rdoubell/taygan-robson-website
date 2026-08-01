import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "What happens in the initial 1INC consultation?",
    a: "The consultation covers your full picture — training load and history, injury background and rehabilitation status, nutritional tracking, race fuelling, and performance goals. Taygan works across any or all three disciplines in a single session. Within 3–5 business days you receive a written Specialised Report with findings, recommendations, and a clear direction for the programme ahead.",
  },
  {
    q: "How long does the consultation take?",
    a: "Initial consultations are 45 minutes, conducted fully online via Microsoft Teams. You'll receive a Teams link when your booking is confirmed.",
  },
  {
    q: "Do I need to be based in South Africa?",
    a: "No. All consultations are delivered online via Microsoft Teams and Taygan works with clients globally. If you are booking from outside South Africa, note that all appointment times on Appointment Guru are displayed in South African Standard Time (SAST · UTC+2) — please account for the difference when selecting your slot.",
  },
  {
    q: "What is the difference between the initial consultation and a follow-up?",
    a: "The initial 1INC Consultation is a comprehensive first assessment — it establishes your baseline, produces the written report, and sets the programme direction. A Follow-Up is a 30-minute focused check-in for returning clients only, used to review progress against the plan and make adjustments. Follow-ups are not available without a prior consultation.",
  },
  {
    q: "Can I book if I only need help with one area — for example, nutrition only?",
    a: "Yes. The consultation covers any or all three disciplines — sports injury and rehabilitation, performance science, and sports nutrition. You choose the areas most relevant to your situation and the report is scoped accordingly. You are not required to engage across all three.",
  },
  {
    q: "Do you work with professional athletes only?",
    a: "No. Taygan works with anyone who moves — from competitive athletes and stage racers to active individuals, corporate workers managing desk-related pain, youth athletes, and people returning to sport after injury or surgery. The level of the athlete is less important than the specificity of the problem.",
  },
  {
    q: "What should I prepare before my consultation?",
    a: "Bring as much context as you can — recent training data or logs, any previous injury assessments, scan reports, blood panels, or nutrition tracking you have available. The more specific the input, the more actionable the report. If you train with a device (Garmin, Wahoo, WHOOP, etc.), have your data accessible.",
  },
  {
    q: "How does payment work?",
    a: "All payments are processed through Appointment Guru at the time of booking. You will be prompted to pay when you select your appointment slot.",
  },
  {
    q: "How quickly will I receive my report?",
    a: "The written Specialised Report is delivered within 3–5 business days of your consultation. Follow-up written summaries are delivered within 3 business days.",
  },
  {
    q: "What if I need to reschedule or cancel?",
    a: "Reschedules and cancellations are managed through Appointment Guru. Please give at least 24 hours' notice where possible. Late cancellations or no-shows may be subject to a cancellation fee — this is confirmed at the time of booking.",
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="border-b"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(0.95rem, 1.4vw, 1.08rem)",
            color: open ? "var(--color-gold)" : "#FFFFFF",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
          }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 flex items-center justify-center mt-0.5"
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: `1px solid ${open ? "rgba(199,161,76,0.6)" : "rgba(255,255,255,0.15)"}`,
            color: open ? "var(--color-gold)" : "rgba(255,255,255,0.4)",
            transition: "border-color 0.2s ease, color 0.2s ease",
          }}
        >
          {open ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6 max-w-3xl"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(255,255,255,0.58)",
                fontSize: "clamp(0.88rem, 1.2vw, 0.97rem)",
                lineHeight: 1.85,
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section
      ref={ref}
      style={{ background: "var(--color-navy)", paddingTop: "5rem", paddingBottom: "5rem" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-[11px] tracking-[0.38em] uppercase mb-3"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              lineHeight: 1.1,
            }}
          >
            Frequently Asked<br className="hidden sm:block" />{" "}
            <span style={{ color: "var(--color-gold)" }}>Questions.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          {inView &&
            faqs.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
        </div>
      </div>
    </section>
  )
}

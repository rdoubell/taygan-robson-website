import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import { useBookingModal } from "../../lib/booking-modal-context"

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdKJLUFit4blaBbCklj64iSVdK-9S0o2o_NzkqKiuKQwKFC_Q/viewform?embedded=true"

const APPT_GURU_URL = "https://book.appt.guru/?s=2529"

export default function BookingModal() {
  const { isOpen, startStep, close } = useBookingModal()
  const [step, setStep] = useState<"form" | "booking">(startStep)

  // When modal opens use startStep; when it closes reset after exit animation
  useEffect(() => {
    if (isOpen) {
      setStep(startStep)
    } else {
      const t = setTimeout(() => setStep("form"), 300)
      return () => clearTimeout(t)
    }
  }, [isOpen, startStep])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(10,14,26,0.72)" }}
          onClick={close}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full flex flex-col"
            style={{
              maxWidth: step === "booking" ? "780px" : "640px",
              maxHeight: "90vh",
              background: "var(--color-cream)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
              overflow: "hidden",
              transition: "max-width 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Header ── */}
            <div
              className="flex items-start justify-between gap-4 flex-shrink-0"
              style={{ background: "var(--color-navy)", padding: "1.75rem 2rem" }}
            >
              <div>
                <p
                  className="text-[10px] tracking-[0.3em] uppercase mb-2"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
                >
                  {step === "form" ? "Step 1 of 2 · Intake Form" : "Step 2 of 2 · Book Your Session"}
                </p>
                <h3
                  className="text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.3 }}
                >
                  {step === "form"
                    ? "Tell us a little about you first."
                    : "Choose your appointment."}
                </h3>
              </div>
              <button
                onClick={close}
                aria-label="Close"
                className="flex-shrink-0 flex items-center justify-center transition-colors"
                style={{ width: "32px", height: "32px", borderRadius: "50%", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#FFFFFF" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)" }}
              >
                <X size={18} />
              </button>
            </div>

            {/* ── Body ── */}
            <div className="flex-1 overflow-y-auto" style={{ background: "#FFFFFF" }}>
              {step === "form" ? (
                <iframe
                  src={GOOGLE_FORM_URL}
                  title="1INC Consulting — Client Intake"
                  width="100%"
                  height="680"
                  style={{ border: "none", display: "block" }}
                >
                  Loading…
                </iframe>
              ) : (
                <iframe
                  src={APPT_GURU_URL}
                  title="Book with Appointment Guru"
                  width="100%"
                  height="600"
                  style={{
                    border: "none",
                    display: "block",
                    boxShadow: "0 1px 3px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12)",
                  }}
                >
                  Loading…
                </iframe>
              )}
            </div>

            {/* ── Footer — only on step 1 ── */}
            {step === "form" && (
              <div
                className="flex-shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3"
                style={{ padding: "1.25rem 2rem", background: "var(--color-cream)", borderTop: "1px solid var(--border)" }}
              >
                <p className="text-[12px]" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
                  Submitted the form? Continue to book your session.
                </p>
                <button
                  onClick={() => setStep("booking")}
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] flex-shrink-0"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "var(--color-navy)",
                    color: "#FFFFFF",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  Continue to Booking
                  <ArrowRight size={13} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import { useBookingModal } from "../../lib/booking-modal-context"

const APPT_GURU_URL = "https://book.appt.guru/?s=2529"

export default function BookingModal() {
  const { isOpen, close } = useBookingModal()

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
              maxWidth: "780px",
              maxHeight: "90vh",
              background: "var(--color-cream)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
              overflow: "hidden",
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
                  1INC Consulting
                </p>
                <h3
                  className="text-white"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", lineHeight: 1.3 }}
                >
                  Book your consultation.
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
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

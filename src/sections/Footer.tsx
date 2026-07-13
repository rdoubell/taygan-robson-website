import { Linkedin } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export default function Footer() {
  const { open } = useBookingModal()
  return (
    <footer style={{ background: "#FFFFFF" }}>
      {/* Gold accent line — marks the break from the navy contact section */}
      <div className="h-[2px]" style={{ background: "linear-gradient(90deg, var(--color-gold), var(--gold-300), var(--color-gold))" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16 items-start">

          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <img src="/logo/1inc-navy.png" alt="1INC Consulting" className="h-12 w-auto object-contain object-left" />
            <p className="text-[12px] leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-display)", color: "rgba(27,42,74,0.55)", letterSpacing: "0.01em" }}>
              Sports Injuries &amp; Return-to-Performance Specialist · Clinical Sports Nutritionist · Performance Scientist
            </p>
            <p className="text-[12px] leading-relaxed max-w-xs" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
              Online · Global · In-house at The Campus Wellness Centre, Bryanston, South Africa
            </p>
            <div className="flex flex-col gap-1.5 mt-1">
              <a href="mailto:taygan@1inc.co.za" className="text-[13px] hover:text-[#C7A14C] transition-colors" style={{ fontFamily: "var(--font-body)", color: "var(--color-navy)" }}>
                taygan@1inc.co.za
              </a>
              <a href="mailto:mail@1inc.co.za" className="text-[13px] hover:text-[#C7A14C] transition-colors" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
                mail@1inc.co.za
              </a>
              <p className="text-[13px]" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}>
                Bookings via Appointment Guru
              </p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] tracking-[0.28em] uppercase mb-2" style={{ fontFamily: "var(--font-display)", color: "rgba(27,42,74,0.4)", fontWeight: 600 }}>
              Navigate
            </p>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] transition-colors hover:text-[#C7A14C]"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + CTA */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] tracking-[0.28em] uppercase" style={{ fontFamily: "var(--font-display)", color: "rgba(27,42,74,0.4)", fontWeight: 600 }}>
              Connect
            </p>
            <a
              href="https://www.linkedin.com/in/tayganrobson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2.5 group"
              style={{ color: "var(--text-muted)" }}
            >
              <div
                className="w-9 h-9 flex items-center justify-center transition-colors duration-200 group-hover:border-[#C7A14C]"
                style={{ border: "1px solid var(--border)", borderRadius: "var(--radius-sm)" }}
              >
                <Linkedin size={14} className="group-hover:text-[#C7A14C] transition-colors" />
              </div>
              <span className="text-[12px] group-hover:text-[#C7A14C] transition-colors" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}>LinkedIn</span>
            </a>

            <button
              onClick={open}
              className="inline-flex items-center justify-center px-6 py-3 text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:scale-[1.02] mt-2"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-gold)",
                color: "#14213D",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Book a 1INC Consultation
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 border-t" style={{ borderColor: "var(--border)" }}>
          <p className="text-[11px] text-center" style={{ fontFamily: "var(--font-display)", color: "rgba(27,42,74,0.35)" }}>
            © {new Date().getFullYear()} 1INC Consulting · Taygan Robson · All rights reserved.
          </p>
          <p className="text-[11px]" style={{ fontFamily: "var(--font-display)", color: "rgba(27,42,74,0.3)" }}>
            The Campus, Bryanston, South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}

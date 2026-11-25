import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

const mainLinks = [
  { label: "Process",   href: "/#process",               sectionId: "process"  },
  { label: "Practices", href: "/#services",              sectionId: "services" },
  { label: "Pricing",   href: "/#pricing",               sectionId: "pricing"  },
  { label: "Contact",   href: "mailto:hello@1inc.co.za", sectionId: "contact"  },
]

const secondaryLinks = [
  { label: "Blog",  href: "/blog"  },
  { label: "About", href: "/about" },
]

const ALL_SECTION_IDS = ["hero", "process", "services", "pricing", "contact"]

export default function Navbar() {
  const { pathname } = useLocation()
  const { open } = useBookingModal()

  const [menuOpen,      setMenuOpen]      = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrolled,      setScrolled]      = useState(false)

  const underlineRef = useRef<HTMLDivElement>(null)
  const linkRefs     = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Show shadow after scrolling past a small threshold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Active-section detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            if (mainLinks.some((l) => l.sectionId === id)) setActiveSection(id)
          }
        })
      },
      { rootMargin: "-64px 0px -80% 0px" }
    )
    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [pathname])

  // Slide underline to active link
  useEffect(() => {
    const activeEl  = linkRefs.current[activeSection]
    const underline = underlineRef.current
    if (!activeEl || !underline) return
    const rect       = activeEl.getBoundingClientRect()
    const parentRect = activeEl.parentElement?.getBoundingClientRect()
    if (!parentRect) return
    underline.style.width   = `${rect.width}px`
    underline.style.left    = `${rect.left - parentRect.left}px`
    underline.style.opacity = "1"
  }, [activeSection])

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "#FFFFFF",
          borderBottom: scrolled ? "1px solid rgba(27,42,74,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
          transition: "box-shadow 0.3s ease, border-bottom 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            paddingLeft: "max(24px, env(safe-area-inset-left, 0px))",
            paddingRight: "max(24px, env(safe-area-inset-right, 0px))",
            display: "flex",
            alignItems: "center",
            height: "68px",
            gap: "2.5rem",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <img
              src="/logo/1inc-gold-mark.png"
              alt="1INC Consulting"
              style={{ height: "30px", width: "auto" }}
            />
          </a>

          {/* ── Desktop nav ── */}
          <div
            style={{
              display: "none",
              flex: 1,
              alignItems: "center",
              gap: "2rem",
              position: "relative",
            }}
            className="lg:!flex"
          >
            {/* Main links */}
            {mainLinks.map((link) => (
              <a
                key={link.sectionId}
                ref={(el) => { linkRefs.current[link.sectionId] = el }}
                href={link.href}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: activeSection === link.sectionId ? "var(--color-navy)" : "rgba(27,42,74,0.55)",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-navy)")}
                onMouseLeave={(e) => {
                  if (activeSection !== link.sectionId)
                    (e.currentTarget as HTMLElement).style.color = "rgba(27,42,74,0.55)"
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Animated underline */}
            <div
              ref={underlineRef}
              style={{
                position: "absolute",
                bottom: "-4px",
                height: "2px",
                opacity: 0,
                background: "var(--color-gold)",
                borderRadius: "2px",
                transition: "left 0.25s cubic-bezier(.4,0,.2,1), width 0.25s cubic-bezier(.4,0,.2,1), opacity 0.2s ease",
              }}
            />
          </div>

          {/* Right group — secondary links + CTA */}
          <div
            style={{ display: "none", alignItems: "center", gap: "1.5rem", marginLeft: "auto" }}
            className="lg:!flex"
          >
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "rgba(27,42,74,0.4)",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-navy)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(27,42,74,0.4)")}
              >
                {link.label}
              </a>
            ))}

            {/* Book Now CTA */}
            <button
              onClick={open}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: "var(--color-gold)",
                color: "#14213D",
                border: "none",
                borderRadius: "var(--radius-pill)",
                padding: "0.6rem 1.4rem",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "background 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "var(--color-navy)"
                el.style.color = "#FFFFFF"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = "var(--color-gold)"
                el.style.color = "#14213D"
              }}
            >
              Book Now
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden"
            style={{ marginLeft: "auto", padding: "8px", background: "none", border: "none", cursor: "pointer", color: "var(--color-navy)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              background: "#FFFFFF",
            }}
            className="lg:hidden"
          >
            <button
              style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", cursor: "pointer", color: "var(--color-navy)" }}
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>

            {mainLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  textDecoration: "none",
                  color: "var(--color-navy)",
                  letterSpacing: "-0.01em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-gold)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--color-navy)")}
              >
                {link.label}
              </motion.a>
            ))}

            <div style={{ display: "flex", gap: "1.5rem" }}>
              {secondaryLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (mainLinks.length + i) * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    color: "rgba(27,42,74,0.45)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={() => { open(); setMenuOpen(false) }}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: "var(--color-gold)",
                color: "#14213D",
                border: "none",
                borderRadius: "var(--radius-pill)",
                padding: "0.9rem 2.25rem",
                cursor: "pointer",
                marginTop: "0.5rem",
              }}
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

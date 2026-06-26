import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

// Primary nav links
const mainLinks = [
  { label: "Services",   href: "#services",    sectionId: "services" },
  { label: "Pricing",    href: "#pricing",     sectionId: "pricing" },
  { label: "Contact",    href: "#contact",     sectionId: "contact" },
]

// Secondary pill links
const secondaryLinks = [
  { label: "Blog",  href: "/blog" },
  { label: "About", href: "/about" },
]

const ALL_SECTION_IDS = ["hero", "services", "pricing", "trusted-by", "contact"]
const DARK_SECTION_IDS = ["hero", "trusted-by"]

export default function Navbar() {
  const [menuOpen, setMenuOpen]         = useState(false)
  const [pastHero, setPastHero]         = useState(false)   // scrolled past hero → solid nav
  const [isDark, setIsDark]             = useState(true)    // current section dark bg?
  const [activeSection, setActiveSection] = useState("")

  // Underline ref + position
  const underlineRef   = useRef<HTMLDivElement>(null)
  const linkRefs       = useRef<Record<string, HTMLAnchorElement | null>>({})

  // Detect hero height for scroll threshold
  useEffect(() => {
    const onScroll = () => {
      const heroEl = document.getElementById("hero")
      const threshold = heroEl ? heroEl.offsetHeight * 0.85 : 500
      setPastHero(window.scrollY > threshold)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Active section + dark/light detection via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setIsDark(DARK_SECTION_IDS.includes(id))
            if (mainLinks.some((l) => l.sectionId === id)) {
              setActiveSection(id)
            }
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
  }, [])

  // Slide underline to active link
  useEffect(() => {
    const activeEl = linkRefs.current[activeSection]
    const underlineEl = underlineRef.current
    if (!activeEl || !underlineEl) return
    const rect = activeEl.getBoundingClientRect()
    const parentRect = activeEl.parentElement?.getBoundingClientRect()
    if (!parentRect) return
    underlineEl.style.width  = `${rect.width}px`
    underlineEl.style.left   = `${rect.left - parentRect.left}px`
    underlineEl.style.opacity = "1"
  }, [activeSection])

  const isTransparent = !pastHero

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: isTransparent ? "transparent" : "var(--color-navy)",
          borderBottom: isTransparent ? "none" : "1px solid rgba(255,255,255,0.08)",
          boxShadow: isTransparent ? "none" : "0 2px 40px rgba(0,0,0,0.3)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center h-[68px] gap-8">

          {/* Logo */}
          <a href="/" className="flex-shrink-0 flex items-center">
            <img
              src="/logo/1inc-gold-mark.png"
              alt="1INC Consulting"
              className="h-8 w-auto"
              style={{ filter: "drop-shadow(0 0 8px rgba(199,161,76,0.3))" }}
            />
          </a>

          {/* Main links + underline */}
          <div className="hidden lg:flex items-center gap-8 relative flex-1">
            {mainLinks.map((link) => (
              <a
                key={link.sectionId}
                ref={(el) => { linkRefs.current[link.sectionId] = el }}
                href={link.href}
                className="relative text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors duration-200 whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-display)",
                  color: activeSection === link.sectionId ? "#FFFFFF" : "rgba(255,255,255,0.62)",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Animated underline */}
            <div
              ref={underlineRef}
              className="absolute bottom-[-4px] h-[2px] transition-all duration-250 opacity-0"
              style={{
                background: "var(--color-gold)",
                borderRadius: "2px",
                transitionTimingFunction: "cubic-bezier(.4,0,.2,1)",
                transitionProperty: "left, width, opacity",
              }}
            />
          </div>

          {/* Right group */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            {/* Secondary: Blog + About — gold pills */}
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold transition-all duration-200"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--color-gold)",
                  color: "#14213D",
                  borderRadius: "var(--radius-pill)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "#FFFFFF"
                  el.style.color = "var(--color-gold)"
                  el.style.boxShadow = "inset 0 0 0 1px var(--color-gold)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.background = "var(--color-gold)"
                  el.style.color = "#14213D"
                  el.style.boxShadow = "none"
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Primary CTA — slides in after scrolling past hero */}
            <AnimatePresence>
              {pastHero && (
                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="inline-flex items-center px-5 py-2 text-[10px] tracking-[0.18em] uppercase font-bold transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    fontFamily: "var(--font-display)",
                    background: "#FFFFFF",
                    color: "var(--color-navy)",
                    borderRadius: "var(--radius-pill)",
                  }}
                >
                  Book Consultation
                </motion.a>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden ml-auto p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
            style={{ background: "var(--color-navy)" }}
          >
            <button className="absolute top-5 right-6 text-white" onClick={() => setMenuOpen(false)}>
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
                className="text-3xl font-semibold text-white hover:text-[#C7A14C] transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {link.label}
              </motion.a>
            ))}
            {secondaryLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (mainLinks.length + i) * 0.07 }}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium transition-colors"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-8 py-3 text-xs tracking-widest uppercase font-bold transition-all duration-300"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-gold)",
                color: "#14213D",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Book Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sticky bottom bar */}
      <div className="mobile-book-bar lg:hidden">
        <a
          href="#contact"
          className="text-[12px] tracking-[0.2em] uppercase font-bold"
          style={{ fontFamily: "var(--font-display)", color: "#14213D" }}
        >
          Book Consultation
        </a>
        <span className="text-[10px] opacity-60" style={{ color: "#14213D" }}>→</span>
      </div>
    </>
  )
}

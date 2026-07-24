import { useState, useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const mainLinks = [
  { label: "Process",   href: "/#process",   sectionId: "process"   },
  { label: "Practices", href: "/#services",  sectionId: "services"  },
  { label: "Pricing",   href: "/#pricing",   sectionId: "pricing"   },
  { label: "Contact",   href: "/#contact",   sectionId: "contact"   },
]

const secondaryLinks = [
  { label: "Blog",  href: "/blog"  },
  { label: "About", href: "/about" },
]

const ALL_SECTION_IDS   = ["hero", "process", "services", "pricing", "contact"]

export default function Navbar() {
  const { pathname }   = useLocation()
  const isHome         = pathname === "/"

  const [menuOpen,       setMenuOpen]       = useState(false)
  const [activeSection,  setActiveSection]  = useState("")
  const [navOpacity,     setNavOpacity]     = useState(isHome ? 0 : 1)

  const underlineRef = useRef<HTMLDivElement>(null)
  const linkRefs     = useRef<Record<string, HTMLAnchorElement | null>>({})

  // On non-home pages always stay solid; on home page fade in with hero scroll
  useEffect(() => {
    if (!isHome) {
      setNavOpacity(1)
      return
    }
    const onScroll = () => {
      const heroEl    = document.getElementById("hero")
      const heroH     = heroEl ? heroEl.offsetHeight : window.innerHeight
      const fadeStart = heroH * 0.75
      const fadeEnd   = heroH * 0.95
      const raw       = (window.scrollY - fadeStart) / (fadeEnd - fadeStart)
      setNavOpacity(Math.min(1, Math.max(0, raw)))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [isHome])

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
  }, [])

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
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          // Use rgba so the transition is always a smooth numeric interpolation
          backgroundColor: `rgba(27, 42, 74, ${navOpacity})`,
          borderBottom: navOpacity > 0.5 ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow:    navOpacity > 0.5 ? "0 2px 40px rgba(0,0,0,0.3)"       : "none",
          transition:   "background-color 0.12s linear, box-shadow 0.3s ease, border-bottom 0.3s ease",
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

          {/* Main links + sliding underline */}
          <div className="hidden lg:flex items-center gap-8 relative flex-1">
            {mainLinks.map((link) => (
              <a
                key={link.sectionId}
                ref={(el) => { linkRefs.current[link.sectionId] = el }}
                href={link.href}
                className="text-[11px] tracking-[0.16em] uppercase font-semibold whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-display)",
                  color: activeSection === link.sectionId ? "#FFFFFF" : "rgba(255,255,255,0.62)",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Animated underline */}
            <div
              ref={underlineRef}
              className="absolute bottom-[-4px] h-[2px] opacity-0"
              style={{
                background: "var(--color-gold)",
                borderRadius: "2px",
                transition: "left 0.25s cubic-bezier(.4,0,.2,1), width 0.25s cubic-bezier(.4,0,.2,1), opacity 0.2s ease",
              }}
            />
          </div>

          {/* Right group */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            {/* Blog + About gold pills */}
            {secondaryLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center px-4 py-1.5 text-[10px] tracking-[0.18em] uppercase font-semibold"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "var(--color-gold)",
                  color: "#14213D",
                  borderRadius: "var(--radius-pill)",
                  transition: "background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",
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

      {/* Mobile full-screen menu */}
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
              href="/#contact"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-8 py-3 text-xs tracking-widest uppercase font-bold"
              style={{
                fontFamily: "var(--font-display)",
                background: "var(--color-gold)",
                color: "#14213D",
                borderRadius: "var(--radius-pill)",
              }}
            >
              Book a 1INC Consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

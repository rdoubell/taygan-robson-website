import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const links = [
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Trusted By", href: "#trusted-by" },
  { label: "Contact", href: "#contact" },
]

// Sections with dark (blue) backgrounds — navbar text should be white over these
const DARK_SECTION_IDS = ["hero", "trusted-by"]
const ALL_SECTION_IDS = ["hero", "about", "credentials", "services", "pricing", "trusted-by"]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isDark, setIsDark] = useState(true) // starts over hero (dark)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    // Detect which section the navbar is currently over
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsDark(DARK_SECTION_IDS.includes(entry.target.id))
          }
        })
      },
      // Narrow band at the top of the viewport — where the navbar sits
      { rootMargin: "-64px 0px -82% 0px" }
    )

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const textColor = isDark ? "text-white/65" : "text-[#1A3B6E]/65"
  const textHover = isDark ? "hover:text-white" : "hover:text-[#1A3B6E]"
  const logoColor = isDark ? "text-white" : "text-[#1A3B6E]"
  const bgScrolled = isDark ? "bg-[#1A3B6E] border-b border-white/10 shadow-[0_2px_40px_rgba(0,0,0,0.25)]" : "bg-white border-b border-[#E2E8E4] shadow-[0_2px_20px_rgba(0,0,0,0.06)]"

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? bgScrolled : "bg-transparent border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-[70px]">
          {/* Logo */}
          <a
            href="#"
            className={`font-bold tracking-[0.06em] text-lg lg:text-xl transition-colors duration-300 ${logoColor}`}
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.04em" }}
          >
            TAYGAN.
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.16em] uppercase font-medium transition-colors duration-200 ${textColor} ${textHover}`}
              >
                {link.label}
              </a>
            ))}
            {/* Blog — gold circle treatment */}
            <a
              href="/blog"
              className={`text-[11px] tracking-[0.16em] uppercase font-medium border border-[#C9A84C] rounded-full px-3.5 py-1 transition-colors duration-200 ${
                isDark
                  ? "text-[#C9A84C]/80 hover:text-[#C9A84C] hover:border-[#C9A84C]"
                  : "text-[#C9A84C]/80 hover:text-[#C9A84C] hover:border-[#C9A84C]"
              }`}
            >
              Blog
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full text-[11px] tracking-[0.18em] uppercase font-semibold hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] hover:scale-[1.02] transition-all duration-300 ${
                isDark
                  ? "bg-white text-[#1A3B6E] hover:bg-[#C9A84C] hover:text-white"
                  : "bg-[#1A3B6E] text-white hover:bg-[#C9A84C]"
              }`}
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${logoColor}`}
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
            className="fixed inset-0 z-40 bg-[#1A3B6E] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            <button
              className="absolute top-5 right-6 text-white"
              onClick={() => setMenuOpen(false)}
            >
              <X size={22} />
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-light text-white hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="/blog"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: links.length * 0.06 }}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light text-[#C9A84C] hover:text-white transition-colors border-b border-[#C9A84C]/40 pb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Blog
            </motion.a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 px-8 py-3 rounded-full bg-white text-[#1A3B6E] text-xs tracking-widest uppercase font-semibold hover:bg-[#C9A84C] hover:text-white transition-all duration-300"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

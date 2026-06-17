import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white">

      {/* Thin navy top border — separates from dark Blog section above */}
      <div className="h-[1px] bg-[#1A3B6E]/10" />

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span
            className="text-[#1A3B6E] text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Tinos', Georgia, serif" }}
          >
            TAYGAN.
          </span>
          <span
            className="text-[#1A3B6E]/45 text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            1INC Consulting
          </span>
        </div>

        {/* Copyright */}
        <span
          className="text-black/35 text-[11px] tracking-[0.15em] text-center order-last sm:order-none"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          © {new Date().getFullYear()} Taygan Robson · All rights reserved.
        </span>

        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="flex items-center gap-2.5 text-[#1A3B6E]/55 hover:text-[#1A3B6E] transition-colors duration-200 group"
        >
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            LinkedIn
          </span>
          <div className="w-8 h-8 border border-[#1A3B6E]/20 group-hover:border-[#C9A84C] flex items-center justify-center transition-colors duration-200">
            <Linkedin size={13} />
          </div>
        </a>
      </div>
    </footer>
  )
}

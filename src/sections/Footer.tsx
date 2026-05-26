import { Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#3D7A57]">

      {/* Divider */}
      <div className="border-t border-white/15 mx-6 lg:mx-12" />

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span
            className="text-white text-xl font-bold tracking-tight"
            style={{ fontFamily: "'Tinos', Georgia, serif" }}
          >
            TAYGAN.
          </span>
          <span
            className="text-white/50 text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            1INC Consulting
          </span>
        </div>

        {/* Copyright */}
        <span
          className="text-white/50 text-[11px] tracking-[0.15em] text-center order-last sm:order-none"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          © {new Date().getFullYear()} Taygan Robson · All rights reserved.
        </span>

        {/* LinkedIn */}
        <a
          href="#"
          aria-label="LinkedIn"
          className="flex items-center gap-2.5 text-white/70 hover:text-white transition-colors duration-200 group"
        >
          <span
            className="text-[10px] tracking-[0.22em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            LinkedIn
          </span>
          <div className="w-8 h-8 border border-white/30 group-hover:border-white flex items-center justify-center transition-colors duration-200">
            <Linkedin size={13} />
          </div>
        </a>
      </div>
    </footer>
  )
}

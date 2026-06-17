import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

// 9 placeholder posts across 3 rows of 3
const placeholders = Array(9).fill(null)

function BlogCard({ dark }: { dark: boolean }) {
  return (
    <div className={`flex flex-col overflow-hidden ${dark ? "bg-white/10 border border-white/10" : "bg-white border border-[#E2E8E4]"}`}>
      {/* Image placeholder */}
      <div className={`h-52 flex items-center justify-center ${dark ? "bg-white/5" : "bg-[#F7F7F5]"}`}>
        <span
          className={`text-[9px] tracking-[0.3em] uppercase ${dark ? "text-white/25" : "text-black/25"}`}
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Image
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        {/* Tag + date row */}
        <div className="flex items-center gap-3">
          <span
            className={`text-[9px] tracking-[0.28em] uppercase px-2.5 py-1 rounded-full ${dark ? "bg-white/10 text-white/50" : "bg-[#F7F7F5] text-black/40"}`}
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Category
          </span>
          <span
            className={`text-[9px] tracking-[0.2em] ${dark ? "text-white/25" : "text-black/25"}`}
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Coming Soon
          </span>
        </div>

        {/* Title placeholder */}
        <div className="space-y-2">
          <div className={`h-4 rounded ${dark ? "bg-white/15" : "bg-black/8"} w-4/5`} />
          <div className={`h-4 rounded ${dark ? "bg-white/10" : "bg-black/5"} w-3/5`} />
        </div>

        {/* Excerpt placeholder */}
        <div className="space-y-1.5 flex-1">
          <div className={`h-3 rounded ${dark ? "bg-white/8" : "bg-black/5"} w-full`} />
          <div className={`h-3 rounded ${dark ? "bg-white/6" : "bg-black/4"} w-5/6`} />
          <div className={`h-3 rounded ${dark ? "bg-white/6" : "bg-black/4"} w-4/6`} />
        </div>

        {/* Read more */}
        <span
          className={`self-start text-[10px] tracking-[0.2em] uppercase mt-2 ${dark ? "text-[#C9A84C]/60" : "text-[#C9A84C]/70"}`}
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Read More →
        </span>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const rows = [
    { dark: true,  cards: placeholders.slice(0, 3) },
    { dark: false, cards: placeholders.slice(3, 6) },
    { dark: true,  cards: placeholders.slice(6, 9) },
  ]

  return (
    <div className="grain">
      <Navbar />

      {/* Page header */}
      <div className="bg-[#1A3B6E] pt-32 pb-16 text-center">
        <p
          className="text-[9px] tracking-[0.45em] uppercase text-white/35 mb-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          1INC Consulting
        </p>
        <h1
          className="text-white"
          style={{
            fontFamily: "'Tinos', Georgia, serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            textTransform: "uppercase",
            letterSpacing: "0.02em",
          }}
        >
          Blog &amp;{" "}
          <span style={{ color: "#C9A84C", fontStyle: "italic" }}>Insights.</span>
        </h1>
        <p
          className="text-white/45 text-[15px] mt-4 max-w-md mx-auto leading-relaxed"
        >
          Evidence-based thinking on performance, recovery, and rehabilitation.
        </p>
      </div>

      {/* Alternating rows */}
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={row.dark ? "bg-[#1A3B6E]" : "bg-white"}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {row.cards.map((_, cardIndex) => (
              <BlogCard key={cardIndex} dark={row.dark} />
            ))}
          </div>
        </div>
      ))}

      <Footer />
    </div>
  )
}

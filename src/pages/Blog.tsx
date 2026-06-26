import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

// Featured / example post
const featuredPost = {
  category: "Sports Nutrition",
  date: "June 2025",
  title: "Nutritional Periodisation: Why Your Diet Should Change With Your Training",
  excerpt:
    "Most athletes eat the same way year-round — but your nutritional needs shift dramatically between heavy training blocks, competition phases, and recovery periods. Here's the science behind periodising your intake for maximal adaptation.",
  readTime: "7 min read",
}

// 8 remaining placeholder posts
const placeholders = Array(8).fill(null)

function FeaturedBlogCard() {
  return (
    <div className="flex flex-col overflow-hidden bg-white/10 border border-white/10">
      {/* Image area — styled with gold accent */}
      <div className="h-52 relative flex items-end justify-start p-5" style={{ background: "linear-gradient(135deg, rgba(27,42,74,0.9) 0%, rgba(199,161,76,0.25) 100%)" }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 70% 40%, rgba(199,161,76,0.6) 0%, transparent 60%)" }} />
        <div className="relative z-10">
          <span
            className="text-[9px] tracking-[0.3em] uppercase px-2.5 py-1 text-white/80"
            style={{ fontFamily: "var(--font-display)", background: "rgba(199,161,76,0.25)", border: "1px solid rgba(199,161,76,0.4)" }}
          >
            {featuredPost.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        {/* Date + read time */}
        <div className="flex items-center gap-3">
          <span
            className="text-[9px] tracking-[0.2em] text-white/35"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {featuredPost.date}
          </span>
          <span className="text-white/20 text-[8px]">·</span>
          <span
            className="text-[9px] tracking-[0.2em] text-white/35"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {featuredPost.readTime}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-white leading-snug"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}
        >
          {featuredPost.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-[13px] leading-relaxed flex-1"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.55)" }}
        >
          {featuredPost.excerpt}
        </p>

        {/* Read more */}
        <span
          className="self-start text-[10px] tracking-[0.2em] uppercase mt-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
        >
          Coming Soon →
        </span>
      </div>
    </div>
  )
}

function PlaceholderBlogCard({ dark }: { dark: boolean }) {
  return (
    <div className={`flex flex-col overflow-hidden ${dark ? "bg-white/10 border border-white/10" : "bg-white border border-[#E2E8E4]"}`}>
      {/* Image placeholder */}
      <div className={`h-52 flex items-center justify-center ${dark ? "bg-white/5" : "bg-[#F7F7F5]"}`}>
        <span
          className={`text-[9px] tracking-[0.3em] uppercase ${dark ? "text-white/25" : "text-black/25"}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          Coming Soon
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        {/* Tag + date row */}
        <div className="flex items-center gap-3">
          <span
            className={`text-[9px] tracking-[0.28em] uppercase px-2.5 py-1 rounded-full ${dark ? "bg-white/10 text-white/40" : "bg-[#F7F7F5] text-black/30"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Article
          </span>
          <span
            className={`text-[9px] tracking-[0.2em] ${dark ? "text-white/20" : "text-black/20"}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            2025
          </span>
        </div>

        {/* Title lines */}
        <div className="space-y-2">
          <div className={`h-4 rounded ${dark ? "bg-white/12" : "bg-black/6"} w-4/5`} />
          <div className={`h-4 rounded ${dark ? "bg-white/8" : "bg-black/4"} w-3/5`} />
        </div>

        {/* Excerpt lines */}
        <div className="space-y-1.5 flex-1">
          <div className={`h-3 rounded ${dark ? "bg-white/6" : "bg-black/4"} w-full`} />
          <div className={`h-3 rounded ${dark ? "bg-white/5" : "bg-black/3"} w-5/6`} />
          <div className={`h-3 rounded ${dark ? "bg-white/5" : "bg-black/3"} w-4/6`} />
        </div>

        {/* Read more */}
        <span
          className={`self-start text-[10px] tracking-[0.2em] uppercase mt-2 ${dark ? "text-[#C7A14C]/50" : "text-[#C7A14C]/60"}`}
          style={{ fontFamily: "var(--font-display)" }}
        >
          Coming Soon →
        </span>
      </div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <div className="grain">
      <Navbar />

      {/* Page header */}
      <div className="pt-32 pb-16 text-center" style={{ background: "var(--color-navy)" }}>
        <p
          className="text-[9px] tracking-[0.45em] uppercase mb-4"
          style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.35)" }}
        >
          1INC Consulting
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#FFFFFF",
          }}
        >
          Blog &amp;{" "}
          <span style={{ color: "var(--color-gold)" }}>Insights.</span>
        </h1>
        <p
          className="mt-4 max-w-md mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
        >
          Evidence-based thinking on performance, recovery, and rehabilitation.
        </p>
      </div>

      {/* Row 1 — dark, first card is featured */}
      <div style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <FeaturedBlogCard />
          <PlaceholderBlogCard dark={true} />
          <PlaceholderBlogCard dark={true} />
        </div>
      </div>

      {/* Row 2 — light */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => <PlaceholderBlogCard key={i} dark={false} />)}
        </div>
      </div>

      {/* Row 3 — dark */}
      <div style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => <PlaceholderBlogCard key={i} dark={true} />)}
        </div>
      </div>

      <Footer />
    </div>
  )
}

import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

const post1 = {
  slug:     "/blog/tendon-nutrition-collagen-vitamin-c",
  category: "Sports Nutrition · Rehabilitation",
  date:     "July 2025",
  title:    "Tendon Nutrition: The Collagen–Vitamin C Protocol",
  excerpt:
    "Tendons are metabolically active structures. Targeted collagen supplementation — timed precisely before loading — amplifies the tenocyte synthetic response in ways diet alone cannot achieve.",
  readTime: "6 min read",
  image:    "/blog-post-1.jpeg",
}

function RealBlogCard() {
  return (
    <a
      href={post1.slug}
      className="group flex flex-col overflow-hidden bg-white/10 border border-white/10 transition-all duration-300 hover:border-[rgba(199,161,76,0.35)]"
    >
      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        <img
          src={post1.image}
          alt={post1.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: "center bottom" }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4">
          <span
            className="text-[9px] tracking-[0.3em] uppercase px-2.5 py-1"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(20,33,61,0.7)", border: "1px solid rgba(199,161,76,0.35)" }}
          >
            {post1.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em] text-white/35" style={{ fontFamily: "var(--font-display)" }}>{post1.date}</span>
          <span className="text-white/20 text-[8px]">·</span>
          <span className="text-[9px] tracking-[0.2em] text-white/35" style={{ fontFamily: "var(--font-display)" }}>{post1.readTime}</span>
        </div>

        <h3 className="text-white leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}>
          {post1.title}
        </h3>

        <p className="text-[13px] leading-relaxed flex-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.52)" }}>
          {post1.excerpt}
        </p>

        <span
          className="self-start text-[10px] tracking-[0.2em] uppercase mt-2 transition-all duration-200 group-hover:gap-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
        >
          Read Article →
        </span>
      </div>
    </a>
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
          <RealBlogCard />
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

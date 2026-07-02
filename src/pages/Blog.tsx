import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"

type Post = {
  slug: string
  category: string
  date: string
  title: string
  excerpt: string
  readTime: string
  image: string
  imagePosition?: string
}

const posts: Post[] = [
  {
    slug:          "/blog/tendon-nutrition-collagen-vitamin-c",
    category:      "Sports Nutrition · Rehabilitation",
    date:          "July 2025",
    title:         "Tendon Nutrition: The Collagen–Vitamin C Protocol",
    excerpt:       "Tendons are metabolically active structures. Targeted collagen supplementation — timed precisely before loading — amplifies the tenocyte synthetic response in ways diet alone cannot achieve.",
    readTime:      "6 min read",
    image:         "/blog-post-1.jpeg",
    imagePosition: "center bottom",
  },
  {
    slug:          "/blog/injuries-in-sport-structure-behind-the-incident",
    category:      "Sports Injury · Rehabilitation",
    date:          "July 2025",
    title:         "Injuries in Sport: The Structure Behind the Incident",
    excerpt:       "Injury is not random. It has a structure, a pattern, and identifiable contributing conditions that preceded it — and recurrence is both biological and a systems failure.",
    readTime:      "7 min read",
    image:         "/blog-post-2.jpeg",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/efficiency-factor-decoupling-what-your-data-is-telling-you",
    category:      "Performance Science",
    date:          "July 2025",
    title:         "Efficiency Factor, Decoupling, and What Your Data Is Actually Telling You",
    excerpt:       "Most athletes collect training data. Fewer know what to do with it when aerobic progress stops appearing where they expected. Three metrics answer what raw power and pace cannot.",
    readTime:      "7 min read",
    image:         "/blog-post-3.jpeg",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/hrv-misread-data-right-interpretation-wrong",
    category:      "Performance Science · Case Study",
    date:          "July 2025",
    title:         "HRV Misread: When the Data Is Right and the Interpretation Is Wrong",
    excerpt:       "Eight months into a structured periodisation block, a competitive cyclist hit a plateau — then regressed. His HRV data was accurate. The way it was being used was not.",
    readTime:      "6 min read",
    image:         "https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center bottom",
  },
]

function RealBlogCard({ post }: { post: Post }) {
  return (
    <a
      href={post.slug}
      className="group flex flex-col overflow-hidden bg-white/10 border border-white/10 transition-all duration-300 hover:border-[rgba(199,161,76,0.35)]"
    >
      {/* Image */}
      <div className="h-52 relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: post.imagePosition ?? "center center" }}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4">
          <span
            className="text-[9px] tracking-[0.3em] uppercase px-2.5 py-1"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(20,33,61,0.7)", border: "1px solid rgba(199,161,76,0.35)" }}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em] text-white/35" style={{ fontFamily: "var(--font-display)" }}>{post.date}</span>
          <span className="text-white/20 text-[8px]">·</span>
          <span className="text-[9px] tracking-[0.2em] text-white/35" style={{ fontFamily: "var(--font-display)" }}>{post.readTime}</span>
        </div>

        <h3 className="text-white leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.1rem)" }}>
          {post.title}
        </h3>

        <p className="text-[13px] leading-relaxed flex-1" style={{ fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.52)" }}>
          {post.excerpt}
        </p>

        <span
          className="self-start text-[10px] tracking-[0.2em] uppercase mt-2"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}
        >
          Read Article →
        </span>
      </div>
    </a>
  )
}

function RealBlogCardLight({ post }: { post: Post }) {
  return (
    <a
      href={post.slug}
      className="group flex flex-col overflow-hidden bg-white border border-[#E2E8E4] transition-all duration-300 hover:border-[rgba(199,161,76,0.5)]"
    >
      <div className="h-52 relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: post.imagePosition ?? "center center" }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4">
          <span
            className="text-[9px] tracking-[0.3em] uppercase px-2.5 py-1"
            style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", background: "rgba(20,33,61,0.75)", border: "1px solid rgba(199,161,76,0.35)" }}
          >
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 gap-3">
        <div className="flex items-center gap-3">
          <span className="text-[9px] tracking-[0.2em]" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)" }}>{post.date}</span>
          <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "8px" }}>·</span>
          <span className="text-[9px] tracking-[0.2em]" style={{ fontFamily: "var(--font-display)", color: "rgba(0,0,0,0.35)" }}>{post.readTime}</span>
        </div>
        <h3 className="leading-snug" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem, 1.5vw, 1.1rem)", color: "var(--color-navy)" }}>
          {post.title}
        </h3>
        <p className="text-[13px] leading-relaxed flex-1" style={{ fontFamily: "var(--font-body)", color: "rgba(0,0,0,0.52)" }}>
          {post.excerpt}
        </p>
        <span className="self-start text-[10px] tracking-[0.2em] uppercase mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)" }}>
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
      <div className="pt-32 pb-10 text-center" style={{ background: "var(--color-navy)" }}>
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
      </div>

      {/* Row 1 — dark */}
      <div style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 pt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RealBlogCard post={posts[0]} />
          <RealBlogCard post={posts[1]} />
          <RealBlogCard post={posts[2]} />
        </div>
      </div>

      {/* Row 2 — light */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RealBlogCardLight post={posts[3]} />
          <PlaceholderBlogCard dark={false} />
          <PlaceholderBlogCard dark={false} />
        </div>
      </div>

      {/* Row 3 — dark */}
      <div style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[0, 1, 2].map((i) => <PlaceholderBlogCard key={i} dark={true} />)}
        </div>
      </div>

      <Footer />
    </div>
  )
}

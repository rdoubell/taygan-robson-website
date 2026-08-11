import Navbar from "../sections/Navbar"
import Footer from "../sections/Footer"
import SEOMeta from "../components/SEOMeta"

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
  {
    slug:          "/blog/physiology-based-warmup-why-sequence-matters",
    category:      "Performance Science",
    date:          "August 2025",
    title:         "The Physiology-Based Warm-Up: Why Sequence Matters",
    excerpt:       "Most warm-up protocols are built around time. This one is built around physiology. Each phase targets a distinct mechanism — sequence them correctly and the athlete arrives at the gun sharp.",
    readTime:      "5 min read",
    image:         "https://plus.unsplash.com/premium_photo-1664301432574-9b4e85c2b2d3?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/carbohydrate-periodisation-fuelling-for-the-work-required",
    category:      "Sports Nutrition · Performance Science",
    date:          "August 2025",
    title:         "Carbohydrate Periodisation: Fuelling for the Work Required",
    excerpt:       "Not every training session deserves the same fuel. Structured carbohydrate availability — matched to the objective of each session — amplifies adaptation in ways uniform fuelling cannot.",
    readTime:      "5 min read",
    image:         "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/rate-of-force-development-what-maximal-strength-does-not-tell-you",
    category:      "Performance Science · Rehabilitation",
    date:          "August 2025",
    title:         "Rate of Force Development: What Maximal Strength Does Not Tell You",
    excerpt:       "An athlete clears their strength criteria and re-tears their ACL two weeks later. The strength test was fine. The rate of force development was never measured.",
    readTime:      "6 min read",
    image:         "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/periodisation-fatigue-and-the-architecture-of-athletic-adaptation",
    category:      "Performance Science",
    date:          "August 2025",
    title:         "Periodisation, Fatigue, and the Architecture of Athletic Adaptation",
    excerpt:       "Adaptation does not happen during training. It happens during rest — and that is the detail most athletes get wrong. Three models explain why structured load-recovery cycling is non-negotiable.",
    readTime:      "7 min read",
    image:         "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/injury-to-the-foot-and-ankle",
    category:      "Sports Injury · Rehabilitation",
    date:          "August 2025",
    title:         "Injury to the Foot and Ankle",
    excerpt:       "Lateral ankle sprains account for 60% of all sports-related injuries. Time-based return-to-play decisions — not criteria-based ones — are why 30 to 50% of athletes develop chronic instability.",
    readTime:      "5 min read",
    image:         "https://images.unsplash.com/photo-1715801903235-4d779e90d7d0?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/re-evaluating-re-injury-risk-in-sports-rehabilitation",
    category:      "Sports Injury · Rehabilitation",
    date:          "August 2025",
    title:         "Re-evaluating Re-injury Risk in Sports Rehabilitation",
    excerpt:       "Higher re-injury rates do not equate to rehabilitation failure. How 'complete rehabilitation' is defined determines whether that conclusion is even answerable — and three definitions produce three very different answers.",
    readTime:      "5 min read",
    image:         "https://images.unsplash.com/photo-1649751361457-01d3a696c7e6?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/load-tendon-ligament-tissue-engineering-tendinopathy",
    category:      "Sports Injury · Research",
    date:          "August 2025",
    title:         "Load, Tissue Engineering, and the Future of Tendon Repair",
    excerpt:       "You cannot rest a tendon into function. You can only load it into function — and new evidence from fibrin-based tissue engineering makes the biological mechanism behind that principle more precise than ever.",
    readTime:      "6 min read",
    image:         "https://images.unsplash.com/photo-1615505368758-8a3af2a4c379?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
  {
    slug:          "/blog/training-load-injury-illness-ultramarathon-runners",
    category:      "Endurance · Performance Science",
    date:          "August 2025",
    title:         "Training Load, Injury and Illness in Ultramarathon Runners",
    excerpt:       "Injury in ultramarathon runners is not random — it is predictable. The acute:chronic workload ratio reveals when an athlete's training week has outpaced what their chronic fitness can safely absorb.",
    readTime:      "6 min read",
    image:         "https://images.unsplash.com/photo-1590333748338-d629e4564ad9?w=900&q=85&auto=format&fit=crop",
    imagePosition: "center center",
  },
]

function RealBlogCard({ post }: { post: Post }) {
  return (
    <a
      href={post.slug}
      className="group flex flex-col overflow-hidden bg-white/10 border border-white/10 transition-all duration-300 hover:border-[rgba(199,161,76,0.35)]"
    >
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

export default function BlogPage() {
  return (
    <>
    <SEOMeta
      title="Blog — Sports Science & Rehabilitation Insights"
      description="Evidence-based articles on sports injury, performance science, and clinical nutrition from 1INC Consulting. Written by Taygan Robson."
      canonical="/blog"
    />
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

      {/* Row 1 — dark — posts 0–2 */}
      <div style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 pt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RealBlogCard post={posts[0]} />
          <RealBlogCard post={posts[1]} />
          <RealBlogCard post={posts[2]} />
        </div>
      </div>

      {/* Row 2 — light — posts 3–5 */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RealBlogCardLight post={posts[3]} />
          <RealBlogCardLight post={posts[4]} />
          <RealBlogCardLight post={posts[5]} />
        </div>
      </div>

      {/* Row 3 — dark — posts 6–8 */}
      <div style={{ background: "var(--color-navy)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RealBlogCard post={posts[6]} />
          <RealBlogCard post={posts[7]} />
          <RealBlogCard post={posts[8]} />
        </div>
      </div>

      {/* Row 4 — light — posts 9–11 */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <RealBlogCardLight post={posts[9]} />
          <RealBlogCardLight post={posts[10]} />
          <RealBlogCardLight post={posts[11]} />
        </div>
      </div>

      <Footer />
    </div>
    </>
  )
}

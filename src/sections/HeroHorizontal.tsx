import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { ArrowRight } from "lucide-react"

const panels = [
  {
    num: "01",
    label: "Sports Injury · Rehabilitation",
    titleLines: ["Sports Injury", "& Rehabilitation"],
    subtitle: "Evidence-based return-to-performance systems built around each individual athlete.",
    cta: "Book Appointment",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=1920&q=85&auto=format&fit=crop",
  },
  {
    num: "02",
    label: "1INC · Consulting",
    titleLines: ["1INC", "Consulting"],
    subtitle: "One conversation. The full performance picture — before any intervention begins.",
    cta: "Start with 1INC",
    href: "#contact",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=85&auto=format&fit=crop",
  },
  {
    num: "03",
    label: "Performance · Science Lab",
    titleLines: ["Performance", "Science Lab"],
    subtitle: "Data-driven testing and athletic analytics. Objective evidence for every decision.",
    cta: "View Services",
    href: "#services",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85&auto=format&fit=crop",
  },
]

export default function HeroHorizontal() {
  const sectionRef = useRef<HTMLElement>(null)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1280)
  const [activePanel, setActivePanel] = useState(0)

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  // Translate the 3-panel strip horizontally as user scrolls down
  const x = useTransform(scrollYProgress, [0, 1], [0, -(windowWidth * 2)])

  // Update active dot indicator
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.38) setActivePanel(0)
    else if (v < 0.72) setActivePanel(1)
    else setActivePanel(2)
  })

  // Panel 1: visible from start, fades out as panel 2 slides in
  const p1Opacity = useTransform(scrollYProgress, [0, 0.28, 0.42], [1, 1, 0])
  const p1Y = useTransform(scrollYProgress, [0, 0.28, 0.42], [0, 0, -20])

  // Panel 2: fades in, stays, fades out
  const p2Opacity = useTransform(scrollYProgress, [0.33, 0.46, 0.62, 0.72], [0, 1, 1, 0])
  const p2Y = useTransform(scrollYProgress, [0.33, 0.46, 0.62, 0.72], [32, 0, 0, -20])

  // Panel 3: fades in and stays visible
  const p3Opacity = useTransform(scrollYProgress, [0.68, 0.82], [0, 1])
  const p3Y = useTransform(scrollYProgress, [0.68, 0.82], [32, 0])

  const panelAnimations = [
    { opacity: p1Opacity, y: p1Y },
    { opacity: p2Opacity, y: p2Y },
    { opacity: p3Opacity, y: p3Y },
  ]

  // Scroll hint fades when user starts scrolling
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="hero-horizontal-driver relative"
      style={{ height: "300vh" }}
      aria-label="Taygan Robson — practice overview"
    >
      {/* Sticky viewport — fills screen while scroll driver runs */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black">

        {/* Horizontal strip of 3 panels */}
        <motion.div
          style={{ x, width: `${panels.length * 100}vw` }}
          className="flex h-full"
        >
          {panels.map((panel, i) => (
            <div key={panel.num} className="relative flex-shrink-0 w-screen h-full">

              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${panel.image}')` }}
                aria-hidden="true"
              />

              {/* Gradient overlay — darker at bottom and top for text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.48) 50%, rgba(0,0,0,0.72) 100%)",
                }}
                aria-hidden="true"
              />

              {/* Panel content */}
              <motion.div
                style={{ opacity: panelAnimations[i].opacity, y: panelAnimations[i].y }}
                className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6 max-w-5xl mx-auto"
              >
                {/* Mono eyebrow label */}
                <p
                  className="text-[10px] tracking-[0.42em] uppercase text-white/45 mb-8"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {panel.label}
                </p>

                {/* Main heading — two lines, second line in green */}
                <h2
                  className="leading-[1.02] mb-8"
                  style={{
                    fontFamily: "'Tinos', Georgia, serif",
                    fontSize: "clamp(3rem, 8vw, 6.5rem)",
                    fontWeight: 700,
                  }}
                >
                  <span className="block text-white">{panel.titleLines[0]}</span>
                  <span className="block text-[#6DB892]">{panel.titleLines[1]}</span>
                </h2>

                {/* Subtitle */}
                <p className="text-white/55 text-base lg:text-lg font-light max-w-md leading-relaxed mb-11">
                  {panel.subtitle}
                </p>

                {/* CTA */}
                <a
                  href={panel.href}
                  className="inline-flex items-center gap-3 px-10 py-4 bg-[#3D7A57] text-white text-[11px] tracking-[0.22em] uppercase font-medium hover:bg-[#2F5E45] hover:shadow-[0_0_28px_rgba(109,184,146,0.45)] hover:scale-[1.02] transition-all duration-300"
                >
                  {panel.cta}
                  <ArrowRight size={13} className="opacity-75" />
                </a>
              </motion.div>

              {/* Large ghost panel number — bottom-right decorative */}
              <div
                className="absolute bottom-16 right-8 text-white/[0.06] select-none pointer-events-none leading-none"
                style={{
                  fontFamily: "'Tinos', Georgia, serif",
                  fontSize: "clamp(8rem, 18vw, 14rem)",
                  fontWeight: 700,
                }}
                aria-hidden="true"
              >
                {panel.num}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Progress indicator — bottom centre ── */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 flex items-center gap-[10px]">
          {panels.map((_, i) => (
            <div
              key={i}
              className="rounded-full transition-all duration-500 ease-out"
              style={{
                width: activePanel === i ? "32px" : "8px",
                height: "3px",
                borderRadius: "2px",
                background: activePanel === i ? "#6DB892" : "rgba(255,255,255,0.28)",
              }}
            />
          ))}
        </div>

        {/* ── Scroll hint — bottom right, fades on first scroll ── */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-9 right-10 z-20 flex items-center gap-2"
          aria-hidden="true"
        >
          <span
            className="text-white/25 text-[10px] tracking-[0.32em] uppercase"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Scroll
          </span>
          <ArrowRight size={11} className="text-white/25" />
        </motion.div>

        {/* ── Active panel tick marks — top left accent ── */}
        <div className="absolute top-[84px] left-8 z-20 flex gap-[6px]" aria-hidden="true">
          {panels.map((_, i) => (
            <div
              key={i}
              className="transition-all duration-500 ease-out"
              style={{
                width: activePanel === i ? "24px" : "14px",
                height: "1px",
                background: activePanel === i ? "rgba(109,184,146,0.85)" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

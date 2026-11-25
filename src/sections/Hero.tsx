import { ArrowRight, ChevronRight } from "lucide-react"
import { useBookingModal } from "../lib/booking-modal-context"

export default function Hero() {
  const { open } = useBookingModal()

  return (
    <section id="hero" style={{ background: "#FFFFFF", overflow: "hidden" }}>

      {/* Gold orb blur — decorative background element */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "min(900px, 130vw)",
          height: "480px",
          background: "radial-gradient(ellipse at 50% 40%, rgba(199,161,76,0.22) 0%, rgba(199,161,76,0.07) 45%, transparent 68%)",
          filter: "blur(32px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Hero text block ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "clamp(120px, 17vh, 168px)",
          paddingBottom: "clamp(48px, 6vh, 80px)",
          paddingLeft: "max(16px, env(safe-area-inset-left, 0px))",
          paddingRight: "max(16px, env(safe-area-inset-right, 0px))",
          textAlign: "center",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "10px",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--color-gold)",
            fontWeight: 700,
            marginBottom: "1.4rem",
          }}
        >
          Online Performance Consulting
        </p>

        {/* 2-line heading */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            lineHeight: 1.03,
            letterSpacing: "-0.025em",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.8rem, 7.5vw, 7rem)",
              color: "var(--color-navy)",
            }}
          >
            One Consultation.
          </span>
          <span
            style={{
              display: "block",
              fontSize: "clamp(2.8rem, 7.5vw, 7rem)",
              color: "var(--color-gold)",
            }}
          >
            Four Disciplines.
          </span>
        </h1>

        {/* Subline */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)",
            color: "rgba(27,42,74,0.55)",
            lineHeight: 1.65,
            maxWidth: "54ch",
            margin: "0 auto 2.5rem",
          }}
        >
          Strength &amp; conditioning, sports nutrition, injury rehabilitation, and performance science —
          assessed together, in one online session with Taygan directly.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/#pricing"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "0.9rem 1.9rem",
              background: "var(--color-navy)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-pill)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
          >
            View Pricing <ChevronRight size={13} />
          </a>

          <button
            onClick={open}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 700,
              padding: "0.9rem 1.9rem",
              background: "transparent",
              color: "var(--color-navy)",
              border: "1.5px solid var(--color-navy)",
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              transition: "background 0.2s ease, color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "var(--color-navy)"
              el.style.color = "#FFFFFF"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = "transparent"
              el.style.color = "var(--color-navy)"
            }}
          >
            Book a Consultation <ArrowRight size={13} />
          </button>
        </div>
      </div>

      {/* ── Contained video block ── */}
      <div
        style={{
          paddingLeft: "max(24px, env(safe-area-inset-left, 0px))",
          paddingRight: "max(24px, env(safe-area-inset-right, 0px))",
          paddingBottom: "clamp(48px, 7vh, 96px)",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
            background: "var(--color-navy)",
            boxShadow: "0 24px 64px rgba(27,42,74,0.18)",
            aspectRatio: "16 / 9",
          }}
        >
          {/* Replace src with your MP4 path, e.g. src="/your-video.mp4" */}
          <video
            controls
            playsInline
            style={{ width: "100%", height: "100%", display: "block", objectFit: "cover" }}
          />
        </div>
      </div>

    </section>
  )
}

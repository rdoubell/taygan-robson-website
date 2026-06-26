import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

const logos = Array(8).fill(null)

export default function TrustedBy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="trusted-by" className="section-pad" style={{ background: "var(--surface)" }} ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] tracking-[0.42em] uppercase mb-3"
          style={{ fontFamily: "var(--font-display)", color: "var(--color-gold)", fontWeight: 600 }}
        >
          Trusted By
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            color: "var(--color-navy)",
            lineHeight: 1.1,
          }}
        >
          Athletes &amp; Teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-3"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "1rem" }}
        >
          Who demand measurable outcomes.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--surface), transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--surface), transparent)" }} />

        <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}>
          <CarouselContent className="ml-0 border-t border-b" style={{ borderColor: "var(--border)" }}>
            {[...logos, ...logos].map((_, i) => (
              <CarouselItem key={i} className="pl-0 basis-auto">
                <div
                  className="flex flex-col items-center justify-center gap-2 px-10 py-7 border-r cursor-default min-w-[200px]"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div
                    className="w-28 h-10 flex items-center justify-center"
                    style={{
                      border: `1px dashed var(--color-navy)`,
                      borderRadius: "var(--radius-sm)",
                      opacity: 0.2,
                    }}
                  >
                    <span className="text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-display)", color: "var(--color-navy)" }}>Logo</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </section>
  )
}

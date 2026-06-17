import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import AutoScroll from "embla-carousel-auto-scroll"

const logos = Array(8).fill(null)

export default function TrustedBy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="trusted-by" className="section-pad bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.06 }}
          className="mb-3"
          style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em", color: "#C9A84C" }}
        >
          Trusted By
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black/70 text-lg lg:text-xl font-semibold leading-snug"
        >
          Athletes &amp; teams who demand measurable outcomes.
        </motion.p>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="rule-green mx-auto mt-6 block"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #ffffff, transparent)" }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #ffffff, transparent)" }} />

        <Carousel opts={{ loop: true }} plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}>
          <CarouselContent className="ml-0 border-t border-b border-[#E2E8E4]">
            {[...logos, ...logos].map((_, i) => (
              <CarouselItem key={i} className="pl-0 basis-auto">
                <div className="flex flex-col items-center justify-center gap-2 px-10 py-7 border-r border-[#E2E8E4] cursor-default min-w-[200px]">
                  <div className="w-24 h-8 border border-dashed border-[#1A3B6E]/20 bg-[#F7F7F5] flex items-center justify-center">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#1A3B6E]/35" style={{ fontFamily: "'DM Mono', monospace" }}>Insert Logo</span>
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

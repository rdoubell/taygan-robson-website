import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Award, BookOpen, Users, Microscope, Quote } from "lucide-react"

const credentials = [
  {
    icon: BookOpen,
    category: "Education",
    items: [
      "MSc Sports Nutrition — University of Portsmouth",
      "BSc Sports Rehabilitation — Hons",
      "Postgraduate Certificate in Strength & Conditioning",
    ],
  },
  {
    icon: Award,
    category: "Certifications",
    items: [
      "BASES Accredited Sport & Exercise Scientist",
      "SENr Registered Sports Nutritionist",
      "NSCA Certified Strength & Conditioning Specialist",
    ],
  },
  {
    icon: Users,
    category: "Clientele",
    items: [
      "Elite Motorsport Athletes & Teams",
      "Professional Endurance Athletes",
      "Premiership & Academy Football",
    ],
  },
  {
    icon: Microscope,
    category: "Research Focus",
    items: [
      "Sports Injury Biomechanics & Load Management",
      "Nutritional Periodisation for Performance",
      "Return-to-Sport Outcome Frameworks",
    ],
  },
]

const quoteCard = {
  quote: "Every recommendation is grounded in peer-reviewed science and clinical experience — not trends, not guesswork.",
}

const allCards = [...credentials, quoteCard, ...credentials, quoteCard]

export default function Credentials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="credentials" className="section-pad bg-[#F7F7F5]" ref={ref}>
      <style>{`
        @keyframes cred-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cred-track {
          animation: cred-scroll 30s linear infinite;
        }
        .cred-track:hover {
          animation-play-state: paused;
        }
        .cred-scroll-mask {
          mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask: linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="mb-3"
            style={{ fontFamily: "'Tinos', Georgia, serif", fontSize: "clamp(2.6rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.05, textTransform: "uppercase", letterSpacing: "0.02em", color: "#C9A84C" }}
          >
            Credentials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-black/70 text-lg lg:text-xl font-semibold leading-snug"
          >
            Academic depth. Industry credentials.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="rule-green mx-auto mt-6 block"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="cred-scroll-mask overflow-hidden"
      >
        <div className="cred-track flex gap-5 w-max">
          {allCards.map((card, i) => {
            if ("quote" in card) {
              return (
                <div
                  key={`quote-${i}`}
                  className="flex-shrink-0 w-72 bg-[#1A3B6E] p-7 flex flex-col justify-center"
                >
                  <Quote size={20} className="text-white/30 mb-4" />
                  <p className="text-white/90 text-[14px] leading-[1.85] italic" style={{ fontFamily: "'Tinos', serif" }}>
                    {card.quote}
                  </p>
                </div>
              )
            }

            const cred = card as typeof credentials[0]
            return (
              <div
                key={`${cred.category}-${i}`}
                className="flex-shrink-0 w-72 bg-[#1A3B6E] p-7"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 border border-white/25 flex items-center justify-center flex-shrink-0">
                    <cred.icon size={14} className="text-white" />
                  </div>
                  <span className="text-[10px] tracking-[0.22em] uppercase text-white/60" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {cred.category}
                  </span>
                </div>
                {/* Gold accent line */}
                <div className="w-6 h-[1.5px] bg-[#C9A84C]/60 mb-5" />
                <ul className="flex flex-col gap-3">
                  {cred.items.map((item) => (
                    <li key={item} className="text-[13px] text-white/80 leading-snug flex items-start gap-2.5">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-[#C9A84C]/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

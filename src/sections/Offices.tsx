import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Clock } from "lucide-react"

const offices = [
  {
    city: "Johannesburg",
    country: "South Africa",
    address: "Sandton City, Sandton, 2196",
    tz: "SAST · UTC+2",
    primary: true,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14333.78!2d28.0567!3d-26.1070!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e957398a8dcdd7d%3A0x56e2f30f40b6ec4c!2sSandton!5e0!3m2!1sen!2sza!4v1",
  },
  {
    city: "Cape Town",
    country: "South Africa",
    address: "V&A Waterfront, Cape Town, 8001",
    tz: "SAST · UTC+2",
    primary: false,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13248.78!2d18.4193!3d-33.9062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc674f47e3ec31%3A0x97a2f4b2d58c74f3!2sV%26A%20Waterfront!5e0!3m2!1sen!2sza!4v1",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "Canary Wharf, London, E14",
    tz: "BST · UTC+1",
    primary: false,
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9935.6!2d-0.0197!3d51.5054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b9e7a65b05%3A0x58e7bdee4f92012f!2sCanary%20Wharf!5e0!3m2!1sen!2suk!4v1",
  },
]

export default function Offices() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <section id="offices" className="section-pad bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.3em] uppercase text-[#3D7A57] font-mono mb-4"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          Locations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.4rem, 5vw, 4rem)",
            fontWeight: 300,
            lineHeight: 1.12,
          }}
          className="text-black mb-16"
        >
          Present where{" "}
          <em className="text-[#3D7A57]">it matters.</em>
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className={`border flex flex-col group ${
                office.primary
                  ? "border-[#3D7A57]"
                  : "border-[#E2E8E4] hover:border-[#3D7A57] transition-colors duration-300"
              }`}
            >
              {/* Map placeholder */}
              <div className="relative h-52 overflow-hidden bg-[#F0F4F2]">
                <iframe
                  title={`Map of ${office.city}`}
                  src={office.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="group-hover:filter-none transition-all duration-500"
                />
                {office.primary && (
                  <div className="absolute top-3 left-3 px-3 py-1 bg-[#3D7A57] text-white text-[10px] tracking-[0.2em] uppercase font-mono">
                    HQ
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3
                    className="text-xl text-black font-light mb-1"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
                  >
                    {office.city}
                  </h3>
                  <p className="text-xs text-[#3D7A57] tracking-wide">{office.country}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <MapPin size={12} className="text-[#3D7A57] mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-black/55 leading-snug">{office.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-[#3D7A57] flex-shrink-0" />
                    <span className="text-xs text-black/55 font-mono">{office.tz}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8E4] mt-auto">
                  <a
                    href="#contact"
                    className="text-[10px] tracking-[0.25em] uppercase text-[#3D7A57] font-mono hover:text-[#2F5E45] transition-colors"
                  >
                    Book a meeting →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

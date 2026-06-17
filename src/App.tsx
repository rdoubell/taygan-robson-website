import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import ThreePractices from "./sections/ThreePractices"
import About from "./sections/About"
import Credentials from "./sections/Credentials"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import CaseStudies from "./sections/CaseStudies"
import TrustedBy from "./sections/TrustedBy"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        {/* Sticky parallax hero — z-10 so subsequent sections slide over it */}
        <Hero />
        {/* z-20 ensures all content slides over the sticky hero */}
        <div className="relative z-20">
          <ThreePractices />
          <About />
          <Credentials />
          <Services />
          <Pricing />
          <CaseStudies />
          <TrustedBy />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

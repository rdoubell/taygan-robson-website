import Navbar from "./sections/Navbar"
import HeroHorizontal from "./sections/HeroHorizontal"
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
        {/* Horizontal scroll hero — in-flow (300vh), no sticky wrapper needed */}
        <HeroHorizontal />
        <About />
        <Credentials />
        <Services />
        <Pricing />
        <CaseStudies />
        <TrustedBy />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

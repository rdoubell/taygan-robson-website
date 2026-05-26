import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Credentials from "./sections/Credentials"
import Services from "./sections/Services"
import CaseStudies from "./sections/CaseStudies"
import TrustedBy from "./sections/TrustedBy"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        <Hero />
        {/* z-20 ensures all content slides over the sticky z-10 hero */}
        <div className="relative z-20">
          <About />
          <Credentials />
          <Services />
          <CaseStudies />
          <TrustedBy />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}

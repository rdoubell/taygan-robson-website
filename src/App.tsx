import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import Journey from "./sections/Journey"
import TrustedBy from "./sections/TrustedBy"
import Footer from "./sections/Footer"
import BlogPage from "./pages/Blog"
import AboutPage from "./pages/About"

function HomePage() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        {/* Hero — full-bleed photo, transparent navbar sits on top */}
        <Hero />
        {/* Content flows normally below hero */}
        <Services />
        <Pricing />
        <Journey />
        <TrustedBy />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

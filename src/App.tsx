import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import WhoThisIsFor from "./sections/WhoThisIsFor"
import Journey from "./sections/Journey"
import TrustedBy from "./sections/TrustedBy"
import Footer from "./sections/Footer"
import BlogPage from "./pages/Blog"
import AboutPage from "./pages/About"
import BlogPost1 from "./pages/BlogPost1"

function HomePage() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        {/* Hero — full-bleed photo, transparent navbar sits on top */}
        <Hero />
        {/* Content flows normally below hero */}
        <Services />
        <WhoThisIsFor />
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
        <Route path="/blog/tendon-nutrition-collagen-vitamin-c" element={<BlogPost1 />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import ThreePractices from "./sections/ThreePractices"
import About from "./sections/About"
import Credentials from "./sections/Credentials"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import TrustedBy from "./sections/TrustedBy"
import Footer from "./sections/Footer"
import BlogPage from "./pages/Blog"

function HomePage() {
  return (
    <div className="grain">
      <Navbar />
      <main>
        {/* Sticky hero — z-10 so content slides over it */}
        <Hero />
        {/* z-20 wrapper — slides over hero; mt-[-80px] makes cards peek below hero */}
        <div className="relative z-20 mt-[-80px]">
          <ThreePractices />
          <About />
          <Credentials />
          <Services />
          <Pricing />
          <TrustedBy />
        </div>
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
      </Routes>
    </BrowserRouter>
  )
}

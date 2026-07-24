import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BookingModalProvider } from "./lib/booking-modal-context"
import BookingModal from "./components/ui/booking-modal"
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Pricing from "./sections/Pricing"
import WhoThisIsFor from "./sections/WhoThisIsFor"
import Journey from "./sections/Journey"
// import TrustedBy from "./sections/TrustedBy" // hidden per request — kept for later re-enable
import Footer from "./sections/Footer"
import BlogPage from "./pages/Blog"
import AboutPage from "./pages/About"
import BlogPost1 from "./pages/BlogPost1"
import BlogPost2 from "./pages/BlogPost2"
import BlogPost3 from "./pages/BlogPost3"
import BlogPost4 from "./pages/BlogPost4"

function HomePage() {
  // Coming from another page via a link like "/#services" — scroll to that
  // section once the page (and its images) have had a chance to lay out.
  useEffect(() => {
    if (!window.location.hash) return
    const id = window.location.hash.slice(1)
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (!el) return
      const NAV_HEIGHT = 68
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT, behavior: "smooth" })
    }, 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="grain">
      <Navbar />
      <main>
        {/* Hero — full-bleed photo, transparent navbar sits on top */}
        <Hero />
        {/* Content flows normally below hero */}
        <Journey />
        <Services />
        <WhoThisIsFor />
        <Pricing />
        {/* <TrustedBy /> hidden per request — kept for later re-enable */}
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BookingModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/tendon-nutrition-collagen-vitamin-c" element={<BlogPost1 />} />
          <Route path="/blog/injuries-in-sport-structure-behind-the-incident" element={<BlogPost2 />} />
          <Route path="/blog/efficiency-factor-decoupling-what-your-data-is-telling-you" element={<BlogPost3 />} />
          <Route path="/blog/hrv-misread-data-right-interpretation-wrong" element={<BlogPost4 />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <BookingModal />
    </BookingModalProvider>
  )
}

import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { BookingModalProvider } from "./lib/booking-modal-context"
import { RegionProvider } from "./lib/region-context"
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
import BlogPost5 from "./pages/BlogPost5"
import BlogPost6 from "./pages/BlogPost6"
import BlogPost7 from "./pages/BlogPost7"
import BlogPost8 from "./pages/BlogPost8"
import BlogPost9 from "./pages/BlogPost9"
import BlogPost10 from "./pages/BlogPost10"
import BlogPost11 from "./pages/BlogPost11"
import BlogPost12 from "./pages/BlogPost12"

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
    <RegionProvider>
    <BookingModalProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/tendon-nutrition-collagen-vitamin-c" element={<BlogPost1 />} />
          <Route path="/blog/injuries-in-sport-structure-behind-the-incident" element={<BlogPost2 />} />
          <Route path="/blog/efficiency-factor-decoupling-what-your-data-is-telling-you" element={<BlogPost3 />} />
          <Route path="/blog/hrv-misread-data-right-interpretation-wrong" element={<BlogPost4 />} />
          <Route path="/blog/physiology-based-warmup-why-sequence-matters" element={<BlogPost5 />} />
          <Route path="/blog/carbohydrate-periodisation-fuelling-for-the-work-required" element={<BlogPost6 />} />
          <Route path="/blog/rate-of-force-development-what-maximal-strength-does-not-tell-you" element={<BlogPost7 />} />
          <Route path="/blog/periodisation-fatigue-and-the-architecture-of-athletic-adaptation" element={<BlogPost8 />} />
          <Route path="/blog/injury-to-the-foot-and-ankle" element={<BlogPost9 />} />
          <Route path="/blog/re-evaluating-re-injury-risk-in-sports-rehabilitation" element={<BlogPost10 />} />
          <Route path="/blog/load-tendon-ligament-tissue-engineering-tendinopathy" element={<BlogPost11 />} />
          <Route path="/blog/training-load-injury-illness-ultramarathon-runners" element={<BlogPost12 />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <BookingModal />
    </BookingModalProvider>
    </RegionProvider>
  )
}

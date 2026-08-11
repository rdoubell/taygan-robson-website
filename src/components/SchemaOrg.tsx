import { useEffect } from "react"

function injectSchema(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement("script")
    el.id = id
    el.type = "application/ld+json"
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

function removeSchema(id: string) {
  document.getElementById(id)?.remove()
}

// ── Homepage: Person + ProfessionalService + WebSite ──────────────────────────

export function HomeSchema() {
  useEffect(() => {
    injectSchema("schema-person", {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Taygan Robson",
      jobTitle: "Sports Scientist & Performance Consultant",
      description:
        "Taygan Robson is a certified S&C coach, sports injury specialist, and clinical sports nutritionist delivering evidence-based online consultations globally through 1INC Consulting.",
      url: "https://www.1inc.co.za/about",
      image: "https://www.1inc.co.za/about-photo.png",
      sameAs: [
        "https://www.linkedin.com/in/taygan-robson",
      ],
      worksFor: {
        "@type": "Organization",
        name: "1INC Consulting",
        url: "https://www.1inc.co.za",
      },
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "BSc Strength & Conditioning" },
        { "@type": "EducationalOccupationalCredential", name: "MSc Sports Injuries & Return to Performance", credentialCategory: "Masters", recognizedBy: { "@type": "Organization", name: "Setanta College / Irish American University" } },
        { "@type": "EducationalOccupationalCredential", name: "PG Dip Performance Nutrition" },
        { "@type": "EducationalOccupationalCredential", name: "MSc Sports Nutrition (candidate)", recognizedBy: { "@type": "Organization", name: "University of Portsmouth" } },
      ],
    })

    injectSchema("schema-service", {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "1INC Consulting",
      description:
        "Evidence-based online consultations across sports injury & rehabilitation, performance science, and clinical sports nutrition. Serving athletes and active individuals globally.",
      url: "https://www.1inc.co.za",
      logo: "https://www.1inc.co.za/logo/1inc-gold.png",
      image: "https://www.1inc.co.za/og-image.png",
      telephone: "+27828758968",
      address: {
        "@type": "PostalAddress",
        streetAddress: "57 Sloane Street, The Campus",
        addressLocality: "Bryanston",
        addressRegion: "Gauteng",
        postalCode: "2191",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -26.0594,
        longitude: 28.0166,
      },
      areaServed: "Worldwide",
      availableLanguage: "English",
      priceRange: "$$",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "1INC Consulting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Initial Consultation",
              description:
                "45-minute personal online consultation covering training load, injury history, nutrition, and performance goals. Includes a written Specialised Report and programme direction.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Follow-Up Consultation",
              description:
                "30-minute focused check-in for returning clients to review progress and adjust the programme.",
            },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/1inc.consulting",
        "https://www.linkedin.com/company/1inc-consulting",
      ],
    })

    injectSchema("schema-website", {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "1INC Consulting",
      url: "https://www.1inc.co.za",
      description: "Evidence-based sports performance, rehabilitation, and nutrition consulting. Online globally.",
      publisher: {
        "@type": "Organization",
        name: "1INC Consulting",
        logo: {
          "@type": "ImageObject",
          url: "https://www.1inc.co.za/logo/1inc-gold.png",
        },
      },
    })

    return () => {
      removeSchema("schema-person")
      removeSchema("schema-service")
      removeSchema("schema-website")
    }
  }, [])

  return null
}

// ── FAQ page schema ────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What happens in the initial 1INC consultation?",
    a: "The consultation covers your full picture — training load and history, injury background and rehabilitation status, nutritional tracking, race fuelling, and performance goals. Within 7 working days you receive a written Specialised Report with findings, recommendations, and a clear direction for the programme ahead.",
  },
  {
    q: "How long does the consultation take?",
    a: "Initial consultations are 45 minutes, conducted fully online via Microsoft Teams.",
  },
  {
    q: "Do I need to be based in South Africa?",
    a: "No. All consultations are delivered online via Microsoft Teams and Taygan works with clients globally.",
  },
  {
    q: "Can I book if I only need help with one area — for example, nutrition only?",
    a: "Yes. The consultation covers any or all three disciplines — sports injury and rehabilitation, performance science, and sports nutrition. You are not required to engage across all three.",
  },
  {
    q: "Do you work with professional athletes only?",
    a: "No. Taygan works with anyone who moves — from competitive athletes and stage racers to active individuals, corporate workers managing desk-related pain, youth athletes, and people returning to sport after injury or surgery.",
  },
  {
    q: "How quickly will I receive my report?",
    a: "The written Specialised Report is delivered within 7 working days of your consultation.",
  },
]

export function FAQSchema() {
  useEffect(() => {
    injectSchema("schema-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
    })

    return () => removeSchema("schema-faq")
  }, [])

  return null
}

// ── Blog post Article schema ───────────────────────────────────────────────────

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished?: string
  image?: string
}

export function ArticleSchema({ title, description, url, datePublished = "2025-05-01", image }: ArticleSchemaProps) {
  useEffect(() => {
    injectSchema("schema-article", {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      url: `https://www.1inc.co.za${url}`,
      image: image ?? "https://www.1inc.co.za/og-image.png",
      datePublished,
      dateModified: datePublished,
      author: {
        "@type": "Person",
        name: "Taygan Robson",
        url: "https://www.1inc.co.za/about",
      },
      publisher: {
        "@type": "Organization",
        name: "1INC Consulting",
        logo: {
          "@type": "ImageObject",
          url: "https://www.1inc.co.za/logo/1inc-gold.png",
        },
      },
    })

    return () => removeSchema("schema-article")
  }, [title, url, datePublished])

  return null
}

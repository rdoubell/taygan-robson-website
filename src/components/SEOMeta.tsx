import { useEffect } from "react"

interface SEOMetaProps {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article"
}

const SITE = "https://www.1inc.co.za"
const DEFAULT_OG_IMAGE = `${SITE}/og-image.png`

function setMeta(name: string, content: string, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.content = content
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export default function SEOMeta({ title, description, canonical, ogImage, ogType = "website" }: SEOMetaProps) {
  const fullTitle = title.includes("1INC") ? title : `${title} | 1INC Consulting`
  const url = canonical ? `${SITE}${canonical}` : SITE
  const image = ogImage ?? DEFAULT_OG_IMAGE

  useEffect(() => {
    document.title = fullTitle

    setMeta("description", description)
    setLink("canonical", url)

    setMeta("og:title", fullTitle, "property")
    setMeta("og:description", description, "property")
    setMeta("og:url", url, "property")
    setMeta("og:type", ogType, "property")
    setMeta("og:image", image, "property")
    setMeta("og:site_name", "1INC Consulting", "property")

    setMeta("twitter:card", "summary_large_image")
    setMeta("twitter:title", fullTitle)
    setMeta("twitter:description", description)
    setMeta("twitter:image", image)
  }, [fullTitle, description, url, ogType, image])

  return null
}

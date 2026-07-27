import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Region = "za" | "intl"

const RegionContext = createContext<Region>("za")

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegion] = useState<Region>("za")

  useEffect(() => {
    fetch("/api/region")
      .then((r) => r.json())
      .then((d) => setRegion(d.region ?? "za"))
      .catch(() => setRegion("za"))
  }, [])

  return <RegionContext.Provider value={region}>{children}</RegionContext.Provider>
}

export function useRegion() {
  return useContext(RegionContext)
}

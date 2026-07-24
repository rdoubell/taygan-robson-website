import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type Step = "form" | "booking"

type BookingModalContextValue = {
  isOpen: boolean
  startStep: Step
  open: () => void
  openFollowUp: () => void
  close: () => void
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null)

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [startStep, setStartStep] = useState<Step>("form")

  const open = useCallback(() => { setStartStep("form"); setIsOpen(true) }, [])
  const openFollowUp = useCallback(() => { setStartStep("booking"); setIsOpen(true) }, [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <BookingModalContext.Provider value={{ isOpen, startStep, open, openFollowUp, close }}>
      {children}
    </BookingModalContext.Provider>
  )
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext)
  if (!ctx) throw new Error("useBookingModal must be used within a BookingModalProvider")
  return ctx
}

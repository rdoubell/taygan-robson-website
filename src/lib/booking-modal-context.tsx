import { createContext, useContext, useState, useCallback, type ReactNode } from "react"

type BookingModalContextValue = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const BookingModalContext = createContext<BookingModalContextValue | null>(null)

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <BookingModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </BookingModalContext.Provider>
  )
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext)
  if (!ctx) throw new Error("useBookingModal must be used within a BookingModalProvider")
  return ctx
}

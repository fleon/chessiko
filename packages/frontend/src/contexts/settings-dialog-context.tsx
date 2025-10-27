"use client"

import * as React from "react"

interface SettingsDialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

export const SettingsDialogContext = React.createContext<SettingsDialogContextType | undefined>(
  undefined
)

export function SettingsDialogProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)

  return (
    <SettingsDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </SettingsDialogContext.Provider>
  )
}

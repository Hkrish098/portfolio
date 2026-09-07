"use client"

import { useEffect } from "react"

function isBrowserExtensionSource(value: unknown) {
  const text = String(
    value instanceof Error
      ? `${value.message}${value.stack ?? ""}`
      : typeof value === "object" && value !== null
        ? JSON.stringify(value)
        : value ?? ""
  )

  return (
    text.includes("chrome-extension://") ||
    text.includes("moz-extension://") ||
    /Failed to connect to MetaMask/i.test(text) ||
    /MetaMask/i.test(text)
  )
}

function suppressExtensionError(event: Event) {
  const errorEvent = event as ErrorEvent
  const rejectionEvent = event as PromiseRejectionEvent

  const shouldSuppress =
    isBrowserExtensionSource(errorEvent.error) ||
    isBrowserExtensionSource(errorEvent.filename) ||
    isBrowserExtensionSource(errorEvent.message) ||
    isBrowserExtensionSource(rejectionEvent.reason)

  if (!shouldSuppress) return

  event.preventDefault()
  event.stopImmediatePropagation()
}

export function ExtensionErrorGuard() {
  useEffect(() => {
    window.addEventListener("error", suppressExtensionError, true)
    window.addEventListener("unhandledrejection", suppressExtensionError, true)

    return () => {
      window.removeEventListener("error", suppressExtensionError, true)
      window.removeEventListener("unhandledrejection", suppressExtensionError, true)
    }
  }, [])

  return null
}

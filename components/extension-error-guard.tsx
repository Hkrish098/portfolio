"use client"

import { useEffect } from "react"

function isBrowserExtensionSource(value: unknown) {
  const text = String(
    value instanceof Error
      ? `${value.message}${value.stack ?? ""}`
      : typeof value === "string"
        ? value
        : ""
  )

  return (
    text.includes("chrome-extension://") ||
    text.includes("moz-extension://") ||
    /Failed to connect to MetaMask/i.test(text)
  )
}

export function ExtensionErrorGuard() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      if (
        isBrowserExtensionSource(event.error) ||
        isBrowserExtensionSource(event.filename) ||
        isBrowserExtensionSource(event.message)
      ) {
        event.preventDefault()
      }
    }

    const onRejection = (event: PromiseRejectionEvent) => {
      if (isBrowserExtensionSource(event.reason)) {
        event.preventDefault()
      }
    }

    window.addEventListener("error", onError)
    window.addEventListener("unhandledrejection", onRejection)

    return () => {
      window.removeEventListener("error", onError)
      window.removeEventListener("unhandledrejection", onRejection)
    }
  }, [])

  return null
}

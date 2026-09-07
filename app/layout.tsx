import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ExtensionErrorGuard } from "@/components/extension-error-guard"
import "./globals.css"

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Krishna H | Machine Learning & Generative AI Engineer",
  description:
    "Building Generative AI that is Secured & Scalable. Bridging the gap between theoretical models and real-world impact.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function ext(v){var s=String(v&&(v.stack||v.message)||v||"");return/chrome-extension:\\/\\//.test(s)||/moz-extension:\\/\\//.test(s)||/MetaMask/i.test(s)}function stop(e){if(ext(e.error)||ext(e.filename)||ext(e.message)||ext(e.reason)){e.preventDefault();e.stopImmediatePropagation();return true}}window.addEventListener("error",stop,true);window.addEventListener("unhandledrejection",stop,true)})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ExtensionErrorGuard />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

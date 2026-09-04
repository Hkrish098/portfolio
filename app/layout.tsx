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
            __html: `(function(){function ext(v){var s=String(v&&(v.stack||v.message)||v||"");return/chrome-extension:\\/\\//.test(s)||/moz-extension:\\/\\//.test(s)||/Failed to connect to MetaMask/i.test(s)}window.addEventListener("error",function(e){if(ext(e.error)||ext(e.filename)||ext(e.message))e.preventDefault()},true);window.addEventListener("unhandledrejection",function(e){if(ext(e.reason))e.preventDefault()},true)})();`,
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

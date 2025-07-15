import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Stedio - Game Development Company",
  description: "Stedio is a game development company focused on creating immersive and engaging experiences.",
  keywords: ["Stedio", "game development", "indie games", "Yorkshire County Patrol", "roleplay game"],
  openGraph: {
    title: "Stedio - Game Development Company",
    description: "Stedio is a game development company focused on creating immersive and engaging experiences.",
    url: "https://www.stedio.com", // Replace with your actual URL
    siteName: "Stedio",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200", // Placeholder image for Open Graph
        width: 1200,
        height: 630,
        alt: "Stedio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stedio - Game Development Company",
    description: "Stedio is a game development company focused on creating immersive and engaging experiences.",
    images: ["/placeholder.svg?height=630&width=1200"], // Placeholder image for Twitter Card
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Preloader from '@/components/common/Preloader'

export const metadata: Metadata = {
  title: 'Kwetu Tecnologias | Inovação no Leste de Angola',
  description: 'Centro de excelência em software e formação no Leste de Angola',
  viewport: 'width=device-width, initial-scale=1.0',
  icons: {
    icon: '/images/icon.svg',
    apple: '/images/icon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className="scroll-smooth">
      <body className="bg-deep-blue text-white overflow-x-hidden dark:bg-deep-blue-dark dark:text-gray-100">
        <Preloader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

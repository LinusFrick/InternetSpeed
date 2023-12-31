import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeToggle from '../app/components/theme';
import NavBar from './components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Speedtest',
  description: 'Linus Internet speedtester',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <ThemeToggle />
        {children}</body>
    </html>
  )
}

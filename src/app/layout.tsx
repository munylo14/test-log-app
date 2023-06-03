import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Test Log App',
  description: "Don't be a weeb.  Log your interactions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-sky-100 text-zinc-800 container mx-auto p-4`}>
        {children}
        </body>
    </html>
  )
}

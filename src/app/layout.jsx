import { Inter } from 'next/font/google'
import './globals.css'
import Logo from '@/app/assets/logo.png'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Giornata Top',
  description: 'Loja de produtos eletrônicos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="shortcut icon" href={Logo} type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

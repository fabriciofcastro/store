import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import Head from '@/app/head'

const inter = Inter( { subsets: ['latin'] } )

export default function RootLayout ( { children } )
{
  return (
    <html lang="it">
      <Head >
        
      </Head>
      <body className={ inter.className }>
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  )
}

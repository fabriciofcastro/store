import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import Head from '@/app/head'
import Styles from '@/app/page.module.css'


export default function RootLayout ( { children } )
{
  return (
    <html lang="it">
      <Head >
        
      </Head>
      <body > 
        <Header />
        { children }
        <Footer />
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/header/Header'
import Footer from '@/app/components/footer/Footer'
import Produtos from './components/produtos/produtos'
import Styles from '@/app/app.module.css'

const inter = Inter( { subsets: ['latin'] } )



export default function RootLayout ( { children } )
{
  return (
    <html lang="it">
      <body className={ inter.className }>
       
        <div className={ Styles.container }>
          <Header />
          
          <main className={ Styles.main }>
            <Produtos />
          </main>

          <Footer />
        </div>
        { children }

      </body>
    </html>
  )
}

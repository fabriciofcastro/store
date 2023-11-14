import Styles from '@/app/page.module.css'
import Produtos from './components/produtos/produtos'


export default function Home() {

  return (

    <main className={ Styles.main }>
      <Produtos />
    </main>

  )
}



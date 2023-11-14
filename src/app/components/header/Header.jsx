import Image from 'next/image'
import Styles from '@/app/components/header/header.module.css'
import Logo from '@/app/assets/logo.png'

function Header() {
  return (
    <header className={Styles.header}>
        <section className={ Styles.logo }>
          <Image className={Styles.imagemLogo}src={ Logo } alt="Logo " />
        </section>
        <section className={ Styles.descricaoLogo }>
          <h2>Giornata Top</h2>
          <p>INSEGNO PREZIOSI CONSIGLI TECNICI</p>
        </section>
      </header>
  )
}

export default Header
'use client'
import Styles from '@/app/app.module.css'
import Produtos from './components/produtos/produtos'
import Logo from '@/app/assets/logo.png'
import Image from 'next/image'

export default function Home() {

  return (

    <div className={ Styles.container }>
      <header className={Styles.header}>
        <section className={ Styles.logo }>
          <Image src={ Logo } alt="Logo " />
        </section>
        <section className={ Styles.descricaoLogo }>
          <h2>Giornata Top</h2>
          <p>INSEGNO PREZIOSI CONSIGLI TECNICI</p>
        </section>
      </header>
      <main className={Styles.main}>
        <Produtos />
      </main>

      <footer className={Styles.footer}>
        <section className={ Styles.descricaoFooter }>
          <section className={Styles.logoFooter}>
            <Image src={ Logo } alt="LOGO" />
          </section>
          <section className={ Styles.textoDescricao }>
            <p>
              Compra segura
            </p>
          </section>
        </section>
        <section className={Styles.institucional}>
          <h1>Istituzionale</h1>
          <ul>
            <li><a href="" target='_blank' rel="noreferrer">Privacy Policy</a></li>
            <li><a href="" target='_blank' rel="noreferrer">Chi siamo</a></li>
            <li><a href="" target='_blank' rel="noreferrer">Contattaci</a></li>
          </ul>
        </section>
        <section className={Styles.contato}>
          <h1>Contattaci</h1>
          <ul>
            <li>E-mail: sac@giornatatop.it</li>
          </ul>
          <section className={Styles.redeSociais}>
            <ul>
              <li><i className="ph ph-facebook-logo"></i></li>
              <li><i className="ph ph-instagram-logo"></i></li>
              <li><i className="ph ph-tiktok-logo"></i></li>
            </ul>
          </section>
        </section>

      </footer>
    </div>

  )
}



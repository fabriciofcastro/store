import Image from "next/image"
import Logo from '@/app/assets/logo.png'
import Styles  from '@/app/components/footer/footer.module.css'


import React from 'react'
import Link from "next/link"

function Footer() {
  return (
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
            <li><Link href="" target='_blank' rel="noreferrer">Privacy Policy</Link></li>
            <li><Link href="" target='_blank' rel="noreferrer">Chi siamo</Link></li>
            <li><Link href="" target='_blank' rel="noreferrer">Contattaci</Link></li>
          </ul>
        </section>
        <section className={Styles.contato}>
          <h1>Contattaci</h1>
          <ul>
            <li>E-mail: sac@giornatatop.it</li>
          </ul>
          <section className={Styles.redeSociais}>
            <ul>
              <li><Link href=""><i className="ph ph-facebook-logo"></i></Link></li>
              <li><Link href=""><i className="ph ph-instagram-logo"></i></Link></li>
              <li><Link href=""><i className="ph ph-tiktok-logo"></i></Link></li>
            </ul>
          </section>
        </section>

      </footer>
  )
}

export default Footer
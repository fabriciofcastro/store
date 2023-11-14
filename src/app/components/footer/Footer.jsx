import Image from "next/image"
import Logo from '@/app/assets/logo.png'
import Styles  from '@/app/components/footer/footer.module.css'
import Link from "next/link"

function Footer() {
  return (
    <footer className={Styles.footer}>
        
        <section className={ Styles.descricaoFooter }>
         
            <Image className={Styles.logoFooter}src={ Logo } alt="LOGO" />
     
          <section className={ Styles.textoDescricao }>
            <p>
              Compra segura
            </p>
          </section>
        </section>

        <section className={Styles.institucional}>
          <h1>Istituzionale</h1>
          <ul>
            <li><Link className={Styles.link} href="/termos/privacidade" target='_blank' rel="noreferrer">Privacy Policy</Link></li>
            <li><Link className={Styles.link} href="" target='_blank' rel="noreferrer">Chi siamo</Link></li>
            <li><Link className={Styles.link} href="" target='_blank' rel="noreferrer">Contattaci</Link></li>
          </ul>
        </section>
        <section className={Styles.contato}>
          <h1>Contattaci</h1>
          <ul>
            <li>E-mail: sac@giornatatop.it</li>
          </ul>
          <section className={Styles.redeSociaisFooter}>
            <ul>
              <Link className={Styles.linkRedeSocial} href="https://www.facebook.com/topgiornata" target='_blank' rel="noreferrer"><li><i className="ph ph-facebook-logo"></i></li></Link>
              <Link className={Styles.linkRedeSocial} href="https://www.instagram.com/giornatatop" target='_blank' rel="noreferrer"><li><i className="ph ph-instagram-logo"></i></li></Link>
              <Link className={Styles.linkRedeSocial} href="https://www.tiktok.com/@giornatatop" target='_blank' rel="noreferrer"><li><i className="ph ph-tiktok-logo"></i></li></Link>
            </ul>
          </section>
        </section>

      </footer>
  )
}

export default Footer
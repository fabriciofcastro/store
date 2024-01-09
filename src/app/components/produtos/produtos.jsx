'use client'

import Styles from '@/app/components/produtos/styles.module.css'
import data from './intems'
import Image from 'next/image.js'
import Link from 'next/link'

const Produtos = () =>
{
  return (
    <section className={ Styles.containerProdutos }>
      <div className={ Styles.grid }>
        { data.map( ( produto ) => (
          <div className={ Styles.card } key={ produto.id }>
            <div className={ Styles.boxImagem }>
              <Image
                className={ Styles.Image }
                src={ produto.imageURL }
                alt={ produto.name }
                width={ 180 }
                height={ 180 }
              />
            </div>
            <div className={ Styles.descricaoProduto }>
              <p>{ produto.description }</p>
            </div>
            <div className={ Styles.boxButton }>
              <Link
                className={ Styles.button }
                href={ produto.link }
                target="_blank"
                rel="noreferrer"
              >
                ACQQUISTA
              </Link>
            </div>
          </div>
        ) ) }
      </div>
    </section>
  )
}

export default Produtos

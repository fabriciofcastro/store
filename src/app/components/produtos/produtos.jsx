'use client'

import Styles from "@/app/components/produtos/styles.module.css";
import data from "./intems";
import Image from "next/image.js";
import Link from "next/link";

const Produtos = () =>
{
  return (
    <div>

      { data.map( produto => (
        <div className={ Styles.card } key={ produto.id }>

          <div className={ Styles.imagem }>
            <Image className={ Styles.Image } src={ produto.imageURL } alt={ produto.name } width={ 180 } height={ 180 } />
          </div>
          <div className={ Styles.descricaoProduto }>
            <h1>{ produto.name }</h1>
            <p>{ produto.description }</p>
            <Link className={ Styles.button } href={ produto.link } target="_blank" rel="noreferrer">ACQQUISTA</Link>
          </div>

        </div>
      ) ) }

    </div>

  )
}


export default Produtos
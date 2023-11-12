'user client'

import Styles from "@/app/components/produtos/styles.module.css";
import Data from "./intems.js";
import Image from "next/image.js";

const Produtos = () =>
{
  return (
    <div>

      { Data.map( produto => (
        <div className={ Styles.container } key={ produto.id }>

          <div className={ Styles.imagem }>
            <Image className={Styles.Image} src={ produto.imageURL } alt={ produto.name }  width={180} height={180}/>
          </div>
          <div className={ Styles.descricaoProduto }>
            <h1>{ produto.name }</h1>
            <p>{ produto.description }</p>
            <a className={Styles.button}href={ produto.link } target="_blank" rel="noreferrer">COMPRAR</a>
          </div>

        </div>
      ) ) }

    </div>

  )
}


export default Produtos
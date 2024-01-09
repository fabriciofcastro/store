import { products } from '@/utils/products'
import { HomeBanner } from './components/HomeBanner'
import Container from './components/container'
import { ItemsProductsProps } from '@/interfaces/ItemsProductsProps'
import { ProductsCards } from './components/products/ProductsCards'

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl-grid-cols-5 
        2x1:grid-cols-6 gap-8"
        >
          {products.map((product: ItemsProductsProps) => {
            return <ProductsCards key={product.id} data={product} />
          })}
        </div>
      </Container>
    </div>
  )
}

import Container from '@/app/components/container'
import { IParams } from '@/interfaces/IParams'
import ProductDetails from './ProductDetails'

export default function Product({ params }: { params: IParams }) {
  console.log('params', params)

  return (
    <div>
      <Container>
        <ProductDetails />
      </Container>
    </div>
  )
}

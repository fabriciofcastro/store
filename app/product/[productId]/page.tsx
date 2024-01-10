import { IParams } from '@/interfaces/IParams'

export default function Product({ params }: { params: IParams }) {
  console.log('params', params)

  return <div>Product page</div>
}

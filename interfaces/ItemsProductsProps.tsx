export interface ImagesProductsProps {
  color: string
  colorCode: string
  image: string
}

export interface ReviewsPros {
  id: string
  userId: string
  productId: string
  rating: number
  comment: string
  createdDate: string
  user: {
    id: string
    name: string
    email: string
    emailVerified: null
    image: string
    hashedPassword: null
    createdAt: string
    updatedAt: string
    role: string
    }
  }

export interface ItemsProductsProps {
  id: string
  name: string
  description: string
  price: number
  brand: string
  category: string
  inStock: boolean
  images: ImagesProductsProps[]
  reviews: ReviewsPros[]

}
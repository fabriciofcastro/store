'use client'
import { ProductCardProps } from '@/interfaces/ProductCardProps'
import { formatPrice } from '@/utils/formatPrice'
import { truncateText } from '@/utils/truncateText'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const ProductsCards: React.FC<ProductCardProps> = ({ data }) => {
  const router = useRouter()

  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length
  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="
    col-span-1 
    cursor-pointer 
    border-[1.2px] 
    border-slate-200 
    bg-slate-50 
    rounded-lg
    p-2 
    transition
    hover:scale-105
    text-center
    text-sm

    "
    >
      <div
        className="
      flex
      flex-col
      items-center
      w-full
      gap-1
      "
      ></div>
      <div className="aspect-square overflow-hidden relative w-full">
        <Image
          className="w-full h-full object-contain"
          fill
          alt={data.name}
          src={data.images[0].image}
        />
      </div>
      <div className="mt-4">{truncateText(data.name)}</div>
      <div>
        <Rating value={productRating} readOnly />
      </div>
      <div className="">{data.reviews.length} Reviews</div>
      <div className="font-semibold">{formatPrice(data.price)}</div>
    </div>
  )
}

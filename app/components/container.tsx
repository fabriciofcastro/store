import ContainerProps from "@/interfaces/ContainerProps"
import { ProductCardProps } from "@/interfaces/ProductCardProps"

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="max-[1920px]:
    mx-auto
    xl:px-20
    md:px-2
    px-4
    "
    >{ children } </div>
  )
}

export default Container
import ContainerProps from "@/interfaces/ContainerProps"

export const FooterList: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='
    w-full
    sm:w-1/2
    md:w-1/4
    lg:w-1/6
    mb-6
    flex
    flex-col
    gap-2
    '>
      { children }
    </div>
  )
}

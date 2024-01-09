import Link from "next/link"
import Container from "../container"

const NavBar = () => {
  return <div
    className="
    stick
    top-0
    w-full
    h-20
    z-30
    shadow-sm
    bg-green-900
    text-white
  "
  >
    <div className="py-4 border-b-[1px]">
      <Container>
        <div className="
        flex
        items-center
        justify-between
        gap-3
        md:gap-0
        "
        
        >
          <Link href="/" className="`${} font-bold text-2x1 `" >
            Giornatatop</Link>
          <div className="hidden md:block">Searche</div>
          <div className="flex items-center gap-8 md:gap-12">
            <div>CartCount</div>
            <div>UserMenu</div>
          </div>
        </div>
      </Container>
    </div>
  </div>
}

export default NavBar

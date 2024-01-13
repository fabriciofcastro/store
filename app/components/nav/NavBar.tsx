import Link from "next/link";
import Container from "../container";

const NavBar = () => {
  return (
    <div
      className="
      stick
      top-0
      w-full
      z-30
    bg-red-800
    text-white
    
  "
    >
      <div className="py-4 ">
        <Container>
          <div className=" flex items-center justify-between gap-3 md:gap-0 w-full">
            <Link href="/" className="`${} font-bold text-2x1 `">
              DEPARTAMENTOS
            </Link>
            <Link href="/" className="`${} font-bold text-2x1 `">
              OFERTA DO DIA
            </Link>
            <Link href="/" className="`${} font-bold text-2x1 `">
              LANÇAMENTOS
            </Link>
            <Link href="/" className="`${} font-bold text-2x1 `">
              OPENBOX
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;

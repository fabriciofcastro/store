import Link from "next/link";
import Container from "../container";

const NavBar = () => {
  return (
    <div className="xl:px-20 bg-red-800 text-white">
      <div className="py-4 flex max-w-[1920] mx-auto">
        <div className=" flex items-center justify-between w-full px-12">
          <Link href="/" className="` ${} block font-bold text-1xl `">
            DEPARTAMENTOS
          </Link>
          <Link href="/" className="`${} block font-bold text-1xl `">
            OFERTA DO DIA
          </Link>
          <Link href="/" className="`${} block font-bold text-1xl `">
            LANÇAMENTOS
          </Link>
          <Link href="/" className="`${} block font-bold text-1xl `">
            OPENBOX
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

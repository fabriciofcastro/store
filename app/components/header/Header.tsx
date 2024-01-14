import Image from "next/image";
import Link from "next/link";
import Mascote from "@/public/logo.jpg";
import NavBar from "../nav/NavBar";
import { HiOutlineMenu, HiShoppingCart } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <div className=" w-full  bg-green-900 text-white h-30">
      <div className="max-[1920px]: mx-auto xl:px-20 w-full lg:px-20 sm:px-20">
        <div className="flex gap-x-10 items-center ">
          <div>
            <Link
              href="/"
              className="flex p-5 font-semibold text-[24px] items-center gap-4"
            >
              <Image src={Mascote} alt="My Image" width={80} height={80} />
              <span className="max-sm:hidden">Giornatatop</span>
            </Link>
          </div>
          <div className="flex max-lg:max-w-fit ">
            <input
              className="p-2 rounded-sm w-full"
              type="search"
              placeholder="Busque aqui"
            />
          </div>
          <div className="">
            <HiOutlineMenu size={30} className="lg:hidden" />
          </div>
          <div className="flex items-center gap-8 md:gap-12 ">
            <HiShoppingCart size={30} />
            <div className="flex flex-col items-center max-lg:hidden">
              <div>LOGIN</div>
              <div>criar CADASTRO</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

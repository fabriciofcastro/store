import Image from "next/image";
import Link from "next/link";
import Mascote from "@/public/logo.jpg";

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-around w-full bg-green-900 text-white">
      <div>
        <Link
          href="/"
          className="flex p-5 font-semibold text-[24px] items-center gap-4"
        >
          <Image src={Mascote} alt="My Image" width={80} height={80} />
          Giornatatop
        </Link>
      </div>
      <div>
        <input
          className="p-2 rounded-sm"
          type="search"
          placeholder="Busque aqui"
        />
      </div>
      <div className="flex items-center gap-8 md:gap-12">
        <div>Carrinho</div>
        <div className="flex flex-col items-center">
          <div>LOGIN</div>
          <div>criar CADASTRO</div>
        </div>
      </div>
    </div>
  );
};

export default Header;

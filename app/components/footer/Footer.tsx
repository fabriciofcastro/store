import Container from "../container";
import { FooterList } from "./FooterList";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r  from-green-900 from-40% via-green-900 to-emerald-500 to-90% text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16">
          <FooterList>
            <h3 className="text-base font-bold md-2">Departamentos</h3>
            <Link href="#"> Celulares e Smartphones </Link>
            <Link href="#"> Laptop </Link>
            <Link href="#"> Desktop </Link>
            <Link href="#"> TVs </Link>
            <Link href="#"> Eletrodomésticos </Link>
            <Link href="#"> Eletroportáteis </Link>
            <Link href="#"> Periféricos </Link>
            <Link href="#"> Periféricos </Link>
          </FooterList>

          <FooterList>
            <h3 className="font-bold md-2 text-lg">Institucional</h3>
            <Link href="#"> Contacts </Link>
            <Link href="#"> Shipping Policy </Link>
            <Link href="#"> Returns & Exchanges </Link>
            <Link href="#"> FAQS </Link>
          </FooterList>

          <FooterList>
            <h3 className="font-bold md-2 text-lg">Horário de atendimento:</h3>
            <div className="flex flex-col gap-y-2">
              <p> 08:00 às 20:00 </p>
              <span>Segunda a Sábado,</span>
              <p> horário de Brasília </p>
              <p> (Exceto domingo e feriados) </p>
            </div>
            <div className="flex flex-col gap-y-3 mt-3">
              <p className="text-lg font-semibold">Endereço:</p>
              <p>Rua Carlos Gomes, 1321</p>
              <p>9° andar - Centro</p>
              <p>Limeira/SP - CEP: 13480-010</p>
              <p>Central SAC:</p>
              <p>(11) 3777-7502</p>
              <p>E-mail:</p>
              <p>faleconosco@kabum.com.br</p>
            </div>
          </FooterList>

          <FooterList>
            <h3 className="text-lg font-bold mb-2 ">Rede Sociais</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={40} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={40} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={40} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={40} />
              </Link>
            </div>
          </FooterList>
        </div>
        <div className="flex justify-center py-10">
          <p text-lg>
            &copy; {new Date().getFullYear()} Giornatatop. Todos os direitos
            Resevados
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

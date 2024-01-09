import Container from '../container'
import { FooterList } from './FooterList'
import Link from 'next/link'
import { MdFacebook } from 'react-icons/md'
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from 'react-icons/ai'

const Footer = () => {
  return (
    <div
      className="
    bg-gradient-to-r  
  from-green-900 
    from-40% 
    via-green-900
   to-emerald-500 to-90%
     text-slate-200 text-sm mt-16"
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold md-2">Giornatatop Category</h3>
            <Link href="#"> Phones </Link>
            <Link href="#"> Laptop </Link>
            <Link href="#"> Desktop </Link>
            <Link href="#"> Tvs </Link>
            <Link href="#"> Accessories </Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold md-2">Costumer Services</h3>
            <Link href="#"> Contacts </Link>
            <Link href="#"> Shipping Policy </Link>
            <Link href="#"> Returns & Exchanges </Link>
            <Link href="#"> FAQS </Link>
          </FooterList>

          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3>About</h3>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              accusamus, tenetur, quod blanditiis eligendi quasi distinctio
              porro numquam hic molestiae, saepe non ea est harum error
              consequatur recusandae sint! Reiciendis.
            </p>
            <p>
              &copy; {new Date().getFullYear()} Giornatatop. All rights reserve
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">FAloow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </div>
  )
}

export default Footer

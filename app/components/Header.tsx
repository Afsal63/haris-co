import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/images/Haris&Co-logo.svg';
import RightArrow from '../../public/images/icons/rightArrow.png'

export default function Header() {
  return (
    <div className="px-[80px] h-[156px] w-full bg-[#141414]  flex justify-between items-center">
      <div>
        <Image
          src={Logo}
          alt="Haris & Co."
          className="w-full h-[66px]"
        />
      </div>
      <div className='flex items-center gap-[49px]'>
        <div className="flex justify-between gap-[40px] text-white">
          <Link href="/services" className="text-[18px]">Service</Link>
          <Link href="/works" className="text-[18px]">Works</Link>
          <Link href="/clients" className="text-[18px]">Clients</Link>
          <Link href="/awards" className="text-[18px]">Awards</Link>
          <Link href="/about" className="text-[18px]">About Us</Link>
          <Link href="/blogs" className="text-[18px]">Blogs</Link>
          <Link href="/careers" className="text-[18px]">Careers</Link>


        </div>
        <div className="flex items-center">
        <Link href="/careers" className="text-[18px] text-white">
          <div className="px-[22px] py-[15px] flex items-center gap-[10px] border border-solid border-white">
           Contact Us
            <Image
          src={RightArrow}
          alt="Right arrow"
          className="w-[26px] h-full"
        />
          </div>
          </Link>
        </div>
      </div>


    </div>
  );
}
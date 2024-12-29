import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import RightArrow from "../public/images/icons/rightArrowBlack.svg";
import RightArrowOfWhite from "../public/images/icons/rightArrowOffwhite.png";
import BrandPartnerFirst from "../public/images/brandPartnerFirst.png";
import BrandPartnerSecond from "../public/images/brandPartnerSecond.png";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-white h-[80vh] w-full flex justify-center items-center">
        <p className="text-[44px] text-black font-bold">need</p>
      </div>
      <div className="h-[65vh] bg-black w-full flex flex-col gap-[87px] items-center justify-center">
        <div className="text-center w-[650px]">
          <p className="text-[40px] text-white text-opacity-50">
            Crafting transformative digital experiences for the world's leading
            brands by seamlessly blending design, technology, and marketing.
          </p>
        </div>

        <div className=" w-full flex justify-around">
          <div className="flex flex-col text-start">
            <p className="text-[30px] text-white text-opacity-50">500+</p>
            <p className="text-[30px] text-white text-opacity-50">Clients</p>
          </div>
          <div className="flex flex-col text-start">
            <p className="text-[30px] text-white text-opacity-50">1000+</p>
            <p className="text-[30px] text-white text-opacity-50">
              Projects Done
            </p>
          </div>
          <div className="flex flex-col text-start">
            <p className="text-[30px] text-white text-opacity-50">4.9</p>
            <p className="text-[30px] text-white text-opacity-50">
              Rating on Google
            </p>
          </div>
        </div>
      </div>

      <div className=" h-full p-[80px] bg-white flex justify-between items-center">
        <div className="flex flex-col  gap-[50px] h-full">
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">
              Web development & UI/UX
            </p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">Creative</p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">
              Digital PR & Communication
            </p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">
              Performance Marketing
            </p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">Production</p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">SEO</p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
          <div className="flex gap-[20px] items-center">
            <p className="text-[40px] text-black font-medium">Social Media</p>
            <Image
              src={RightArrow}
              alt="Right arrow"
              className="w-[40px] font-medium h-full"
            />
          </div>
        </div>
        <div className="flex items-center h-full">
          <p className="text-[150px] text-black font-bold">Fearless</p>
        </div>
      </div>
      <div className="h-[620px] w-full bg-black p-[80px] flex flex-col gap-[91px] ">
        <div className="flex flex-col gap-[50px]">
          <Image
            src={BrandPartnerFirst}
            alt="Right arrow"
            className="w-full  font-medium h-full object-contain"
          />
          <Image
            src={BrandPartnerSecond}
            alt="Right arrow"
            className="w-full  font-medium h-full object-contain"
          />
        </div>
        <div className="w-full flex justify-center">
          <div className="underline flex gap-[11px]">
            <Link
              href="/services"
              className="text-[18px] text-white text-opacity-[55%] "
            >
              View All Clients
            </Link>
            <Image
              src={RightArrowOfWhite}
              alt="Right arrow"
              className="w-[26px] font-medium h-full object-contain underline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

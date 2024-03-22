import Image from "next/image";
import Link from "next/link";
import { outfit } from "./fonts";
import logo from "@/public/company_logo.png";

export const Navbar = () => {
  return (
    <div className="flex justify-between py-6 px-32">
      <div className="flex items-center gap-2">
        <Image src={logo} alt="" className="w-12 h-12"></Image>
        <h1
          className={`${outfit.className} text-2xl text-black tracking-wider font-semibold`}
        >
          TigrayPoultryExpo
        </h1>
      </div>
      <div className="flex gap-8 items-center text-[#7E7C80]">
        <NavLink link="Home" />
        <NavLink link="About" />
        <NavLink link="Expo" />
        <NavLink link="FAQs" />
        <Link
          href="#"
          className="bg-black text-[#C6C5C3] py-3 px-6 font-semibold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

const NavLink = ({ link }: { link: string }) => (
  <Link href="#" className="flex flex-col group">
    <span>{link}</span>
    <span className="h-[2px] bg-black w-0 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

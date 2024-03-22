import Image from "next/image";

import company_logo from "@/public/company_logo.png";
import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

export const Footer = () => (
  <div className="flex flex-wrap whitespace-nowrap gap-24 w-full p-24">
    <div className="flex flex-col gap-8">
      <div className="place-self-start">
        <Image src={company_logo} alt="company logo" className="w-24 h-24" />
      </div>
      <div className="text-[#82888D] text-sm font-light place-self-end">
        © 2024 TigrayPoutryExpo,
        <br />
        Inc. All rights reserved.
      </div>
    </div>
    <div className="grid grid-cols-3 gap-12 flex-1">
      <FooterNav title="About" links={["Team", "Blog", "News", "Careers"]} />
      <FooterNav title="Support" links={["FAQ", "Help", "Teams", "Policy"]} />
      <FooterNav
        title="Follow"
        links={[
          <FaXTwitter className="w-5 h-5"/>,
          <FaFacebookF className="w-5 h-5"/>,
          <FaLinkedin className="w-5 h-5"/>,
          <FaInstagram className="w-5 h-5"/>,
        ]}
      />
    </div>
  </div>
);

const FooterNav = ({
  title,
  links,
}: {
  title: string;
  links: string[] | React.ReactElement[];
}) => (
  <div className="flex flex-col gap-3 text-sm text-[#82888D]">
    <h4>{title}</h4>
    <div className="flex flex-col gap-2 font-light">
      {links.map((link, index) => (
        <Link href="#" key={index}>
          {link}
        </Link>
      ))}
    </div>
  </div>
);

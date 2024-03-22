import Image from "next/image";
import Link from "next/link";

import { libre, outfit } from "@/components/fonts";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { FaStar } from "react-icons/fa";
import { RiCalendarEventFill } from "react-icons/ri";
import { FaBullhorn } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";

import hero_img from "@/public/hero_img.png";
import logo_1 from "@/public/logo_1.png";
import logo_2 from "@/public/logo_2.png";
import logo_3 from "@/public/logo_3.png";
import logo_4 from "@/public/logo_4.png";
import logo_5 from "@/public/logo_5.png";
import img_with_text from "@/public/img_with_text.png";
import funny from "@/public/funny.png";
import green from "@/public/green.png";
import one_eye from "@/public/one_eye.png";
import green_area_1 from "@/public/green_area_1.png";
import green_area_2 from "@/public/green_area_2.png";
import chicken_man from "@/public/chicken_in_suit.png";
import on_the_field from "@/public/on_the_field.png";
import chicken_plant from "@/public/chicken_plant.png";
import news_1 from "@/public/news_1.png";
import news_2 from "@/public/news_2.png";
import news_3 from "@/public/news_3.png";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="px-8">
        <div className="px-6 py-12 flex flex-col gap-12">
          <div className="grid grid-cols-5 gap-24 items-center">
            <div className="flex flex-col gap-6 items-start col-span-2">
              <h1
                className={`${libre.className} text-[#292729] text-6xl font-semibold leading-tight`}
              >
                Welcome to Tigray Poultry Expo 2024
              </h1>
              <p className="text-[#89888A] leading-loose font-light">
                Explore the ultimate poultry industry event featuring
                interactive seminars, practical workshops, and a variety of
                exhibits to foster growth and innovation
              </p>
              <button className="bg-[#FB4C3C] text-[#FDCBC2] text-sm px-9 py-3 rounded relative group hover:text-[#FB4C3C] hover:border-[#EEC0BB]">
                <span className="z-10 group-hover:text-[#FB4C3C]">
                  Register Now
                </span>
                <span className="absolute w-[0%] h-[100%] group-hover:w-[100%] top-0 left-0 rounded bg-[#FFFDFC] group-hover:border border-[#EEC0BB] transition-all duration-1000"></span>
              </button>
            </div>
            <div className="col-span-3">
              <Image src={hero_img} alt="hero image" className="object-cover" />
            </div>
          </div>
          <h2
            className={`${libre.className} text-4xl text-[#292729] text-center font-[600]`}
          >
            Event Highlights
          </h2>
        </div>
        <div className="flex justify-center items-center gap-10 sm:gap-14">
          <div>
            <Image src={logo_1} alt="" className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src={logo_5} alt="" className="w-16 h-16" />
            <h3 className={`${outfit.className} text-2xl `}>Cargill</h3>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <h3 className={`${outfit.className} text-2xl font-semibold`}>
              Tyson Foods
            </h3>
          </div>
          <div>
            <Image src={logo_4} alt="" className="w-16 h-16" />
          </div>
          <div>
            <Image src={logo_2} alt="" className="w-16 h-16" />
          </div>
          <div>
            <Image src={logo_3} alt="" className="w-16 h-16" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-32 py-32">
        <div className="grid grid-cols-7 ml-20 mr-10 gap-32">
          <div className="col-span-3">
            <Image src={img_with_text} alt="" />
          </div>
          <div className="col-span-4 grid-cols-3 flex flex-col gap-12 items-end">
            <div className="grid grid-cols-7 gap-10">
              <Image src={funny} alt="" className="col-span-2" />
              <div className="col-span-5 flex flex-col gap-8 justify-between pt-4">
                <p className="text-[#7B7A7B] pr-24 text-lg">
                  Discover the latest in poultry nutrition, health, and
                  technology solutions showcased by industry-leading experts
                </p>
                <div className="grid grid-cols-8 gap-4 sm:gap-16">
                  <Image src={green} alt="" className="col-span-3" />
                  <div></div>
                  <div className="col-span-4 grid-cols-3 flex flex-col gap-8 justify-start px-4">
                    <button className="bg-[#FFFCF9] border border-[#F0C3BD] text-[#EE9B8E] text-sm rounded-3xl px-6 py-2 w-4/6">
                      View Seminars
                    </button>
                    <button className="bg-[#F62B20] text-[#FBB8AC] px-9 py-6 rounded-[36px]">
                      Explore Workshops
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-10">
              <Image src={one_eye} alt="" className="col-span-2" />
              <div className="col-span-5 flex flex-col gap-8 justify-between pt-6 pb-2">
                <div className="text-[#7B7A7B] pr-24 ">
                  <h4 className="text-xl text-[#616063] pb-2">Why Attend?</h4>
                  <p className="text-lg">
                    Gain invaluable insights and network with pioneers in the
                    poultry industry at our carefully curated seminars and
                    workshops
                  </p>
                </div>
                <button className="bg-[#FFFCF9] border border-[#F0C3BD] text-[#EE9B8E] text-sm rounded-3xl px-6 py-2 w-fit">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-24">
          <div className="sm:w-[45%] flex flex-col gap-8 py-28 px-16 bg-[#70C677]">
            <p className="text-[#1A461D]">Seminars Schedule</p>
            <h3
              className={`${libre.className} text-[#17311D] text-2xl font-semibold w-3/5`}
            >
              Comprehensive discussions on the latest industry trends{" "}
            </h3>
            <p className="text-[#295B2D] w-4/5 font-light">
              Engaging workshops designed to equip participants with practical
              skills and knowledge on sustainable practices, biosecurity
              measures, and advancements in poultry feeding technologies
            </p>
          </div>
          <div className="sm:w-[55%] flex flex-col gap-12 pr-12">
            <div className="text-[#807E80] flex flex-col gap-4 py-4 md:pr-32">
              <h2 className={`${libre.className} text-4xl text-[#201F20]`}>
                Exhibit Showcases
              </h2>
              <p>
                Unique opportunity to explore innovative products and services
                driving the poultry industry forward
              </p>
              <p>
                Mingle with industry leaders, gain new perspectives, and
                discover the future directions of poultry science and business
                at our extensive exhibit.
              </p>
            </div>
            <button className="text-[#D7D6D3] bg-[#050406] w-fit py-5 px-10 rounded-lg">
              Book a Booth
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-11 gap-16">
          <div className="col-span-4 pl-16 flex flex-col gap-4">
            <h3 className="text-[#252325] text-3xl pr-8">Our Proud Sponsors</h3>
            <p className="text-[#8B8A8C] font-light">
              An event made possible by the support of our esteemed sponsors and
              partners
            </p>
            <div className="pt-6 mt-4 pb-16 flex flex-col items-center justify-center gap-4 text-[#858484] tracking-wider font-light bg-[#FFF] border border-[#F3F4F4] rounded">
              <Link href={"#"}>Travel Information</Link>
              <Link href={"#"}>Accommodations</Link>
              <Link href={"#"}>FAQs Section</Link>
              <Link href={"#"}>Contact Us</Link>
            </div>
          </div>
          <div className="col-span-7 bg-[#0E5E3C] py-6 rounded flex justify-around items-center text-[#E0EBE1] text-2xl">
            <div className="flex flex-col gap-12 justify-center items-center p-8">
              <FaStar />
              <h4 className="">Venue Map</h4>
            </div>
            <div className="flex flex-col gap-12 justify-center items-center p-8">
              <RiCalendarEventFill />
              <h4 className="">Event</h4>
            </div>
            <div className="flex flex-col gap-12 justify-center items-center p-8">
              <FaBullhorn />
              <h4 className="">Sponser List</h4>
            </div>
            <div className="flex flex-col gap-12 justify-center items-center p-8">
              <FaTicketAlt />
              <h4 className="">Ticket</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="bg-[#FAFAFA] pt-20 pb-24  flex justify-center items-center">
          <h2
            className={`${libre.className} text-center text-4xl font-semibold text-[#343333]`}
          >
            Harnessing the Power of
            <br />
            Pioneering Poultry
          </h2>
        </div>

        <div className="pt-24 pb-8 pl-16 pr-24 grid grid-cols-2 gap-24 items-center">
          <div className="col-span-full md:col-span-1 flex flex-col items-stretch gap-16 text-[#7A787B] font-light">
            <h3 className={`${libre.className} text-4xl text-[#1E1C1E]`}>
              Innovation
              <br />
              Hub
            </h3>
            <div className="flex flex-col gap-8 md:pr-32">
              <p>
                Spotlight on groundbreaking industry innovations and
                <br />
                transformative technologies
              </p>
              <p>
                A panoramic view of the poultry ecosystem, highlighting
                sustainability, technology advancements, and the impact of
                research on animal welfare and industry regulations.
              </p>
            </div>
          </div>
          <div className="col-span-full md:col-span-1 flex flex-col gap-16 justify-center md:pr-24">
            <div className="grid grid-cols-2 gap-4">
              <Image src={green_area_2} alt="" className="object-cover h-64" />
              <Image src={green_area_1} alt="" className="object-cover h-64" />
            </div>
            <div className="w-full flex justify-center items-center">
              <Image src={chicken_man} alt="" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FBFBFC] pt-12 pb-32">
        <div className="mr-24 grid sm:grid-cols-12 gap-24">
          <div className="col-span-4 flex flex-col gap-16">
            <div className="justify-self-start pl-16">
              <button className="text-[#FCC4BE] bg-[#ED2F2D] py-4 px-10 rounded-xl">
                Submit Query
              </button>
            </div>
            <div className="justify-self-end bg-[#FFF] flex items-end w-full h-full rounded-e-xl"></div>
          </div>
          <div className="col-span-8 grid grid-cols-11 gap-1">
            <Image
              src={chicken_plant}
              alt=""
              className="object-cover rounded-[4rem] col-span-7"
            />
            <div className="bg-[#154730] p-8 col-span-4 place-self-end mb-6">
              <Image src={on_the_field} alt="" className="object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-16 pt-20 pb-16">
          <div className="flex flex-col items-center justify-center">
            <h2
              className={`${libre.className} text-4xl text-[#252425] tracking-wider font-semibold`}
            >
              Latest News
            </h2>
            <p className="text-[#78777A] font-light tracking-wider">
              Upcoming Events and Announcements
            </p>
          </div>
          <div className="grid grid-cols-3 gap-12 p-8 px-8">
            <Card
              img={news_1}
              title="Seminar Room"
              subTitle="Workshop Schedule"
              description="Networking opportunities abound in this segment, designed for attendees to meet with experts and peers in the poultry sector"
            />
            <Card
              img={news_2}
              title="Exhibit Hall"
              subTitle="Product Innovations"
              description="This area showcases the latest in poultry equipment, feeds, and services offered by our exhibitors"
            />
            <Card
              img={news_3}
              title="Photo Lounge"
              subTitle="Speaker Corner"
              description="A space dedicated to in-depth conversations with thought leaders on dominant industry themes and future outlooks"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Card = ({
  img,
  title,
  subTitle,
  description,
}: {
  img: string | StaticImport;
  title: string;
  subTitle: string;
  description: string;
}) => (
  <Link
    href="#"
    className="bg-[#FFF] rounded-t flex flex-col gap-2 pb-4 hover:shadow-sm hover:scale-[101%] transition-all duration-300"
  >
    <Image src={img} alt={title} className="rounded" />
    <div className="flex flex-col text-[#777477] p-4 pb-8 leading-relaxed font-light gap-2">
      <h3 className="text-xl tracking-wide leading-loose">{title}</h3>
      <h4 className="">{subTitle}</h4>
      <p className="text-[#AAA8A9] font-extralight text-sm">{description}</p>
    </div>
  </Link>
);

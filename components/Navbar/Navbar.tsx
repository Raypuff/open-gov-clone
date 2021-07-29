import { FC, useState } from "react";
import Image from "next/image";
import logo from "../../assets/ogp-logo-spacing.png";
import { HiOutlineMenu } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";

const Navbar: FC = () => {
  const [search, setSearch] = useState(false);

  return (
    <div className="flex justify-center bg-gov">
      <div className="flex items-center justify-between w-full max-w-5xl px-6 xl:max-w-7xl 1.5xl:bg-gov">
        <div>
          <Image
            src={logo}
            layout="fixed"
            alt="open gov logo"
            height={46.7}
            width={200}
          />
        </div>
        <HiOutlineMenu size="1.4rem" className="xl:hidden" />
        <div className="hidden w-full xl:grid grid-cols-12">
          <div className="flex col-span-9">
            <div className="nav-link">ABOUT US</div>
            <div className="nav-link">CAREERS</div>
            <div className="nav-link">PRODUCTS</div>
            <div className="nav-link">COVID-19</div>
            <div className="nav-link">HACKATHON</div>
            <div className="nav-link">MORE</div>
            <div className="nav-link">CONTACT US</div>
          </div>
          <div className="col-span-3">
            <RiSearchLine
              size="1.4rem"
              className="ml-auto cursor-pointer"
              onClick={() => setSearch(!search)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

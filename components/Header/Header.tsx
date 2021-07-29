import { FC } from "react";
import Image from "next/image";
import merlion from "../../assets/merlion-icon.png";

const Header: FC = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-[#f0f0f0]">
        <div className="flex items-center justify-center w-full max-w-5xl px-8 xl:max-w-7xl lg:justify-start">
          <Image
            src={merlion}
            alt="merlion icon"
            layout="fixed"
            width={20}
            height={20}
          />
          <span className="px-1 text-xs py-[10px] text-[#484848]">
            A Singapore Government Agency Website
          </span>
        </div>
      </div>
    </>
  );
};
export default Header;

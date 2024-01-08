import Image from "next/image";
import React from "react";

const HeaderSearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex items-center justify-between  h-[40px] px-4 py-[9px] gap-2  ">
      <Image src="/svg/Search.svg" width={16} height={16} alt="search" />
      <input type="text" className="w-full h-full outline-none capitalize text-[15px] placeholder-[#808080]" placeholder={placeholder} />
    </div>
  );
};

export default HeaderSearchInput;

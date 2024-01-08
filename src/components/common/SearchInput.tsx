import Image from "next/image";
import React from "react";

const SearchInput = ({ placeholder }: { placeholder: string }) => {
  return (
    <div className="flex items-center gap-2 justify-between w-[300px] h-[40px] px-4 py-[10px] border border-[#d9d9d9] rounded-[4px]">
      <Image src="/svg/Search.svg" width={16} height={16} alt="search" />
      <input type="text" className="w-full h-full outline-none capitalize text-[14px]" placeholder={placeholder} />
    </div>
  );
};

export default SearchInput;

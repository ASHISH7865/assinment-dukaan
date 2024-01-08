"use client";
import React from "react";
import { usePathname } from "next/navigation";
import HeaderSearchInput from "./HeaderSearchInput";

import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const currentPathWithoutprefix = pathname.split("/")[2];
  return (
    <div className="px-8 py-3">
      <div className="flex gap-4 justify-between ">
        <div className="flex gap-4 items-center w-full">
          <span className="text-[15px] font-normal capitalize">{pathname === "/dashboard" ? "Home" : currentPathWithoutprefix}</span>
          <div className="flex items-center gap-[6px]">
            <Image src="/svg/Help.svg" width={16} height={16} alt="help" />
            <span className="text-[12px]">How it works</span>
          </div>
        </div>
        <div className="w-full">
          <HeaderSearchInput placeholder="Search features, tutorials, etc." />
        </div>
        <div className="w-full flex gap-3 justify-end">
          <Image src="/svg/Message.svg" width={40} height={40} alt="notification" />

          <Image src="/svg/CircleDown.svg" width={40} height={40} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;

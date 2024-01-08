import Image from "next/image";
import React from "react";


interface AvailableCreditProps {
  title: string;
  value: string;
}

const AvailableCredit = ({ title, value }: AvailableCreditProps) => {
  return (
    <div className="flex items-center gap-3 bg-[#353C53] px-3 py-[6px] rounded-[4px]  ">
      <div className="bg-[#ffffff] bg-opacity-10 p-[6px] rounded-[4px]">
        <Image src="/svg/Wallet.svg" width={20} height={20} alt="wallet" />
      </div>
      <div className="flex flex-col gap-[2px]">
        <span className="text-[13px] font-normal text-white text-opacity-80">{title}</span>
        <span className="text-[#ffffff] text-[16px] font-medium">{value}</span>
      </div>
    </div>
  );
};

export default AvailableCredit;

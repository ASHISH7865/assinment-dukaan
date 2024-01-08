import React from "react";
import StatsCard from "./StatsCard";
import Button from "../common/Button";
import Image from "next/image";
const Stats = [
  {
    title: "Online Orders",
    value: "231",
  },
  {
    title: "Amount Received",
    value: "₹23,92,312.19",
  },
];

interface StatsListingProps {
  title: string;
  description?: string;
}

const StatsListing = (data: StatsListingProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <span className="text-[20px] font-medium capitalize">{data.title}</span>
       <Button text="Last Month" Icon={ <Image src="/svg/ChevronRight.svg" className="text-black rotate-90" width={16} height={16} alt="arrow" />} />
      </div>
      <div className="flex gap-4">
        {Stats.map((data, index) => (
          <StatsCard key={index} title={data.title} value={data.value} />
        ))}
      </div>
    </div>
  );
};

export default StatsListing;

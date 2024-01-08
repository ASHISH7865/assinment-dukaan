import React from 'react'
interface StatsCardProps {
    title : string;
    value : string;
}

const StatsCard = (data : StatsCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-5 w-full ">
      <span className="text-[16px] font-normal capitalize text-[#4d4d4d]">{data.title}</span>
      <span className="text-[32px] font-medium capitalize leading-[38px]">{data.value}</span>
    </div>
  )
}

export default StatsCard
import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
interface SidebarLogoComponentProps {
    name : string
    link : string
    logo : string
}

const SidebarLogoComponent = ({name,link,logo} : SidebarLogoComponentProps) => {
  return (
    <div className="flex gap-3 justify-between items-center mx-2">
    <div className="flex gap-3">
      {logo && <Image className='rounded-[4px]' quality={100} src={logo} alt="logo" width={40} height={40}  />}
      <div className="flex flex-col gap-1 ">
        <span className="text-[15px] font-medium ">{name}</span>
        <Link className="text-[13px] text-[#ffffffd2] font-normal underline underline-offset-2" href={link}>
          Visit Store{" "}
        </Link>
      </div>
    </div>
    <Image src="/svg/ChevronDown.svg" className='cursor-pointer' width={20} height={20} alt="arrow" />
  </div>
  )
}

export default SidebarLogoComponent
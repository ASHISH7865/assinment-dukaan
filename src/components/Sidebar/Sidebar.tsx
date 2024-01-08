import React from "react";

import Image from "next/image";
import Link from "next/link";
import ActiveLink from "../common/ActiveLink";
import SidebarLogoComponent from "./SidebarLogoComponent";
import AvailableCredit from "./AvailableCredit";

const sidebarNavData = [
  { name: "Home", imagePath:"Home.svg", path: "/dashboard" },
  { name: "Orders", imagePath:"Order.svg", path: "/dashboard/#orders" },
  { name: "Products", imagePath:"Product.svg", path: "/dashboard/#products" },
  { name: "Delivery", imagePath:"Delivery.svg", path: "/dashboard/#delivery" },
  { name: "Marketing", imagePath:"Marketing.svg", path: "/dashboard/#marketing" },
  { name: "Analytics", imagePath:"Analytics.svg", path: "/dashboard/#analytics" },
  { name: "Payments", imagePath:"Payment.svg", path: "/dashboard/payments" },
  { name: "Tools", imagePath:"Tools.svg", path: "/dashboard/#tools" },
  { name: "Discounts", imagePath:"Discounts.svg", path: "/dashboard/#discounts" },
  { name: "Audience", imagePath:"Audience.svg", path: "/dashboard/#audience" },
  { name: "Appearance", imagePath:"Appearance.svg", path: "/dashboard/#appearance" },
  { name: "Plugins", imagePath:"Plugins.svg", path: "/dashboard/#plugins" },
];

const sidebarData = {
  name: "Nishyan",
  link: "/visit-store",
  logo: "/logo.png", // path to logo
  navData: sidebarNavData,
};

const creditData = {
  title: "Available Credit",
  value: "222.10",
};

const Sidebar = () => {
  return (
    <div className="bg-[#212540] text-white py-4 px-[10px] h-full flex flex-col justify-between">
      <div className="flex flex-col ">

      <SidebarLogoComponent name={sidebarData.name} link={sidebarData.link} logo={sidebarData.logo} />
      <div className="mt-6 flex flex-col gap-1">
        {sidebarData.navData.map((item, index) => (
          <ActiveLink href={item.path} key={index} className="flex items-center space-x-3  px-4 py-2 rounded-md">
            <Image src={`/svg/${item.imagePath}`} width={20} height={20}  alt={item.name}/>
            <span className="text-sm">{item.name}</span>
          </ActiveLink>
        ))}
      </div>
      </div>

      <div className="mt-6 flex flex-col gap-1 ">
        <AvailableCredit title={creditData.title} value={creditData.value} />
      </div>
    </div>
  );
};

export default Sidebar;

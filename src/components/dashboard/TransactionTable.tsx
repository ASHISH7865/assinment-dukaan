import { Sedgwick_Ave } from "next/font/google";
import React from "react";
import SearchInput from "../common/SearchInput";
import Button from "../common/Button";
import Link from "next/link";
import Separator from "../common/seperator";
import Pagination from "../common/Pagination";
import Image from "next/image";

const tableheader = ["Order ID", "Order Date", "Order Amount", "Transaction fees"];

const TransactionData = [
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
  { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
 { id: "#281209", date: "7 July, 2023", amount: "₹1,278", fees: "₹22" },
];



const totalItems = 1000;
const itemsPerPage = 20;

const headerStyleCondition = (header: string) => {
  if (header === "Order Amount" || header === "Transaction fees") {
    return "text-end justify-end";
  }
};

const TransactionTable = () => {
  return (
    <div className="p-3 flex flex-col gap-3">
      <div className="flex justify-between">
        <SearchInput  placeholder="search by order id ..." />
        <div className="flex gap-2">
          <Button text="Sort" Icon={<Image src="/svg/Sort.svg" width={16} height={16} alt="sort" />} />
          <Button Icon={<Image src="/svg/Download.svg" width={16} height={16} alt="download" />} />
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-10 px-3 py-[10px]">
          {tableheader.map((header, index) => (
            <div key={index} className={`flex-1 flex items-center gap-1  w-full text-[14px] font-medium text-[#4d4d4d] ${headerStyleCondition(header)} `}>
              {header}
              {header === "Transaction fees" && <Image src="/svg/Info.svg" className="cursor-pointer" width={14} height={14} alt="info" />}
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          {TransactionData.map((data, index) => (
            <>
            <div key={index} className="flex  py-[14px] px-3 gap-10">
              <Link href={"/dashboard/payments/transaction/" + data.id} className="flex-1 text-[14px] font-medium text-[#146EB4]">
                {data.id}
              </Link>
              <div className="flex-1 text-[14px] font-medium text-[#1a181e]">{data.date}</div>
              <div className="flex-1 text-[14px] font-medium text-[#1a181e] text-end">{data.amount}</div>
              <div className="flex-1 text-[14px] font-medium text-[#1a181e] text-end">{data.fees}</div>
            </div>
            <Separator orientation="horizontal"/>
            </>
          ))}
        </div>
      </div>
      <div className="mt-6 ">
        <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} />
      </div>
    </div>
  );
};

export default TransactionTable;

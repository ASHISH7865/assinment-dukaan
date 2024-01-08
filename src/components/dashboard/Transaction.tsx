import React from "react";
import TransactionTable from "./TransactionTable";


const Transaction = () => {
  return (
    <div className="flex flex-col gap-5">
      <span className="text-[20px] font-medium">Transactions | This Month</span>
      <TransactionTable />
    </div>
  );
};

export default Transaction;

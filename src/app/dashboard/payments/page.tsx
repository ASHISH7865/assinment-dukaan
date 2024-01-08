import StatsCard from "@/components/dashboard/StatsCard";
import StatsListing from "@/components/dashboard/StatsListing";
import Transaction from "@/components/dashboard/Transaction";
import React from "react";

const page = () => {
  return (
    <>
      <div>
        <StatsListing title="Overview"/>
      </div>
      <div className="mt-8">
        <Transaction />
      </div>
    </>
  );
};

export default page;

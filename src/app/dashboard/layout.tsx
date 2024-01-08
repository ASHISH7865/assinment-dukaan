import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";
import Separator from "@/components/common/seperator";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex overflow-auto lg:overflow-hidden ">
            <div className="min-w-[224px] bg-red-600 min-h-screen">
                <Sidebar />
            </div>
            <div className="w-full h-full">
                <Header />
                <Separator orientation="horizontal" />
                <div className="flex-1 p-8">{children}</div>
            </div>
        </div>
    );
};

export default DashboardLayout;
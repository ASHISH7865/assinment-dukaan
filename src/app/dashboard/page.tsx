import Link from "next/link";
import React from "react";
const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Home Page</h1>
        <p className="text-md text-gray-700 mb-4">{"Create a page in the app/dashboard folder, which is showing in sidebar. This way, you won't encounter a Page Not Found error."}</p>
        <Link href="/dashboard/payments" className="text-blue-500 text-2xl hover:text-blue-600">
          Go to Payment page? The assignment
        </Link>
        <div className="mt-4 bg-black text-white p-2 w-1/4 m-auto rounded-lg">
          <Link href="https://github.com/ASHISH7865/assinment-dukaan" target="_blank" className="">
            Code on github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

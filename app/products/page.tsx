"use client";
import React from "react";
import Layout from "@/components/layout";
import { useParams,usePathname } from "next/navigation";
import Link from "next/link";
// export const metadata = {
//   title: "Alfa Space Agrocom - Products",
// };
const Product = () => {
  const pathName = usePathname();
  return (
    <Layout>
      <section className="bg-gray-100 py-12 flex-grow flex flex-col items-center gap-5">
          <div className="text-[#7c2528] text-3xl font-semibold">Products</div>
        <div className="container max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-5 place-items-center px-2">
          <div className="shadow-md w-full min-h-[150px] grid bg-white hover:shadow-lg rounded overflow-hidden hover:scale-101 transition duration-300">
            <div className="h-50 overflow-hidden shadow-md border-black"><img src="/rice.png"/></div>
            <div className="flex justify-between items-center p-2 py-4">
              <div className="text-xl">Rices</div>
              <div><Link href={`${pathName}/rice`} className="special-btn">View All →</Link></div>
            </div>
          </div>
          <div className="shadow-md w-full min-h-[150px] grid bg-white hover:shadow-lg rounded overflow-hidden hover:scale-101 transition duration-300">
            <div className="h-50 overflow-hidden shadow-md border-black"><img src="/wheat.png"/></div>
            <div className="flex justify-between items-center p-2 py-4">
              <div className="text-xl">Wheats</div>
              <div><Link href={`${pathName}/wheat`} className="special-btn">View All →</Link></div>
            </div>
          </div>
          <div className="shadow-md w-full min-h-[150px] grid bg-white hover:shadow-lg rounded overflow-hidden hover:scale-101 transition duration-300">
            <div className="h-50 overflow-hidden shadow-md border-black"><img src="/wheatflour.png"/></div>
            <div className="flex justify-between items-center p-2 py-4">
              <div className="text-xl">Wheat Flours</div>
              <div><Link href={`${pathName}/wheatflour`} className="special-btn">View All →</Link></div>
            </div>
          </div>
          <div className="shadow-md w-full min-h-[150px] grid bg-white hover:shadow-lg rounded overflow-hidden hover:scale-101 transition duration-300">
            <div className="h-50 overflow-hidden shadow-md border-black"><img src="/pulse.png"/></div>
            <div className="flex justify-between items-center p-2 py-4">
              <div className="text-xl">Pulses</div>
              <div><Link href={`${pathName}/pulse`} className="special-btn">View All →</Link></div>
            </div>
          </div>
          </div>
      </section>
    </Layout>
  );
};

export default Product;

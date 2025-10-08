"use client";
import Image from "next/image";
import Slider from "@/components/slider";
import Carousel from "@/components/Carousel"
import Layout from "@/components/layout";
// export const metadata = {
//   title: "Alfa Space Agrocom - Home Page",
// };
export default function Home() {
 return (
  <Layout>
    <Slider/>
    <section className="container mx-auto max-w-[1400px] my-10 px-5">
      <h2 className="text-4xl font-bold text-center text-[#7c2528] mb-8">Our Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Core Value 1 */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-[#7c2528] mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h3 className="text-xl font-semibold text-[#7c2528] mb-2">Quality</h3>
          <p className="text-gray-600 text-center">
            We ensure the highest quality standards in all our products, delivering freshness and nutrition to your table.
          </p>
        </div>
    
        {/* Core Value 2 */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-[#7c2528] mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-3.866 0-7 3.134-7 7h14c0-3.866-3.134-7-7-7zM12 8V4m0 4a4 4 0 100 8m0-8a4 4 0 110 8"
            />
          </svg>
          <h3 className="text-xl font-semibold text-[#7c2528] mb-2">Sustainability</h3>
          <p className="text-gray-600 text-center">
            We prioritize eco-friendly practices to protect the environment and ensure long-term growth.
          </p>
        </div>
    
        {/* Core Value 3 */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-[#7c2528] mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM12 11c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-[#7c2528] mb-2">Integrity</h3>
          <p className="text-gray-600 text-center">
            We operate with honesty and transparency, building trust with our customers and partners.
          </p>
        </div>
    
        {/* Core Value 4 */}
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-[#7c2528] mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h3 className="text-xl font-semibold text-[#7c2528] mb-2">Innovation</h3>
          <p className="text-gray-600 text-center">
            We embrace innovation to continuously improve our products and services for our customers.
          </p>
        </div>
      </div>
    </section>
    <section className="container mx-auto max-w-[1400px] flex flex-col gap-8 my-5 px-5">
    <div className="rounded-lg text-center">
      <div className="text-3xl font-bold text-[#7c2528]">Our Rice Products</div>
      <Carousel category="rice"/>
    </div>
    <div className="rounded-lg text-center">
      <div className="text-3xl font-bold text-[#7c2528]">Our Wheat Products</div>
      <Carousel category="wheat"/>
    </div>
    <div className="rounded-lg text-center">
      <div className="text-3xl font-bold text-[#7c2528]">Our Wheatflour Products</div>
      <Carousel category="wheatflour"/>
    </div>
    <div className="rounded-lg text-center">
      <div className="text-3xl font-bold text-[#7c2528]">Our Pulse Products</div>
      <Carousel category="pulse"/>
    </div>
    </section>
  </Layout>
  );
}

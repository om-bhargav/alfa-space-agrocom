"use client";
import React from "react";
import Layout from "@/components/layout";
// export const metadata = {
//   title: "Alfa Space Agrocom - About Page",
// };
const AboutUs = () => {
  return (
    <Layout>
      {/* Main Content */}
      <section className="bg-gray-100 py-12 flex-grow">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="text-4xl font-bold text-center text-[#7c2528] mb-8">
            About Us
          </h2>
          <div className="flex flex-col lg:flex-row lg:justify-between items-start gap-5">
            {/* Left Content: Text */}
            <div className="lg:w-100 text-justify">
              <h3 className="text-2xl font-semibold text-[#7c2528] mb-4">
                Who We Are
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Alfa Agro, we are dedicated to providing premium quality
                agricultural products, including rice, wheat, wheat flour, and
                pulses. With a commitment to sustainability and excellence, we
                aim to bring the best of nature to your table.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our journey began with a vision to support farmers and deliver
                fresh, nutritious, and high-quality products to households and
                businesses. Today, we are proud to be a trusted name in the
                agricultural industry.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in innovation, integrity, and sustainability,
                ensuring that every product we deliver meets the highest
                standards of quality and care.
              </p>
            </div>

            {/* Right Content: Image */}
            <div className="flex justify-center">
              <img
                src="aboutus.png"
                alt="About Us"
                className="rounded-lg shadow-lg w-full lg:max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default AboutUs;
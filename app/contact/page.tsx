"use client";
import Layout from "@/components/layout";
import React from "react";
import { sendQuery } from "@/actions/actions";
import { useFormStatus } from "react-dom";
import SubmitButton from "@/components/submitButton";
import toast from "react-hot-toast";
// export const metadata = {
//   title: "Alfa Space Agrocom - Contact Page",
// };
const ContactUs = () => {
  const { pending } = useFormStatus();
  return (
    <Layout>
      {/* Main Content */}
      
        {/* Full-Width Image Section */}
        <div className="relative w-full h-[300px] lg:h-[600px]">
          <img
            src="/contactus.png"
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-fill"
          />
          {/* <div className="absolute inset-0 bg-transparent backdrop-blur-xs bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          </div> */}
        </div>

        {/* Location and Query Form Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 max-w-[1100px] grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 items-start">
            {/* Left: Location */}
            {/* <div> */}
              {/* <h2 className="text-2xl font-bold text-[#7c2528] mb-4">
                Our Location
              </h2> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d144.9630579153169!3d-37.81410797975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8b8f8b8f8b8!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633071234567!5m2!1sen!2sau"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            {/* </div> */}

            {/* Right: Query Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-[#7c2528] mb-4">
                Send Us a Query
              </h2>
              <form action={
                async formData => {
                  await sendQuery(formData);
                  toast.success("Query Sent Successfully!");
                }
              } className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7c2528] focus:border-[#7c2528]"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7c2528] focus:border-[#7c2528]"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    id="query"
                    rows={4}
                    name="msg"
                    className="p-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-[#7c2528] focus:border-[#7c2528]"
                    placeholder="Your Query"
                    required
                  ></textarea>
                </div>
                <SubmitButton text="Send Query"/>
              </form>
            </div>
          </div>
        </div>

    </Layout>
  );
};

export default ContactUs;
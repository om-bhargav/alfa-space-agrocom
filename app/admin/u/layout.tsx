import React from "react";
import Navbar from "@/components/admin/navbar";
import Footer from "@/components/admin/footer";

export const metadata = {
  title: "Alfa Agrocom - Admin"
};
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="grow flex flex-col bg-gray-100">{children}</div>
      <Footer />
    </div>
  );
};

export default AdminLayout;

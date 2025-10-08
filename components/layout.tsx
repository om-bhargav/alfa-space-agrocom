import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

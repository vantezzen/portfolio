import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-brand-800 text-brand-50 min-h-screen min-w-full font-inter overflow-x-hidden">
      <Navbar />
      {children}

      <div className="h-32" />
      <Footer />
    </div>
  );
}

export default Layout;

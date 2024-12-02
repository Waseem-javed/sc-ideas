import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="mx-auto">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;

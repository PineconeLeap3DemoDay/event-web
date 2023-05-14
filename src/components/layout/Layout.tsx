import React, { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { NavbarSearch } from "@/context/NavbarSearch";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <NavbarSearch>
      <Navbar />
      {children}
      <Footer />
    </NavbarSearch>
  );
};

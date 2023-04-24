import React from "react";
import { Footer } from "./footer";
import { Topnav } from "./topnav";
import { Cookies } from "./cookies";

export default function Layout({ children }) {
  return (
    <div className="w-full bg-gray-50 overflow-hidden min-h-screen">
      <div className="text-gray-900">
        <Topnav />
        <div className="contentWrapper">{children}</div>
        <Footer />
      </div>
      <Cookies />
    </div>
  );
}

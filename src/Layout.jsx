import React from "react";
import Footer from "./assets/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

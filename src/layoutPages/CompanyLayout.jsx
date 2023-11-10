import React from "react";
import Footer from "../Components/GlobalComponent/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const CompanyLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer
        info={{
          title: "Let Do this",
          LinkTitle: "Start partnership today",
          Link: "/",
        }}
      />
    </main>
  );
};

export default CompanyLayout;

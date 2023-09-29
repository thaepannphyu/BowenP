import React from "react";
import Footer from "../Components/GlobalComponent/Footer";
import { Outlet } from "react-router-dom";

const CompanyLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default CompanyLayout;

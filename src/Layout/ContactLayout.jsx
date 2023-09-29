import React from "react";
import Footer from "../Components/GlobalComponent/Footer";
import { Outlet } from "react-router-dom";

const ContactLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default ContactLayout;

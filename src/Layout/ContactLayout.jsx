import React from "react";
import Footer from "../Components/GlobalComponent/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar";

const ContactLayout = () => {
  return (
    <>
      {/* <Navbar textColor={"nav"} /> */}
      <Navbar textColor={"navWhite z-50"} />
      <Outlet />
      <Footer
        info={{
          title: "Our Thoughts",
          LinkTitle: "Read Our Minds",
          Link: "/",
        }}
      />
    </>
  );
};

export default ContactLayout;

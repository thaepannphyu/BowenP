import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/GlobalComponent/Footer";
import Navbar from "../Pages/Navbar";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomeLayout;

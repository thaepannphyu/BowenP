import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/GlobalComponent/Footer";
const HomeLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default HomeLayout;

import React from "react";
import HoverSlide from "../Components/ReuseableComponents/HoverSlide";
import "../App.css";
import { workdata } from "../Data/Work";

const Work = () => {
  return (
    <div className=" container flex justify-center flex-col mx-auto">
      <div className=" text-center justify-center  text-3xl my-11">
        Across all verticals + mediums, we craft impactful experiences for a
        connected world. Explore our web design, branding, & digital marketing
        portfolio.
      </div>
      <div className=" text-white flex justify-between lg:gap-y-28 sm:gap-y-3 flex-wrap w-full h-full ">
        <HoverSlide data={workdata} />
      </div>
    </div>
  );
};

export default Work;

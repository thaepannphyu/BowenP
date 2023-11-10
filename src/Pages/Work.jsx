import React from "react";
import HoverSlide from "../Components/ReuseableComponents/HoverSlide";
import "../App.css";
import { workdata } from "../data/Work";

const Work = () => {
  return (
    <div className="  main-content mt-16  container  flex justify-center flex-col mx-auto">
      <div className="w-full text-center h-[300px] md:h-[500px] flex justify-center items-center WorkTitle tracking-wide p-5 md:p-5 ">
        Across all verticals + mediums, we craft impactful experiences for a
        connected world. Explore our web design, branding, & digital marketing
        portfolio.
      </div>
      <div className=" text-white flex justify-between gap-y-10 md:gap-y-28 sm:gap-y-3 flex-wrap w-full h-full ">
        <HoverSlide
          data={workdata}
          width={"w-full md:w-[45%]"}
          height={"h-[350px] md:h-[500px] lg:h-[700px]"}
        />
      </div>
    </div>
  );
};

export default Work;

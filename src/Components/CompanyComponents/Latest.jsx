import React from "react";
import Values from "./Values";
import HoverSlide from "../ReuseableComponents/HoverSlide";
import CompanyAnimation from "../ReuseableComponents/CompanyANimation";
import { Link } from "react-router-dom";

const Latest = () => {
  const latestData = [
    {
      id: 1,
      Work_Title: "Work On Sport",
      Work_Background_Src:
        "https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/inc500.gif?mtime=20230815160332",
      Tabs: ["Web Design", "Web Tech"],
      Path: "/",
      pointer: "Create Yours",
    },
  ];
  return (
    <div className="md:max-h-[1200px] gap-5 container mx-auto flex-col items-start flex flex-wrap   justify-around">
      <h1 className="w-full md:w-[45%]  Heading inline-block ">
        Latest from BOWEN.
      </h1>
      {/* first card */}
      <Link
        style={{ alignSelf: "flex-end" }}
        className="w-full max-h-[550px]  order-2 md:w-[45%] ">
        <div className=" w-[70%] h-[70%]">
          <div className="h-full ">
            <img
              src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/ezgif.com-gif-maker-4.gif?mtime=20220729160950"
              alt=""
              className=" h-full w-full object-cover"
            />
          </div>
        </div>
        <div>Follow Us On instagram</div>
      </Link>
      <div
        style={{ alignSelf: "flex-end" }}
        className="w-full  max-h-[550px] order-3 md:w-[45%] flex justify-between flex-col gap-y-5">
        <h2>
          <div className=" w-10 h-[3px] bg-black  my-4"></div>A Glimpse of Q3
          2023
        </h2>
        <p className=" ">
          We just launched a new custom website bringing awareness surrounding
          electric vehicles to the Houston area, and a website introducing
          pioneering technology dedicated to improving the treatment of
          cardiovascular disease.
        </p>
      </div>
      {/* second card */}
      <div className="max-h-[550px] order-4  relative text-white flex justify-between lg:gap-y-28 sm:gap-y-3 flex-wrap w-full md:w-[35%]  ">
        <HoverSlide
          data={latestData}
          width={"w-full"}
          height={"h-[550px]"}
          right
        />
      </div>

      <Link className="w-full order-5 pe-10  flex justify-center items-center overflow-hidden h-[200px] md:h-[300px] bg-[#413954] z-10 relative  hoverUpParents    md:w-[35%]">
        <CompanyAnimation hoverUp />
        <div className=" w-[80%] h-[80%] flex justify-between flex-col">
          <h1 className=" text-3xl text-white">Carrers- Love What you do</h1>
          <p className=" text-white">Join our Agency</p>
        </div>
      </Link>
    </div>
  );
};

export default Latest;

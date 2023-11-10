import React from "react";
import HoverSlide from "../ReuseableComponents/HoverSlide.jsx";
import CompanyAnimation from "../ReuseableComponents/CompanyAnimation.jsx";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

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
    <div className="lg:w-[70%] md:max-h-[900px] lg:max-h-[1200px] lg:gap-20 gap-5 container mx-auto flex-col items-start flex flex-wrap   justify-around">
      {/* order 1 */}
      <h1 className="w-full md:w-[45%]  Heading inline-block ">
        Latest from BOWEN.
      </h1>
      {/* order 2 */}
      <Link
        style={{ alignSelf: "flex-end" }}
        className="w-full relative h-[218px] md:h-[350px] lg:h-[550px] order-1 md:order-2 md:w-[45%] lg:w-[40%]  ">
        <div className="w-full  h-full ">
          <div className="h-full ">
            <img
              src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/ezgif.com-gif-maker-4.gif?mtime=20220729160950"
              alt=""
              className=" h-full w-full object-cover"
            />
          </div>
        </div>
        <div className=" absolute text-white flex justify-center items-center gap-2 bottom-0 left-[5%] z-20">
          <FaInstagram className=" inline " />
          <span> Follow Us On instagram</span>
        </div>
      </Link>
      {/* order 3 */}
      <div
        style={{ alignSelf: "flex-end" }}
        className="w-full  max-h-[550px] order-5 md:order-3  flex justify-between flex-col gap-y-5 md:w-[45%] lg:w-[40%]">
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
      {/* order 4 */}
      <div className="lg:h-[550px] md:h-[350px] order-3 md:order-4  relative text-white flex justify-between lg:gap-y-28 sm:gap-y-3 flex-wrap w-full md:w-[45%] lg:w-[35%]  ">
        <HoverSlide
          data={latestData}
          width={"w-full"}
          height={"h-[218px] md:h-[350px] lg:h-[550px]"}
          right
        />
      </div>
      {/* order 5 */}
      <Link className="w-full order-4  md:order-5 pe-10  flex justify-center items-center overflow-hidden h-[200px] md:h-[300px] bg-[#413954] z-10 relative  hoverUpParents    md:w-[35%]">
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

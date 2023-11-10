import React from "react";

const ComLanding = () => {
  return (
    <div className="container h-[500px] md:h-auto mx-auto md:min-h-[600px] flex lg:flex-row flex-col   items-center justify-center lg:justify-between gap-6 md:gap-[5%] ">
      {/* left */}
      <div className=" relative w-full lg:w-[60%] flex justify-between flex-col gap-y-6">
        <div className=" relative overflow-hidden">
          <div className="max-h-[230px] md:max-h-[420px] ">
            <img
              src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/company-banner-1200.jpg?mtime=20181031182920"
              alt=""
              className=" object-cover"
            />
          </div>
          {/* white title */}
          <div className="z-10  whitespace-nowrap Heading  hidden   md:block absolute text-white top-[50%] left-[5%]  lg:left-[68%] lg:top-[40%]">
            <h1>Our Foundation</h1>
            <h1>is Tanacity</h1>
          </div>
        </div>
        {/* black title */}
        <div className="-z-10 Heading  md:whitespace-nowrap md:hidden lg:block lg:absolute    text-black left-[68%] top-[40%]">
          <h1 className="hidden md:block">Our Foundation</h1>
          <h1 className="hidden md:block">is Tanacity</h1>
          <h1 className=" md:hidden"> Our Foundation is Tanacity</h1>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-[25%]   ">
        <div className=" w-10 h-[3px] bg-black  my-4"></div>
        <p className=" tracking-wide">
          A top web design agency + digital marketing company obsessed with
          shifting industries, and elevating brands.
        </p>
      </div>
    </div>
  );
};

export default ComLanding;

import React from "react";

const ComLanding = () => {
  return (
    <div className="container h-[600px] md:h-auto mx-auto md:min-h-[600px] flex md:flex-row flex-col   items-center justify-center gap-6 md:gap-[15%] ">
      <div className=" relative  md:w-[60%] w-[80%] ">
        <div className=" relative overflow-hidden">
          <div className=" max-h-[420px] ">
            <img
              src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/company-banner-1200.jpg?mtime=20181031182920"
              alt=""
              className=" object-cover"
            />
          </div>
          {/* white title */}
          <div className="z-10  whitespace-nowrap  text-4xl hidden md:block absolute text-white left-[89%] top-[40%]">
            <h1>Our Foundation</h1>
            <h1>is Tanacity</h1>
          </div>
        </div>
        {/* black title */}
        <div className="-z-10 whitespace-nowrap  md:absolute text-3xl md:text-4xl  text-black left-[89%] top-[40%]">
          <h1>Our Foundation</h1>
          <h1>is Tanacity</h1>
        </div>
      </div>
      <div className=" w-[80%] md:w-[20%]   ">
        <div className=" w-10 h-[3px] bg-black  my-4"></div>
        <div className=" tracking-wide">
          A top web design agency + digital marketing company obsessed with
          shifting industries, and elevating brands.
        </div>
      </div>
    </div>
  );
};

export default ComLanding;

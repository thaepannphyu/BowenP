import React from "react";
import CarouselSlide from "../ReuseableComponents/CarouselSlide";
import { Partners } from "../../Data/Partners";
const PartnerSection = () => {
  const settings = {
    className: "center",
    centerMode: true,
    fade: true,
    infinite: true,
    centerPadding: "2px",
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 3,
    autoplay: false,
    autoplaySpeed: 500,
  };
  return (
    <div className="container mx-auto flex justify-between flex-wrap overflow-hidden">
      <div className="w-full md:w-[45%] bg-[#282533]  flex flex-col flex-wrap overflow-hidden  justify-center">
        <div className="  w-[90%] h-full  flex flex-col flex-wrap justify-center items-center md:gap-8">
          <h1 className=" md:w-[80%] lg:w-[70%] Heading text-white">
            Brands we've worked with
            <div className=" w-10 h-[2px] bg-white mt-4"></div>
          </h1>

          <p className=" md:w-[80%] lg:w-[70%] pe-10 text-justify tracking-wider  text-white">
            From funded start-ups to large-scale enterprises, our agency proudly
            partners with ambitious brands and organizations who impact the
            world around us.
          </p>
        </div>
      </div>
      <CarouselSlide slide={Partners} settings={settings} controls={true} />
    </div>
  );
};

export default PartnerSection;

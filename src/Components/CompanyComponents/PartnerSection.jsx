import React, { useRef } from "react";

import { Partners } from "../../data/Partners";
import { nanoid } from "@reduxjs/toolkit";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const PartnerSection = () => {
  const sliderRef = useRef();
  const sliderRefSm = useRef();
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
  const settingsSm = { ...settings, rows: 2, slidesPerRow: 2 };
  const partnersComponents = Partners.map((each) => {
    return (
      <div key={nanoid()}>
        <img
          src={each.img}
          alt=""
          className="mx-auto w-32 md:w-40 object-cover"
        />
      </div>
    );
  });
  return (
    <div className="container mx-auto flex justify-between flex-wrap gap-5 overflow-hidden">
      <div className="w-full p-10 md:p-0 md:w-[45%] bg-[#282533]  flex flex-col flex-wrap overflow-hidden  justify-center">
        <div className="  w-[90%] h-full  flex flex-col flex-wrap justify-center items-center md:gap-8">
          <h1 className=" md:w-[80%] lg:w-[70%] Heading text-white">
            Brands we've worked with
            <div className=" w-10 h-[2px] bg-white mt-4"></div>
          </h1>

          <p className="w-full md:w-[80%] lg:w-[70%] md:pe-10 text-justify md:tracking-wider  text-white">
            From funded start-ups to large-scale enterprises, our agency proudly
            partners with ambitious brands and organizations who impact the
            world around us.
          </p>
        </div>
      </div>
      {/* <CarouselSlide slide={Partners} settings={settings} controls={true} /> */}
      <div className={` relative  md:w-[53%] w-full "}`}>
        <div className={styleTailwind.buttonLayout}>
          <button
            className={styleTailwind.buttonStyle}
            onClick={() => sliderRef.current.slickNext()}>
            NXT
          </button>
          <button
            className={styleTailwind.buttonStyle}
            onClick={() => sliderRef.current.slickPrev()}>
            PRV
          </button>
        </div>

        <Slider {...settings} className=" hidden md:block" ref={sliderRef}>
          {partnersComponents}
        </Slider>
        <Slider {...settingsSm} className=" md:hidden" ref={sliderRefSm}>
          {partnersComponents}
        </Slider>
      </div>
      <div className={`md:hidden flex justify-between w-[90px]`}>
        <button
          className="md:w-24 mb-2 md:h-24 lg:w-24 lg:h-24 text-gray-600"
          onClick={() => sliderRefSm.current.slickNext()}>
          <FaArrowLeft />
        </button>
        <button
          className="md:w-24 mb-2 md:h-24 lg:w-24 lg:h-24 text-gray-600"
          onClick={() => sliderRefSm.current.slickPrev()}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default PartnerSection;
const styleTailwind = {
  buttonStyle: "md:w-24 mb-2 md:h-24 lg:w-24 lg:h-24 bg-black text-white",
  buttonLayout: "absolute top-[35%] right-[100%] z-10 hidden md:block",
};

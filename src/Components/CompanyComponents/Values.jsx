import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "@reduxjs/toolkit";
import { value } from "../../Data/Values";
import CompanyAnimation from "../ReuseableComponents/CompanyAnimation.jsx";

const Values = () => {
  //setting state
  const [state, setState] = useState({
    activeSlide: 0,
  });
  const settings = {
    className: "center",
    centerMode: true,
    fade: true,
    infinite: true,
    centerPadding: "2px",
    slidesToShow: 1,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    autoplay: false,
    autoplaySpeed: 500,
    beforeChange: (current, next) => setState({ activeSlide: next }),
  };
  //slide reference
  const sliderRef = useRef();
  const valueDisplayed = value.map((each) => {
    return (
      <div key={nanoid()} className=" max-h-[400px]">
        <img src={each.img} alt="" className=" w-full  object-cover" />
      </div>
    );
  });
  const numberDisplay = value.find((each) => each.id == state.activeSlide + 1);

  return (
    <div className="lg:w-[75%] container  mx-auto  flex justify-between flex-wrap items-center gap-y-5 md:gap-y-36 overflow-hidden">
      <div className="order-1 md:order-1 w-full md:text-center mx-auto  ">
        <p className=" text-base md:text-2xl lg:text-3xl w-full md:w-[72.7%] mx-auto">
          Our creative agency consists of a close-knit group of passionate
          innovators, designers, web developers, self-starters, and producers.
          Our gifted team prides ourselves in honing our hard-earned expertise,
          creating rewarding client experiences, and perfecting our craft.
        </p>
      </div>
      {/* left */}

      <div className="order-3 md:order-2 w-full md:w-[30%]   flex flex-col flex-wrap overflow-hidden  justify-center ">
        <div className=" lg:px-5 py-10 w-full h-full  flex flex-col flex-wrap justify-between  md:gap-8">
          <h1 className=" hidden md:block">OUR CORE VALUES</h1>
          <h1 className="Heading ">{numberDisplay.value}</h1>
          <p className=" h-[100px] me-auto   text-justify tracking-wider  ">
            {numberDisplay.description}
          </p>
          <div className=" mt-8 md:mt-5 lg:mt-0 w-[50%]  lg:w-[50%] flex justify-between ">
            <button
              className=" relative hoverParent"
              onClick={() => sliderRef.current.slickPrev()}>
              PRV
              <CompanyAnimation underline left />
            </button>
            <div className=" w-[0.8px] h-8 inline-block bg-black "></div>
            <button
              className=" relative  hoverParent"
              onClick={() => sliderRef.current.slickNext()}>
              NXT
              <CompanyAnimation underline />
            </button>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="order-2 md:order-3 w-full md:w-[60%] relative">
        <h1 className=" my-8 md:hidden">OUR CORE VALUES</h1>
        <Slider {...settings} ref={sliderRef}>
          {valueDisplayed}
        </Slider>
        <div className=" Number tracking-widest text-center absolute top-[10%] md:top-[-15%] lg:left-[-80%] right-[3%]  z-10">
          {numberDisplay.id > 10 ? (
            numberDisplay.id
          ) : (
            <span>0{numberDisplay.id}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Values;

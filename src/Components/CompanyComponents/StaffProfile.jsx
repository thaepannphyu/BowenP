import React, { useRef, useState } from "react";
import { staff } from "../../Data/Staff";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "@reduxjs/toolkit";
import CompanyAnimation from "../ReuseableComponents/CompanyANimation";

const StaffProfile = () => {
  //setting state
  const [state, setState] = useState({
    activeSlide: 0,
  });

  //slide reference
  const sliderRef = useRef();

  // setting of carousel slide
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    useCSS: true,
    lazyLoad: true,
    speed: 500,
    rows: 1,
    slidesPerRow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    beforeChange: (current, next) => setState({ activeSlide: next }),
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //components to display as slide-items
  const staffComponent = staff.map((each) => {
    return (
      <div key={nanoid()} className="relative  h-[600px] overflow-x-hidden">
        {each.id == state.activeSlide + 1 ? (
          <img src={each.gif} alt="" className=" w-[90%] h-full object-cover" />
        ) : (
          <img
            src={each.img}
            alt=""
            className=" w-[90%] h-full object-cover"
            lazyLoad
          />
        )}
      </div>
    );
  });
  //Active Object
  const staffDisplayed = staff.find((each) => each.id == state.activeSlide + 1);

  return (
    <div className="w-[87%] ms-auto flex justify-between items-center gap-3 flex-wrap">
      {/* left */}
      <div className=" w-[22%] h-[80%] flex  flex-col ">
        <h1 className="Heading md:mb-8">We're the good kind of crazy.</h1>
        <div className=" w-10 h-[3px] bg-black  my-4"></div>
        <div className="text-justify tracking-wide  ">
          Endlessly curious, creatively inspired and strategically-minded. Our
          leadership team speaks 9 languages but shares the common tongue of
          hustle + passion.
        </div>
      </div>
      {/* right */}
      <div className={` relative md:w-[75%] w-full `}>
        <Slider {...settings} ref={sliderRef}>
          {staffComponent}
        </Slider>

        <div
          className={`md:w-[30%] w-[75%] h-40 flex justify-evenly flex-col items-center bg-white absolute bottom-[-12%] left-[7%] z-10`}>
          {/* profile of staff */}
          <div className="w-[60%] text-center">
            <h1>{staffDisplayed.StaffName}</h1>
            <div>{staffDisplayed.StaffPosition}</div>
          </div>

          {/* button */}
          <div className=" w-[60%] flex justify-between ">
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
    </div>
  );
};

export default StaffProfile;

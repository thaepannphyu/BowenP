import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { nanoid } from "@reduxjs/toolkit";

//this carousel slide only display image

// props can be

//mandatory
//slide=array {img:""}

//not mandatory
//width= in tailwind
//autoplay=boolean
//autoplaySpeed=integer
//controls= boolean {if true display controls btn }
//rows=integer

const CarouselSlide = (props) => {
  const sliderRef = useRef();

  const partnersComponents = props.slide?.map((each) => {
    return (
      <div key={nanoid()}>
        <img src={each.img} alt="" className="m w-40 object-cover" />
      </div>
    );
  });
  console.log(props.controls);
  return (
    <div className={` relative   ${props?.width || "md:w-[53%] w-full "}`}>
      {props.controls && (
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
      )}
      <Slider {...props.settings} ref={sliderRef}>
        {partnersComponents}
      </Slider>
    </div>
  );
};

export default CarouselSlide;

const styleTailwind = {
  buttonStyle: "md:w-24 mb-2 md:h-24 lg:w-24 lg:h-24 bg-black text-white",
  buttonLayout: "absolute top-[35%] right-[100%] z-10 hidden md:block",
};

//Used this fun in
//No 1.Partners Section of Company Pages

//Concept
// if you omit controls props, must include autoplay=true props
//to work carousel

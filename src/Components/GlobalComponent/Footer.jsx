import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const [white, setWhite] = useState(false);

  return (
    <div
      className={`h-[400px] md:h-[700px] w-full ${
        white ? "bg-white" : "bg-black"
      } transition-2`}>
      <div className=" transition-all container  h-full mx-auto flex justify-center gap-7 flex-col items-center">
        <div
          onMouseEnter={() => setWhite(true)}
          onMouseLeave={() => setWhite(false)}
          className=" w-[90%] md:w-[70%] h-[60%]">
          <Link
            to={props.info.Link}
            className=" w-full h-full flex flex-col gap-7 items-center justify-center">
            <h1
              className={`HeadingExtra  ${
                white ? "text-black" : "text-white"
              }`}>
              {props.info.title}
            </h1>
            <div className={`text-2xl ${white ? "text-black" : "text-white"}`}>
              {props.info.LinkTitle}
            </div>
          </Link>
        </div>
        <div className="w-[90%] md:w-[70%] flex-wrap h-14 flex justify-between">
          <Link
            className={`${
              white ? "text-black" : "text-white"
            } w-full sm:w-[50%] md:w-auto text-center order-2 md:order-1`}>
            Pravicy And Policy
          </Link>
          <Link
            className={`${
              white ? "text-black" : "text-white"
            } w-full md:w-auto text-center order-1 md:order-2`}>
            Bowen@TwentyTwentyThree
          </Link>
          <Link
            className={`${
              white ? "text-black" : "text-white"
            } w-full sm:w-[50%] md:w-auto text-center order-3`}>
            Terms & Condition
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

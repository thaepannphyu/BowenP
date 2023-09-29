import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
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
          <Link className=" w-full h-full flex flex-col gap-7 items-center justify-center">
            <h1
              className={`HeadingExtra  ${
                white ? "text-black" : "text-white"
              }`}>
              Let's Do This
            </h1>
            <div className={`text-2xl ${white ? "text-black" : "text-white"}`}>
              Start a partnership today
            </div>
          </Link>
        </div>
        <div className="w-[90%] md:w-[70%]  h-14 flex justify-between">
          <Link className={`${white ? "text-black" : "text-white"}`}>
            Pravicy And Policy
          </Link>
          <Link className={`${white ? "text-black" : "text-white"}`}>
            Bowen@TwentyTwentyThree
          </Link>
          <Link className={`${white ? "text-black" : "text-white"}`}>
            Terms & Condition
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

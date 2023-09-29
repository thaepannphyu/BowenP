import React from "react";

// props

// underline =>underline under parents
//         Needed to give className("hoverParent relative") to parents element
//Usage
//1.Value Page btn
//2.StaffPage Btn

//hoverUp  =>a div is climb up
//Uasge
//1.Latest Bowen page card

//titleWhite =>white title
//title black =>black title
//Usage
//Still developing

const CompanyAnimation = (props) => {
  return (
    <>
      {props?.underline && (
        <div
          className={`absolute bottom-[-3%] transition-all ${
            props.left ? "left-[30%]" : "right-[30%]"
          } w-full h-[50%] bg-[#DECFEE] hoverChild -z-10 `}></div>
      )}
      {props?.hoverUp && (
        <div className=" hoverUpChild  md:top-[50%] md:left-[150%] transition-all bg-[#4E485D]"></div>
      )}
      {props?.titleWhite && (
        <div className="z-10 whitespace-nowrap  text-4xl  absolute text-white left-[89%] top-[50%]">
          {props.titleWhite}
        </div>
      )}
      {props?.titleBlack && (
        <div className="-z-10 whitespace-nowrap  absolute text-4xl  text-black left-[89%] top-[50%]">
          {props.titleBlack}
        </div>
      )}
    </>
  );
};

export default CompanyAnimation;

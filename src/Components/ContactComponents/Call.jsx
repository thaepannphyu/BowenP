import React from "react";
import { Link } from "react-router-dom";

const Call = () => {
  return (
    <div className=" absolute top-0 right-0 w-full flex justify-center flex-col  lg:gap-8">
      <div className=" w-full flex justify-center items-center flex-col lg:gap-5">
        <Link to="/">
          <img
            src="https://d3v0px0pttie1i.cloudfront.net/uploads/organization/logo/200622/1e781162.jpg"
            alt=""
            className=" object-cover w-[30%] mx-auto"
          />
        </Link>
        <hr className=" w-full" />
      </div>
      <div className="w-full  flex justify-center items-center flex-col lg:gap-5">
        <div className=" w-full  flex justify-center items-center flex-col">
          <Link>
            <img
              src="https://d3v0px0pttie1i.cloudfront.net/uploads/team/avatar/21656/5641c351.jpg"
              alt="Company Logo"
              className=" object-cover w-[65px] h-[65px]"
            />
          </Link>
          <div className=" w-full  flex justify-center items-center flex-col">
            <p className=" text-xl">BOWEN</p>
            <p className=" text-2xl">Intro Call</p>
          </div>
        </div>
        <div className=" w-[50%] mx-auto">
          <div>
            <div>
              <p>30 min</p>
            </div>
            <div>
              <p>Web conferencing details provided upon confirmation.</p>
            </div>
          </div>
        </div>
        <hr className=" w-full" />
      </div>
      {/* clendar */}
      <div className=" w-full flex justify-center items-center flex-col lg:gap-5">
        <h2 className=" font-bold text-xl">Select a Day</h2>
        {/* Calendar */}
        <div>
          <h1>Time zone</h1>
        </div>
      </div>
    </div>
  );
};

export default Call;

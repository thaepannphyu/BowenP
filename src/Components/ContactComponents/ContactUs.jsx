import React, { useEffect, useState } from "react";
import Form from "./Form";
import Call from "./Call";
import Navbar from "../../Pages/Navbar";

const ContactUs = () => {
  const [selectPage, setSelectPage] = useState(true);

  return (
    <div className="mx-auto mt-16 gap-y-48 md:gap-y-20  md:mt-0 w-full flex flex-col flex-wrap lg:block ">
      {/*left Sticky Cover */}

      <div className="order-2  md:order-1 overflow-hidden  w-[100vw] lg:w-[50%]   top-0  me-auto  left-0 right-0    backgroundImg   lg:sticky h-[510px] lg:h-screen text-white  flex justify-center flex-col items-center   lg:gap-20">
        {/* <Navbar textColor={"text-white  lg:ms-[9%] hidden md:flex  z-[80] "} /> */}
        <div className=" backgroundTransparent   h-full w-full flex justify-center items-center">
          <div className="   ms-auto w-[80%]">
            <div className=" w-[80%] flex flex-col gap-10 ">
              <h2 className=" Heading">Let's Do This.</h2>
              <p>Think we could be a good fit? We’d love to hear more.</p>
              <a href="mailto:hello@bowenmedia.com">hello@bowenmedia.com</a>
              <div className="gap-10  flex lg:flex-col justify-between flex-row  flex-wrap">
                <div className=" lg:w-full w-[40%] flex flex-col gap-5 ">
                  <h1>LONG ISLAND, NY</h1>
                  <div>
                    183 Mineola Blvd
                    <br /> Mineola, NY 11501
                    <br /> (516) 308-3539
                  </div>
                </div>
                <div className=" lg:w-full w-[40%] flex flex-col gap-5 ">
                  <h1>NEW YORK CITY</h1>
                  <div>
                    115 W 18th Street <br /> New York, NY 10011 <br /> (212)
                    390-0207
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Right Margin top  */}
      <div className="order-1 md:order-2 lg:w-[50%]  lg:-mt-[30%] lg:ms-auto flex justify-center flex-col gap-20">
        <div className=" w-full flex-col md:flex-row lg:w-[90%] flex items-center md:items-baseline md:justify-evenly me-auto">
          <h2
            className=" text-center md:text-start w-[30%] "
            onClick={() => setSelectPage(true)}>
            Fill out our Form
          </h2>
          <span>OR</span>
          <h2
            className="w-[30%] text-center md:text-end"
            onClick={() => setSelectPage(false)}>
            Schedule a call
          </h2>
        </div>
        <div className="w-full lg:w-[90%] transition-all me-auto relative">
          <div
            className={`${
              selectPage == false && " -z-10 opacity-0 transition-all"
            } m-auto w-[80%]`}>
            <Form />
          </div>
          <div
            className={`${
              selectPage == true && "z-10 opacity-0 transition-all"
            } m-auto w-[80%]`}>
            <Call />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

// Process

// Layout
// Left Hand =>sticky
//But sticky is position , so become the alyer
// To create right side , need the other layer
//set right side with w-50, items end or ms-auto

//footer is in outlet, layout page

// toogle form and call with opacity and z

// backgroundImg   h-screen text-white sticky overflow-hidden  w-[50%]  top-0  me-auto  left-0   flex justify-center flex-col items-center   lg:gap-2

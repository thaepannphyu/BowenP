import React, { useEffect, useState } from "react";
import Form from "./Form";
import Call from "./Call";

const ContactUs = () => {
  const [selectPage, setSelectPage] = useState(true);

  return (
    <div className="  z-30 w-full  ">
      {/*left Sticky Cover */}
      <div className=" backgroundImg   h-screen text-white sticky overflow-hidden  w-[50%]  top-0  me-auto  left-0   flex justify-center flex-col items-center   lg:gap-20">
        <div className=" backgroundTransparent  h-full w-full flex justify-center items-center">
          <div className="   ms-auto w-[80%]">
            <div className=" w-[80%] flex flex-col gap-10 ">
              <h2 className=" Heading">Let's Do This.</h2>
              <p>Think we could be a good fit? We’d love to hear more.</p>
              <a href="mailto:hello@bowenmedia.com">hello@bowenmedia.com</a>
              <div className="gap-10  flex lg:flex-col md:flex-row flex-col flex-wrap">
                <div className=" lg:w-full md:w-[50%] w-full flex flex-col gap-5 ">
                  <h1>LONG ISLAND, NY</h1>
                  <div>
                    183 Mineola Blvd
                    <br /> Mineola, NY 11501
                    <br /> (516) 308-3539
                  </div>
                </div>
                <div className=" lg:w-full md:w-[50%] w-full flex flex-col gap-5 ">
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
      <div className=" -mt-[30%] ms-auto w-[50%]  flex justify-center flex-col gap-20">
        <div className="  w-[90%] flex justify-evenly me-auto">
          <h2 className="w-[30%] " onClick={() => setSelectPage(true)}>
            Fill out our Form
          </h2>
          <span>OR</span>
          <h2 className="w-[30%] text-end" onClick={() => setSelectPage(false)}>
            Schedule a call
          </h2>
        </div>
        <div className=" w-[90%] transition-all me-auto relative">
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

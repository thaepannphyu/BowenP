import React, { useRef, useState } from "react";
import "../../App.css";
import { nanoid } from "@reduxjs/toolkit";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CompanyAnimation from "../ReuseableComponents/CompanyANimation";
const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    workType: ["se"],
    amount: "",
    comment: "",
  });

  const formHandler = () => {
    const { name, value } = event.target;
    console.log(data.workType);
    // console.log(data?.workType.filter((each) => !each.tag.includes(tagSelect)));
    setData((prev) => {
      console.log(value);
      return {
        ...prev,
        [name]: value,
        // workType: data?.workType.map(
        //   (each) =>
        //     !each.tag.includes(tagSelect) && [
        //       ...data.workType,
        //       { id: nanoid(), tag: tagSelect },
        //     ]
        // ),
      };
    });
  };
  const [Formcheck, setFormcheckCheck] = useState(true);

  const submitHandler = () => {
    event.preventDefault();
    if (data.companyName && data.name && (data.phone || data.email) != "") {
      setFormcheckCheck(false);

      console.log(data);
      setData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        workType: [],
        amount: "",
      });
    }
  };

  const searchRef = useRef();
  const r = useRef();

  const [searchBoxOpen, setSearchBoxOpen] = useState(true);
  const searchHandler = () => {
    setSearchBoxOpen(!searchBoxOpen);
  };

  const list = ["web", "se", "choco"];
  const [tagSelect, setTagSelect] = useState("");

  return (
    <form
      onSubmit={submitHandler}
      className={`flex  justify-center gap-12 flex-col  w-full mx-auto relative z-40`}>
      {/* Name */}
      <div className=" select-none relative pb-3 w-full border-b-[1px] border-black">
        <input
          type="text"
          name="name"
          onChange={formHandler}
          value={data.name}
          className={`bg-transparent transition-all select-none  w-full inline-block formInput`}
        />
        <label
          className={`text-base transition-all -z-10 absolute formLabel text-center ${
            data.name != "" && "top-[-100%] text-xs"
          }`}
          htmlFor="name">
          Name*
        </label>
        <div>{}</div>
      </div>
      {/* Email */}
      <div className="select-none  relative pb-3 w-full border-b-[1px] border-black">
        <input
          type="email"
          name="email"
          onChange={formHandler}
          value={data.email}
          className={`bg-transparent transition-all  select-none  w-full inline-block formInput`}
        />
        <label
          className={`text-base transition-all -z-10 absolute formLabel text-center ${
            data.email != "" && "top-[-100%] text-xs"
          }`}
          htmlFor="name">
          Email*
        </label>
        <div>{}</div>
      </div>
      {/* Phone */}
      <div className="select-none  relative pb-3 w-full border-b-[1px] border-black">
        <input
          type="number"
          name="phone"
          onChange={formHandler}
          value={data.phone}
          className={`bg-transparent transition-all select-none  w-full inline-block formInput`}
        />
        <label
          className={`text-base transition-all -z-10 absolute formLabel text-center ${
            data.phone != "" && "top-[-100%] text-xs"
          }`}
          htmlFor="email">
          Phone*
        </label>
        <div>{}</div>
      </div>
      {/* Company Name */}
      <div className="select-none relative pb-3 w-full border-b-[1px] border-black">
        <input
          type="text"
          name="companyName"
          onChange={formHandler}
          value={data.companyName}
          className={`bg-transparent transition-all w-full select-none  inline-block formInput`}
        />
        <label
          className={`text-base  transition-all  -z-10 absolute formLabel text-center ${
            data.companyName != "" && "top-[-100%] text-xs"
          }`}
          htmlFor="email">
          CompanyName*
        </label>
        <div>{}</div>
      </div>
      <h1>How would you like to work with us?</h1>
      {/* search */}
      <div className="select-none  relative pb-3  border-b-[1px] border-black">
        <label
          onClick={() => searchRef?.current.click()}
          htmlFor="search"
          className=" flex justify-between pe-5">
          <p> Select</p>
          <div className=" relative">
            <IoIosArrowDown
              className={`text-3xl ${
                searchBoxOpen == false && " opacity-0"
              } transition-all`}
            />
            <IoIosArrowUp
              className={` absolute top-0 right-0 text-3xl  ${
                searchBoxOpen && " opacity-0 "
              } transition-all`}
            />
          </div>
        </label>

        <div
          onClick={searchHandler}
          ref={searchRef}
          className={` ${
            searchBoxOpen ? "h-0 transition-all" : "max-h-[300px]    "
          }  overflow-hidden transition-all shadow-lg  bg-white z-10 w-full absolute flex flex-col gap-2 `}>
          <datalist id="list" className=" flex flex-col gap-2 w-full ">
            {list.map((each) => (
              <div
                key={nanoid()}
                onClick={() => setTagSelect(each)}
                className=" hover:bg-[#5897fb] p-2">
                {each}
              </div>
            ))}
          </datalist>
        </div>

        <div>{}</div>
      </div>
      {/* radio */}
      <h1>What is your budget?</h1>
      <div className=" flex  md:gap-10 ">
        <div className="select-none hover:text-white relative w-28 h-28 p-0   ">
          <input
            id="128K-97K"
            type="radio"
            name="amount"
            onChange={formHandler}
            value="128K-97K"
            className=" w-full h-full transition-all"
            checked={data.amount.includes("128K-97K")}
          />
          <label
            htmlFor="128K-97K"
            className={` ${
              data.amount.includes("128K-97K") && "text-white"
            } hover:text-white absolute w-full text-center top-[40%] right-[0%]`}>
            128K-97K
          </label>
        </div>
        <div className="select-none hover:text-white relative w-28 h-28 p-0   ">
          <input
            id="80K-97K"
            type="radio"
            name="amount"
            onChange={formHandler}
            value="80K-97K"
            className=" w-full h-full"
            checked={data.amount.includes("80K-97K")}
          />
          <label
            htmlFor="80K-97K"
            className={` ${
              data.amount.includes("80K-97K") && "text-white"
            } absolute  hover:text-white w-full text-center top-[40%] right-[0%]`}>
            80K-97K
          </label>
        </div>{" "}
        <div className="select-none hover:text-white relative w-28 h-28 p-0   ">
          <input
            id="50K-80K"
            type="radio"
            name="amount"
            onChange={formHandler}
            value="50K-80K"
            className=" w-full h-full"
            checked={data.amount.includes("50K-80K")}
          />
          <label
            htmlFor="50K-80K"
            className={` ${
              data.amount.includes("50K-80K") && "text-white"
            } absolute hover:text-white w-full text-center top-[40%] right-[0%]`}>
            50K-80K
          </label>
        </div>
        <div className=" hover:text-white select-none relative w-28 h-28 p-0   ">
          <input
            id="30K-50K"
            type="radio"
            name="amount"
            onChange={formHandler}
            value="30K-50K"
            className=" w-full h-full"
            checked={data.amount.includes("30K-50K")}
          />
          <label
            htmlFor="30K-50K"
            className={` ${
              data.amount.includes("30K-50K") && "text-white"
            } absolute  w-full text-center top-[40%] right-[0%]`}>
            30K-50K
          </label>
        </div>
      </div>
      {/* text area */}
      <h1>Tell us about your Project?</h1>
      <div className="select-none  relative pb-3 w-full ">
        <textarea
          name="comment"
          onChange={formHandler}
          placeholder=""
          value={data.comment}
          className=" focus:outline-none p-3 w-full lg:min-h-[120px] lg:max-h-[180px] border-[1px]"
        />
      </div>
      <div className=" w-28 h-28  flex justify-around     items-center overflow-hidden  bg-black z-10 relative  hoverUpParents    md:w-[35%]">
        <CompanyAnimation hoverUp />
        <button className="  text-white flex justify-between flex-col">
          Submit
        </button>
        <div className=" h-[1px] w-6 bg-white"></div>
      </div>
      <p>
        This site is protected by reCAPTCHA and the Google{" "}
        <a href="" className=" text-blue-600 ">
          Privacy Policy{" "}
        </a>{" "}
        and{" "}
        <a href="" className=" text-blue-600">
          Terms of Service{" "}
        </a>
        apply.
      </p>
    </form>
  );
};

export default Form;

import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { nanoid } from "nanoid";

//Props can be
//data =>Mandatory

const HoverSlide = (props) => {
  const color = () => {
    if (Math.round(Math.random() * 100) < 10) {
      return "red";
    } else if (Math.round(Math.random() * 100) < 20) {
      return "black";
    } else if (Math.round(Math.random() * 100) < 30) {
      return "green";
    } else if (Math.round(Math.random() * 100) < 40) {
      return "orange";
    } else if (Math.round(Math.random() * 100) < 50) {
      return "aqua";
    } else if (Math.round(Math.random() * 100) < 60) {
      return "pink";
    } else {
      return "blue";
    }
  };
  return (
    <>
      {props.data.map((each, index) => {
        return (
          <Link
            to={each.Path}
            key={nanoid()}
            className={` text-white sm:w-full ${
              props.width ? props.width : "md:w-[47%]"
            } ${props.height ? props.height : "h-[600px]"} h-full   relative ${
              index % 2 && "  md:translate-y-28"
            } shadow-lg`}>
            <div className="flex  justify-between relative hover_Slide  transition-all overflow-hidden">
              <div
                className={`${
                  props.height ? props.height : "h-[600px]"
                } w-full   relative flex justify-center`}>
                <img
                  src={each.Work_Background_Src}
                  alt=""
                  className=" object-cover w-full"
                />
                <div className=" transparentOnCard  w-full z-30 p-9 absolute flex flex-col justify-between h-full">
                  <h1 className=" WorkTitleSmall">{each.Work_Title} </h1>
                  <div className="flex ">
                    {each.Tabs.map((eachTag) => (
                      <div
                        key={nanoid()}
                        className=" flex gap-2 me-2 items-center">
                        <span className=" tracking-wide uppercase text-xs md:text-base font-bold">
                          {eachTag}
                        </span>
                        <div className=" h-5 w-[1.8px] bg-white"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundColor: color() }}
                className={`w-full ${
                  props.height ? props.height : "h-[600px]"
                }   animationSlide 
            
                `}></div>
              <div
                className={`absolute View_Project_Link text-white top-[60%] ${
                  index % 2 || props.right ? "right-[-10%]" : "left-[-10%]"
                } z-10 WorkTitle border-b-2 border-white`}>
                {each.pointer}
              </div>
            </div>
            <div
              className={`absolute  hover_Slide_Blackpointer View_Project_Link text-black top-[60%] ${
                index % 2 || props.right ? "right-[-10%]" : "left-[-10%]"
              } -z-10 WorkTitle  border-b-2 border-black`}>
              {each.pointer}
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default HoverSlide;

//Used this props IN
// 1 . Work Pages

//Concept
//data must be array and must be in the standard form.
//Most important ? the following key must include
// [{
//   id: 1,
//   Work_Title: "Work On Sport",
//   Work_Background_Src:
//     "https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/walkons-left-image-5-1.jpg?mtime=20230725151957",
//   Tabs: ["Web Design", "Web Tech"],
//   Path: "/",
//   pointer: "Create Yours",
// },]

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import label from "../assets/1e781162.jpg";
const Navbar = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav
        className={`${props.textColor} overflow-hidden    mx-auto w-[90vw]  absolute top-0 left-0 right-0  flex justify-between mt-8 items-center`}>
        <img src={label} alt="" className=" object-cover h-6" />
        <div className="hidden lg:flex justify-between w-[80%]">
          <NavLink to="/" className={`${props?.z} navHover `}>
            <p className="text-sm tracking-widest">WORK</p>
          </NavLink>
          <NavLink to="/company" className={`${props?.z} navHover`}>
            <p className="text-sm tracking-widest">COMPANY</p>
          </NavLink>
          <NavLink to="/contact" className={` navHover`}>
            <p className="text-sm tracking-widest">CONTACT</p>
          </NavLink>
          <Link className={` navHover`}>Schedule a call</Link>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${
            menuOpen == true
              ? "  opacity-0 lg:hidden"
              : "  opacity-100 absolute right-0  lg:hidden z-10"
          } transitionNav transitionDelay`}>
          MENU
        </div>
      </nav>
      <nav
        className={`${
          menuOpen == true
            ? "visible scaleY1"
            : " invisible  scaleY0 -z-10 transitionDelay"
        } overflow-hidden  lg:hidden bg-black top-0 origin-top    transitionNav fixed z-[100] 
    `}>
        <div className="flex mt-8 flex-col w-[90%] mx-auto">
          <div className="w-full flex  justify-between">
            <img src={label} alt="" className=" object-cover h-6" />
            <div
              onClick={() => setMenuOpen(!menuOpen)}
              className={`${
                menuOpen == false
                  ? " opacity-0 "
                  : " opacity-100 right-0 lg:hidden z-50"
              } text-white  transitionNav  transitionDelay`}>
              CLOSE
            </div>
          </div>
          <div
            className={`${menuOpen == true ? "visible " : " invisible  "}${
              props.textColor
            } h-[300px]  p-5 text-white w-full   mx-auto flex-col  navAni  flex items-center`}>
            <div className="flex flex-col items-start justify-center  w-full  gap-y-[15%] h-[90%] ">
              <NavLink to="/" className={`${props?.z} navHover `}>
                <p className="text-sm tracking-widest">WORK</p>
              </NavLink>
              <NavLink to="/company" className={`navHover`}>
                <p className="text-sm tracking-widest">COMPANY</p>
              </NavLink>
              <NavLink to="/contact" className={` navHover`}>
                <p className="text-sm tracking-widest">CONTACT</p>
              </NavLink>
            </div>
          </div>
          <Link className={`  navHover w-full flex justify-start`}>
            <span className=" text-white">Schedule a call</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
//     position: absolute;
//     top: 0;
//     display: -webkit-box;
//     display: -ms-flexbox;
//     display: flex;
//     width: 100%;
//     z-index: 80;
// }

// nav.white-nav {
//     color: #fff;
//     fill: #fff;
//     opacity: 1;
//     -webkit-transition: opacity .5s;
//     -o-transition: opacity .5s;
//     transition: opacity .5s;
//     z-index: 70!important;

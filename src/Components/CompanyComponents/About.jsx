import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const About = () => {
  const [togleControls, setTogleControls] = useState(false);
  const videoRef = useRef();
  const playHandler = () => {
    videoRef.current?.play();
    setTogleControls(true);
  };

  return (
    <section className="container h-[550px] md:h-auto mx-auto flex flex-col gap-8">
      <div className="  mx-auto md:w-full flex justify-center flex-col gap-10 md:gap-14 ">
        <h1 className="w-full md:w-[80%] lg:w-[60%] mx-auto tracking-wider   md:text-center Heading">
          A Global Presence with a New York State of Mind.
        </h1>
        <p className=" w-full md:w-[80%] lg:w-[60%] mx-auto md:tracking-wide  md:text-center">
          Our web design agency has propelled the growth of our partners through
          innovation and creative strategy. We started as a Long Island web
          design company and evolved into a full-service digital agency,
          partnering with clients throughout the world. Our purpose is to
          connect and positively impact humans through creativity, technology,
          and stunning brand experiences.
        </p>
      </div>
      <div className=" w-full">
        <div className=" relative ">
          <video
            ref={videoRef}
            src="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/bowen-company-video-2020.mp4?mtime=20200217123146"
            poster="https://bowen-assets.nyc3.cdn.digitaloceanspaces.com/videoscreen.jpg?mtime=20181106110925"
            controls={togleControls}></video>
          <div
            onClick={() => playHandler()}
            className={`${
              togleControls && "hidden"
            } bg-[#001eff] rounded-[50%] top-[33%] left-[45%] z-10 w-20 h-20 flex justify-center items-center absolute play-btn`}>
            <FaPlay className=" text-white text-3xl " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

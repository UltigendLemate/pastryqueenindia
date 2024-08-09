import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-[100vw] md:w-[98.8vw] py-16 md:py-2 p-2 relative mt-28   bg-white min-h-[40vh] md:min-h-[90vh] text-primary mainbg grid  justify-center items-center font-pop">
      <div className="absolute bg-primary text-white z-20 w-full top-0 pt-1">
        {/* <marquee behaviour="scroll" className="text-2xl">Participate in the &apos;Pastry Queen India 2024&apos;,
the National Pastry Team selection for the prestigious
&apos;The Pastry Queen World Cup&apos; to be held at SIGEP, Italy in 2025.</marquee> */}
      </div>

      <div className="absolute w-full h-full bg-black/80 z-0"></div>
      <div className="z-20">
        <div className="flex flex-col text-center text-white text-3xl font-extrabold">
          <img
            src="/pp/elle.svg"
            className="mx-auto  h-20 md:h-32 my-4  rounded-xl "
            alt=""
          />
          <p className="text-lg md:text-2xl  font-bold">Presents</p>
        </div>
        <h1 className="special-font text-[3.4rem] text-center sm:text-7xl mb-3 md:text-8xl lg:text-9xl  text-primary z-50">
          PASTRY EVENT
        </h1>

        <div className="text-white text-[1.1rem] mx-auto w-full text-center sm:text-3xl lg:text-5xl font-bold uppercase">
          Pastry Queen India 2024
        </div>
        <h2 className="text-md p-2 text-center sm:text-2xl md:text-2xl mt-3 font-semibold text-white">
          03-04 August 2024, Indian Expo Centre & Mart, Greater Noida, NCR,
          India
        </h2>

        <div className=" text-center text-white mt-5 italic text-md md:text-2xl font-semibold">
          Powered By
          <img
            src="/pp/delta.png"
            className="ml-5 mb-3 inline h-20  md:h-28 rounded-xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

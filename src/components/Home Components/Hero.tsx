import React from "react";
import { Button } from "../ui/button";
import Search from "./Search";
import hero from "../../assets/hero.jpg";
import hero_left from "../../assets/hero-left.png";
import hero_right from "../../assets/hero-right.png";
const Hero = () => {
  return (
    <div className="w-full relative flex items-center justify-center">
      <div className=" relative w-full   h-[690px]">
        <div className="bg-black/50  z-10 flex-col  top-0 bottom-0 left-0 right-0 absolute w-full h-full flex items-center justify-center">
          <div className="w-full gap-12  flex-col   h-full flex items-center justify-center">
            <h3 className="text-5xl relative font-bold leading-snug text-white">
              {" "}
              Digitalized Management <br /> for EPC Contractors{" "}
            </h3>
            {/* <div className="absolute m-auto h-[40%] justify-between  flex-col  top-0 left-0 bottom-0 right-0 w-[35%]  flex items-center">
              <div className="w-full flex items-start">
                <img className="w-12" src={hero_left} />
              </div>
              <div className="w-full flex items-center  justify-end">
                <img className="w-12" src={hero_right} />
              </div>
            </div> */}

            <Button className="bg-[#386A8B] hover:bg-slate-600 rounded-none py-6 px-12 z-10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex absolute  h-full w-full">
          <img
            src={hero}
            className="h-full -scale-x-100 w-full object-cover"
            alt="hero"
          />
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Hero;

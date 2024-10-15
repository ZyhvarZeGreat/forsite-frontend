import React from "react";
import { Button } from "../../ui/button";
import img1 from "../../../assets/portfolio3.jpg";
const Purpose = () => {
  return (
    <div className="max-w-[1366px] flex items-center justify-center gap-6 w-full">
      <div className="flex w-full h-[700px] mt-12 items-center justify-center   gap-6">
        <div className=" flex w-full ">
          <div className="flex w-1/2 flex-col gap-6 items-start  text-start justify-start">
            <h2 className="text-4xl font-semibold">Project Management Tool</h2>
            <p className="text-xl leading-7">
              Manage pre-site, site and post site activities seamlessly. <br />{" "}
              Create tenders, contracts and client communications all in one
              place.
            </p>
            <Button className="bg-[#386A8B] hover:bg-slate-600 rounded-none py-6 px-8 z-10">
              Learn More
            </Button>
          </div>
          <div className="flex w-1/2 relative flex-col items-center justify-start">
            <div className="h-[302px]  w-[514px] border-2 border-[#386A8B]"></div>
            <div className="h-[302px] absolute  left-36 bottom-16 w-[514px] ">
              <img src={img1} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;

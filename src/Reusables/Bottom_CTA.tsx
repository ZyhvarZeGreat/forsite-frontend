import React from "react";
import { Button } from "../components/ui/button";

const Bottom_CTA = () => {
  return (
    <div className="w-full items-center justify-center bg-[#386A8B]  flex">
      <div className="w-full h-[200px] max-w-[1366px] flex items-center justify-between  text-white text-3xl">
        <h3 className="font-medium">
          Require assistance? Let's have a conversation.
        </h3>
        <Button className=" bg-white text-[#386A8B] text-[13.29px] rounded-none h-[56px]   w-[132px]">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Bottom_CTA;

import React from "react";
import { Outlet } from "react-router-dom";

const Execution = () => {
  return (
    <div className="w-full mx-auto flex flex-col px-8">
      <Outlet />
    </div>
  );
};

export default Execution;

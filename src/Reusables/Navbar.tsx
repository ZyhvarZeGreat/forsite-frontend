import React from "react";
import image from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
const Navbar = () => {
  const links = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "For Clients",
      to: "/for-clients",
    },
    {
      text: "For Engineers",
      to: "/for-engineers",
    },
    {
      text: "About",
      to: "/about",
    },
  ];
  const { pathname } = useLocation();
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 ">
      <div className="max-w-[1366px] w-full  justify-between flex items-center ">
        <div className="">
          <img className="w-12" src={image} />
        </div>
        <div className="flex gap-12 ">
          {links.map((link, i) => {
            return (
              <Link
                className={cn(link.to.includes(pathname) && "text-[#386A8B]")}
                key={i}
                to={link.to}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-8">
          <Link to={"/login"}>Login</Link>
          <Link className=" border-primary border-2 px-6 py-3.5" to={"/signup"}>
            Get Started
          </Link>
        </div>
      </div>
      <div className="bg-gray-100/60 mt-6 h-0.5 w-full"></div>
    </div>
  );
};

export default Navbar;

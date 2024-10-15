import image from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
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
      <div className="max-w-[1366px] px-6 xl:px-0 w-full  justify-between flex items-center ">
        <div className="">
          <img className="w-12" src={image} />
        </div>
        <div className="hidden xl:flex gap-12 ">
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
        <div className="hidden xl:flex items-center gap-8">
          <Link to={"/login"}>Login</Link>
          <Link className=" border-primary border-2 px-6 py-3.5" to={"/signup"}>
            Get Started
          </Link>
        </div>
        <div className="flex xl:hidden self-center items-center justify-between">
          <Sheet>
            <SheetTrigger>
              <Button variant={"ghost"} className="flex items-center gap-8">
                <HamburgerMenuIcon className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-12">
                {links.map((link, i) => {
                  return (
                    <Link
                      className={cn(
                        link.to.includes(pathname) && "text-[#386A8B]"
                      )}
                      key={i}
                      to={link.to}
                    >
                      {link.text}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="bg-gray-100/60 mt-6 h-0.5 w-full"></div>
    </div>
  );
};

export default Navbar;

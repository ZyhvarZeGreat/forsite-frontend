import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import image from "../assets/logo.png";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="bg-[#373737] sm:h-[320px] font-regular text-[#8D8D8D] flex items-center justify-center w-full">
      <div className="max-w-[1366px] flex-col sm:flex-row px-6 xl:px-0 justify-around gap-32 flex  w-full ">
        <div className="flex flex-col gap-12 sm:gap-0 sm:flex-row  items-center w-full justify-start lg:gap-[20rem]">
          <div className="flex flex-col gap-4 text-start">
            <img src={image} className="w-16" />
            <span>
              Streamline your engineering processes to <br />
              deliver the best outcomes for your clients
            </span>
            <p className="hidden sm:block text-white">
              {" "}
              2023 cog. All Rights Reserved{" "}
            </p>
          </div>
          <div className="flex w-full sm:w-auto flex-col gap-4 text-start">
            <Link to="/about">About</Link>
            <Link to="/for-clients">For Clients</Link>
            <Link to="/for-engineers">For Clients</Link>
            <div className="block py-8 sm:hidden w-full sm:w-auto flex-col gap-4 text-start">
              <p className=" text-start text-white">
                {" "}
                2023 cog. All Rights Reserved{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <Button className="h-14 w-14 rounded-full bg-white">
            <ArrowUpIcon className="h-8 w-8" color="#000" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

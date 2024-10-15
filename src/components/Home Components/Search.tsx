import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchNormal, Location } from "iconsax-react";
const Search = () => {
  return (
    <div className=" shadow-xl px-4 text-[#4B5B65] z-20 font-semibold flex gap-8 w-full items-center -bottom-8 rounded-[8px] bg-white  absolute h-[80px] max-w-[1037px]">
      <div className="w-1/2 relative h-full">
        <Input
          className="h-full px-8  border-none focus:outline-none"
          placeholder="What type of  service are you looking for"
        />
        <div className="absolute bottom-0 top-0 left-0 flex items-center ">
          <SearchNormal className="h-5 w-5" />
        </div>
      </div>
      <hr className=" w-[0.5px] bg-[#CCD1D4] rounded-md h-3/6 rotate-180" />
      <div className="w-1/2 relative h-full">
        <Input
          className="h-full px-8 w-full border-none"
          placeholder="Location"
        />
        <div className="absolute px-2 bottom-0 top-0 left-0 flex items-center ">
          <Location className="h-5 w-5" />
        </div>
      </div>

      <div className="flex items-center mr-8 justify-center">
        <Button className="bg-[#386A8B] h-12 w-32 text-md hover:bg-slate-600 rounded-md  z-10">
          Search
        </Button>
      </div>
    </div>
  );
};

export default Search;

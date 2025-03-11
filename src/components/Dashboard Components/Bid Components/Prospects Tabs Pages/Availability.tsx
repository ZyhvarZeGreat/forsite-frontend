import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

import { prospectScenes } from "../Prospects_Tabs";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../ui/tabs";
import { Link } from "react-router-dom";
const Availability = ({
  scene,
  setScene,
}: {
  scene: prospectScenes;
  setScene: (scene: prospectScenes) => void;
}) => {
  return (
    <div className="w-full flex flex-col mt-24 mb-32 items-center justify-center">
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
        className=" shadow-gray-300/50  gap-8 rounded-xl flex min-h-[637px] flex-col items-center justify-start w-full max-w-[758px] py-6 "
      >
        <div className="flex w-full items-center justify-start h-[4rem] border-b border-gray-300 ">
          <h1 className="text-2xl px-10 font-bold">
            Availability for sales conversion meeting
          </h1>
        </div>
        <div className=" w-full gap-8">
          <Tabs defaultValue="one-time-project">
            <div className="flex items-center justify-center  w-full">
              <TabsList className="grid h-[3.8rem] bg-[#386A8B]/70 w-10/12  text-white  items-center   rounded-full      grid-cols-2 font-semibold">
                <TabsTrigger
                  className=" text-lg col-span-1 data-[state=active]:rounded-full py-2  rounded-l-none  h-full "
                  value="one-time-project"
                >
                  <Link className="text-base" to="?status=one-time-project">
                    One Time Meeting
                  </Link>
                </TabsTrigger>
                <TabsTrigger
                  className=" rounded-l-none col-span-1 data-[state=active]:rounded-full py-2 text-lg h-full "
                  value="per-deliverable"
                >
                  <Link className="text-base" to="?status=recurring-project">
                    Recurring Meeting
                  </Link>
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="one-time-project">
              <div className="grid grid-cols-2 gap-6 mt-12 px-10">
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">Start Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">End Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">Start Time</label>
                  <input
                    type="time"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">End Time</label>
                  <input
                    type="time"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="per-deliverable">
              <div className="grid grid-cols-2 gap-6 mt-12 px-10">
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">Start Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">End Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">Start Time</label>
                  <input
                    type="time"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">End Time</label>
                  <input
                    type="time"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex flex-col w-full items-start">
                  <label className="text-md font-medium">
                    Recurring Frequency
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Daily" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Hourly</SelectItem>
                      <SelectItem value="dark">Daily</SelectItem>
                      <SelectItem value="system">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="system">Hourly</SelectItem>
                    </SelectContent>
                  </Select>{" "}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex mt-10 gap-6 w-[90%] items-start justify-end ">
          <button
            onClick={() => {
              // addedScenes.push("Project Details");
              setScene("Summary");
            }}
            className=" text-white rounded-md bg-[#386A8B] hover:text-white h-12 px-12  hover:bg-[#386A8B]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Availability;

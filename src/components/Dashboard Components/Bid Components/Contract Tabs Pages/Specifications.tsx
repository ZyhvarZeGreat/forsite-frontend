import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

import { contractScenes } from "../Contract_Tabs ";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../ui/tabs";
import { Link } from "react-router-dom";

const Specifications = ({
  scene,
  setScene,
}: {
  scene: contractScenes;
  setScene: (scene: contractScenes) => void;
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
          <h1 className="text-2xl px-10 font-bold">Project Delivarables</h1>
        </div>
        <div className=" w-full gap-8">
          <Tabs defaultValue="one-time-project">
            <div className="flex items-center justify-center  w-full">
              <TabsList className="grid mx-auto bg-transparent h-[3.2rem] w-full border-b border-gray-300 shadow-none rounded-none   text-gray-300  items-center         grid-cols-2 font-semibold">
                <TabsTrigger
                  className=" text-sm bg-transparent data-[state=active]:shadow-none rounded-none col-span-1 data-[state=active]:bg-transparent  py-2 data-[state=active]:text-[#386A8B] border-b-2 data-[state=active]:border-b-[#386A8B] rounded-l-none  h-full "
                  value="one-time-project"
                >
                  <Link to="?status=by-client">By Client</Link>
                </TabsTrigger>
                <TabsTrigger
                  className=" rounded-l-none bg-transparent data-[state=active]:shadow-none rounded-none data-[state=active]:bg-transparent col-span-1 border-b-2 data-[state=active]:text-[#386A8B] data-[state=active]:border-b-[#386A8B]  py-2 text-sm h-full "
                  value="per-deliverable"
                >
                  <Link to="?status=by-vendor">By Vendor</Link>
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="one-time-project">
              <div className="grid mx-auto grid-cols-2 max-h-[400px] overflow-y-scroll place-items-center w-[90%] gap-8">
                <div className="flex w-full items-start col-span-2  flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Add a deliverable
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Select a provision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">Description</label>
                  <textarea
                    placeholder="Enter a description"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">Resources</label>
                  <textarea
                    placeholder="Enter a description"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-1 flex-col gap-4">
                  <label className="text-md font-medium">Start Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-1 flex-col gap-4">
                  <label className="text-md font-medium">End Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Attach Consultant
                  </label>
                  <input
                    type="text"
                    placeholder="Attach Consultant"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2  flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Attach supervisor/personnel
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Select a provision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Attach Vendor/Third Party
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a vendor/third party"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2  flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Unit Measurement
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">Amount</label>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="per-deliverable">
              <div className="grid grid-cols-2 mx-auto mt-8 max-h-[400px] overflow-y-scroll place-items-center w-[90%] gap-8">
                <div className="flex w-full items-start col-span-2  flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Add a deliverable
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Select a provision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">Description</label>
                  <textarea
                    placeholder="Enter a description"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">Resources</label>
                  <textarea
                    placeholder="Enter a description"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-1 flex-col gap-4">
                  <label className="text-md font-medium">Start Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-1 flex-col gap-4">
                  <label className="text-md font-medium">End Date</label>
                  <input
                    type="date"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Attach Consultant
                  </label>
                  <input
                    type="text"
                    placeholder="Attach Consultant"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2  flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Attach supervisor/personnel
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Select a provision" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Attach Vendor/Third Party
                  </label>
                  <input
                    type="text"
                    placeholder="Enter a vendor/third party"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
                <div className="flex w-full items-start col-span-2  flex-col gap-4">
                  <label className="text-md font-medium  ">
                    Unit Measurement
                  </label>
                  <Select>
                    <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex w-full items-start col-span-2 flex-col gap-4">
                  <label className="text-md font-medium  ">Amount</label>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex mt-10 gap-6 w-[90%] items-start justify-end ">
          <button
            onClick={() => {
              // addedScenes.push("Project Details");
              setScene("Payment Schedule");
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

export default Specifications;

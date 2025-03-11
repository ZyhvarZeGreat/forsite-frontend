import { Edit, Link as LinkIcon } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
const Schedule = () => {
  return (
    <div className="flex  gap-8 w-full items-start justify-center">
      <div className="flex  w-4/12  flex-col items-center gap-8">
        <div className="border flex w-full flex-col   gap-4 border-black p-6">
          <div className="w-full flex py-2 items-start justify-between">
            <h2 className="text-xl font-semibold">Project Details</h2>
            <Edit />
          </div>
          <div className="flex-col ">
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Project Type</p>
              <p>Civil works</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Phone Number</p>
              <p>0703456789</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Location</p>
              <p>Abuja</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Stakeholders</p>
              <p>3</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Quality Value</p>
              <p>100</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Start Date</p>
              <p>2024-01-01</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Estimated End Date</p>
              <p>2024-01-01</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Status</p>
              <p>Active</p>
            </div>
            <div className=" border-t text-base w-full flex items-start justify-between py-4">
              <p> Project Summary</p>
              <Link className="flex items-center gap-2" to="#">
                View <LinkIcon />
              </Link>
            </div>
          </div>
        </div>

        <div className="border flex w-full flex-col   gap-2 border-black py-3 px-6">
          <div className="w-full flex py-2 items-start justify-between">
            <h2 className="text-xl font-semibold">Next Schedule</h2>
            <Edit />
          </div>
          <div className="flex-col ">
            <div className="  text-base w-full flex items-start justify-between py-2">
              <p> February 10, 2024</p>
              <p>9:00 AM</p>
            </div>
            <div className="  text-base w-full flex items-start justify-between py-2">
              <p> Deployment of Amalgamated Sheets</p>
            </div>
            <div className="  text-base w-full flex items-start justify-between py-2">
              <p>Engr Mustapha Ogunmepon</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-8/12 items-center flex-col justify-center">
        <div className="flex w-full mt-6 border-b border-b-gray-300/30 items-center justify-start px-6">
          <p className="text-3xl font-semibold py-6">Create Schedule</p>
        </div>
        <div className="grid grid-cols-2 mx-auto mt-8 max-h-[800px] overflow-y-scroll place-items-center w-[90%] gap-8">
          <div className="flex w-full items-start col-span-2 flex-col gap-4">
            <label className="text-md font-medium  ">Title of Schedule</label>
            <input
              type="text"
              placeholder="Enter Schedule Title"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          {/* <div className="flex w-full items-start col-span-2  flex-col gap-4">
            <label className="text-md font-medium  ">Add a deliverable</label>
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
          </div> */}
          <div className="flex w-full items-start col-span-2 flex-col gap-4">
            <label className="text-md font-medium  ">Description</label>
            <textarea
              rows={5}
              placeholder="Enter a description"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300   p-4"
            />
          </div>
          <div className="flex w-full items-start col-span-2 flex-col gap-4">
            <label className="text-md font-medium  ">
              Responsible department
            </label>
            <input
              type="text"
              placeholder="Enter responsible department"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          <div className="flex w-full items-start col-span-2 flex-col gap-4">
            <label className="text-md font-medium  ">Assigned personnel</label>
            <input
              type="text"
              placeholder="Enter assigned personnel"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          <div className="flex w-full items-start col-span-2 flex-col gap-4">
            <label className="text-md font-medium">Execution Date</label>
            <input
              type="date"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
            />
          </div>

          <div className="flex w-full items-start col-span-1 flex-col gap-4">
            <label className="text-md font-medium">Start Time</label>
            <input
              type="time"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
            />
          </div>
          <div className="flex w-full items-start col-span-1 flex-col gap-4">
            <label className="text-md font-medium">End Time</label>
            <input
              type="time"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12 p-4"
            />
          </div>
          <div className="flex w-full items-start col-span-2 flex-col gap-4">
            <label className="text-md font-medium  ">Attach Consultant</label>
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
            <label className="text-md font-medium  ">Appointment Type</label>
            <Select>
              <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                <SelectValue placeholder="Select a schedule type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

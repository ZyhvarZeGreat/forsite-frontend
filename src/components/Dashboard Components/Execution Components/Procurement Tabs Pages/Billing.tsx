import { Edit, Link as LinkIcon } from "iconsax-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui/button";

const Billing = () => {
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
            <h2 className="text-xl font-semibold">All invoices</h2>
            <Edit />
          </div>
        </div>
      </div>
      <div className="flex w-8/12 mx-auto  items-center flex-col justify-center">
        <div className="flex w-full  gap-16 mt-6 items-center justify-center px-6">
          <hr className="h-4 w-1/3 mt-4" />
          <p className="text-lg font-semibold py-6">All invoices</p>
          <hr className="h-4 w-1/3 mt-4" />
        </div>
        <div className="flex w-10/12 flex-col max-h-[700px] overflow-y-auto gap-8">
          <div className="border-l-[#386A8B] w-full flex items-center justify-between border-l-8 text-[#386A8B]">
            <div className="flex h-[14rem] flex-col p-6 justify-between items-start gap-2">
              <h2 className="text-xl font-semibold">
                Field Notes for Waterproofing
              </h2>
              <p className="text-lg font-medium">
                Created on Monday, 25 November, 2024 at 10:00 AM
              </p>
            </div>
            <div className="flex text-xl font-medium flex-col items-center gap-2">
              <LinkIcon />
              <p>View</p>
            </div>
          </div>

          <div className="border-l-[#386A8B] w-full flex items-center justify-between border-l-8 text-[#386A8B]">
            <div className="flex h-[14rem] flex-col p-6 justify-between items-start gap-2">
              <h2 className="text-xl font-semibold">
                Field Notes for Waterproofing
              </h2>
              <p className="text-lg font-medium">
                Created on Monday, 25 November, 2024 at 10:00 AM
              </p>
            </div>
            <div className="flex text-xl font-medium flex-col items-center gap-2">
              <LinkIcon />
              <p>View</p>
            </div>
          </div>

          <div className="border-l-[#386A8B] w-full flex items-center justify-between border-l-8 text-[#386A8B]">
            <div className="flex h-[14rem] flex-col p-6 justify-between items-start gap-2">
              <h2 className="text-xl font-semibold">
                Field Notes for Waterproofing
              </h2>
              <p className="text-lg font-medium">
                Created on Monday, 25 November, 2024 at 10:00 AM
              </p>
            </div>
            <div className="flex text-xl font-medium flex-col items-center gap-2">
              <LinkIcon />
              <p>View</p>
            </div>
          </div>

          <div className="border-l-[#386A8B] w-full flex items-center justify-between border-l-8 text-[#386A8B]">
            <div className="flex h-[14rem] flex-col p-6 justify-between items-start gap-2">
              <h2 className="text-xl font-semibold">
                Field Notes for Waterproofing
              </h2>
              <p className="text-lg font-medium">
                Created on Monday, 25 November, 2024 at 10:00 AM
              </p>
            </div>
            <div className="flex text-xl font-medium flex-col items-center gap-2">
              <LinkIcon />
              <p>View</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;

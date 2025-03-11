import { useState } from "react";
import {
  DialogHeader,
  DialogContent,
  DialogTrigger,
  Dialog,
} from "../../../ui/dialog";
import { Button } from "../../../ui/button";

const Specification_Modal = () => {
  return (
    <Dialog>
      <DialogTrigger className="px-8  ml-auto w-auto rounded-md py-4 text-white bg-[#386A8B]">
        Add Specification
      </DialogTrigger>
      <DialogContent className="max-w-[720px] flex flex-col items-start font-euclid rounded-lg p-0 min-h-[643px]">
        <DialogHeader className="text-2xl m-0 rounded-t-md w-full flex items-center justify-center text-white h-[5rem] p-0 font-bold bg-[#386A8B]">
          Add Specification
        </DialogHeader>
        <div className="p-8 w-full">
          <div className="flex flex-col gap-4">
            <label className="text-lg text-[#386A8B] font-medium  ">
              Document details
            </label>
            <div className="flex w-full items-start flex-col gap-2">
              <label className="text-md font-medium  ">Title of Document</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
              />
            </div>
            <div className="flex w-full items-start flex-col gap-2">
              <label className="text-md font-medium  ">Description</label>
              <textarea
                rows={4}
                placeholder="Description"
                className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300   p-4"
              />
            </div>
            <div className="flex w-full items-start flex-col gap-2">
              <label className="text-md font-medium  ">Upload Document</label>
              <input
                type="file"
                placeholder="Upload Specification here"
                className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300   p-4"
              />
            </div>
            <div className="flex w-full py-6  justify-end items-center gap-4 ">
              <Button className="bg-gray-300 rounded-full text-black px-9 py-6">
                Cancel
              </Button>
              <Button className="bg-[#386A8B] rounded-full px-9 py-6 text-white">
                Save
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Specification_Modal;

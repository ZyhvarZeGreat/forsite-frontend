import { useState } from "react";
import {
  DialogHeader,
  DialogContent,
  DialogTrigger,
  Dialog,
} from "../../../ui/dialog";
import { Calendar } from "iconsax-react";
import { Button } from "../../../ui/button";

const Notes_Modal = () => {
  return (
    <Dialog>
      <DialogTrigger className="px-8  ml-auto w-auto rounded-md py-4 text-white bg-[#386A8B]">
        Add Notes
      </DialogTrigger>
      <DialogContent className="max-w-[720px] flex flex-col items-start font-euclid rounded-lg p-0 min-h-[643px]">
        <DialogHeader className="text-2xl m-0 rounded-t-md w-full flex items-center justify-center text-white h-[5rem] p-0 font-bold bg-[#386A8B]">
          Create/Edit Notes
        </DialogHeader>
        <div className="p-8 w-full">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6">
              <div className="  p-2 bg-[#386A8B] rounded-sm"></div>
              <label className="text-4xl font-medium">Note Title </label>
            </div>
            <div className="w-full text-lg gap-8 text-[#386A8B] flex items-center ">
              <Calendar />
              <label className="  font-medium">Date Created: 12/12/2024</label>
            </div>
            <div className="flex mx-auto  flex-col w-10/12  gap-2">
              <textarea
                rows={10}
                className="border-2 w-full border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex w-full  justify-end items-center gap-4 ">
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

export default Notes_Modal;

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";

import { prospectScenes } from "../Prospects_Tabs";

const Project_Details = ({
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
        className=" shadow-gray-300/50  gap-8 rounded-xl flex min-h-[637px] flex-col items-center justify-center w-full max-w-[758px] py-6 "
      >
        <div className="flex w-full items-center justify-start h-[4rem] border-b border-gray-300 ">
          <h1 className="text-2xl px-10 font-bold">Project Details</h1>
        </div>
        <div className="grid grid-cols-1 place-items-center w-[90%] gap-8">
          <div className="flex w-full items-start flex-col gap-4">
            <label className="text-md font-medium  ">Project Title</label>
            <input
              type="text"
              placeholder="Project Title"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          <div className="flex w-full items-start  flex-col gap-4">
            <label className="text-md font-medium  ">Project Location</label>
            <Select>
              <SelectTrigger className="w-full shadow-none border placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4">
                <SelectValue placeholder="Project Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex w-full items-start flex-col gap-4">
            <label className="text-md font-medium  ">Project Description</label>
            <textarea
              rows={10}
              placeholder="Project Description"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 p-4"
            />
          </div>
        </div>

        <div className="flex mt-10 gap-6 w-[90%] items-start justify-end ">
          <button
            onClick={() => {
              // addedScenes.push("Project Details");
              setScene("Availability");
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

export default Project_Details;

import { contractScenes } from "../Contract_Tabs ";
const Payment_Schedule = ({
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
        className=" shadow-gray-300/50  gap-8 rounded-xl flex min-h-[637px] flex-col items-center justify-center w-full max-w-[758px] py-6 "
      >
        <div className="flex w-full items-center justify-start h-[4rem] border-b border-gray-300 ">
          <h1 className="text-2xl px-10 font-bold">Payment Schedule</h1>
        </div>
        <div className="grid grid-cols-2 place-items-center w-[90%] gap-8">
          <div className="flex w-full col-span-2 items-start  flex-col gap-4">
            <label className="text-md font-medium  ">
              Title of Specification
            </label>
            <input
              type="text"
              placeholder="Enter title scope specification"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          <div className="flex w-full col-span-1 items-start flex-col gap-4">
            <label className="text-md font-medium  ">Due Date</label>
            <input
              type="date"
              placeholder="Clients Name"
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          <div className="flex w-full col-span-2 items-start flex-col gap-4">
            <label className="text-md font-medium  ">Amount</label>
            <input
              type="text"
              placeholder=""
              className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
            />
          </div>
          <div className="flex w-full items-start gap-8">
            <button className=" border-[#386A8B] border text-sm rounded-md text-[#386A8B] hover:text-white h-10 px-4  hover:bg-[#386A8B]">
              Remove
            </button>
            <button className=" text-white text-sm rounded-md bg-[#386A8B] hover:text-white h-10 px-4  hover:bg-[#386A8B]">
              Save Schedule
            </button>
          </div>
        </div>

        <div className="flex mt-10 gap-6 w-[90%] items-start justify-end ">
          <button
            onClick={() => {
              // addedScenes.push("Project Details");
              setScene("Cancellation Policy");
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

export default Payment_Schedule;

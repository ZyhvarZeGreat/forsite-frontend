import React from "react";

const Personal_Information = ({ addedScenes, scene, setScene }) => {
  return (
    <div className="w-full flex flex-col mt-24 mb-32 items-center justify-center">
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
        className=" shadow-gray-300/50 rounded-xl flex h-[637px] flex-col items-center justify-center w-full max-w-[758px] p-10"
      >
        <div className="grid grid-cols-1 w-[90%]   gap-8">
          <input
            type="text"
            placeholder="First Name"
            className="border placeholder:text-black font-medium border-gray-300 h-16  p-2"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border placeholder:text-black font-medium border-gray-300 h-16  p-2"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border placeholder:text-black font-medium border-gray-300 h-16  p-2"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border placeholder:text-black font-medium border-gray-300 h-16  p-2"
          />
        </div>
        <div className="flex mt-10 w-[90%] items-start justify-end ">
          <button
            onClick={() => {
              addedScenes.push("Personal Information");
              setScene("Project Details");
              console.log(scene);
            }}
            className=" text-[#386A8B] border border-[#386A8B] hover:text-white py-2.5 px-6  hover:bg-[#386A8B]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Personal_Information;

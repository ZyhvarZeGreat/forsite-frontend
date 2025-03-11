import { quoteScenes } from "../Quotes_Tabs";

const Summary = ({
  scene,
  setScene,
}: {
  scene: quoteScenes;
  setScene: (scene: quoteScenes) => void;
}) => {
  return (
    <div className="w-full flex flex-col mt-24 mb-32 items-center justify-center">
      <div
        style={{
          boxShadow:
            "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
        }}
        className=" shadow-gray-300/50 rounded-xl flex h-[637px] flex-col items-center justify-center w-full max-w-[758px] p-10"
      >
        <div className="grid grid-cols-1 w-[90%] gap-8">
          <input
            type="text"
            placeholder="Project Title"
            className="border placeholder:text-black font-medium border-gray-300 h-16  p-4"
          />
          <input
            type="text"
            placeholder="Practice Area"
            className="border placeholder:text-black font-medium border-gray-300 h-16  p-4"
          />

          <textarea
            placeholder="Description"
            className="border placeholder:text-black font-medium border-gray-300 h-[200px]  p-4"
          />
        </div>
        <div className="flex mt-10 gap-6 w-[90%] items-start justify-end ">
          <button
            onClick={() => {
              // addedScenes.pop("Project Details");
              setScene("Third Parties");
              console.log(scene);
            }}
            className=" bg-[#386A8B]  text-white hover:text-white h-12 px-10  hover:bg-[#386A8B]"
          >
            Back
          </button>
          <button
            onClick={() => {
              // addedScenes.push("Project Details");
              setScene("Client Details");
            }}
            className=" text-[#386A8B] border border-[#386A8B] hover:text-white h-12 px-6  hover:bg-[#386A8B]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;

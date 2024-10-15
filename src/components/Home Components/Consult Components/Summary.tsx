import { scenes } from "../../../pages/Home/Consult";

const Summary = ({
  scene,
  setScene,
}: {
  scene: scenes;
  setScene: (scene: scenes) => void;
}) => {
  return (
    <div className="w-full flex flex-col mb-32 mt-16 items-center justify-center">
      <div className=" flex  flex-col items-center justify-center w-full p-10">
        <div className="grid grid-cols-1 w-[90%] gap-8">
          {/* <div className="flex flex-col items-center w-full justify-center">
            <h1 className="text-4xl font-semibold text-[#386A8B]">
              View request application
            </h1>
            <p>
              The event personnel will evaluate this request based on the
              information provided.
            </p>
          </div> */}
        </div>
        <div className="w-full  max-w-[1024px]  text-left">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className=" flex flex-col gap-4 space-y-4">
            <div>
              <h3 className="text-sm">Name</h3>
              <p className="text-lg font-medium">John Doe</p>
            </div>
            <div>
              <h3 className="text-sm">Email</h3>
              <p className="text-lg font-medium">johndoe@example.com</p>
            </div>
            <div>
              <h3 className="text-sm">Phone</h3>
              <p className="text-lg font-medium">+1 234 567 8900</p>
            </div>
            <div>
              <h3 className="text-sm">Address</h3>
              <p className="text-lg font-medium">
                123 Main St, Anytown, USA 12345
              </p>
            </div>
          </div>
        </div>
        <div className=" my-16 h-0.5 w-[70%] bg-[#EEEEEE]/80"></div>
        <div className="w-full  max-w-[1024px]  text-left">
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className=" flex flex-col gap-4 space-y-4">
            <div>
              <h3 className="text-sm">Project title</h3>
              <p>Property Law</p>
            </div>
            <div>
              <h3 className="text-sm">Practice area</h3>
              <p className="text-lg font-medium">Property Law</p>
            </div>
            <div>
              <h3 className="text-sm">Description</h3>
              <p className="text-lg font-medium"></p>
            </div>
            <div>
              <h3 className="text-sm">Address</h3>
              <p className="text-lg font-medium">
                123 Main St, Anytown, USA 12345
              </p>
            </div>
          </div>
        </div>
        <div className=" my-16 h-0.5 w-[70%] bg-[#EEEEEE]/80"></div>
        <div className="w-full  max-w-[1024px]  text-left">
          <h2 className="text-2xl font-semibold mb-4">Availability</h2>
          <div className=" flex flex-col gap-4 space-y-4">
            <div>
              <h3 className="text-sm">Project title</h3>
              <p>Property Law</p>
            </div>
            <div>
              <h3 className="text-sm">Scheduled date</h3>
              <p className="text-lg font-medium">9/16/2023</p>
            </div>
            <div>
              <h3 className="text-sm">Scheduled time</h3>
              <p className="text-lg font-medium">10:00am</p>
            </div>
          </div>
        </div>
        <div className="flex  gap-6 w-[90%] py-32 items-center justify-center ">
          <button
            onClick={() => {
              // addedScenes.pop("Summary");
              setScene("Availability");
              console.log(scene);
            }}
            className=" text-[#386A8B] border border-[#386A8B] hover:text-white h-16 w-[250px] rounded-lg  hover:bg-[#386A8B]"
          >
            Back
          </button>
          <button
            onClick={() => {
              // addedScenes.push("Summary");
            }}
            className=" bg-[#386A8B]  text-white hover:text-white h-16 w-[250px] rounded-lg  hover:bg-[#386A8B]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;

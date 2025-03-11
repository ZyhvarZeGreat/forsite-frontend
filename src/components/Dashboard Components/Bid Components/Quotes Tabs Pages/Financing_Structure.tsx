import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../ui/tabs";
import { quoteScenes } from "../Quotes_Tabs";

const Financing_Structure = ({
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
        className=" shadow-gray-300/50  gap-8 rounded-xl flex min-h-[637px] flex-col items-center justify-start w-full max-w-[758px] py-6 "
      >
        <div className="flex w-full items-center justify-start h-[4rem] border-b border-gray-300 ">
          <h1 className="text-2xl px-10 font-bold">Financing Structure</h1>
        </div>
        <div className=" w-full gap-8">
          <Tabs defaultValue="lump-sum">
            <div className="flex items-center justify-center  w-full">
              <TabsList className="grid h-[3.8rem] bg-[#386A8B]/70 w-10/12  text-white  items-center   rounded-full      grid-cols-2 font-semibold">
                <TabsTrigger
                  className=" text-lg col-span-1 data-[state=active]:rounded-full py-2  rounded-l-none  h-full "
                  value="lump-sum"
                >
                  <Link to="?status=lump-sum">Lump Sum</Link>
                </TabsTrigger>
                <TabsTrigger
                  className=" rounded-l-none col-span-1 data-[state=active]:rounded-full py-2 text-lg h-full "
                  value="per-deliverable"
                >
                  <Link to="?status=per-deliverable">Per Deliverable</Link>
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="lump-sum">
              <div className="flex mt-12 px-10  items-start flex-col gap-4">
                <h3>Payment Deposit</h3>
                <div className="flex flex-col w-full items-start">
                  <p>An initial deposit will be made</p>
                  <input
                    type="text"
                    placeholder="N"
                    className="border w-full rounded-md placeholder:text-[#4B5B65] font-medium border-gray-300 h-12  p-4"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="per-deliverable">
              <div className="flex mt-12 px-10  items-start flex-col gap-4">
                <h3>Payment Deposit</h3>
                <div className="flex flex-col w-full items-start">
                  <p>An initial deposit will be made</p>
                  <input
                    type="text"
                    placeholder="N"
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
              setScene("Third Parties");
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

export default Financing_Structure;

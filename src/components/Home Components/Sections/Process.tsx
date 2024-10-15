import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import ClientTab from "../ClientTab";
import EngineerTab from "../EngineerTab";
import { Button } from "../../ui/button";
import divider from "../../../assets/divider.png";
const Process = () => {
  return (
    <div className="flex mt-32 gap-24 flex-col w-full max-w-[1366px]">
      <div className="flex w-full items-start flex-col gap-4">
        <h4 className="text-4xl font-semibold">How it Works</h4>
        <p className=" font-medium">
          Manage your EPC process from start to finish either as a contractor or
          a client
        </p>
      </div>
      <Tabs
        defaultValue="available"
        className=" flex relative  w-full flex-col items-center justify-center gap-8"
      >
        <TabsList className="grid text-black  rounded-full px-4 w-[700px] h-[100px] grid-cols-2 font-semibold">
          <TabsTrigger
            className=" text-2xl h-[70px] rounded-full"
            value="available"
          >
            Engineers
          </TabsTrigger>
          <TabsTrigger
            className=" text-2xl h-[70px] rounded-full"
            value="funded"
          >
            Clients
          </TabsTrigger>
        </TabsList>
        <TabsContent className="w-full" value="available">
          <EngineerTab />
        </TabsContent>
        <TabsContent className="w-full" value="funded">
          <ClientTab />
        </TabsContent>
        <div className="flex items-end justify-center w-full   absolute">
          <img className="object-cover mt-[9rem]" src={divider} />
        </div>
        <div className="flex items-center py-24 justify-center ">
          <Button className="bg-[#386A8B] hover:bg-slate-600 rounded-none py-6 px-12 z-10">
            Learn More
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default Process;

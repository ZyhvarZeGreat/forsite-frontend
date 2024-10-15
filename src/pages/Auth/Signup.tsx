import signup from "../../assets/signup.jpg";
import Signup_Client from "../../components/Auth Components/Signup_Client";
import Signup_Vendor from "../../components/Auth Components/Signup_Vendor";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";

const Signup = () => {
  return (
    <div className=" h-screen w-screen flex items-center justify-center">
      <div className="w-1/2 h-full">
        <img className="w-full h-full object-cover" src={signup} />
      </div>
      <div className="w-1/2 h-full flex flex-col gap-8 items-center justify-center">
        <h1 className="text-2xl font-medium">
          Welcome back to COG for Engineers
        </h1>
        <Tabs
          defaultValue="vendor"
          className=" flex  w-9/12 flex-col items-center justify-center gap-8"
        >
          <TabsList className="grid text-black p-0 bg-transparent border-[#386A8B] border-2   w-9/12 h-14 grid-cols-2 font-semibold">
            <TabsTrigger
              className=" text-lg data-[state=active]:rounded-l-none  rounded-l-none  h-full "
              value="vendor"
            >
              Engineers
            </TabsTrigger>
            <TabsTrigger
              className=" rounded-l-none data-[state=active]:rounded-r-none  text-lg h-full "
              value="client"
            >
              Clients
            </TabsTrigger>
          </TabsList>
          <TabsContent className="w-full" value="vendor">
            <Signup_Vendor />
          </TabsContent>
          <TabsContent className="w-full" value="client">
            <Signup_Client />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Signup;

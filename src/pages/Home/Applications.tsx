import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";
import Consult_Table from "../../components/Home Components/Consult Components/Consult_Table";
import { Link } from "react-router-dom";
const Applications = () => {
  const data = [
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
    {
      application_id: "#657899832",
      date: "12 April 2023, 12:43 AM",
      client_name: "John Doe",
      availability: "12 April 2023, 12:43 AM",
      status: "pending",
    },
  ];
  return (
    <div className=" max-w-[1440px] w-full mt-24 flex flex-col item-cener justify-center">
      <div className="flex items-start my-16 w-full">
        <h1 className="text-3xl  font-semibold"> Applications manager </h1>
      </div>

      <div className="flex flex-col border border-gray-300 rounded-lg mb-32 items-center justify-center w-full">
        <div className="flex items-center px-6 justify-between w-full">
          <Tabs
            defaultValue="all"
            className=" flex py-4  h-auto w-full flex-col items-start justify-center gap-8"
          >
            <div className="flex items-center justify-between  w-full">
              <TabsList className="grid h-[4.5rem] bg-[#386A8B]/70 w-5/12  text-white  items-center   rounded-full      grid-cols-3 font-semibold">
                <TabsTrigger
                  className=" text-lg  data-[state=active]:rounded-full py-4  rounded-l-none  h-full "
                  value="all"
                >
                  <Link to="?status=all">All Applications</Link>
                </TabsTrigger>
                <TabsTrigger
                  className=" rounded-l-none data-[state=active]:rounded-full py-4 text-lg h-full "
                  value="pending"
                >
                  <Link to="?status=all">Pending</Link>
                </TabsTrigger>
                <TabsTrigger
                  className=" rounded-l-none data-[state=active]:rounded-full  py-4 text-lg h-full "
                  value="converted"
                >
                  <Link to="?status=converted">Converted</Link>
                </TabsTrigger>
              </TabsList>
              <div className="flex flex-col border py-4 px-8 rounded-2xl border-[#386A8B] text-[#386A8B] ">
                <div className="flex items-center justify-between">
                  <h1 className="text-lg">Filter</h1>
                  <div className="flex items-center gap-2"></div>
                </div>
              </div>
            </div>

            <TabsContent className="w-full" value="all">
              <Consult_Table invoices={data} />
            </TabsContent>
            <TabsContent className="w-full" value="pending">
              <Consult_Table invoices={data} />
            </TabsContent>
            <TabsContent className="w-full" value="converted">
              <Consult_Table invoices={data} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Applications;

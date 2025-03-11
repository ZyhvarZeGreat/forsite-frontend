import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import PageDropdown from "../../../components/Dashboard Components/PageDropdown";
const ContractsHome = () => {
  const activities = [
    {
      name: "John Doe",
      date: "October 1, 2023",
      activityType: "created",
      message: "Tender created",
    },
    {
      name: "Jane Smith",
      date: "October 2, 2023",
      activityType: "accepted",
      message: "Tender accepted",
    },
    {
      name: "Alice Johnson",
      date: "October 3, 2023",
      activityType: "created",
      message: "Tender created",
    },
    {
      name: "Bob Brown",
      date: "October 4, 2023",
      activityType: "accepted",
      message: "Tender accepted",
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full  flex mt-8 items-center justify-end">
        <PageDropdown
          title="Contracts Manager"
          toTableText="View all contracts"
          toAddText="Add new contract"
          toTable="/dashboard/bids/contracts-info"
          toAdd="/dashboard/bids/add-contracts"
        />
      </div>

      <div className="flex justify-center  mt-16 gap-32">
        <div className="flex items-center border px-6  border-[#386A8B] h-[180px] lg:h-[200px] rounded-md w-[320px] lg:w-[380px]">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold">0</h3>
            <p className="text-lg">Contacts</p>
          </div>
        </div>
        <div className="flex items-center border px-6  border-[#386A8B] h-[180px] lg:h-[200px] rounded-md w-[320px] lg:w-[380px]">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold">0</h3>
            <p className="text-lg">Contacts</p>
          </div>
        </div>
        <div className="flex items-center border px-6  border-[#386A8B] h-[180px] lg:h-[200px] rounded-md w-[320px] lg:w-[380px]">
          <div className="flex flex-col items-start">
            <h3 className="text-2xl font-semibold">0</h3>
            <p className="text-lg">Contacts</p>
          </div>
        </div>
      </div>
      <div className="w-[85%] mt-8  flex items-center  justify-end">
        <button className=" border-2 border-[#386A8B] p-4 rounded-md text-[#386A8B]">
          View Custom Report
        </button>
      </div>

      <div className="flex w-[85%] mt-16">
        <div className="flex w-full rounded-xl p-8 border border-gray-200 flex-col items-center justify-center">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-3xl font-semibold">Recent Activities</h1>
            <button className="flex items-center gap-2"> View All </button>
          </div>
          <div className="flex flex-col w-full gap-8 mt-6 items-start justify-center">
            {activities.map((activity) => (
              <div
                className="border-t w-full flex gap-4  border-t-gray-400/30 pt-4"
                key={activity.name}
              >
                <div className="flex p-4 rounded-full bg-green-100 items-center justify-center">
                  <ArrowTopRightIcon height={20} width={20} color="#386A8B" />
                </div>
                <div className="flex flex-col items-start justify-center">
                  <h4 className="text-lg font-semibold">
                    {activity.message} - {activity.name}
                  </h4>
                  <p className="text-sm">{activity.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsHome;

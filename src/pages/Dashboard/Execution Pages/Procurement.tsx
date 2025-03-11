import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../../components/ui/tabs";
import {
  Schedule,
  Stakeholders,
  Documents,
  Notes,
  Billing,
  Specifications,
  Inventory,
  Analytics,
} from "../../../components/Dashboard Components/Execution Components/Procurement Tabs Pages";
import { Link } from "react-router-dom";
import Notes_Modal from "../../../components/Dashboard Components/Execution Components/Page Modals/Notes_Modal";
import Documents_Modal from "../../../components/Dashboard Components/Execution Components/Page Modals/Documents_Modal";
import Specification_Modal from "../../../components/Dashboard Components/Execution Components/Page Modals/Specification_Modal";
import Inventory_Modal from "../../../components/Dashboard Components/Execution Components/Page Modals/Inventory_Modal";
import Stakeholder_Modal from "../../../components/Dashboard Components/Execution Components/Page Modals/Stakeholder_Modal";
import { useEffect, useState } from "react";

const Procurement = () => {
  const tabsArray = [
    { text: "Schedule", page: <Schedule /> },
    { text: "Stakeholders", page: <Stakeholders /> },
    { text: "Documents", page: <Documents /> },
    { text: "Notes", page: <Notes /> },
    { text: "Billing", page: <Billing /> },
    { text: "Specifications", page: <Specifications /> },
    { text: "Inventory", page: <Inventory /> },
    { text: "Analytics", page: <Analytics /> },
  ];
  const pagesWithModals = [
    { text: "Notes", page: <Notes_Modal /> },
    { text: "Documents", page: <Documents_Modal /> },
    { text: "Specifications", page: <Specification_Modal /> },
    { text: "Inventory", page: <Inventory_Modal /> },
    { text: "Stakeholders", page: <Stakeholder_Modal /> },
  ];

  const [hasTextParameter, setHasTextParameter] = useState(false);
  const queryParams = new URLSearchParams(window.location.search);
  const currentText = queryParams.get("tab");

  useEffect(() => {
    console.log(currentText);
    setHasTextParameter(
      pagesWithModals.some((modal) =>
        currentText?.includes(modal.text.toLowerCase())
      )
    );
    console.log(hasTextParameter);
  }, [pagesWithModals]);
  return (
    <div className=" w-full flex flex-col  mt-16 gap-8">
      <div className="w-10/12 flex mx-auto items-center justify-between">
        <h1 className="text-2xl font-semibold">Shore Ridge</h1>
        {tabsArray.map((tab) =>
          hasTextParameter &&
          tab.text.toLowerCase() === currentText?.toLowerCase()
            ? pagesWithModals.find((modal) => modal.text === tab.text)?.page
            : null
        )}
      </div>
      <Tabs defaultValue="one-time-project">
        <div className="flex items-center justify-center  w-full">
          <TabsList className="grid h-[3.8rem] bg-[#386A8B]/70 w-10/12  text-white  items-center   rounded-full      grid-cols-8 font-semibold">
            {tabsArray.map((tab, index) => (
              <TabsTrigger
                defaultValue={"Schedule"}
                key={index}
                className=" text-lg col-span-1 data-[state=active]:rounded-full py-2  rounded-l-none  h-full "
                value={tab.text}
              >
                <Link to={`?tab=${tab.text.toLowerCase()}`}> {tab.text}</Link>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="flex mx-auto mt-12 flex-col w-10/12 items-start justify-center">
          {tabsArray.map((tab, index) => (
            <TabsContent className="w-full" key={index} value={tab.text}>
              {tab.page}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default Procurement;

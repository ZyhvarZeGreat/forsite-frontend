import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import sidebaricon from "../../assets/dashboardicon.png";
import sidebarArrow from "../../assets/sidebarArrow.png";
import sidebariconactive from "../../assets/home-active.png";
import subrouteicon from "../../assets/subroutehome.png";
import { useState } from "react";
const Sidebar = () => {
  const routes = [
    {
      to: "/dashboard",
      text: "Dashboard",
    },
    {
      to: "/dashboard/bids",
      text: "Bids",
      subroutes: {
        payments: {
          to: "/dashboard/bids/payments",
          text: "Payments",
        },
        prospects: {
          to: "/dashboard/bids/prospects",
          text: "Prospects",
        },
        contracts: {
          to: "/dashboard/bids/contracts",
          text: "Contracts",
        },
        quotes: {
          to: "/dashboard/bids/quotes",
          text: "Quotes",
        },
        marketplace: {
          to: "/dashboard/bids/marketplace",
          text: "Marketplace",
        },
      },
    },
    {
      to: "/dashboard/execution",
      text: "Execution",
      subroutes: {
        epc: {
          to: "/dashboard/execution/epc",
          text: "EPC",
        },
        documents: {
          to: "/dashboard/execution/documents",
          text: "Documents",
        },
        inventory: {
          to: "/dashboard/execution/inventory",
          text: "Inventory",
        },
        partners: {
          to: "/dashboard/execution/partners",
          text: "Partners",
        },
        procurement: {
          to: "/dashboard/execution/procurement",
          text: "Procurement",
        },
      },
    },
    {
      to: "/dashboard/crm",
      text: "CRM",
    },

    {
      to: "/dashboard/back-office",
      text: "Back Office",
    },
    {
      to: "/dashboard/help-desk",
      text: "Help Desk",
    },
  ];
  const [showSubroutes, setShowSubroutes] = useState(false);
  const [activeRoute, setActiveRoute] = useState<string | null>(null); // Track the active route

  return (
    <div className=" sm:w-[20%] xl:w-[13%] h-full flex items-center border-r border-r-gray/30 ">
      <div className="flex w-full h-full  items-center justify-start flex-col gap-2">
        <div className="py-2 w-full justify-start px-7 flex items-center ">
          <img className="h-[5rem] w-auto" src={logo} />
        </div>

        <div className="flex w-full px-6 flex-col gap-4 text-start justify-center items-start">
          {routes.map((route, i) => {
            return (
              <>
                <NavLink
                  onClick={() => {
                    if (route.subroutes) {
                      setShowSubroutes(!showSubroutes);
                      setActiveRoute(
                        activeRoute === route.to ? null : route.to
                      ); // Toggle active route
                    }
                  }}
                  className={({ isActive }) =>
                    `p-4 rounded-md  ${
                      isActive ? "bg-[#386A8B] w-full text-white" : ""
                    }`
                  }
                  to={route.to}
                  key={i}
                  end
                >
                  {({ isActive }) => (
                    <div className="w-full flex items-center justify-between">
                      <div className="flex gap-4">
                        <img src={isActive ? sidebariconactive : sidebaricon} />
                        {route.text}
                      </div>
                      {isActive && <img src={sidebarArrow} />}
                    </div>
                  )}
                </NavLink>
                {route.subroutes && activeRoute === route.to && (
                  <div className="w-[90%] border-l border-l-gray/30 p-5 self-end items-start gap-8 flex flex-col gap-4">
                    {Object.values(route.subroutes).map((subroute, i) => {
                      return (
                        <NavLink
                          key={i}
                          to={subroute.to}
                          className="flex gap-4 text-base items-center"
                        >
                          <img className="h-6 w-6" src={subrouteicon} />
                          {subroute.text}
                        </NavLink>
                      );
                    })}
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

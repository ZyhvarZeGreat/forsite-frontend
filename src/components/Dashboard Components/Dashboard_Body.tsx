import { Outlet } from "react-router-dom";
import bell from "../../assets/dashboard images/bell.png";
import setting from "../../assets/dashboard images/setting.png";
import avatar from "../../assets/dashboard images/avatar.png";
const Dashboard_Body = () => {
  return (
    <div className="w-11/12 flex items-start flex-col justify-start ">
      <div className="w-full border-b border-b-gray/30 flex items-center h-[5rem]  ">
        <div className="w-full  flex justify-between items-center px-8">
          <h3 className="font-semibold text-xl">Tenders</h3>
          <div className="flex gap-4">
            <button>
              <img className="h-8 w-8" src={bell} />
            </button>
            <button>
              <img className="h-8 w-8" src={setting} />
            </button>
            <button>
              <img className="h-8 w-8" src={avatar} />
            </button>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard_Body;

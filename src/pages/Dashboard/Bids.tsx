import { Outlet } from "react-router-dom";

const Bids = () => {
  return (
    <div className="w-full mx-auto flex flex-col px-8">
      <Outlet />
    </div>
  );
};

export default Bids;

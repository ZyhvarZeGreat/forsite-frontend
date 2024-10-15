import React from "react";
import Sidebar from "../../components/Dashboard Components/Sidebar";
import Dashboard_Body from "../../components/Dashboard Components/Dashboard_Body";

const Dashboard = () => {
  return (
    <div className="w-screen flex h-screen">
      <Sidebar />
      <Dashboard_Body />
    </div>
  );
};

export default Dashboard;

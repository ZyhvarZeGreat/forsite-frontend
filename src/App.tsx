import "./App.css";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Clients from "./pages/Home/Clients";
import Engineers from "./pages/Home/Engineers";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Navbar from "./Reusables/Navbar";
import Footer from "./Reusables/Footer";
import { useLocation } from "react-router-dom";
import Profiles from "./pages/Home/Profiles";
import Consult from "./pages/Home/Consult";
import Portfolio from "./components/Profile Components/Portfolio";
import Portfolio_Details from "./pages/Home/Portfolio_Details";
import Applications from "./pages/Home/Applications";
import Bids from "./pages/Dashboard/Bids";
import Back_Office from "./pages/Dashboard/Back_Office";
import CRM from "./pages/Dashboard/CRM";
import Help_Desk from "./pages/Dashboard/Help_Desk";
import Payments from "./pages/Dashboard/Bid Pages/Payments";
import Prospects from "./pages/Dashboard/Bid Pages/Prospects";
import Marketplace from "./pages/Dashboard/Bid Pages/Marketplace";
import Execution from "./pages/Dashboard/Execution";
import BidsIndex from "./pages/Dashboard/Bid Pages/BidsIndex";
import AddContracts from "./pages/Dashboard/Bid Pages/AddContracts";
import AddQuotes from "./pages/Dashboard/Bid Pages/AddQuotes";
import QuotesHome from "./pages/Dashboard/Bid Pages/QuotesIndex";
import ContractsHome from "./pages/Dashboard/Bid Pages/ContractsHome";
import QuotesStats from "./pages/Dashboard/Bid Pages/QuotesStats";
import ContractsStats from "./pages/Dashboard/Bid Pages/ContractsStats";
import {
  EPC,
  Documents,
  Inventory,
  Partners,
  Procurement,
} from "./pages/Dashboard/Execution Pages/index";
import Execution_Index from "./pages/Dashboard/Execution Pages/Execution_Index";
import ProjectsStats from "./pages/Dashboard/Execution Pages/ProjectsStats";
import QuotesIndex from "./pages/Dashboard/Bid Pages/QuotesIndex";
function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  const showReusables =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname.includes("/dashboard");
  return (
    <div className="flex font-euclid   items-center justify-center flex-col">
      {!showReusables && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/for-clients" element={<Clients />} />
        <Route path="/for-engineers" element={<Engineers />} />
        <Route path="/for-engineers/profile/:id" element={<Profiles />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route
          path="/for-engineers/profile/:id/portfolio"
          element={<Portfolio_Details />}
        />
        <Route path="/for-engineers/consult" element={<Consult />} />
        <Route path="/about" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="bids" element={<Bids />}>
            <Route index element={<BidsIndex />} />
            <Route path="payments" element={<Payments />} />
            <Route path="prospects" element={<Prospects />} />
            <Route path="contracts" element={<ContractsHome />} />
            <Route path="contracts-info" element={<ContractsStats />} />
            <Route path="quotes-info" element={<QuotesStats />} />
            <Route path="quotes" element={<QuotesIndex />} />
            <Route path="add-quotes" element={<AddQuotes />} />
            <Route path="add-contracts" element={<AddContracts />} />
            <Route path="marketplace" element={<Marketplace />} />
            {/* Render Outlet for sub-routes */}
          </Route>
          <Route path="execution" element={<Execution />}>
            <Route index element={<Execution_Index />} />
            <Route path="epc" element={<EPC />} />
            <Route path="documents" element={<Documents />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="partners" element={<Partners />} />
            <Route path="procurement" element={<Procurement />} />
            <Route path="projects-info" element={<ProjectsStats />} />
          </Route>
          <Route path="back-office" element={<Back_Office />} />
          <Route path="crm" element={<CRM />} />
          <Route path="help-desk" element={<Help_Desk />} />
        </Route>

        <Route path="/applications" element={<Applications />} />
      </Routes>
      {!showReusables && <Footer />}
    </div>
  );
}

export default App;

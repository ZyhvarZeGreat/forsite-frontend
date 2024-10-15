import "./App.css";
import { Route, Routes } from "react-router-dom";
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
function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  const showReusables =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/dashboard";
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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
      {!showReusables && <Footer />}
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import Topbar from "../components/Topbar/Topbar";
import './layout.css';

const DashBoardLayout = () => {
  return (
    <div style={{ position: "relative" }}>
      <SideBar />
      <Topbar />
      <div className="dashboard-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;

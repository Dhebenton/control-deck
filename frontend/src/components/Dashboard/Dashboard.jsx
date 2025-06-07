import Content from "./Content/AtriAI/Content";
import Menu from "./Menu/Menu";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";

function Dashboard({ activeTab }) {
  const [dashboardTab, setDashboardTab] = useState("Overview");
  const [navCollapsed, setNavCollapsed] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  function handleCollapse(source) {
    if (source === "sidebar") {
      setNavCollapsed(true);
      setTimeout(() => {
        setMenuCollapsed(true);
      }, 400);
    } else if (source === "menu") {
      setMenuCollapsed(false);
      setTimeout(() => {
        setNavCollapsed(false);
      }, 300);
    }
  }

  return (
    <div className="dashboard">
      <Sidebar
        activeTab={activeTab}
        dashboardTab={dashboardTab}
        setDashboardTab={setDashboardTab}
        collapsed={navCollapsed}
        handleCollapse={handleCollapse}
      />
      <div className="content-wrap">
        <Menu
          dashboardTab={dashboardTab}
          collapsed={menuCollapsed}
          handleCollapse={handleCollapse}
        />
        <Content />
      </div>
    </div>
  );
}

export default Dashboard;

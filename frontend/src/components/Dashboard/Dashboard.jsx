import { useEffect, useState } from "react";
import Content from "./Content/Content";
import Menu from "./Menu/Menu";
import Sidebar from "./Sidebar/Sidebar";

function Dashboard({ activeTab, fadeState, darkTheme, setDarkTheme }) {
  const [dashboardTab, setDashboardTab] = useState("Overview");
  const [renderedDashboardTab, setRenderedDashboardTab] = useState("Overview");
  const [dashboardFadeState, setDashboardFadeState] = useState("fade-in");

  const [navCollapsed, setNavCollapsed] = useState(false);
  const [menuCollapsed, setMenuCollapsed] = useState(false);

  function handleCollapse(source) {
    if (source === "sidebar") {
      setNavCollapsed(true);
      setTimeout(() => setMenuCollapsed(true), 400);
    } else if (source === "menu") {
      setMenuCollapsed(false);
      setTimeout(() => setNavCollapsed(false), 300);
    }
  }

 useEffect(() => {
  if (dashboardTab !== renderedDashboardTab) {
    setDashboardFadeState("fade-out");

    const timeout = setTimeout(() => {
      setRenderedDashboardTab(dashboardTab);
      setDashboardFadeState("fade-in");
    }, 150); // matches CSS fade-out duration

    return () => clearTimeout(timeout);
  }
}, [dashboardTab, renderedDashboardTab]);


  return (
    
    <div className="dashboard">
      <p style={{ position: 'absolute', fontSize: '20px', bottom: '100px', color: 'white', left: '20px', zIndex: '20' }}>
  {dashboardTab}
</p>
      <Sidebar
        activeTab={activeTab}
        dashboardTab={dashboardTab}
        setDashboardTab={setDashboardTab}
        collapsed={navCollapsed}
        handleCollapse={handleCollapse}
        fadeState={fadeState}
      />
      <div className="content-wrap">
        <Menu
          dashboardTab={renderedDashboardTab}
          collapsed={menuCollapsed}
          handleCollapse={handleCollapse}
          fadeState={dashboardFadeState}
        />
        <Content
          dashboardTab={renderedDashboardTab}
          fadeState={dashboardFadeState}
          activeTab = {activeTab}
        />
      </div>
    </div>
  );
}


export default Dashboard;
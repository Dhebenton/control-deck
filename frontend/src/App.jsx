import { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const [renderedTab, setRenderedTab] = useState("Dashboard");
  const [fadeState, setFadeState] = useState("fade-in");
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    if (activeTab !== renderedTab) {
      setFadeState("fade-out");
      const timeout = setTimeout(() => {
        setRenderedTab(activeTab);
        setFadeState("fade-in");
      }, 100); // matches .1s fade-out

      return () => clearTimeout(timeout);
    }
  }, [activeTab, renderedTab]);

  return (
    <>
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkTheme={darkTheme}
        setDarkTheme={setDarkTheme}
        fadeState={fadeState}
      />
      {renderedTab === "Dashboard" && (
        <Dashboard
          activeTab={renderedTab}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          fadeState={fadeState}
        />
      )}
    </>
  );
}

export default App;
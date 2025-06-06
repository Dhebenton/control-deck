import { useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkTheme, setDarkTheme] = useState(true)


  return (
    <>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab}  darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Dashboard activeTab={activeTab} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
    </>
  )
}

export default App

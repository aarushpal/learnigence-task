// App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleIconClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex ">
      <Sidebar onIconClick={handleIconClick} />
      <div className="flex-1 p-4 ml-24">
        <Home />
      </div>
    </div>
  );
};

export default App;

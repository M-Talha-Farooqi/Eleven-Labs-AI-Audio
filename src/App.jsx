import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Header from "./components/Header";
import UploadSection from "./components/UploadSection";
import FiltersSection from "./components/FiltersSection";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 to-gray-900 flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 p-6 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        } transition-all`}
      >
        {/* Header */}
        <Header />

        <div className="flex space-x-8">
          {/* Left Panel */}
          <UploadSection />

          {/* Right Panel */}
          <FiltersSection />
        </div>
      </div>
    </div>
  );
}

export default App;

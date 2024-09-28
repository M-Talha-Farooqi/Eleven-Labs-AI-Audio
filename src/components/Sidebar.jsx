import React from "react";
import {
  FaBars,
  FaTimes,
  FaMicrophone,
  FaHistory,
  FaCog,
  FaUser,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-gray-900 text-white p-4 transition-width ${
        isOpen ? "w-64" : "w-16"
      } duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="text-white hover:text-purple-500 focus:outline-none transition duration-300 mb-6"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar Links */}
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-3">
          <FaMicrophone />
          {isOpen && <span className="text-sm">Generate audio</span>}
        </div>

        <div className="flex items-center space-x-3">
          <FaHistory />
          {isOpen && <span className="text-sm">Audio generation history</span>}
        </div>

        <div className="flex items-center space-x-3">
          <FaUser />
          {isOpen && <span className="text-sm">My voice models</span>}
        </div>

        <div className="flex items-center space-x-3">
          <FaCog />
          {isOpen && <span className="text-sm">Settings</span>}
        </div>

        <div className="flex items-center space-x-3">
          <FaUser />
          {isOpen && <span className="text-sm">Shared with me</span>}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 w-full px-4 py-2">
        {/* Additional content or empty space here */}
      </div>
    </div>
  );
};

export default Sidebar;

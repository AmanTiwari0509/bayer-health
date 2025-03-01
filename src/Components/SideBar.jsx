import React, { useState } from "react";
import "./SideBar.css"; // Make sure to create the CSS file

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar-container ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"} Sidebar
      </button>
      <div className="sidebar">
        <ul>
        <li><h3 href="/">Bayer Health</h3></li>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/myprofile">My Profile</a></li>
          <li><a href="/wellnessgoals">Wellness Goals</a></li>
          <li><a href="/messages">Messages</a></li>
          <li><a href = "/logout">Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

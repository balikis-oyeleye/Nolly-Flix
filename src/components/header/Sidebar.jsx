import React from "react";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
  const onclick = () => {
    setToggleSidebar(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-main h-screen w-1/4 bg-white shadow-lg">
        <div className="sidebar-brand between-row">
          <h1>Nolly-Flix</h1>
          <FaTimes onclick={onclick} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

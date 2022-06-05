import React from "react";
import { BiMenu } from "react-icons/bi";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";
import "./header.css";

const Header = ({ theme, setTheme, setToggleSidebar }) => {
  const onClick = () => {
    setTheme(!theme);
  };

  const toggle = () => {
    setToggleSidebar(true);
  };

  return (
    <header className="header py-2 border-b border-gray-300 dark:border-gray-500">
      <div className="header-nav between-row container mx-auto">
        <BiMenu
          className="cursor-pointer text-3xl dark:text-gray-500"
          onClick={toggle}
        />
        <h1 className="font-bold text-2xl dark:text-gray-200">Nolly-Flix</h1>
        <div className="header-cta between-column gap-3 dark:text-gray-500">
          {theme ? (
            <FaSun className="cursor-pointer text-2xl" onClick={onClick} />
          ) : (
            <FaMoon className="cursor-pointer text-2xl" onClick={onClick} />
          )}
          <FaSearch className="cursor-pointer text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;

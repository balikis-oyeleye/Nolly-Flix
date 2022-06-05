import React from "react";
import { BiMenu } from "react-icons/bi";
import { FaMoon, FaSearch, FaSun } from "react-icons/fa";

const Header = ({ theme, setTheme }) => {
  const onClick = () => {
    setTheme(!theme);
  };

  return (
    <header className="header py-3 border-b border-gray-300 dark:border-gray-500">
      <div className="header-nav between-row container mx-auto">
        <BiMenu className="cursor-pointer text-3xl dark:text-gray-500" />
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

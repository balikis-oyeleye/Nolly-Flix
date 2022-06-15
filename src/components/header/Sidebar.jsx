import React from "react";
import { Link } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { useMovieContext } from "../../context/movieContext";
import "./header.css";

const Sidebar = ({ setToggleSidebar }) => {
  const { links } = useMovieContext();

  const onclick = () => {
    setToggleSidebar(false);
  };

  // NavLinks
  const navLinks = links.map((link, _index) => {
    return (
      <li key={link.id}>
        <Link
          to={link.to}
          className="flex items-center gap-3 cursor-pointer font-bold"
          onClick={onclick}
        >
          {link.icon} {link.name}
        </Link>
      </li>
    );
  });

  return (
    <aside className="sidebar">
      <div className="sidebar-main h-screen w-3/4 lg:w-1/4 sm:w-2/4 bg-white shadow-2xl px-4 pt-2 dark:bg-dark-blue ">
        <div className="sidebar-brand between-row">
          <h1 className="font-bold text-2xl dark:text-gray-200">Nolly-Flix</h1>
          <BiX
            onClick={onclick}
            className="cursor-pointer text-3xl dark:text-gray-500"
          />
        </div>
        <ul className="sidebar-nav flex flex-col gap-4 mt-5 text-lg dark:text-gray-300">
          {navLinks}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;

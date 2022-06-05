import React from "react";
import { FaTv, FaRegBookmark, FaTheaterMasks } from "react-icons/fa";
import { BiHome, BiMoviePlay, BiX } from "react-icons/bi";
import { ImFire } from "react-icons/im";

const Sidebar = ({ setToggleSidebar }) => {
  const onclick = () => {
    setToggleSidebar(false);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-main h-screen w-3/4 lg:w-1/4 sm:w-2/4 bg-white shadow-2xl px-4 pt-2 dark:bg-dark-blue ">
        <div className="sidebar-brand between-row">
          <h1 className="font-bold text-2xl dark:text-gray-200">Nolly-Flix</h1>
          <BiX
            onClick={onclick}
            className="cursor-pointer text-3xl dark:text-gray-500"
          />
        </div>
        <ul className="sidebar-nav flex flex-col gap-4 mt-5 text-lg dark:text-gray-300">
          <li className="flex items-center gap-3 cursor-pointer">
            <BiHome /> Home
          </li>
          <li className="flex items-center gap-3 cursor-pointer">
            <ImFire />
            Trending
          </li>
          <li className="flex items-center gap-3 cursor-pointer">
            <BiMoviePlay /> Movies
          </li>
          <li className="flex items-center gap-3 cursor-pointer">
            <FaTv /> Tv-Series
          </li>
          <li className="flex items-center gap-3 cursor-pointer">
            <FaTheaterMasks />
            Genres
          </li>
          <li className="flex items-center gap-3 cursor-pointer">
            <FaRegBookmark /> Bookmarks
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

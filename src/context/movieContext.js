import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./movieReducer";
import { FaTv } from "react-icons/fa";
import { BiHome, BiMoviePlay } from "react-icons/bi";
import { ImFire } from "react-icons/im";

const Movies = createContext();

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = process.env.React_APP_API_KEY;

const MovieContext = ({ children }) => {
  const [movieState, movieDispatch] = useReducer(reducer, {
    searchTerm: "",
    movieSearchList: [],
    topMovies: [],
    trending: [],
    movies: [],
    tvSeries: [],
  });

  // NavLinks for sidebar
  const links = [
    { id: 0, to: "/", icon: <BiHome />, name: "Home", isActive: true },
    {
      id: 1,
      to: "/trending",
      icon: <ImFire />,
      name: "Trending",
      isActive: false,
    },
    { id: 2, to: "/movies", icon: <FaTv />, name: "Movies", isActive: false },
    {
      id: 3,
      to: "/tv-series",
      icon: <BiMoviePlay />,
      name: "Tv-Series",
      isActive: false,
    },
  ];

  return <Movies.Provider value={{ links }}>{children}</Movies.Provider>;
};

export const useMovieContext = () => {
  return useContext(Movies);
};

export default MovieContext;

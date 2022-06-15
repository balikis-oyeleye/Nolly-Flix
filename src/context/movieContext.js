import React, { createContext, useContext, useState } from "react";
import globalCall from "../api/tmdApi";
import { FaTv } from "react-icons/fa";
import { BiHome, BiMoviePlay } from "react-icons/bi";
import { ImFire } from "react-icons/im";

const Movies = createContext();

const apiKey = process.env.REACT_APP_API_KEY;
const imagePath = "https://image.tmdb.org/t/p/w500";
const imagePath2 = "https://image.tmdb.org/t/p/w1280";

const MovieContext = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Api request with axios
  const requests = {
    discoverMovies: `discover/movie?api_key=3c3d212785e118bdd582d359c385fa32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    trendingMovies: `trending/all/day?api_key=3c3d212785e118bdd582d359c385fa32`,
    movies: `trending/movie/day?api_key=3c3d212785e118bdd582d359c385fa32`,
    tv_series: `discover/tv?api_key=3c3d212785e118bdd582d359c385fa32&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  };

  // Api calls with axios
  const getResults = async (url) => {
    setIsLoading(true);

    try {
      const request = await globalCall.get(url);
      setAllMovies(request?.data?.results);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

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

  return (
    <Movies.Provider
      value={{
        links,
        requests,
        allMovies,
        getResults,
        imagePath,
        imagePath2,
        isLoading,
      }}
    >
      {children}
    </Movies.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(Movies);
};

export default MovieContext;

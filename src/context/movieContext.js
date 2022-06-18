import React, { createContext, useContext, useState } from "react";
import globalCall from "../api/tmdApi";
import { FaTv } from "react-icons/fa";
import { BiHome, BiMoviePlay } from "react-icons/bi";
import { ImFire } from "react-icons/im";

const Movies = createContext();

const apiKey = process.env.REACT_APP_API_KEY;
const imagePath = "https://image.tmdb.org/t/p/w500";

const MovieContext = ({ children }) => {
  const [allMovies, setAllMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  // Api request with axios
  const requests = {
    discoverMovies: `discover/movie?api_key=3c3d212785e118bdd582d359c385fa32&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`,
    trendingMovies: `trending/all/day?api_key=3c3d212785e118bdd582d359c385fa32`,
    movies: `trending/movie/day?api_key=3c3d212785e118bdd582d359c385fa32`,
    tv_series: `discover/tv?api_key=3c3d212785e118bdd582d359c385fa32&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`,
  };

  // Api calls with axios

  const getResults = async (url) => {
    try {
      const request = await globalCall.get(url);
      setAllMovies(request?.data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Api call to get movie by id
  const getMovie = async (id) => {
    try {
      const request = await globalCall.get(
        `movie/${id}?api_key=3c3d212785e118bdd582d359c385fa32`
      );
      setMovie(request?.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(movie);

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
        setCurrentPage,
        currentPage,
        getMovie,
        movie,
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

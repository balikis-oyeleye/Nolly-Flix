import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./movieReducer";

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

  return <Movies.Provider value={{}}>{children}</Movies.Provider>;
};

export const useMovieContext = () => {
  return useContext(Movies);
};

export default MovieContext;

import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const Movies = createContext();

const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = process.env.React_APP_API_KEY;

const MovieContext = ({ children }) => {
  return <Movies.Provider value={{}}>{children}</Movies.Provider>;
};

export default MovieContext;

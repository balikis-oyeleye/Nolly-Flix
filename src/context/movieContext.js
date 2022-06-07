import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const MovieContext = createContext();
const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = process.env.React_APP_API_KEY;
const movieContext = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const getData = async (searchValue) => {
    setLoading(true);

    const url = `${baseUrl}${searchValue}?api_key=${process.env.React_APP_API_KEY}&language=en-US`;

    setLoading(false);
  };

  return <MovieContext.Provider>{children}</MovieContext.Provider>;
};

export default movieContext;

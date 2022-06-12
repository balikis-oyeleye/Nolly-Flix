import React from "react";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/":
      return <div className="container mx-auto dark:text-white">Home</div>;
    case "/trending":
      return <div className="container mx-auto dark:text-white">Trending</div>;
    case "/movies":
      return <div className="container mx-auto dark:text-white">Movies</div>;
    case "/tv-series":
      return <div className="container mx-auto dark:text-white">Tv-Series</div>;
    default:
      break;
  }
};

export default Movies;

import React from "react";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const location = useLocation();

  switch (location.pathname) {
    case "/":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Discover Movies~</h2>
        </div>
      );
    case "/trending":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Trending~</h2>
        </div>
      );
    case "/movies":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Movies~</h2>
        </div>
      );
    case "/tv-series":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Tv Series~</h2>
        </div>
      );
    default:
      break;
  }
};

export default Movies;

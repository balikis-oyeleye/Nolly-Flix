import { useEffect } from "react";
import { useMovieContext } from "../../context/movieContext";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const { getResults, requests } = useMovieContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      getResults(requests.discoverMovies);
    } else if (location.pathname === "/trending") {
      getResults(requests.trendingMovies);
    } else if (location.pathname === "/movies") {
      getResults();
    }
  }, [location.pathname]);

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

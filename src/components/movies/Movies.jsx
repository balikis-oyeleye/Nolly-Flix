import { useEffect } from "react";
import { useMovieContext } from "../../context/movieContext";
import { useLocation } from "react-router-dom";

const Movies = () => {
  const { getResults, requests, allMovies, imagePath, imagePath2 } =
    useMovieContext();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      getResults(requests.discoverMovies);
    } else if (location.pathname === "/trending") {
      getResults(requests.trendingMovies);
    } else if (location.pathname === "/movies") {
      getResults(requests.movies);
    } else if (location.pathname === "/tv-series") {
      getResults(requests.tv_series);
    }
  }, [location.pathname]);

  const movieList = allMovies.map((item) => {
    return (
      <div className="" key={item.id}>
        <img
          src={`${imagePath}${item.poster_path}`}
          alt="movies"
          className="h-auto w-full cursor-pointer"
        />
      </div>
    );
  });

  switch (location.pathname) {
    case "/":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Discover Movies~</h2>
          <div className="main grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6 mt-5">
            {movieList}
          </div>
        </div>
      );
    case "/trending":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Trending~</h2>
          {movieList}
        </div>
      );
    case "/movies":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Movies~</h2>
          {movieList}
        </div>
      );
    case "/tv-series":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Tv Series~</h2>
          {allMovies.map((item) => {
            return (
              <div className="" key={item.id}>
                <img src={`${imagePath}${item.poster_path}`} alt="movies" />
                <img src={`${imagePath}${item.backdrop_path}`} alt="movies" />
                <h1>{item.name}</h1>
              </div>
            );
          })}
        </div>
      );
    default:
      break;
  }
};

export default Movies;

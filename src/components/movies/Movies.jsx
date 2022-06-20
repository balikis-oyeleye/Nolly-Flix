import { useEffect } from "react";
import { useMovieContext } from "../../context/movieContext";
import { useLocation, useNavigate } from "react-router-dom";
import noImage from "../../assets/images/no_image.jpg";

const Movies = () => {
  const {
    getResults,
    requests,
    allMovies,
    imagePath,
    currentPage,
    setCurrentPage,
  } = useMovieContext();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/Nolly-Flix/") {
      getResults(requests.discoverMovies);
    } else if (location.pathname === "/trending") {
      getResults(requests.trendingMovies);
    } else if (location.pathname === "/movies") {
      getResults(requests.movies);
    } else if (location.pathname === "/tv-series") {
      getResults(requests.tv_series);
    }
  }, [location.pathname, currentPage]);

  const onNext = () => {
    setCurrentPage((prev) => {
      return (prev += 1);
    });
  };

  const onPrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => {
        return (prev -= 1);
      });
    }
  };

  const movieList = allMovies.map((item) => {
    return (
      <div key={item.id}>
        {item.poster_path ? (
          <img
            src={`${imagePath}${item.poster_path}`}
            alt="movies"
            className="h-auto w-full cursor-pointer"
          />
        ) : (
          <img
            src={noImage}
            alt="movies"
            className="h-auto w-full cursor-pointer"
          />
        )}
      </div>
    );
  });

  switch (location.pathname) {
    case "/Nolly-Flix/":
      return (
        <div className="container mx-auto dark:text-gray-300 mt-4">
          <h2 className="text-center text-2xl">~Discover Movies~</h2>
          <div className="main grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6 mt-5">
            {allMovies.map((item) => {
              const onNavigate = () => {
                navigate(
                  `/movie/${item.id}/${item.title ? item.title : item.name}`
                );
              };

              return (
                <div key={item.id}>
                  {item.poster_path ? (
                    <img
                      src={`${imagePath}${item.poster_path}`}
                      alt="movies"
                      className="h-auto w-full cursor-pointer"
                      onClick={onNavigate}
                    />
                  ) : (
                    <img
                      src={noImage}
                      alt="movies"
                      className="h-auto w-full cursor-pointer"
                      onClick={onNavigate}
                    />
                  )}
                </div>
              );
            })}
          </div>
          <div className="pagination flex justify-center items-center gap-3 py-4 text-2xl dark:text-white">
            <button
              className="border border-dark-blue px-4 dark:border-white"
              onClick={onPrev}
            >
              Prev
            </button>
            <button
              className="border border-dark-blue px-4 dark:border-white"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      );
    case "/trending":
      return (
        <div className="container mx-auto dark:text-gray-300 py-4">
          <h2 className="text-center text-2xl">~Trending~</h2>
          <div className="main grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6 mt-5">
            {movieList}
          </div>
        </div>
      );
    case "/movies":
      return (
        <div className="container mx-auto dark:text-gray-300 py-4">
          <h2 className="text-center text-2xl">~Movies~</h2>
          <div className="main grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6 mt-5">
            {movieList}
          </div>
        </div>
      );
    case "/tv-series":
      return (
        <div className="container mx-auto dark:text-gray-300 py-4">
          <h2 className="text-center text-2xl">~Tv Series~</h2>
          <div className="main grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-6 mt-5">
            {movieList}
          </div>
        </div>
      );
    default:
      break;
  }
};

export default Movies;

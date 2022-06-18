import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../../context/movieContext";

const Movie = () => {
  const { movieId } = useParams();

  const { getMovie, movie, imagePath } = useMovieContext();

  useEffect(() => {
    getMovie(movieId);
  }, []);

  return (
    <div className="movie dark:text-white container mx-auto py-4 flex flex-col gap-10">
      <div className="movie-main grid place-items-center">
        <div className="movie-main__image">
          <img src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
        </div>
      </div>
      <div className="movie-side">
        <div className="movie-side__title">
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
        </div>
        <div className="movie-side__overview">
          <h3 className="text-xl underline font-semibold">Overview</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;

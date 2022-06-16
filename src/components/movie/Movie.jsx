import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovieContext } from "../../context/movieContext";

const Movie = () => {
  const { movieId } = useParams();

  const { getMovie, movie } = useMovieContext();

  useEffect(() => {
    getMovie(movieId);
  }, []);

  return <div>{movie.title}</div>;
};

export default Movie;

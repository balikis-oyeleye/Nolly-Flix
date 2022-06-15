import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  let { movieId, movieName } = useParams();
  return <div>Movie</div>;
};

export default Movie;

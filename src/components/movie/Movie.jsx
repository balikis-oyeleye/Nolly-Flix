import React from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { movieId, movieName } = useParams();

  return (
    <div>
      {movieId} {movieName}
    </div>
  );
};

export default Movie;

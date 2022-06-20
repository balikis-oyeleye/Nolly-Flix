import React from "react";
import { Routes, Route } from "react-router-dom";
import { Movies, Movie } from "../components";

const PageRoutes = () => {
  return (
    <div className="dark:bg-dark-blue">
      <Routes>
        <Route path="/Nolly-Flix" element={<Movies />} />
        <Route path="/trending" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<Movies />} />
        <Route path="/movie/:movieId/:moveName" element={<Movie />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;

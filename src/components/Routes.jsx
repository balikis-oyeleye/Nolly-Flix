import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./movies/Movies";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Movies />} />
      <Route path="/trending" element={<Movies />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/tv-series" element={<Movies />} />
    </Routes>
  );
};

export default PageRoutes;

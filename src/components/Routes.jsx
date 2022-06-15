import React from "react";
import { Routes, Route } from "react-router-dom";
import Movies from "./movies/Movies";
import Loader from "../components/loader/Loader";

const PageRoutes = () => {
  return (
    <div className="dark:bg-dark-blue">
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/trending" element={<Movies />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv-series" element={<Movies />} />
      </Routes>
    </div>
  );
};

export default PageRoutes;

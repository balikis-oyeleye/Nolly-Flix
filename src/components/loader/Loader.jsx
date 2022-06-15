import React from "react";
import spinner from "../../assets/images/spinner.gif";

const Loader = () => {
  return (
    <div className="grid place-items-center h-full">
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loader;

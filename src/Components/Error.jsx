import React from "react";
// import "./Error.css";

const Error = ({ errorMessage }) => {
  return <div className="w-full text-center bg-red-600 uppercase text-white lg:text-2xl px-2">{errorMessage}</div>;
};

export default Error;

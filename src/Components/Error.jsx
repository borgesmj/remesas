import React from "react";
// import "./Error.css";

const Error = ({ errorMessage, className }) => {
  return <div className={className}>{errorMessage}</div>;
};

export default Error;

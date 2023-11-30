import React from "react";
// import "./Footer.css";

const Footer = ({ tasaDeCambio }) => {
  return (
    <footer className="w-full text-center text-xl lg:text-2xl">
      <p>
        Tasa del día: <span className="font-bold">{tasaDeCambio}</span> <br />
        Por cada 50.000 COP, reciben {(50000 * (1 / tasaDeCambio)).toFixed(
          2
        )}{" "}
        Bs
      </p>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";

const Footer = ({ tasaDeCambio }) => {
  return (
    <footer>
      <p>
        Tasa del día: {tasaDeCambio} <br />
        Por cada 50.000 COP, reciben {(50000 * (1 / tasaDeCambio)).toFixed(
          2
        )}{" "}
        Bs
      </p>
    </footer>
  );
};

export default Footer;

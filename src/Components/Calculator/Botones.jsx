import React, { useEffect, useState } from "react";
// import "./Botones.css";
import { FaDeleteLeft } from "react-icons/fa6";
import Error from "../Error";

const Botones = ({ setValueIn, valueIn, setFormulario, setCalculator }) => {
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.target.classList.add("button-animation");
    e.target.classList.remove("border");

    setTimeout(() => {
      e.target.classList.add("border");
      e.target.classList.remove("button-animation");
    }, 100);

    const regex = /[0-9]/g;
    const value = e.target.innerText;
    if (regex.test(value)) {
      if (valueIn === "0") {
        setValueIn(value);
      } else {
        setValueIn(valueIn + value);
      }
    } else {
      setValueIn((prevValue) => prevValue.slice(0, -1));
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const regex = /[0-9]/g;

      if (regex.test(event.key)) {
        if (valueIn === "0") {
          setValueIn(event.key);
        } else {
          setValueIn((prevValue) => prevValue + event.key);
        }
      } else if (event.key === "Backspace") {
        setValueIn((prevValue) => prevValue.slice(0, -1));
      } else {
        return;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [valueIn]);

  const buttons = [
    { value: 1, id: "btnOne", class: "button border shadow" },
    { value: 2, id: "btnTwo", class: "button border shadow" },
    { value: 3, id: "btnThree", class: "button border shadow" },
    { value: 4, id: "btnFour", class: "button border shadow" },
    { value: 5, id: "btnFive", class: "button border shadow" },
    { value: 6, id: "btnSix", class: "button border shadow" },
    { value: 7, id: "btnSeven", class: "button border shadow" },
    { value: 8, id: "btnEight", class: "button border shadow" },
    { value: 9, id: "btnNine", class: "button border shadow" },
    { value: 0, id: "btnZero", class: "button border shadow" },
    { value: <FaDeleteLeft />, id: "btnDelete", class: "button border shadow" },
  ];

  const handleSendClick = () => {
    if (valueIn < 50000) {
      setError(true);
    } else {
      setCalculator(false);
      setFormulario(true);
      setError(false);
    }
  };
  return (
    <div className="flex flex-wrap w-full bg-[#00ff00]">
      {buttons.map((button) => (
        <button
          onClick={handleClick}
          key={button.id}
          id={button.id}
          className='bg-red-600'
        >
          {button.value}
        </button>
      ))}
      <button className="button border shadow" onClick={handleSendClick}>
        Enviar
      </button>
      {error && (
        <Error
          text="El monto minimo a enviar son 50.000 COP"
          className="error-calculadora"
        />
      )}
    </div>
  );
};

export default Botones;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Botones.css";
import { FaDeleteLeft } from "react-icons/fa6";
import Error from "../Error";

const Botones = ({ setValueIn, valueIn, setError, setErrorMessage, setOrder, order }) => {
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
    { value: <FaDeleteLeft />, id: "btnDelete", class: "button border shadow" },
    { value: 0, id: "btnZero", class: "button border shadow" },
  ];

  useEffect(() => {
    if (order.id){
      setValueIn(order.monto)
    }
  })

  const handleClick = (value) => {
    setError(false)
    const regex = /[0-9]/g;
    if (regex.test(value)) {
      if (valueIn === "0") {
        setValueIn(String(value));
      } else {
        setValueIn(valueIn + String(value));
      }
    } else {
      setValueIn((prevValue) => prevValue.slice(0, -1));
    }
  };
  const navigate = useNavigate()
  const getId = () => {
    const fecha = Date.now().toString().substring(6)
    return fecha
  }

  const handleSend = () => {
    if (Number(valueIn) < 50000){
      setError(true)
      setErrorMessage('Disculpa; el monto mínimo para enviar es 50.000 Cop')
      return
    } else{
      if(order.id){
        setOrder({...order, monto: valueIn
        })
        navigate("/remesas/paso-2");
      } else{
        setOrder({
          id: getId(), monto: valueIn
        })
        navigate("/remesas/paso-2");
      }
    }
  };
  return (
    <div className="flex flex-wrap flex-row justify-center items-center w-full  px-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          id={button.id}
          onClick={() => {
            handleClick(button.value);
          }}
          className="w-[30%] h-12 lg:h-20 flex justify-center items-center bg-[#daf5da] m-1 rounded-2xl shadow-3xl text-xl md:text-2xl lg:text-4xl lg:hover:bg-[#8ff08f] lg:hover:text-white  lg:hover:font-bold"
        >
          {button.value}
        </button>
      ))}
      <button
        className={`w-[30%] h-12 lg:h-20 flex justify-center items-center ${
          Number(valueIn) < 50000 ? "bg-[#4d4d4d]" : "bg-[#daf5da]"
        } m-1 rounded-2xl shadow-3xl text-xl md:text-2xl lg:text-4xl ${
          Number(valueIn) < 50000
            ? "lg:hover:cursor-not-allowed"
            : "lg:hover:cursor-pointer lg:hover:bg-[#8ff08f] lg:hover:text-white lg:hover:font-bold"
        }`}
        onClick={handleSend}
      >
        Enviar
      </button>
    </div>
  );
};

export default Botones;

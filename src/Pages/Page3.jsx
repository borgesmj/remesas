import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import BackBtn from "../Icons/BackBtn";
const Page3 = ({ setCurrStep, setCurrStepMessage, order, setOrder }) => {
  useEffect(() => {
    setCurrStep(3);
    setCurrStepMessage("Selecciona el método de pago");
  });

  const navigate = useNavigate();
  const [formaPago, setFormaPago] = useState('Transferencia Bancaria Bancolombia');

  const handleSubmit = (e) => {
    e.preventDefault()

    setOrder({...order, formaPago: formaPago})
    navigate("/remesas/paso-4/")

  }
  return (
    <form className="bg-[#4295e7] p-4 flex flex-col justify-between items-center mt-8 w-full" onSubmit={handleSubmit}>
      <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
        <NavLink
          onClick={() => navigate(-1)}
          className="flex flex-row justify-start w-full text-2xl lg:text-4xl"
        >
          <BackBtn /> <span className="font-bold ml-4">Regresar</span>
        </NavLink>
      </div>
      <div className="campo w-full py-4 m-2 md:m-4">
        <input
          type="radio"
          name="tipoPago"
          id="transferecia1"
          defaultChecked={order.formaPago === 'Transferencia Bancaria Bancolombia'}
          className="h-full"
          onChange={() => {
            setFormaPago('Transferencia Bancaria Bancolombia');
          }}
        />
        <label
          htmlFor="transferecia1"
          className="text-md md:text-xl lg:text-2xl ml-4"
        >
          Transferencia Bancaria Bancolombia
        </label>
      </div>
      <div className="campo w-full py-4 m-2 md:m-4">
        <input
          type="radio"
          name="tipoPago"
          id="transferecia2"
          className="h-full"
          defaultChecked={order.formaPago === 'Transferencia Bancaria por QR'}
          onChange={() => {
            setFormaPago('Transferencia Bancaria por QR');
          }}
        />
        <label
          htmlFor="transferecia2"
          className="text-md md:text-xl lg:text-2xl ml-4"
        >
          Transferencia Bancaria por QR
        </label>
      </div>
      <div className="campo w-full py-4 m-2 md:m-4">
        <input
          type="radio"
          name="tipoPago"
          id="transferecia3"
          className="h-full"
          defaultChecked={order.formaPago === 'Consignacion Corresponsal Bancolombia'}
          onChange={() => {
            setFormaPago('Consignacion Corresponsal Bancolombia');
          }}
        />
        <label
          htmlFor="transferecia3"
          className="text-md md:text-xl lg:text-2xl ml-4"
        >
          Consignacion Corresponsal Bancolombia
        </label>
      </div>
      <div className="campo w-full h-8 flex flex-row justify-center items-center my-4 ">
      <button
          type="submit"
          className="text-xl lg:text-2xl text-white font-bold w-1/3 h-8 p-8 bg-lime-600 flex justify-center items-center mt-4 rounded-xl lg:hover:border-white lg:hover:border-[4px] lg:hover:border-solid"
        >
          Siguiente
        </button>
      </div>
    </form>
  );
};

export default Page3;

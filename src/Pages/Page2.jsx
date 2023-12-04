import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import BackBtn from "../Icons/BackBtn";
import Error from "../Components/Error";

const Page2 = ({
  setCurrStep,
  setCurrStepMessage,
  error,
  setError,
  errorMessage,
  setErrorMessage,
  setOrder,
  order
}) => {
  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [banco, setBanco] = useState("");
  const [cuenta, setCuenta] = useState("");

  useEffect(() => {
    setCurrStep(2);
    setCurrStepMessage(
      "Introduce los datos de la persona que recibirá el dinero"
    );
    setError(false)
    if (order.datosPersonales){
      setNombre(order.datosPersonales.nombre)
      setDocumento(order.datosPersonales.documento)
      setBanco(order.datosPersonales.banco)
      setCuenta(order.datosPersonales.cuenta)
    }
  }, []);

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, banco, documento, cuenta].includes("")) {
      setError(true);
      setErrorMessage("Disculpa; todos los datos deben ser completados");
      return;
    } else{
      const datosPersonales = {
        nombre,
        documento,
        banco,
        cuenta
      }

      setOrder({...order, datosPersonales})
      navigate("/remesas/paso-3/")
      

    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#4295e7] p-4 flex flex-col justify-between items-center mt-8"
    >
      <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
        <NavLink
          to="/remesas/"
          className="flex flex-row justify-start w-full text-2xl lg:text-4xl"
        >
          <BackBtn /> <span className="font-bold ml-4">Regresar</span>
        </NavLink>
      </div>
      <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
        <label
          htmlFor="nombre"
          className="w-1/5 h-full text-md md:text-xl lg:text-2xl font-bold"
        >
          Nombre:
        </label>
        <input
          type="text"
          className="w-4/5 h-full bg-[#eefffc] rounded-md text-2xl focus:bg-[#e5bdf5]"
          id="nombre"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
            setError(false)
          }}
        />
      </div>
      <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
        <label
          htmlFor="cedula"
          className="w-1/5 h-full text-md md:text-xl lg:text-2xl font-bold"
        >
          Cédula:
        </label>
        <input
          type="text"
          className="w-4/5 h-full bg-[#eefffc] rounded-md text-2xl focus:bg-[#e5bdf5]"
          id="cedula"
          value={documento}
          onChange={(e) => {
            setDocumento(e.target.value);
            setError(false)
          }}
        />
      </div>
      <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
        <label
          htmlFor="banco"
          className="w-1/5 h-full text-md md:text-xl lg:text-2xl font-bold"
        >
          Banco:
        </label>
        <input
          type="text"
          className="w-4/5 h-full bg-[#eefffc] rounded-md text-2xl focus:bg-[#e5bdf5]"
          id="banco"
          value={banco}
          onChange={(e) => {
            setBanco(e.target.value);
            setError(false)
          }}
        />
      </div>
      <div className="campo w-full h-8 flex flex-row justify-between my-4 items-center">
        <label
          htmlFor="cuenta"
          className="w-1/5 h-full text-md md:text-xl lg:text-2xl font-bold"
        >
          Cuenta:
        </label>
        <input
          type="text"
          className="w-4/5 h-full bg-[#eefffc] rounded-md text-2xl focus:bg-[#e5bdf5]"
          id="cuenta"
          value={cuenta}
          onChange={(e) => {
            setCuenta(e.target.value);
            setError(false)
          }}
        />
      </div>
      {error && (
        <Error
          className="campo w-full lg:h-8 flex flex-row justify-center items-center my-4 bg-[#ff0000] uppercase text-white text-center"
          errorMessage={errorMessage}
        />
      )}
      <div className="campo w-full h-8 flex flex-row justify-center items-center my-4">
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

export default Page2;

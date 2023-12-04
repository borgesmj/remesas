import React, { useEffect } from "react";
import Botones from "./Botones";
import Screen from "./Screen";
import Footer from "./Footer";
import Error from "../Error";

const Calculatore = ({
  valueIn,
  setValueIn,
  valueOut,
  tasaDeCambio,
  error,
  setError,
  errorMessage,
  setErrorMessage,
  setCurrStepMessage,
  setCurrStep,
  setOrder,
  order
}) => {
  useEffect(() => {
    setCurrStep(1);
    setCurrStepMessage(
      "Calcula La cantidad de Bs que recibirá en Venezuela"
    );
  }, []);
  return (
    <section className="my-8 h-fit py-4 w-full bg-[#4295e7]">
      <Screen valueIn={valueIn} valueOut={valueOut} />
      <Botones
        setValueIn={setValueIn}
        valueIn={valueIn}
        setErrorMessage={setErrorMessage}
        setError={setError}
        setOrder = {setOrder}
        order={order}
      />
      <Footer tasaDeCambio={tasaDeCambio} />
      {error && <Error errorMessage={errorMessage} className='w-full text-center bg-red-600 uppercase text-white lg:text-2xl px-2' />}
    </section>
  );
};

export default Calculatore;

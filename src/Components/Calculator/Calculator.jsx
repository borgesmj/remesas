import React from "react";
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
  setCurrStep
}) => {
  setCurrStep(1)
  setCurrStepMessage('Calcula La cantidad de Bs que recibirá en Venezuelaaaaa')
  return (
    <section className="my-8 h-fit py-4 w-full bg-[#4295e7]">
      <Screen
        valueIn={valueIn}
        valueOut={valueOut}
      />
      <Botones
        setValueIn={setValueIn}
        valueIn={valueIn}
        setErrorMessage = {setErrorMessage}
        setError = {setError}
      />
      <Footer
        tasaDeCambio={ tasaDeCambio}
        />
      {error && <Error
        errorMessage = {errorMessage}
      />}
    </section>
  );
};

export default Calculatore;

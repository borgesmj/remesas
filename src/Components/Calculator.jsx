import React from "react";
import Form from "./Form";
import Botones from "./Botones";

const Calculatore = ({
  valueIn,
  setValueIn,
  valueOut,
  setCalculator,
  setFormulario,
}) => {
  return (
    <section className="container">
      <Form valueIn={valueIn} valueOut={valueOut} />
      <Botones
        setValueIn={setValueIn}
        valueIn={valueIn}
        setCalculator={setCalculator}
        setFormulario={setFormulario}
      />
    </section>
  );
};

export default Calculatore;

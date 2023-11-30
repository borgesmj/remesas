import React from "react";
import Botones from "./Botones";
import Screen from "./Screen";

const Calculatore = ({
  valueIn,
  setValueIn,
  valueOut,
  setCalculator,
  setFormulario,
}) => {
  return (
    <section className="my-8 h-fit py-4 w-full bg-[#4295e7]">
      <Screen/>
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

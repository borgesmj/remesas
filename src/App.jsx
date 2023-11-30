import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Guide from "./Components/Guide/Guide";
import Calculator from "./Components/Calculator/Calculator";
import Footer from "./Components/Footer";

import Formulario from "./Components/Formulario";
// Firebase dependencies
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

function App() {
  const [valueIn, setValueIn] = useState("0");
  const [valueOut, setValueOut] = useState("0");
  const [calculator, setCalculator] = useState(true);
  const [formulario, setFormulario] = useState(false);
  const [tasaDeCambio, setTasaDeCambio] = useState(0);

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseApp = initializeApp({
    apiKey: "AIzaSyBIlACx2gLAEaExSP9LiwKdWc9Il67WAKM",
    authDomain: "remesas-d6147.firebaseapp.com",
    projectId: "remesas-d6147",
    storageBucket: "remesas-d6147.appspot.com",
    messagingSenderId: "244991534687",
    appId: "1:244991534687:web:8f8acba945167354695dea",
    measurementId: "G-SZR3RY0C7E",
  });

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const tasas = collection(db, "tasasdecambio");

    getDocs(tasas)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTasaDeCambio(doc.data().tasadecambio);
        });
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setMetaTag();
  }, [tasaDeCambio]);

  // =========================================================================
  // 1. Utilizamos un addEventListener para tomar el valor de una tecla presionada
  // 2. Con un regex evaluamos que los valores de entrada sean numeros exclusivamente
  // 3. A la entrada de numeros, se evalua si hay un cero como primer digito, si es asi, se borra y
  //     se coloca el nuevo digito, de lo contrario se van colocando mas numeros
  // 4. Si el evento es el boton de borrar, se modifica el valor de entrada con un 'string.slice'
  // =========================================================================

  useEffect(() => {
    // Realizar el cálculo solo cuando valueIn cambie
    calculate();
  }, [valueIn]);

  const calculate = () => {
    // Parsear el valor de valueIn a número y asignarlo a valueOut
    const result = parseFloat(valueIn) * (1 / tasaDeCambio);
    if (result === "0") {
      setValueOut(0);
    } else {
      setValueOut(result.toFixed(2));
    }
  };

  const setMetaTag = () => {
    const metaTag = document.querySelector('meta[property="og:description"]');
    if (metaTag) {
      metaTag.setAttribute(
        "content",
        `la tasa del dia de hoy es ${tasaDeCambio}`
      );
    }
  };

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 max-h-screen max-w-screen">
      <Navbar />
      <div className="z-10 app-container fixed bottom-0 left-0 right-0 w-full md:w-1/2 md:mx-auto">
        <Guide/>
        <Calculator/>
      </div>
      {/* 
      {calculator && (
        <Calculator
          valueIn={valueIn}
          setValueIn={setValueIn}
          valueOut={valueOut}
          setValueOut={setValueOut}
          setCalculator={setCalculator}
          setFormulario={setFormulario}
        />
      )}
      {calculator && <Footer tasaDeCambio={tasaDeCambio} />}
      {formulario && (
        <Formulario
          setCalculator={setCalculator}
          setFormulario={setFormulario}
          monto={valueIn}
          setValueIn={setValueIn}
        />
      )} */}
    </div>
  );
}

export default App;

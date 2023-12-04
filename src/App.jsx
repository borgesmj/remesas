import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Guide from "./Components/Guide/Guide";
import Calculator from "./Components/Calculator/Calculator";
// Dependencies
import { Routes, Route } from "react-router-dom";
//Pages
import Page2 from "./Pages/Page2";
import Page3 from "./Pages/Page3";
import Page4 from "./Pages/Page4";


// Firebase dependencies
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";

function App() {
  const [valueIn, setValueIn] = useState("0");
  const [valueOut, setValueOut] = useState(0);
  const [tasaDeCambio, setTasaDeCambio] = useState(0);
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [currStep, setCurrStep] = useState(1)
  const [currStepMessage, setCurrStepMessage] = useState('')
  const [order, setOrder] = useState({})
  const [tasaUsdVen, setTasaUsdVen] = useState(0)



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

    if (order){
      setValueIn(String(valueIn))
    }

    console.log(valueIn)

    getDocs(tasas)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setTasaDeCambio(doc.data().tasadecambio);
          setTasaUsdVen(doc.data().usdven)
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
    calculate()
  }, [valueIn])

  const calculate = () => {
    if (valueIn === '0'){
      setValueOut(Number(valueIn))
    } else {
      let result = Number(valueIn) * (1/tasaDeCambio)
      if(result < 10){
        setValueOut(0)
      } else{
        setValueOut(result.toFixed(2))
      }
    }
  }

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
        <Guide
          currStep = {currStep}
          currStepMessage = {currStepMessage}
        />
        <Routes>
          <Route
            path="/remesas/"
            element={<Calculator
              valueIn={valueIn}
              setValueIn={setValueIn}
              valueOut={valueOut}
              tasaDeCambio = {tasaDeCambio}
              error = {error}
              setError={setError}
              errorMessage = {errorMessage}
              setErrorMessage = {setErrorMessage}
              setCurrStepMessage = {setCurrStepMessage}
              setCurrStep={setCurrStep}
              setOrder = {setOrder}
              order = {order}
            />}
          ></Route>
          <Route
          path="/remesas/paso-2/"
          element={
            <Page2
              setCurrStep={setCurrStep}
              setCurrStepMessage = {setCurrStepMessage}
              error = {error}
              setError = {setError}
              errorMessage = {errorMessage}
              setErrorMessage = {setErrorMessage}
              setOrder = {setOrder}
              order = {order}
            />
        }
          ></Route>
          <Route
            path="/remesas/paso-3/"
            element={
              <Page3
                setCurrStep={setCurrStep}
                setCurrStepMessage = {setCurrStepMessage}
                order = {order}
                setOrder={setOrder}
              />
            }
          ></Route>
          <Route
            path="/remesas/paso-4/"
            element={
              <Page4
                order= {order}
                setCurrStep={setCurrStep}
                setCurrStepMessage={setCurrStepMessage}
                tasaDeCambio= { tasaDeCambio}
                setOrder = {setOrder}
                tasaUsdVen = {tasaUsdVen}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react'
import Calculator from './Components/Calculator'
import Footer from './Components/Footer'
import Formulario from './Components/Formulario'
import Navbar from './Components/Navbar'
// import { db } from './config/firebase'
// import { onValue, ref } from 'firebase/database'

import { tasaDeCambio } from './tasaDeCambio'


function App() {
  const [valueIn, setValueIn] = useState('0')
  const [valueOut, setValueOut] = useState('0')
  const [calculator, setCalculator] = useState(true)
  const [formulario, setFormluario] = useState(false)


  // const tasasRef = ref(db, 'tasas');
  //   onValue(tasasRef, snapshopt => {
  //     const {peso} = snapshopt.val()
  //     tasa = peso
  //   })


    useEffect(() => {
        console.log(
            `%cTasa del dia: ${tasaDeCambio}`,
            "color:red;font-family:system-ui;font-size:4rem;-webkit-text-stroke: 1px black;font-weight:bold"
          );
          console.log(
            `por cada 50.000 obtendras: ${50000/tasaDeCambio}`
          )
    }, [])

  // =========================================================================
  // 1. Utilizamos un addEventListener para tomar el valor de una tecla presionadaa
  // 2. Con un regex evaluamos que los valores de entrada sean numeros exclusivamente
  // 3. A la entrada de numeros, se evalua si hay un cero como primer digito, si es asi, se borra y
  //     se coloca el nuevo digito, de lo contrario se van colocando mas numeros
  // 4. Si el evento es el boton de borrar, se modifica el valor de entrada con un 'string.slice'
  // =========================================================================


  useEffect(() => {
    const handleKeyDown = (event) => {
      const regex = /[0-9]/g

      if (regex.test(event.key)) {
        if (valueIn === '0') {
          setValueIn(event.key)
        } else {
          setValueIn((prevValue) => prevValue + event.key)
        }
      } else if (event.key === 'Backspace') {
        setValueIn((prevValue) => prevValue.slice(0, -1));
      } else {
        return
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [valueIn])

  useEffect(() => {
    // Realizar el cálculo solo cuando valueIn cambie
    calculate()
  }, [valueIn])

  const calculate = () => {
    // Parsear el valor de valueIn a número y asignarlo a valueOut
    const result = parseFloat(valueIn) * (1 / tasaDeCambio)
    if (result === 0) {
      setValueOut(0)
    } else {
      setValueOut(result.toFixed(2))
    }
  }

  return (
    <div>
      <Navbar />
      {calculator &&
        <Calculator
          valueIn={valueIn}
          setValueIn={setValueIn}
          valueOut={valueOut}
          setValueOut={setValueOut}
        />}
      {formulario &&
        <Formulario
          setCalculator={setCalculator}
          setFormluario={setFormluario}
          monto={valueIn}
          setValueIn={setValueIn}
        />}
      {calculator && <Footer
        setFormluario={setFormluario}
        setCalculator={setCalculator}
        formulario={formulario}
        valueIn={valueIn}
      />}
    </div>
  )
}

export default App
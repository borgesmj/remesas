import React, { useState } from 'react'
import './Footer.css'
import Error from './Error'

const Footer = ({setFormluario, setCalculator, valueIn}) => {

  const [error, setError] = useState(false)

  const handleClick = () => {
      if (valueIn < 50000){
        setError(true)
      } else {
        setCalculator(false)
      setFormluario(true)
  }
      }
  return (
    <footer>
      {error && <Error
        text = 'El monto minimo a enviar son 50.000 COP'
      />}
      <button onClick={handleClick}>Enviar</button>
    </footer>
  )
}

export default Footer
Footer
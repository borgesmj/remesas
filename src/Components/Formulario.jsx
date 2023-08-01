import React, { useState } from 'react'
import './Formulario.css'
import avatar from '../Img/myAvatar.svg'
import { IoIosCloseCircleOutline } from "react-icons/io";
import Error from './Error';

const Formulario = ({setFormluario, setCalculator, monto, setValueIn}) => {

  const [nombre, setNombre] = useState('')
  const [documento, setDocumento] = useState('')
  const [banco, setBanco] = useState('')
  const [cuenta, setCuenta] = useState('')
  const [error, setError] = useState(false)

  const handleClick = () => {
    setCalculator(true)
    setFormluario(false)
}

  const handleSubmit = (e) =>{
      e.preventDefault()
    if([nombre, banco, documento, cuenta].includes('')){
      setError(true)
      return
    } else{
      const comanda = {
        nombre: nombre,
        cedula: documento,
        banco: banco,
        cuenta: cuenta,
      }
      let message = `Hola, Miguel,\nquisiera hacer un envio de remesas a Venezuela,\nde ${monto} COP,\na nombre de ${comanda.nombre},\nnumero de cedula ${comanda.cedula},\nen el ${comanda.banco},\nnumero de cuenta ${comanda.cuenta}`

      
      if (window.confirm(`Confirme los datos, por favor
                      \n-Nombre: ${comanda.nombre}
                        -Cédula: ${comanda.cedula}
                        -Banco: ${comanda.banco}
                        -Cuante: ${comanda.cuenta}
                        -Monto: ${monto} COP
                        `)){
        let whatsappLink = "https://api.whatsapp.com/send?phone=573184255610&text=" + encodeURI(message);
        window.open(whatsappLink, "_blank");
        setBanco('')
        setNombre('')
        setDocumento('')
        setCuenta('')
      } else {
        setCalculator(true)
        setFormluario(false)
      }
    }


    setFormluario(false)
    setCalculator(true)
  }
const mensajes = [
    "Hola, ¿Cómo estás?",
    "¿Te interesaria hacer un curso? Haz click <a href='#' className='enlace'>aqui</a>",
    "¡ya probaste las galletas de aris? Haz click <a href='#' className='bold enlace'>aqui</a>"
  ];

  const index = (Math.floor(Math.random() * mensajes.length));
  
  return (
    <div id='salida' className='Formulario-salida'>
      <div className="cerrar"><IoIosCloseCircleOutline className='closeBtn' onClick={handleClick}/></div>
      <form onSubmit={handleSubmit}>
        <p>Aca colocaras los datos de la persona que recibe en Venezuela</p>
        <div className='campo'>
            <label htmlFor="nombre">Nombre y apellido:</label>
            <input 
            type="text" 
            name="" 
            id="nombre"
            onChange={(e) =>setNombre(e.target.value) }
            value={nombre}
            />
        </div>
        <div className='campo'>
            <label htmlFor="banco">Banco:</label>
            <input 
            type="text" 
            name="" 
            id="banco"
            onChange={(e) => setBanco(e.target.value)}
            value={banco} />
        </div>
        <div className='campo'>
            <label htmlFor="cuenta">Número de cuenta:</label>
            <input 
            type="text" 
            name="" 
            id="cuenta"
            onChange={(e) => setCuenta(e.target.value)}
            value={cuenta} />
        </div>
        <div className='campo'>
            <label htmlFor="cedula">Número de cedula:</label>
            <input 
            type="text" 
            name="" 
            id="cedula"
            onChange={(e) => setDocumento(e.target.value)}
            value={documento} />
        </div>
        <div className="campo">
          <input type="submit" value="Enviar" />
        </div>
      </form>
      {error && <Error text='Todos los campos deben ser llenados'/>}
      {/* <div className='avatar'>
        <p className="globo" dangerouslySetInnerHTML={{ __html: mensajes[index] }}></p>
        <img src={avatar} alt="" />
      </div> */}
    </div>
  );
};

export default Formulario;


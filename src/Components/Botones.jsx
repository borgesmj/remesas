import React from 'react'
import './Botones.css'
import { FaDeleteLeft } from "react-icons/fa6";

const Botones = ({setValueIn, valueIn}) => {

  const handleClick = (e) => {
    e.preventDefault()
      e.target.classList.add('button-animation');
      e.target.classList.remove('border');

      setTimeout(() => {
      e.target.classList.add('border');
      e.target.classList.remove('button-animation');
      }, 100);

    const regex = /[0-9]/g
    const value = e.target.innerText
    if (regex.test(value)){
      if (valueIn === '0'){
        setValueIn(value)
      } else {
        setValueIn(valueIn + value)
      }
    } else {
      setValueIn((prevValue) => prevValue.slice(0, -1));
    }

  }

  const buttons = [
    {value: 1, id: 'btnOne', class: 'button border shadow'},
    {value: 2, id: 'btnTwo', class: 'button border shadow'},
    {value: 3, id: 'btnThree', class: 'button border shadow'},
    {value: 4, id: 'btnFour', class: 'button border shadow'},
    {value: 5, id: 'btnFive', class: 'button border shadow'},
    {value: 6, id: 'btnSix', class: 'button border shadow'},
    {value: 7, id: 'btnSeven', class: 'button border shadow'},
    {value: 8, id: 'btnEight', class: 'button border shadow'},
    {value: 9, id: 'btnNine', class: 'button border shadow'},    
    {value: 0, id: 'btnZero', class: 'button border shadow'},
    {value: <FaDeleteLeft/> , id: 'btnDelete', class: 'button border shadow'},
  ]
  return (
    <div className='buttons'>
      {buttons.map((button) => (
        <button onClick={handleClick} key={button.id} id={button.id} className={button.class}>{button.value}</button>
      ))}
    </div>
  )
}

export default Botones

import React from 'react'
import Form from './Form'
import Botones from './Botones'

const Calculatore = ({valueIn, setValueIn, valueOut, setValueOut}) => {
  return (
    <section className='container'>
      <Form
          valueIn={valueIn}
          valueOut={valueOut}
      />
      <Botones
          setValueIn = {setValueIn}
          valueIn={valueIn}
      />
    </section>
  )
}

export default Calculatore

import React from 'react'

const Message = ({currStep, currStepMessage}) => {
  return (
    <p className='w-full text-center text-xs leading-4 md:text-xl'>
      <span className='font-bold '>Paso {currStep}:</span> {currStepMessage}
    </p>
  )
}

export default Message

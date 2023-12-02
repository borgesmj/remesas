import React from 'react'

const Message = ({currStep, currStepMessage}) => {
  console.log(currStepMessage)
  return (
    <p className='w-full text-center'>
      <span className='font-bold'>Paso {currStep}:</span> {currStepMessage}
    </p>
  )
}

export default Message

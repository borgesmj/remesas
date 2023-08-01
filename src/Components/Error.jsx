import React from 'react'
import './Error.css'

const Error = ({text}) => {
  return (
    <div className='error'>
      {text}
    </div>
  )
}

export default Error

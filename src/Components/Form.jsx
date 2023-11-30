import React from 'react'
// import './Form.css'

const Form = ({valueIn, valueOut}) => {


  return (
    <form>
      <div className='campo'>
          <select name="" id="">
            <option value="1">COP</option>
          </select>
          <input type="text" value={valueIn} disabled name="" id="" />
      </div>
      <div className='campo'>
          <select name="" id="">
            <option value="1">BS</option>
          </select>
          <input type="text" value={valueOut}  disabled name="" id="" />
      </div>
    </form>
  )
}

export default Form

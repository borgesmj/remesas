import React from 'react'

const Screen = () => {
  return (
    <form className='w-full px-4'>
      <div className='flex flex-row mb-2 w-full items-center lg:text-2xl'>
        <select name="" id="" className='bg-[#808080] w-1/5 rounded-t-3xl rounded-l-3xl rounded-b-3xl rounded-r-none lg:w-1/5'>
            <option value="" className=''>COP</option>
        </select>
        <input type="text" className='bg-[#808080] w-4/5 rounded-t-3xl rounded-l-none rounded-b-3xl rounded-r-3xl text-right px-4 text-white  font-mono lg:w-4/5' />
      </div>
      <div className='flex flex-row mb-2 w-full items-center lg:text-2xl'>
        <select name="" id="" className='bg-[#808080] w-1/5 rounded-t-3xl rounded-l-3xl rounded-b-3xl rounded-r-none lg:w-1/5 '>
            <option value="" className=''>Bs</option>
        </select>
        <input type="text" className='bg-[#808080] w-4/5 rounded-t-3xl rounded-l-none rounded-b-3xl rounded-r-3xl text-right px-4 text-white  font-mono lg:w-4/5' />
      </div>
    </form>
  )
}

export default Screen

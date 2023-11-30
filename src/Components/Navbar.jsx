import React from 'react'
import './Navbar.css'
// import logo from 'https://avatars.githubusercontent.com/u/121818423?v=4'

const Navbar = () => {
  return (
    <nav className='fixed w-full top-0 left-0 rigth-0 bg-[#001F3F] h-12 p-2 flex flex-row justify-between items-center lg:h-20'>
      <a href="https://borgesmj.github.io/" className='h-full w-8 flex flex-row lg:w-20 rounded-[50%] border-solid border-[3px] border-white'><img className='w-full h-full' src="https://avatars.githubusercontent.com/u/121818423?v=4" alt="" /></a>
      <input type="checkbox" name="" id="navCheck" className='hidden'/>
      <ul className='fixed top-12 w-full px-0 py-12 left-0 bg-[#00640050] flex-col opacity-0 -translate-x-full  text-black  md:opacity-100 md:static md:translate-x-0 md:flex md:h-full md:bg-transparent md:py-0 md:flex-row  md:text-white md:items-center md:justify-end'>
        <li className='text-2xl py-4 px-2 lg:relative before:w-0 before:h-full before:absolute before:top-0 before:left-0 before:border-b-solid before:border-b-[4px] before:border-white hover:before:w-full before:transition-all before:rounded-lg'><a className='navlink' href="https://borgesmj.github.io/remesas">Envío de Remesas</a></li>
        <li className='text-2xl py-4 px-2 lg:relative before:w-0 before:h-full before:absolute before:top-0 before:left-0 before:border-b-solid before:border-b-[4px] before:border-white hover:before:w-full before:transition-all before:rounded-lg'><a className='navlink' href="https://sweet-bites.co/">Sweet Bites</a></li>
        <li className='text-2xl py-4 px-2 lg:relative before:w-0 before:h-full before:absolute before:top-0 before:left-0 before:border-b-solid before:border-b-[4px] before:border-white hover:before:w-full before:transition-all before:rounded-lg'><a className='navlink' href="">Cursos Digitales</a></li>
      </ul>
      <label htmlFor="navCheck" className='h-full w-8 flex flex-col justify-between items-center md:hidden'>
        <span className='w-full border-b-solid border-white border-[1px]'></span>
        <span className='w-full border-b-solid border-white border-[1px]'></span>
        <span className='w-full border-b-solid border-white border-[1px]'></span>
      </label>
    </nav>
  )
}

export default Navbar

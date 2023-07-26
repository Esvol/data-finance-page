import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);

  return (
    <div className='text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex cursor-pointer'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resourses</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div className='cursor-pointer block md:hidden'>
        {nav 
        ? <AiOutlineMenu onClick={() => setNav(!nav)} size={25} /> 
        : <AiOutlineClose onClick={() => setNav(!nav)} size={25}/>
        }
      </div>

      <div className={`fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 ${nav && 'left-[-100%]'}`}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-8'>REACT.</h1>
        <ul className='pt-4 uppercase cursor-pointer'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resourses</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
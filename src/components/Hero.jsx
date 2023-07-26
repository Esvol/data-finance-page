import React from 'react'
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center py-3'>
                <p className='lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold md:pr-4 pr-2 whitespace-nowrap'>Fast, flexible financing for</p>
                <Typewriter 
                    options={{
                        strings:['BTB', 'BTC', 'SASS'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold',
                        cursorClassName: 'lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold text-sky-300',
                    }}
                />
            </div>
            <p className='md: 2xl text-xl font-bold text-gray-500 my-3'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
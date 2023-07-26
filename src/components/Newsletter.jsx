import React from 'react'

const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-5'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 my-1'>Want tips & tricks to optimize your flow?</h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className='flex sm:flex-row flex-col items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter email'/>
                        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium sm:ml-4 ml-0 my-6 mx-auto py-3 text-black'>Get Started</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='cursor-pointer text-[#00df9a] underline'>Privacy Policy</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
import React from 'react'
import child from '../assets/child.jpg'

const Hero = () => {
  return (
    <>
        <div className="w-full py-5">
            <div className="flex w-full justify-between items-start">
                <div className="slider w-full bg-orange-400 h-64 md:h-96">
                    {/* <img src={ child } width='100%' alt="" /> */}
                </div>

                <div className="second w-full hidden md:flex flex-col items-center">
                    <div className='w-full h-[12rem] py-30 pl-10 bg-orange-600'>
                        <h1 className='mt-28 text-xl font-bold text-white'>On Sale</h1>
                        <button className='bg-orange-400 p-2 text-white text-sm rounded hover:bg-orange-500 duration-300'>Shop Now</button>
                    </div>
                    <div className='w-full h-[12rem] py-30 pl-10 bg-orange-700'>
                        <h1 className='mt-28 text-xl font-bold text-white'>On Sale</h1>
                        <button className='bg-orange-400 p-2 text-white text-sm rounded hover:bg-orange-500 duration-300'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero
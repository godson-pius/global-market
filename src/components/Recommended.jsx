import React from 'react'
import { Link } from 'react-router-dom'
import react from '../assets/react.svg'
import { FiArrowRight } from 'react-icons/fi'

const Recommended = () => {
  return (
    <>
        <div className="w-full bg-gray-100 p-5 flex flex-col gap-7">
            <div className="w-full flex flex-col bg-white p-10 rounded shadow-2xl">
                <div className='flex gap-4 items-center justify-between'>
                    <h1 className='text-lg'>Recommendation For You</h1>
                    <Link to='/shop' className='text-sm text-orange-400 items-center flex gap-1 hover:text-orange-700 duration-500'>
                        View all
                        <FiArrowRight />
                    </Link>
                </div>

                <div className='w-full flex mt-3 justify-between'>
                    <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                        <img className='mb-4' src={ react } alt="" />
                        <Link to="/" className='text-md hover:text-orange-400 duration-500 font-extrabold'>React Website</Link>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                        <img className='mb-4' src={ react } alt="" />
                        <Link to="/product/bolt" className='text-md hover:text-orange-400 duration-500 font-extrabold'>React Website</Link>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                        <img className='mb-4' src={ react } alt="" />
                        <Link to="/product/bolt" className='text-md hover:text-orange-400 duration-500 font-extrabold'>React Website</Link>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                        <img className='mb-4' src={ react } alt="" />
                        <Link to="/product/bolt" className='text-md hover:text-orange-400 duration-500 font-extrabold'>React Website</Link>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-2 ring-orange-300 p-7 flex flex-col items-center rounded hover:translate-y-1 duration-500 hover:shadow-lg'>
                        <img className='mb-4' src={ react } alt="" />
                        <Link to="/product/bolt" className='text-md hover:text-orange-400 duration-500 font-extrabold'>React Website</Link>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Recommended
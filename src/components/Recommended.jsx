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
                    <Link to='/' className='text-sm text-orange-400 items-center flex gap-1 hover:text-orange-700 duration-500'>
                        View all
                        <FiArrowRight />
                    </Link>
                </div>

                <div className='w-full flex mt-3 justify-between'>
                    <div className='ring-1 ring-gray-300 p-7 flex flex-col items-center'>
                        <img className='mb-4' src={ react } alt="" />
                        <h1 className='text-lg font-extrabold'>React Website</h1>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-1 ring-gray-300 p-7 flex flex-col items-center'>
                        <img className='mb-4' src={ react } alt="" />
                        <h1 className='text-lg font-extrabold'>React Website</h1>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-1 ring-gray-300 p-7 flex flex-col items-center'>
                        <img className='mb-4' src={ react } alt="" />
                        <h1 className='text-lg font-extrabold'>React Website</h1>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-1 ring-gray-300 p-7 flex flex-col items-center'>
                        <img className='mb-4' src={ react } alt="" />
                        <h1 className='text-lg font-extrabold'>React Website</h1>
                        <span>⭐️⭐️⭐️⭐️</span>
                        <span className='font-extrabold text-md text-orange-500'>₦150,000</span>
                    </div>

                    <div className='ring-1 ring-gray-300 p-7 flex flex-col items-center'>
                        <img className='mb-4' src={ react } alt="" />
                        <h1 className='text-lg font-extrabold'>React Website</h1>
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
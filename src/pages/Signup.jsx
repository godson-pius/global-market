import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <>
        <div className="w-full py-20">
            <div className="w-full justify-center flex px-10 md:px-72">
                <div className="w-full bg-orange-400 flex flex-col items-center rounded p-10">
                    <h1 className='text-3xl text-white mb-10'>Sign Up</h1>
                    <form className='w-full flex flex-col'>
                        <input type="text" name="fname" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter your first name' />

                        <input type="text" name="lname" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter your last name' />

                        <input type="email" name="email" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter your email' />

                        <input type="password" name="password" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic mb-3' placeholder='Enter your password' />

                        <input type="password" name="conf_password" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic' placeholder='Confirm password' />
                    
                        <button className='w-full bg-orange-200 p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-white'>Sign Up</button>

                        <Link to='/sign-in' className='text-sm text-gray-700 text-center mt-3 hover:text-white duration-700'>Already have an account? Sign In</Link>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup
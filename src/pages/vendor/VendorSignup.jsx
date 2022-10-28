import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const VendorSignup = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
    <>
    <div className="w-full py-20">
        <div className="w-full justify-center flex px-10 md:px-72">
            <div className="w-full bg-orange-400 flex flex-col items-center rounded p-10">
                <h1 className='text-3xl text-white mb-10'>Seller Center</h1>
                <form className='w-full flex flex-col'>
                    <input type="text" name="fname" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter shop name' />
                    <p className='text-xs mb-3 text-slate-900 font-bold'>Choose a unique name for your online shop: this is the name that will appear on the Global marketplace! It is forbidden to use a registered trademark in your shop name without the brand authorization.</p>

                    <select name="type" id="type" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic'>
                        <option value="null">Are an individual or Business Entity / Company</option>
                        <option value="individual">Individual</option>
                        <option value="business">Registered business name</option>
                        <option value="company">Company</option>
                    </select>

                    <input type="text" name="fname" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter account manager full name' />

                    <p className='text-xs mb-3 text-slate-900 font-bold'>Your name or the name of the person in your team who will manage your account. This is the contact we will primarily use to contact you.</p>

                    <input type="number" name="phone" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter account manager phone number' />

                    <p className='text-xs mb-3 text-slate-900 font-bold'>When we need to contact you urgently, this is the number we will call.</p>

                    <input type="number" name="phone" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Additional phone number' />

                    <p className='text-xs mb-3 text-slate-900 font-bold'>Another number where we can reach you ?</p>

                    <input type="email" name="email" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Enter your email address' />

                     <p className='text-xs mb-3 text-slate-900 font-bold'>Your account will be linked to this email address and we will use it to send all our communications.</p>

                     <input type="email" name="email" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic' placeholder='Confirm email address' />

                    <input type="password" name="password" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic mb-3' placeholder='Enter your password' />

                    <p className='text-xs mb-3 text-slate-900 font-bold'>At least 8 characters containing a capital letter, a lower letter and a numeric character</p>

                    <input type="password" name="conf_password" id="" className='w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 placeholder:italic' placeholder='Confirm password' />

                    <div className="w-full flex gap-2 justify-center">
                        <input type="checkbox" className='mt-3' name="accept" id="accept" /> 
                        <span className='text-sm mt-3'>I have read and accepted the <Link to='/' className='text-orange-100 hover:text-orange-800 duration-500'>e-contract Meta Nosdog</Link></span>
                    </div>
                    
                
                    <button className='w-full bg-orange-200 p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-white hover:bg-orange-500'>Sign Up</button>

                    <Link to='/vendor-signin' className='text-sm text-gray-700 text-center mt-3 hover:text-white duration-700'>Already have an account? Sign In</Link>
                </form>
            </div>
        </div>
    </div>
</>
  )
}

export default VendorSignup
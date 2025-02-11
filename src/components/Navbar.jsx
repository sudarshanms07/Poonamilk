import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#ffab00] flex items-center justify-between  text-sm border-b h-[100px]'>
        <div className='ml-5 p-6'>
        <Link to='/'><img src="http://poonamilk.com/img/logo_pm_white.png"   className='w-30 cursor-pointer' /></Link>
        </div>
        <div className='ml-5'>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>
        </div>
    </div>
  )
}

export default Navbar


// new 


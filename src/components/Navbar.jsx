import React, { useState } from 'react'
import {Menu , X } from 'lucide-react'
import logo from '../assets/logo.png'
import { navItems } from '../constants/index'

function Navbar() {
  const [drawer , setDrawer] = useState(false);
  const toggleNavbar = () => {
    setDrawer(!drawer)
  }
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
      <div className="container px-4 mx-auto relative text-sm">
        <div className='flex justify-between items-center'>
          <div className='flex items-center flex-shrink-0'>
            <img src={logo} className='h-10 w-10 mr-2'/>
            <span className='text-xl tracking-light'>Virtual lab</span>
          </div>
          <ul className='hidden lg:flex ml-14 space-x-12'>
            <li></li>
            {navItems.map((item, index) => {
              return(
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              )
            })}
          </ul>
          <div className='hidden lg:flex justify-center space-x-7 items-center'>
            <a href="#" className='py-2 px-3 border rounded-md'>Sign In</a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
          </div>
          <div className='lg:hidden md:flex flex-col justify-end'>
            <button onClick={toggleNavbar}>
              {drawer ?  <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {drawer && (
        <div className='fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
          <ul>
            {navItems.map((item, index) => {
              return(
                <li className='py-4' key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              )
            })}
          </ul>
          <div className='flex space-x-6 justify-center items-center'>
            <a href="#" className='border py-2 px-3 rounded-md'>Sign In</a>
            <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md'>Create an account</a>
          </div>
        </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

import React, { useState } from 'react'
import hamburger from '../assets/hamburger.svg'
import cross from '../assets/cross.svg'

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <div className='w-full bg-neutral-100 py-4 px-12 flex-col drop-shadow-md fixed'>
        <div className='flex justify-between w-full items-center'>
          <div className='h-full flex items-center'>
              <div className='h-full font-bebas text-3xl md:text-4xl font-semibold flex items-center cursor-pointer'>
                NewsNow
              </div>
          </div>
          <div className='h-full flex items-center'>
            <div className='h-full flex items-center justify-end md:hidden'>
              {
                drawerOpen ? (
                  <img src={cross} alt="menu" onClick={handleDrawerOpen} />
                )
                :
                (
                  <img src={hamburger} alt="menu" onClick={handleDrawerOpen} />
                )
              }
            </div>
            <div className='h-full flex items-center'>
              <ul className='hidden md:flex md:gap-x-8 text-lg font-redhat font-semibold'>
                <li className='cursor-pointer hover:text-cyan-500'>Home</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500'>Top News</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500'>India News</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500'>About</li>
              </ul>
            </div>
          </div>
        </div>
        {
          drawerOpen && (
            <div className='flex justify-center py-4'>
              <ul className='text-center flex-col md:hidden text-lg font-redhat font-semibold'>
                <li className='cursor-pointer hover:text-cyan-500'>Home</li>
                <li className='cursor-pointer hover:text-cyan-500'>Top News</li>
                <li className='cursor-pointer hover:text-cyan-500'>India News</li>
                <li className='cursor-pointer hover:text-cyan-500'>About</li>
              </ul>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Navbar

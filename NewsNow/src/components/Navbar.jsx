import React, { useState } from 'react'
import hamburger from '../assets/hamburger.svg'
import cross from '../assets/cross.svg'

import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(!drawerOpen);
  }

  const navigate = useNavigate();

  return (
    <>
      <div className='w-screen bg-neutral-100 dark:bg-neutral-900 dark:text-neutral-100 py-4 px-12 flex-col drop-shadow-md fixed z-10'>
        <div className='flex justify-between w-full items-center'>
          <div className='h-full flex items-center'>
            <div className='h-full font-bebas text-3xl md:text-4xl font-semibold flex items-center cursor-pointer' onClick={() => navigate("/")}>
              New<span className='text-cyan-500'>S</span>Now
            </div>
          </div>
          <div className='h-full flex items-center'>
            <div className='h-full flex items-center justify-end min-[1250px]:hidden shrink-0'>
              {
                drawerOpen ? 
                (
                  <img className='dark:invert' src={cross} alt="menu" onClick={handleDrawerOpen} />
                )
                :
                (
                  <img className='dark:invert' src={hamburger} alt="menu" onClick={handleDrawerOpen} />
                )
              }
            </div>
            <div className='h-full flex items-center'>
              <ul className='hidden min-[1250px]:flex min-[1250px]:gap-x-6 text-lg font-redhat font-semibold'>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/")}>Search</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/worldnews")}>World Now</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/indianews")}>India Now</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/technology")}>Technology</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/sports")}>Sports</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/gaming")}>Gaming</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/mcu")}>MCU</li>
                <li className='cursor-pointer text-cyan-500'>|</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/about")}>About</li>
              </ul>
            </div>
          </div>
        </div>
        {
          drawerOpen && (
            <div className='flex justify-center py-4 min-[1250px]:py-0'>
              <ul className='text-center flex-col min-[1250px]:hidden text-lg font-redhat font-semibold'>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/")}>Search</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/worldnews")}>World Now</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/indianews")}>India Now</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/technology")}>Technology</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/sports")}>Sports</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/gaming")}>Gaming</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/mcu")}>MCU</li>
                <li className='cursor-pointer hover:text-cyan-500' onClick={() => navigate("/about")}>About</li>
              </ul>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Navbar

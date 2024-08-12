import React from 'react'
import Navbar from '../components/Navbar'
import reacticon from '../assets/react.svg'
import tw from '../assets/tailwind-css-2.svg'
import tick from '../assets/tick.svg'
import newsapi from '../assets/newsapi.png'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className='pt-28 bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-50 w-screen min-h-screen font-redhat font-bold px-14 md:px-20 flex flex-col gap-y-10 text-center'>
        <h1 className='text-4xl md:text-6xl font-bebas'>New<span className='text-cyan-500'>S</span>Now</h1>
        <p className='text-md md:text-2xl px-5 md:px-20 font-medium'>
            Stay informed with the latest news from around the globe with <span className='text-cyan-500'>NewsNow</span>, your go-to app for up-to-date news and top headlines.
        </p>
        <div className='h-36 md:h-48 text-lg md:text-2xl'>
            <p className='h-1/3 px-5 md:px-20 flex items-center justify-center underline underline-offset-2 decoration-cyan-500'>
                Technologies Used
            </p>
            <div className='h-2/3 flex pt-3'>
                <div className='w-1/2 flex justify-end pr-5 cursor-pointer'>
                    <a href="https://react.dev/"><img className='h-full hover:drop-shadow-[0_0_2em_rgba(100,230,250,0.75)]' src={reacticon} /></a>
                </div>
                <div className='w-1/2 flex items-center pl-5 cursor-pointer'>
                    <a className='h-3/5' href="https://tailwindcss.com/"><img className='h-full hover:drop-shadow-[0_0_2em_rgba(100,230,250,0.75)]' src={tw} /></a>
                </div>
            </div>
        </div>
        <div className='h-36 text-md md:text-2xl'>
            <p className='h-1/3 px-5 md:px-20 flex items-center justify-center underline underline-offset-2 decoration-cyan-500'>
                Key Features
            </p>
            <ul className='h-2/3 font-medium '>
                <li>Get Daily Updates</li>
                <li>Search News Across The Globe</li>
                <li>Explore Country-Specific Top Headlines</li>
            </ul>
        </div>
        <div className='h-36 text-md md:text-2xl'>
            <p className='h-1/3 px-5 md:px-20 flex items-center justify-center underline underline-offset-2 decoration-cyan-500'>
                API
            </p>
            <a href="https://newsapi.org/" className='h-2/3 flex justify-center pt-3'>
                <img className='h-1/2 hover:drop-shadow-[0_0_1em_rgba(50,80,200,0.5)]' src={newsapi} alt="" />
            </a>
        </div>
      </div>
    </>
  )
}

export default About

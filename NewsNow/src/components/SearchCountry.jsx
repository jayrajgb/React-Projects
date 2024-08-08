import React, { useState } from 'react'

const SearchCountry = (props) => {

  const [currCountry, setCurrCountry] = useState("");
  
  const handleClick = (countryCode, countryName) => {
    console.log("CountryCode: ", countryCode);
    props.value.setCountry(countryCode);
    setCurrCountry(countryName);
  }

  return (
    <>
      <div className="pt-20 min-h-56 px-12 md:px-24 flex-col font-redhat font-semibold text-sm md:text-lg space-y-4 dark:bg-neutral-800">
        <div className='h-1/2 text-center text-xl md:text-2xl text-neutral-400 dark:text-neutral-600 pt-4'>
          Search Top Headlines Across The Globe
        </div>
        <div className='h-1/2 flex flex-wrap justify-center gap-x-8 gap-y-4'>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 dark:bg-neutral-900 hover:bg-cyan-300 dark:hover:bg-cyan-500 outline-none dark:text-neutral-100'
            onClick={() => handleClick("in", "India")}
            >
                India</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 dark:bg-neutral-900 hover:bg-cyan-300 dark:hover:bg-cyan-500 outline-none dark:text-neutral-100'
            onClick={() => handleClick("us", "USA")}
            >
                USA</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 dark:bg-neutral-900 hover:bg-cyan-300 dark:hover:bg-cyan-500 outline-none dark:text-neutral-100'
            onClick={() => handleClick("gb", "United Kingdom")}
            >
                UK</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 dark:bg-neutral-900 hover:bg-cyan-300 dark:hover:bg-cyan-500 outline-none dark:text-neutral-100'
            onClick={() => handleClick("au", "Australia")}
            >
                Australia</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 dark:bg-neutral-900 hover:bg-cyan-300 dark:hover:bg-cyan-500 outline-none dark:text-neutral-100'
            onClick={() => handleClick("nz", "New Zealand")}
            >
                New Zealand</button>
        </div>
        <div className='h-16 flex justify-center items-end text-2xl md:text-3xl text-cyan-500 font-redhat font-semibold'>
          {
            currCountry === "" ? 
            (<></>) 
              : 
            (<>Top Headlines in {currCountry}</>)
          }
        </div>
      </div>
    </>
  )
}

export default SearchCountry

import React from 'react'

const SearchCountry = (props) => {
  
  const handleClick = (countrycode) => {
    console.log("CountryCode: ", countrycode);
    props.value.setCountry(countrycode);
  }

  return (
    <>
      <div className="pt-20 min-h-56 px-24 flex-col font-redhat font-semibold text-lg space-y-4">
        <div className='h-1/2 text-center text-2xl text-neutral-400 pt-4'>
            Search Top Headlines Across The Globe
        </div>
        <div className='h-1/2 flex flex-wrap justify-center gap-x-8 gap-y-4'>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 hover:bg-cyan-300 outline-none'
            onClick={() => handleClick("in")}
            >
                India</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 hover:bg-cyan-300 outline-none'
            onClick={() => handleClick("us")}
            >
                USA</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 hover:bg-cyan-300 outline-none'
            onClick={() => handleClick("gb")}
            >
                UK</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 hover:bg-cyan-300 outline-none'
            onClick={() => handleClick("au")}
            >
                Australia</button>
            <button className='min-w-30 h-fit rounded-md px-4 py-2 shadow-md bg-neutral-200 hover:bg-cyan-300 outline-none'
            onClick={() => handleClick("nz")}
            >
                New Zealand</button>
        </div>
      </div>
    </>
  )
}

export default SearchCountry

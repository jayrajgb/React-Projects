import React, { useEffect, useState } from 'react'
import SearchCountry from '../components/SearchCountry';
import Navbar from '../components/Navbar'
import NewsPage from '../components/NewsPage'

const apiKey = import.meta.env.VITE_myApiKey;

const Countrywise = () => {    

  const [country, setCountry] = useState("");

  const [path, setPath] = useState("");

  useEffect(()=>{
    setPath(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`);
},[country])

  return (
    <>
    <div className='bg-neutral-100 w-screen min-h-screen'>
      <Navbar />
      <SearchCountry value={{country, setCountry}} />
      <NewsPage value={path} />
    </div>
    </>
  )
}

export default Countrywise;

import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import NewsPage from '../components/NewsPage'

const apiKey = import.meta.env.VITE_myApiKey;

const Homepage = () => {    

  const [query, setQuery] = useState("");

  const [path, setPath] = useState("");

  const [initialRender, setInitialRender] = useState(true);

  useEffect(()=>{
    if(initialRender){
      setInitialRender(false);
    }else{
      setPath(`https://gnews.io/api/v4/search?q=${query}&lang=en&apikey=${apiKey}`);
      // console.log("Query is changed:", query);
      // console.log("Path: ", path);
    }
},[query, setQuery])

  return (
    <>
    <div className='bg-neutral-100 dark:bg-neutral-800 w-screen min-h-screen'>
      <Navbar />
      <SearchBar value={{query, setQuery}} />
      <NewsPage value={path} />
    </div>
    </>
  )
}

export default Homepage

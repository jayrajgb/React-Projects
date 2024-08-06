import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NewsPage from '../components/NewsPage'


function App(props) {

  return (
    <>
    <div className='bg-neutral-100 w-screen'>
      <Navbar />
      <NewsPage value={props.news} />
    </div>
    </>
  )
}

export default App

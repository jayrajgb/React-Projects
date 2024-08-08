import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NewsPage from '../components/NewsPage'


function IndiaNews(props) {

  return (
    <>
    <div className='bg-neutral-100 dark:bg-neutral-800 w-screen'>
      <Navbar />
      <div className='pt-20 h-40 flex justify-center items-end text-2xl md:text-3xl text-cyan-500 font-redhat font-semibold'>
          Top Headlines in India
      </div>
      <NewsPage value={props.news} />
    </div>
    </>
  )
}

export default IndiaNews

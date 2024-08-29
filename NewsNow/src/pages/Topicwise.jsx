import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import NewsPage from '../components/NewsPage'


function Topicwise(props) {

  return (
    <>
    <div className='bg-neutral-100 dark:bg-neutral-800 w-screen'>
      <Navbar />
      <div className='pt-20 h-40 px-10 flex justify-center text-center items-end text-xl sm:text-2xl  md:text-3xl text-cyan-500 font-redhat font-semibold'>
          {props.title}
      </div>
      <NewsPage value={props.news} />
    </div>
    </>
  )
}

export default Topicwise

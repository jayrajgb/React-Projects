import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import NewsPage from './components/NewsPage'

function App() {

  return (
    <>
    <div className='bg-neutral-100 w-screen'>
      <Navbar />
      <NewsPage />
    </div>
    </>
  )
}

export default App

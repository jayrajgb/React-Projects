import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Table from './components/Table'

const App = () => {
  return (
    <div className='w-full overflow-hidden min-h-screen bg-neutral-800 pt-16 flex flex-col items-center'>
      <Navbar/>
      <Form/>
      <Table/>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { fetchData } from './api/fetch';

import Meme from './components/Meme';

function App() {

  const [handleClick, sethandleClick] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (handleClick) {
      fetchData()
        .then((data) => {
          setData(data);
          sethandleClick(false);
        })
    }
  }, [handleClick])

  // console.log("Data", data);

  return (
    <>
      <div className='min-h-screen min-w-screen font-poppins p-4'>
        <h1 className='text-center text-3xl font-poppins-semibold'>Meme Generator App</h1>
        {
          data.length !== 0 ? 
          (
            <div className='w-full flex gap-4 flex-wrap justify-center mt-10'>
              {data.data.memes.map((meme) => (
                <Meme url={meme.url} name={meme.name} />
              ))}
              
            </div>
          ) 
          :
          (
            <div className='text-xl font-poppins-medium w-full flex justify-center items-center mt-10'>
              <button
                className='text-white bg-blue-500 px-4 py-2 rounded-md outline-none hover:bg-blue-600 active:outline-2 active:outline-blue-400'
                onClick={() => { sethandleClick(true) }}
              >
                Get Templates
              </button>
            </div>
          )
        }

      </div>
    </>
  )
}

export default App

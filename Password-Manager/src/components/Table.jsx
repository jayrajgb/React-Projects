import React, { useState } from 'react'
import axios from 'axios';

const backendUrl = import.meta.env.VITE_BACKEND_URL

const Table = () => {

  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordsList, setPasswordList] = useState([]);

  const fetchPasswords = async () => {
    setShowPasswords(true)
    try {
      const { data } = await axios.get(backendUrl + "/passwords")
      if (data.success) {
        console.log("Data: ", data.response)
        setPasswordList(data.response)
      } else {
        console.error(data.message)
      }
    } catch (error) {
      setShowPasswords(false)
      console.error(error.message)
    }
  }

  return (
    <div className='w-4/5 md:w-3/5 text-sm md:text-[16px] text-white my-16 flex flex-col items-center'>
      {
        showPasswords ? (
          <table className='w-full table-auto rounded-t-md overflow-hidden font-mono'>
            <thead className='bg-teal-500'>
              <tr className='*:text-center *:w-1/3 *:py-2'>
                <td>URL</td>
                <td>Username</td>
                <td>Password</td>
              </tr>
            </thead>
            {
              passwordsList.map((item)=>(
                <tbody className='border border-teal-500' key={item._id}>
                  <tr className='*:text-center *:w-1/3 *:py-2 *:text-wrap *:px-2 *:border *:border-teal-500 hover:bg-black/40'>
                    <td>{item.url}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                  </tr>
                </tbody>
              ))
            }
            <tbody className='border border-teal-500'>
              <tr className='*:text-center *:w-1/3 *:py-2 *:text-wrap *:px-2 *:border *:border-teal-500 hover:bg-black/40'>
                <td>https://google.com</td>
                <td>Jayraj11</td>
                <td>30363036</td>
              </tr>
            </tbody>
          </table>
        )
        :
        (
          <button className='w-2/5 rounded-lg bg-teal-500 hover:bg-teal-700 cursor-pointer p-2' onClick={fetchPasswords}>Fetch Passwords</button>
        )
      }

    </div>
  )
}

export default Table

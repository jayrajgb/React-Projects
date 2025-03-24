import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AppContext = createContext()

const backendUrl = import.meta.env.VITE_BACKEND_URL

const AppContextProvider = ({ children }) => {

  const [showPasswords, setShowPasswords] = useState(false);
  const [passwordsList, setPasswordList] = useState([]);

  const fetchPasswords = async () => {
    setShowPasswords(true)
    try {
      const { data } = await axios.get(backendUrl + "/passwords")
      if (data.success) {
        const list = data.response
        console.log("Fetch Response: ", list)
        if(list.length == 0){
          window.alert("No Data Available!")
          setShowPasswords(false)
        }else{
          setPasswordList(data.response)
        }
      } else {
        console.error(data.message)
      }
    } catch (error) {
      setShowPasswords(false)
      console.error(error.message)
    }
  }

  const value = {
    showPasswords,
    passwordsList,
    fetchPasswords,
    backendUrl
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider

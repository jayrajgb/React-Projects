import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Edit from './Edit.jsx'
import AppContextProvider from './contexts/AppContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/edit",
    element: <Edit />
  }
])

createRoot(document.getElementById('root')).render(
  
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  ,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import IndiaNews from './pages/IndiaNews.jsx'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import Countrywise from './pages/Countrywise.jsx'

import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'

const apiKey = import.meta.env.VITE_myApiKey;

const display = {
  indianews: "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + `${apiKey}`,

}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />
    },
    {
      path: "/topnews",
      element: <Countrywise />
    },
    {
      path: "/indianews",
      element: <IndiaNews news={display.indianews} />
    },
    {
      path: "/about",
      // element: <App news={display.indianews} />
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import IndiaNews from './pages/IndiaNews.jsx'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import Countrywise from './pages/Countrywise.jsx'
import Wrapper from './Wrapper.jsx'
import About from './pages/About.jsx'

import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'

const apiKey = import.meta.env.VITE_myApiKey;

const display = {
  indianews: "https://newsapi.org/v2/top-headlines?country=in&apiKey=" + `${apiKey}`,

}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Wrapper> <Homepage /> </Wrapper>
    },
    {
      path: "/worldnews",
      element: <Wrapper> <Countrywise /> </Wrapper>
    },
    {
      path: "/indianews",
      element: <Wrapper> <IndiaNews news={display.indianews} /> </Wrapper>
    },
    {
      path: "/about",
      element: <Wrapper> <About /> </Wrapper>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

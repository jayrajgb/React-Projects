import React from 'react'
import ReactDOM from 'react-dom/client'
import Topicwise from './pages/Topicwise.jsx'
import './index.css'
import Homepage from './pages/Homepage.jsx'
import Countrywise from './pages/Countrywise.jsx'
import Wrapper from './Wrapper.jsx'
import About from './pages/About.jsx'

import { createBrowserRouter, BrowserRouter, RouterProvider } from 'react-router-dom'

const apiKey = import.meta.env.VITE_myApiKey;

const display = {
  indianews: {
    title: "Top Headlines in India",
    path: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`
  },
  technology: {
    title: "Now in Technology",
    path: `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`
  },
  sports: {
    title: "Now in Sports",
    path: `https://newsapi.org/v2/everything?q=sports&apiKey=${apiKey}`
  },
  gaming: {
    title: "Now in Gaming",
    path: `https://newsapi.org/v2/everything?q=gaming&apiKey=${apiKey}`
  },
  mcu: {
    title: "Now in Marvel Cinematic Universe",
    path: `https://newsapi.org/v2/everything?q=marvel%20cinematic%20universe&apiKey=${apiKey}`
  },
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
      element: <Wrapper> <Topicwise news={display.indianews.path} title={display.indianews.title} /> </Wrapper>
    },
    {
      path: "/technology",
      element: <Wrapper> <Topicwise news={display.technology.path} title={display.technology.title} /> </Wrapper>
    },
    {
      path: "/sports",
      element: <Wrapper> <Topicwise news={display.sports.path} title={display.sports.title} /> </Wrapper>
    },
    {
      path: "/gaming",
      element: <Wrapper> <Topicwise news={display.gaming.path} title={display.gaming.title} /> </Wrapper>
    },
    {
      path: "/mcu",
      element: <Wrapper> <Topicwise news={display.mcu.path} title={display.mcu.title} /> </Wrapper>
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

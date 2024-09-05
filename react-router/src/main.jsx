import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children: [
      {
        path:'',
        element: <Home />

      },
      {
        path:'/about',
        element: <About />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)

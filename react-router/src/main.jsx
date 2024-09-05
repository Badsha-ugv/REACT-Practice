import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import User from './components/User.jsx'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Layout />,
//     children: [
//       {
//         path:'',
//         element: <Home />

//       },
//       {
//         path:'/about',
//         element: <About />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='user/:userId' element= {<User />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)

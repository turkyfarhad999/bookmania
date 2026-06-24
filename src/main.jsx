import { createContext, StrictMode, useContext, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import Context from './Context.jsx'
import { ToastContainer } from 'react-toastify'

 export const Data=createContext()
 const alldata={}
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Context>
      <RouterProvider router={router} />
      <ToastContainer />
    </Context>
  </StrictMode>,
)

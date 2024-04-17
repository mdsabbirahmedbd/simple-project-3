import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routs';
import Context from './Context/Context';
import { HelmetProvider } from 'react-helmet-async';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context>
    <HelmetProvider>
   <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>


    </Context>
  </React.StrictMode>,
)

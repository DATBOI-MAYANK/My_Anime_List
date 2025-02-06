import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Hell from './assets/HellParadise/Hell.jsx'
import Bleach from './assets/Bleach/Bleach.jsx'
import Layout from './Layout.jsx'
import OnePiece from './assets/OnePiece/OnePiece.jsx'
import Naruto from './assets/Naruto/Naruto.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:"",
        element:<App />
      },
      {
        path:'Hell',
        element:<Hell />
      },
      {
        path:'Bleach',
        element:<Bleach />
      },
      {
        path:'OnePiece',
        element:<OnePiece />
      },
      {
        path:'Naruto',
        element:<Naruto />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

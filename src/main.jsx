import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import CartContent from './Components/CartContent/CartContent.jsx'
import ContextProvider from './Context/Context.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/cart',
    element: <CartContent/>
  },
  {
    path: '/cart',
    element: <CartContent/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ContextProvider>
    <RouterProvider router={router}/>
  </ContextProvider>
  </StrictMode>,
)

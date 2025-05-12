import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppContextProvider } from './Context/AppContext.jsx'
import Layout from './Route/Layout.jsx'
import Home from './Pages/Home.jsx'
import AllProducts from './Pages/AllProducts.jsx'
import Products from './Pages/Products.jsx'
import { Cart } from './Pages/Cart.jsx'



const router =createBrowserRouter([
    {  path:"/",
      element:<Layout/>,
      children:[
      
        {
          path:"/",
          element:<App/>
          
        },
        {
          path:"/products",
          element:<AllProducts/>
        },
        {
          path:"/products/:category",
          element:<Products/>
        },
        {
          path:'/cart',
          element:<Cart/>
        }
      ]

    }
  ])

  





createRoot(document.getElementById('root')).render(

  
  
  <StrictMode>
   
    
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
   
  </StrictMode>,
)

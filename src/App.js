import React from "react"
import About  from "./components.js/About"
import Contact from "./components.js/Contact"
import ReactDOM from "react-dom/client"
import Header from"./components.js/Header"
import Body from "./components.js/Body"
import {  createBrowserRouter,RouterProvider,Outlet } from "react-router-dom"
import Error from "./components.js/Error"
import RestaurantMenu from "./components.js/Restaurantmenu"
import Cart from "./components.js/Cart"
const AppLayout= () => {
  return (
      <div className="app">
          {Header()}
          <Outlet/>
          </div>

  )
}
const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout/>,
      children: [{
        path: "/",
        element: <Body/>
      },

        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/contact",
          element: <Contact/>,
        },
        {
          path: "/restaurants/:resid",
          element: <RestaurantMenu/>,
        },
        {
          path : "/cart",
          element: <Cart/>,

        }

      ],

      errorElement: <Error/>,
    },
   
    
  ]
)
const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter}/>);

   





      
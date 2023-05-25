
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Menu from "../page/Manu/Menu/Menu";
import Order from "../page/Order/Order/Order";
import Login from "../page/Login/Login";
import SingUp from "../page/SingUp/SingUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
        {
          path:"/order/:category",
          element:<Order></Order>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"singUp",
          element:<SingUp></SingUp>
        }
      ]
    },
  ]);
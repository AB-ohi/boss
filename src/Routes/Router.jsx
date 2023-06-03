
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../page/Home/Home/Home";
import Menu from "../page/Manu/Menu/Menu";
import Order from "../page/Order/Order/Order";
import Login from "../page/Login/Login";
import SingUp from "../page/SingUp/SingUp";
import Secret from "../page/Shared/Secret/Secret";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../page/DashBoard/MyCart/MyCart";
import AllUser from "../page/DashBoard/AllUser/AllUser";
import AddItem from "../page/DashBoard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../page/DashBoard/ManageItems/ManageItems";

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
        },
        {
          path:"secret",
          element:<PrivetRoute><Secret></Secret></PrivetRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
      children:[
        {
          path:'mycart',
          element:<MyCart></MyCart>
        },
        {
          path:'allUser',
          element:<AllUser></AllUser>
        },
        {
          path:'addItem',
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
          path:'manageItems',
          element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
      ]
    }
  ]);
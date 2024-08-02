import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Offers from "../pages/Offers/Offers";
import Tickets from "../pages/Tickets/Tickets";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"offers",
          element:<Offers/>
        },
        {
          path:"tickets",
          element:<Tickets/>
        },
        {
          path:"signup",
          element:<Signup/>
        },
        {
          path:"login",
          element:<Login/>
        },
      ]
    },
  ]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";

import BookService from "../BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/', 
            element:<Home></Home>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path: 'signUp',
          element: <SignUp></SignUp>

        },
        {
          path: 'book/:id',
          element: <BookService></BookService>, 
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)

        },
        {
          path: 'bookings',
          element: 
          <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>,
          

        },
      ]
    },
  ]);

  export default router;
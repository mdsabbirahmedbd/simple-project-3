import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import Details from "../Pages/Details";
import Praivate from "../Praivate/Praivate";
import Profile from "../Pages/Profile";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
               loader:()=> fetch('/estate.json')
            },
            {
                path:'/details/:id',
                element:<Praivate><Details></Details></Praivate>,
                loader:()=> fetch('/estate.json')
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])


export default router

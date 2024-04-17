import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import Contact from '../Pages/Profile'
import Products from './../Pages/Products';
import Details from "../Pages/Details";
import Praivate from "../Praivate/Praivate";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        children:[
            {
               path:'/',
               element:<Home></Home>,
               loader:()=> fetch('../../public/estate.json')
            },
            {
                path:'/product',
                element:<Products></Products>
            },
            {
                path:'/details/:id',
                element:<Praivate><Details></Details></Praivate>,
                loader:()=> fetch('../../public/estate.json')
            },
            {
                path:'/contact',
                element:<Contact></Contact>
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

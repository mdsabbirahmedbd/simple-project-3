import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from './../Pages/Login';
import Register from './../Pages/Register';
import Contact from './../Pages/Contact'
import Products from './../Pages/Products';
import Details from "../Pages/Details";

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
                element:<Details></Details>,
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

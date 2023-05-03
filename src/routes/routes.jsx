import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import { recipeData } from "../utilities/loader";
import Blogs from "../pages/Blogs/Blogs";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Recipe from "../pages/Recipe/Recipe";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/recipes/:id',
                element: <PrivateRoute><RecipeDetails></RecipeDetails></PrivateRoute>,
                loader: ({params}) => recipeData(params.id)
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
           
            
        ]
    }
])

export default router;
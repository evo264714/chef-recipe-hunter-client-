import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import { recipeData } from "../utilities/loader";

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
                path: '/recipes/:id',
                element: <RecipeDetails></RecipeDetails>,
                loader: ({params}) => recipeData(params.id)
            }
           
            
        ]
    }
])

export default router;
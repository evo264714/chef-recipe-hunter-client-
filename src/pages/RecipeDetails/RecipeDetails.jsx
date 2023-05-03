import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipeDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes.recipes);
    return (
        <div>
            
        </div>
    );
};

export default RecipeDetails;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const RecipeDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes.recipes);
    return (
        <div>
            <h2>recipe details</h2>
        </div>
    );
};

export default RecipeDetails;
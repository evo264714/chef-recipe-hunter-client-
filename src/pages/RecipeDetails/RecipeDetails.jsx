import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';

const RecipeDetails = () => {
    const { recipes, chef } = useLoaderData();
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes, description } = chef;
    return (
        <div className='grid grid-cols-2'>
            <div className='flex justify-center  my-auto'>
                <div className="card bg-slate-600 w-96 shadow-xl">
                    <figure><img className='h-80 w-full' src={chef_picture} alt="Shoes" /></figure>
                    <div className="card-body border-double border-4 border-white">
                        <h2 className="card-title text-black text-3xl font-extrabold">{chef_name}</h2>
                        <p className='text-white font-semibold'>~ {years_of_experience} years of experience</p>
                        <p className='text-white font-semibold'>~ {num_recipes} total recipes</p>
                        <p className='text-white font-semibold'>~ More than {likes} likes on Social Medias </p>
                        <p className='text-white font-semibold'>~ {description} </p>
                        
                    </div>
                </div>
            </div>
            <div>
               
                {
                    recipes.recipes.map(recipe => <Recipe
                        key={recipe.recipe_name}
                        recipe={recipe}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};

export default RecipeDetails;
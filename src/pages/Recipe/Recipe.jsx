import React from 'react';
import { useState } from "react";
import './Recipe.css'

const Recipe = ({ recipe }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    function handleFavoriteClick() {
        setIsFavorite(true);
        showToastMessage(`${recipe_name} added to favorites!`);
    }

    function showToastMessage(message) {
        const toast = document.getElementById("toast");
        toast.innerHTML = message;
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }







    const { recipe_name, ingredients, cooking_method, rating } = recipe;
    return (
        <div>

            <div className="card w-96 bg-slate-100 shadow-xl mb-8 mt-8">

                <div className="card-body">
                    <h2 className="card-title text-black text-3xl font-extrabold">{recipe_name}</h2>
                    <p className='text-red-800 font-semibold'><span className='font-bold text-red-500'>Ingredients:</span> {ingredients}</p>
                    <p className='text-red-800 font-semibold'><span className='font-bold text-red-500'>Cooking Method:</span> {cooking_method}</p>
                    <small>Rating: {rating}</small>
                    <div className="card-actions justify-end">
                        <button
                            onClick={handleFavoriteClick}
                            disabled={isFavorite}
                            color={isFavorite ? "primary-disabled" : "primary"}
                        >
                            {isFavorite ? "Favorite" : "Add to Favorites"}
                        </button>
                        <div id="toast" className="toast">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Recipe;
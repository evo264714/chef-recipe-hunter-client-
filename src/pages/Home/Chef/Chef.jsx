import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chef = ({ chef }) => {
    const navigate = useNavigate()
    const handleViewRecipes = (id) =>{
        navigate(`/recipes/${id}`);
    }

    const { chef_name, chef_picture, years_of_experience, num_recipes, likes } = chef;
    return (

        <div className="card w-96 bg-base-100 shadow-xl mb-10 mt-10 text-white" style={{background: 'linear-gradient(to right,#7da5aa,#385253)'}}>
            <figure><img className='h-64 w-full' src={chef_picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl text-center font-bold"> {chef_name}</h2>
                <p className='text-xl text-center font-medium'>Experience: {years_of_experience}</p>
                <p className='text-xl text-center font-medium'>Total Recipes: {num_recipes}</p>
                <p className='text-xl text-center font-medium'>Likes: {likes}</p>
                <div className="card-actions justify-center mt-6">
                    <button onClick={() => handleViewRecipes(chef.id)} className="btn btn-primary">View Recipes</button>
                </div>
            </div>
        </div>

    );
};

export default Chef;
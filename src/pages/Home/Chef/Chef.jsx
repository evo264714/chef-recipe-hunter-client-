// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './chef.css'
// import LazyLoad from 'react-lazy-load';

// const Chef = ({ chef }) => {
//     const navigate = useNavigate()
//     const handleViewRecipes = (id) => {
//         navigate(`/recipes/${id}`);
//     }

//     const { chef_name, chef_picture, years_of_experience, num_recipes, likes } = chef;
//     return (

//         <div className="card w-96 media-only bg-base-100 shadow-xl mb-10 mt-10 text-white mx-auto" style={{ background: 'linear-gradient(to right,#7da5aa,#385253)' }}>
//             <figure><LazyLoad height={300}>
//                 <img className='h-64 w-full mt-4' src={chef_picture} alt="Shoes" />
//             </LazyLoad></figure>
//             <div className="card-body">
//                 <h2 className="text-2xl text-center font-bold"> {chef_name}</h2>
//                 <p className='text-xl text-center font-medium'>Experience: {years_of_experience}</p>
//                 <p className='text-xl text-center font-medium'>Total Recipes: {num_recipes}</p>
//                 <p className='text-xl text-center font-medium'>Likes: {likes}</p>
//                 <div className="card-actions justify-center mt-6">
//                     <button onClick={() => handleViewRecipes(chef.id)} className="btn btn-primary">View Recipes</button>
//                 </div>
//             </div>
//         </div>

//     );
// };

// export default Chef;







import React from 'react';
import { useNavigate } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import { FaStar, FaUtensils, FaHeart, FaClock } from 'react-icons/fa';

const Chef = ({ chef }) => {
    const navigate = useNavigate();
    
    const handleViewRecipes = (id) => {
        navigate(`/recipes/${id}`);
    }

    const { chef_name, chef_picture, years_of_experience, num_recipes, likes, id } = chef;

    return (
        <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
            {/* Chef Image with Overlay */}
            <div className="relative overflow-hidden">
                <LazyLoad height={320}>
                    <img 
                        className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                        src={chef_picture} 
                        alt={chef_name} 
                    />
                </LazyLoad>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Experience Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <FaStar className="text-white" />
                    {years_of_experience} years
                </div>

                {/* Likes Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                    <FaHeart className="text-white" />
                    {likes}
                </div>
            </div>

            {/* Chef Info */}
            <div className="p-6 relative">
                {/* Decorative Element */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-yellow-400 rounded-full"></div>
                
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-3 group-hover:text-yellow-600 transition-colors duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    {chef_name}
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
                        <div className="flex justify-center items-center gap-2 text-gray-600 mb-1">
                            <FaUtensils className="text-yellow-500" />
                            <span className="font-semibold">Recipes</span>
                        </div>
                        <div className="text-xl font-bold text-gray-800">{num_recipes}</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-xl hover:bg-yellow-50 transition-colors duration-300">
                        <div className="flex justify-center items-center gap-2 text-gray-600 mb-1">
                            <FaClock className="text-green-500" />
                            <span className="font-semibold">Experience</span>
                        </div>
                        <div className="text-xl font-bold text-gray-800">{years_of_experience}y</div>
                    </div>
                </div>

                {/* CTA Button */}
                <button 
                    onClick={() => handleViewRecipes(id)}
                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg border border-yellow-400 flex items-center justify-center gap-3 group/btn"
                >
                    View Recipes
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500 pointer-events-none"></div>
        </div>
    );
};

export default Chef;
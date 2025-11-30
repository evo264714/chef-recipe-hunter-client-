import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import { FaStar, FaHeart, FaUtensils, FaClock, FaAward } from "react-icons/fa";

const RecipeDetails = () => {
  const { recipes, chef } = useLoaderData();
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
    description,
  } = chef;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Chef Profile Section */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
            {/* Chef Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl blur-lg opacity-30"></div>
                <img
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-xl border-4 border-white"
                  src={chef_picture}
                  alt={chef_name}
                />
                {/* Experience Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg flex items-center gap-2">
                  <FaAward className="text-white" />
                  {years_of_experience} years
                </div>
              </div>
            </div>

            {/* Chef Information */}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="mb-6">
                <h1
                  className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Chef {chef_name}
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-4 text-center border border-yellow-200">
                  <div className="flex justify-center mb-2">
                    <FaUtensils className="text-2xl text-yellow-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {num_recipes}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Recipes
                  </div>
                </div>
                <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-4 text-center border border-red-200">
                  <div className="flex justify-center mb-2">
                    <FaHeart className="text-2xl text-red-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {likes}+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Likes</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 text-center border border-blue-200">
                  <div className="flex justify-center mb-2">
                    <FaStar className="text-2xl text-blue-500" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {years_of_experience}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years Exp
                  </div>
                </div>
              </div>

              {/* Signature Specialties */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <FaAward className="text-yellow-500" />
                  Culinary Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Modern Techniques",
                    "Farm-to-Table",
                    "Global Flavors",
                    "Artisan Methods",
                  ].map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white border border-yellow-300 text-yellow-700 rounded-full text-sm font-medium shadow-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recipes Section */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Signature{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Recipes
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the exquisite dishes crafted by Chef {chef_name}. Each
              recipe tells a story of passion and culinary excellence.
            </p>
          </div>

          {/* Recipes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.recipes.map((recipe) => (
              <Recipe key={recipe.recipe_name} recipe={recipe} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-8 text-center shadow-2xl border border-yellow-300">
          <h3
            className="text-2xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Cook Like a Pro?
          </h3>
          <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
            Join our cooking community and get access to exclusive recipes,
            tips, and techniques from master chefs worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Join Cooking Club
            </button>
            <button className="px-8 py-3 bg-white text-gray-900 rounded-xl font-bold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300">
              Download Recipe Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;

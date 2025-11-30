import React from "react";
import { useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaUtensils,
  FaFire,
  FaClock,
} from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const {
    recipe_name,
    ingredients,
    cooking_method,
    rating,
    preparation_time,
    difficulty,
  } = recipe;

  // Generate star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="relative">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl z-50 transform transition-all duration-500 animate-bounce">
          <div className="flex items-center gap-2">
            <FaHeart className="text-white" />
            <span className="font-semibold">
              {recipe_name} added to favorites!
            </span>
          </div>
        </div>
      )}

      <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        {/* Recipe Header with Gradient */}
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={handleFavoriteClick}
              disabled={isFavorite}
              className={`p-3 rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                isFavorite
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white/90 text-gray-600 hover:bg-red-500 hover:text-white"
              }`}
            >
              {isFavorite ? (
                <FaHeart className="text-xl" />
              ) : (
                <FaRegHeart className="text-xl" />
              )}
            </button>
          </div>

          <h2
            className="text-2xl font-bold text-white pr-16 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {recipe_name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-3">
            <div className="flex items-center gap-1">{renderStars(rating)}</div>
            <span className="text-white text-sm font-medium">({rating}.0)</span>
          </div>
        </div>

        {/* Recipe Content */}
        <div className="p-6">
          {/* Recipe Stats */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-3 bg-yellow-50 rounded-2xl p-3 border border-yellow-200">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <FaClock className="text-yellow-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Prep Time</div>
                <div className="font-bold text-gray-900">
                  {preparation_time || "25 mins"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-red-50 rounded-2xl p-3 border border-red-200">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <FaFire className="text-red-600" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Difficulty</div>
                <div className="font-bold text-gray-900">
                  {difficulty || "Medium"}
                </div>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FaUtensils className="text-yellow-500" />
              <h3 className="text-lg font-bold text-gray-900">Ingredients</h3>
            </div>
            <div className="bg-gray-50 rounded-2xl p-4 border border-gray-200">
              <p className="text-gray-700 leading-relaxed text-sm">
                {ingredients}
              </p>
            </div>
          </div>

          {/* Cooking Method */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✓</span>
              </div>
              Cooking Method
            </h3>
            <div className="bg-green-50 rounded-2xl p-4 border border-green-200">
              <p className="text-gray-700 leading-relaxed text-sm">
                {cooking_method}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="flex-1 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-xl font-bold hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg border border-yellow-400 text-sm">
              Cook This Recipe
            </button>
            <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transform hover:scale-105 transition-all duration-300 text-sm">
              Share
            </button>
          </div>
        </div>

        {/* Hover Effect Border */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/30 transition-all duration-500 pointer-events-none"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>
    </div>
  );
};

export default Recipe;

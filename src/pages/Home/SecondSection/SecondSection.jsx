// import React from 'react';
// import { Link } from 'react-router-dom';

// const SecondSection = () => {
//     const menuItems = [
//         { id: 1, img: "https://www.momontimeout.com/wp-content/uploads/2021/06/fruit-salad-title.jpeg", name: 'Fruit Salad', description: 'A delicious mix of seasonal fruits.', price: '$3.99' },
//         { id: 2, img: "https://healthyeatinghub.com.au/wp-content/uploads/2018/06/avocado-dip-and-vegetable-dips-group-1024x683.jpg", name: 'Veggie Sticks', description: 'Fresh carrots, celery, and cucumbers served with ranch dip.', price: '$2.99' },
//         { id: 3, img: "https://www.simplejoy.com/wp-content/uploads/2020/07/Chicken-wrap-683x1024.webp", name: 'Grilled Chicken Wrap', description: 'Grilled chicken, lettuce, and tomato wrapped in a whole wheat tortilla.', price: '$4.99' },
//         { id: 4, img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/2018_grilled-peanut-butter-and-jelly_20336_600x600.jpg?ext=.jpg", name: 'Peanut Butter & Jelly Sandwich', description: 'Creamy peanut butter and grape jelly on whole wheat bread.', price: '$2.49' },
//     ];

//     return (
//         <div className="bg-white py-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="lg:text-center">
//                     <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Kid's Healthy Food Menu</h2>
//                     <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                         Delicious and Nutritious
//                     </p>
//                 </div>
//                 <div className="mt-10">
//                     <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//                         {menuItems.map((item) => (
//                             <li key={item.id} className="col-span-1 flex flex-col text-center bg-orange-200 rounded-lg shadow divide-y divide-gray-200">
//                                 <div className="flex-1 flex flex-col p-8">
//                                     <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover" src={item.img} alt={item.name} />
//                                     <h3 className="mt-6 text-gray-900 text-lg font-medium">{item.name}</h3>
//                                     <p className="mt-1 text-gray-500">{item.description}</p>
//                                 </div>
//                                 <div>
//                                     <span className="w-full flex items-center justify-center p-4 text-sm font-medium text-gray-900">{item.price}</span>
//                                     <Link className="w-full flex items-center justify-center border-t border-gray-200 p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
//                                         View details
//                                     </Link>
//                                 </div>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SecondSection;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaLeaf,
  FaStar,
  FaUtensils,
  FaCartPlus,
} from "react-icons/fa";

const SecondSection = () => {
  const menuItems = [
    {
      id: 1,
      img: "https://www.momontimeout.com/wp-content/uploads/2021/06/fruit-salad-title.jpeg",
      name: "Tropical Fruit Paradise",
      description:
        "A vibrant mix of seasonal fruits including strawberries, mango, pineapple, and berries with a hint of mint.",
      price: "$3.99",
      calories: "120 cal",
      nutrients: ["Vitamin C", "Fiber", "Antioxidants"],
      popular: true,
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/BKwDSXYk/veggie-sticks.png",
      name: "Rainbow Veggie Sticks",
      description:
        "Fresh carrots, bell peppers, celery, and cucumbers served with creamy avocado dip.",
      price: "$2.99",
      calories: "80 cal",
      nutrients: ["Vitamin A", "Vitamin K", "Healthy Fats"],
      popular: false,
    },
    {
      id: 3,
      img: "https://www.simplejoy.com/wp-content/uploads/2020/07/Chicken-wrap-683x1024.webp",
      name: "Sunshine Chicken Wrap",
      description:
        "Grilled chicken, crisp lettuce, tomato, and light mayo wrapped in a whole wheat tortilla.",
      price: "$4.99",
      calories: "280 cal",
      nutrients: ["Protein", "Fiber", "Iron"],
      popular: true,
    },
    {
      id: 4,
      img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/2018_grilled-peanut-butter-and-jelly_20336_600x600.jpg?ext=.jpg",
      name: "Happy PB&J Sandwich",
      description:
        "Creamy peanut butter and natural grape jelly on soft whole wheat bread, lightly grilled.",
      price: "$2.49",
      calories: "320 cal",
      nutrients: ["Protein", "Energy", "Whole Grains"],
      popular: false,
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-500"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FaLeaf className="text-green-500" />
            Kid-Approved & Parent-Trusted
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            Little{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
              Chef's
            </span>{" "}
            Corner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Wholesome, delicious meals that kids love and parents feel good
            about. Every dish is packed with nutrition and flavor!
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-4 left-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                    <FaStar className="text-white" />
                    Kid's Favorite!
                  </div>
                </div>
              )}

              {/* Healthy Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-gradient-to-r from-green-400 to-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <FaHeart className="text-white" />
                  Super Healthy
                </div>
              </div>

              {/* Item Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={item.img}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Item Info */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                  style={{ fontFamily: "'Comic Neue', cursive" }}
                >
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Nutrition Info */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <FaLeaf className="text-green-400" />
                      {item.calories}
                    </span>
                    <span className="font-medium text-green-600">
                      Nutritious
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {item.nutrients.map((nutrient, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-green-600">
                      {item.price}
                    </span>
                   
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={`/menu/${item.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold text-sm hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg border border-green-400 flex items-center gap-2"
                    >
                      <FaUtensils className="text-sm" />
                      Details
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-green-400/30 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-400 to-blue-400 rounded-3xl p-8 shadow-2xl border border-green-300 max-w-4xl mx-auto relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative z-10">
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                Join Our Kids Cooking Club!
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Fun cooking classes where kids learn to make healthy meals while
                having a blast!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/kids-club"
                  className="px-8 py-3 bg-white text-green-600 rounded-xl font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Join the Fun
                </Link>
                <Link
                  to="/full-menu"
                  className="px-8 py-3 bg-transparent text-white rounded-xl font-bold border-2 border-white hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300"
                >
                  View Full Menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { number: "100%", label: "Natural Ingredients" },
            { number: "0%", label: "Artificial Preservatives" },
            { number: "5+", label: "Veggies in Every Meal" },
            { number: "⭐️⭐️⭐️⭐️⭐️", label: "Kid Rated" },
          ].map((fact, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-lg md:text-xl font-bold text-green-600 mb-1">
                {fact.number}
              </div>
              <div className="text-xs text-gray-600 font-medium">
                {fact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;

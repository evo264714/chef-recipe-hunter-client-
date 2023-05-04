import React from 'react';
import { Link } from 'react-router-dom';

const SecondSection = () => {
    const menuItems = [
        { id: 1, img: "https://www.momontimeout.com/wp-content/uploads/2021/06/fruit-salad-title.jpeg", name: 'Fruit Salad', description: 'A delicious mix of seasonal fruits.', price: '$3.99' },
        { id: 2, img: "https://healthyeatinghub.com.au/wp-content/uploads/2018/06/avocado-dip-and-vegetable-dips-group-1024x683.jpg", name: 'Veggie Sticks', description: 'Fresh carrots, celery, and cucumbers served with ranch dip.', price: '$2.99' },
        { id: 3, img: "https://www.simplejoy.com/wp-content/uploads/2020/07/Chicken-wrap-683x1024.webp", name: 'Grilled Chicken Wrap', description: 'Grilled chicken, lettuce, and tomato wrapped in a whole wheat tortilla.', price: '$4.99' },
        { id: 4, img: "https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/desktopimages/2018_grilled-peanut-butter-and-jelly_20336_600x600.jpg?ext=.jpg", name: 'Peanut Butter & Jelly Sandwich', description: 'Creamy peanut butter and grape jelly on whole wheat bread.', price: '$2.49' },
    ];

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Kid's Healthy Food Menu</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Delicious and Nutritious
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {menuItems.map((item) => (
                            <li key={item.id} className="col-span-1 flex flex-col text-center bg-orange-200 rounded-lg shadow divide-y divide-gray-200">
                                <div className="flex-1 flex flex-col p-8">
                                    <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover" src={item.img} alt={item.name} />
                                    <h3 className="mt-6 text-gray-900 text-lg font-medium">{item.name}</h3>
                                    <p className="mt-1 text-gray-500">{item.description}</p>
                                </div>
                                <div>
                                    <span className="w-full flex items-center justify-center p-4 text-sm font-medium text-gray-900">{item.price}</span>
                                    <Link className="w-full flex items-center justify-center border-t border-gray-200 p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        View details
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
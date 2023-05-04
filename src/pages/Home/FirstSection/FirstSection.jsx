import React from 'react';
import { Link } from 'react-router-dom';

const FirstSection = () => {
    const chefs = [
        { id: 1, img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTiE9JRB1ShUECmITi7FIUa6wtVWtcwAPWbbop47Tw9AYlN31DFqiFDjCgxMWBGR-Tkgy_loF1IBdu9V50", name: 'Alice Waters', description: "Alice Louise Waters (born April 28, 1944) is an American chef, restaurateur, and author. In 1971, she opened Chez Panisse, a restaurant in Berkeley, California, famous for its role in creating the farm-to-table movement and for pioneering California cuisine.Waters has authored the books Chez Panisse Cooking (with Paul Bertolli), The Art of Simple Food I and II, and 40 Years of Chez Panisse. Her memoir, Coming to my Senses: The Making of a Counterculture Cook, was published in September 2017 and released in paperback in May 2018." },
        { id: 2, img: "https://pbs.twimg.com/profile_images/1448696882746695683/Jp2_LEBL_400x400.jpg", name: 'Gordon Ramsay', description: "Gordon James Ramsay born 8 November 1966) is a British celebrity chef, restaurateur, television personality and writer. His restaurant group, Gordon Ramsay Restaurants, was founded in 1997 and has been awarded 17 Michelin stars overall; it currently holds a total of seven.[1][2][3][4] His signature restaurant, Restaurant Gordon Ramsay in Chelsea, London, has held three Michelin stars since 2001.[5] After rising to fame on the British television miniseries Boiling Point in 1999, Ramsay became one of the best-known and most influential chefs in the world." },
        { id: 3, img:"https://www.southernliving.com/thmb/YO_eTLnB9VcB_gLXQQFp2QgEofY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-2-20caed10bab24db3ba1b579c268c4625.jpg", name: 'Julia Child', description: "Julia Carolyn Child (née McWilliams;[3] August 15, 1912 – August 13, 2004) was an American cooking teacher, author, and television personality. She is recognized for bringing French cuisine to the American public with her debut cookbook, Mastering the Art of French Cooking, and her subsequent television programs, the most notable of which was The French Chef, which premiered in 1963." },
    ];

    return (
        <div className="bg-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Meet our chefs</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Discover the talent behind our delicious dishes
                    </p>
                </div>
                <div className="mt-10">
                    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {chefs.map((chef) => (
                            <li key={chef.id} className="col-span-1 flex flex-col text-center bg-slate-400 rounded-lg shadow divide-y divide-gray-200">
                                <div className="flex-1 flex flex-col p-8">
                                    <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover" src={chef.img} alt={chef.name} />
                                    <h3 className="mt-6 text-gray-900 text-lg font-medium">{chef.name}</h3>
                                    <div className="mt-1 flex-grow">
                                        <p className="text-white">{chef.description}</p>
                                    </div>
                                </div>
                                <div>
                                    <Link className="w-full flex items-center justify-center border-t border-gray-200 p-4 text-sm font-medium text-white hover:text-indigo-500">
                                        View profile
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

export default FirstSection;
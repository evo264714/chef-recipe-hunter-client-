// import React from 'react';
// import { Link } from 'react-router-dom';

// const FirstSection = () => {
//     const chefs = [
//         { id: 1, img: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTiE9JRB1ShUECmITi7FIUa6wtVWtcwAPWbbop47Tw9AYlN31DFqiFDjCgxMWBGR-Tkgy_loF1IBdu9V50", name: 'Alice Waters', description: "Alice Louise Waters (born April 28, 1944) is an American chef, restaurateur, and author. In 1971, she opened Chez Panisse, a restaurant in Berkeley, California, famous for its role in creating the farm-to-table movement and for pioneering California cuisine.Waters has authored the books Chez Panisse Cooking (with Paul Bertolli), The Art of Simple Food I and II, and 40 Years of Chez Panisse. Her memoir, Coming to my Senses: The Making of a Counterculture Cook, was published in September 2017 and released in paperback in May 2018." },
//         { id: 2, img: "https://pbs.twimg.com/profile_images/1448696882746695683/Jp2_LEBL_400x400.jpg", name: 'Gordon Ramsay', description: "Gordon James Ramsay born 8 November 1966) is a British celebrity chef, restaurateur, television personality and writer. His restaurant group, Gordon Ramsay Restaurants, was founded in 1997 and has been awarded 17 Michelin stars overall; it currently holds a total of seven.[1][2][3][4] His signature restaurant, Restaurant Gordon Ramsay in Chelsea, London, has held three Michelin stars since 2001.[5] After rising to fame on the British television miniseries Boiling Point in 1999, Ramsay became one of the best-known and most influential chefs in the world." },
//         { id: 3, img:"https://www.southernliving.com/thmb/YO_eTLnB9VcB_gLXQQFp2QgEofY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-2-20caed10bab24db3ba1b579c268c4625.jpg", name: 'Julia Child', description: "Julia Carolyn Child (née McWilliams;[3] August 15, 1912 – August 13, 2004) was an American cooking teacher, author, and television personality. She is recognized for bringing French cuisine to the American public with her debut cookbook, Mastering the Art of French Cooking, and her subsequent television programs, the most notable of which was The French Chef, which premiered in 1963." },
//     ];

//     return (
//         <div className="bg-white py-8">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="lg:text-center">
//                     <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Meet our chefs</h2>
//                     <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//                         Discover the talent behind our delicious dishes
//                     </p>
//                 </div>
//                 <div className="mt-10">
//                     <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//                         {chefs.map((chef) => (
//                             <li key={chef.id} className="col-span-1 flex flex-col text-center bg-slate-400 rounded-lg shadow divide-y divide-gray-200">
//                                 <div className="flex-1 flex flex-col p-8">
//                                     <img className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full object-cover" src={chef.img} alt={chef.name} />
//                                     <h3 className="mt-6 text-gray-900 text-lg font-medium">{chef.name}</h3>
//                                     <div className="mt-1 flex-grow">
//                                         <p className="text-white">{chef.description}</p>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <Link className="w-full flex items-center justify-center border-t border-gray-200 p-4 text-sm font-medium text-white hover:text-indigo-500">
//                                         View profile
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

// export default FirstSection;




import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaAward, FaUtensils, FaQuoteLeft } from 'react-icons/fa';

const FirstSection = () => {
    const chefs = [
        { 
            id: 1, 
            img: "https://i.ibb.co.com/Q38kQf2T/Alice-Waters.jpg", 
            name: 'Alice Waters', 
            description: "Alice Louise Waters (born April 28, 1944) is an American chef, restaurateur, and author. In 1971, she opened Chez Panisse, a restaurant in Berkeley, California, famous for its role in creating the farm-to-table movement and for pioneering California cuisine.",
            specialty: "Farm-to-Table Cuisine",
            awards: ["James Beard Award", "National Humanities Medal"],
            experience: "50+ years"
        },
        { 
            id: 2, 
            img: "https://i.ibb.co.com/qP8kqT3/Gordon-Ramsay.jpg", 
            name: 'Gordon Ramsay', 
            description: "Gordon James Ramsay born 8 November 1966) is a British celebrity chef, restaurateur, television personality and writer. His restaurant group, Gordon Ramsay Restaurants, was founded in 1997 and has been awarded 17 Michelin stars overall.",
            specialty: "Modern European",
            awards: ["7 Michelin Stars", "Multiple TV Shows"],
            experience: "35+ years"
        },
        { 
            id: 3, 
            img: "https://www.southernliving.com/thmb/YO_eTLnB9VcB_gLXQQFp2QgEofY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/image-2-20caed10bab24db3ba1b579c268c4625.jpg", 
            name: 'Julia Child', 
            description: "Julia Carolyn Child (née McWilliams; August 15, 1912 – August 13, 2004) was an American cooking teacher, author, and television personality. She is recognized for bringing French cuisine to the American public.",
            specialty: "French Cuisine",
            awards: ["Emmy Award", "Presidential Medal of Freedom"],
            experience: "40+ years"
        },
    ];

    return (
        <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <FaStar className="text-yellow-500" />
                        Culinary Legends
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        Meet Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Master Chefs</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover the extraordinary talent and passion behind every dish. Our world-renowned chefs bring decades of experience and innovation to your table.
                    </p>
                </div>

                {/* Chef Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {chefs.map((chef, index) => (
                        <div 
                            key={chef.id} 
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
                        >
                            {/* Card Background Pattern */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-bl-3xl opacity-10"></div>
                            
                            {/* Chef Image */}
                            <div className="relative pt-8 px-8">
                                <div className="relative mx-auto w-40 h-40">
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                                    <img 
                                        className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl mx-auto transform group-hover:scale-105 transition-transform duration-500" 
                                        src={chef.img} 
                                        alt={chef.name} 
                                    />
                                </div>
                                
                                {/* Experience Badge */}
                                <div className="absolute top-12 right-8 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2">
                                    <FaAward className="text-white" />
                                    {chef.experience}
                                </div>
                            </div>

                            {/* Chef Info */}
                            <div className="p-8 pt-6">
                                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2 group-hover:text-yellow-600 transition-colors duration-300"
                                    style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {chef.name}
                                </h3>
                                
                                <div className="flex justify-center mb-4">
                                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                        {chef.specialty}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="relative mb-6">
                                    <FaQuoteLeft className="absolute -top-2 -left-1 text-yellow-200 text-2xl" />
                                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-4 relative z-10">
                                        {chef.description}
                                    </p>
                                </div>

                                {/* Awards */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                                        <FaAward className="text-yellow-500" />
                                        Notable Achievements
                                    </div>
                                    <div className="space-y-2">
                                        {chef.awards.map((award, awardIndex) => (
                                            <div key={awardIndex} className="flex items-center gap-3 text-sm text-gray-600">
                                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                                {award}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <Link 
                                    to={`/chef/${chef.id}`}
                                    className="block w-full py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center rounded-xl font-semibold hover:from-gray-800 hover:to-gray-600 transform hover:scale-105 transition-all duration-300 shadow-lg border border-gray-600 group/btn"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        View Profile
                                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/20 transition-all duration-500 pointer-events-none"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-lg border border-yellow-300 max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4"
                            style={{ fontFamily: "'Playfair Display', serif" }}>
                            Ready to Experience Culinary Excellence?
                        </h3>
                        <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
                            Book a table and let our master chefs create an unforgettable dining experience for you.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link 
                                to="/reservations"
                                className="px-8 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            >
                                Book a Table
                            </Link>
                            <Link 
                                to="/chefs"
                                className="px-8 py-3 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-900 hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300"
                            >
                                View All Chefs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FirstSection;
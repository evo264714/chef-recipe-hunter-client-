// import React from 'react';
// import './Home.css'
// import ChefSection from '../ChefsSection/ChefSection';
// import FirstSection from '../FirstSection/FirstSection';
// import SecondSection from './../SecondSection/SecondSection';

// const Home = () => {

//     return (
//         <div className=''>
//             <section className="banner">
//                 <div className="banner-text">
//                     <h1 className='text-green-600 font-bold'>Welcome to Chefs Table</h1>
//                     <p className='text-green-600 font-bold'>Discover the art of cooking with our delicious recipes and expert tips.</p>
//                 </div>

//             </section>
//             <div className=''>
//                 <ChefSection></ChefSection>
//                 <FirstSection></FirstSection>
//                 <SecondSection></SecondSection>
//             </div>
//         </div>
//     );
// };

// export default Home;


import React from 'react';
import ChefSection from '../ChefsSection/ChefSection';
import SecondSection from '../SecondSection/SecondSection';
import FirstSection from '../FirstSection/FirstSection';

const Home = () => {
    return (
        <div className='overflow-hidden'>
            {/* Hero Section */}
            <section 
                className="relative min-h-screen flex items-center justify-center py-20 px-4"
                style={{
                    background: 'linear-gradient(135deg, rgba(44, 62, 80, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%), url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed'
                }}
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce"></div>
                    <div className="absolute top-1/3 right-20 w-16 h-16 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-bounce delay-1000"></div>
                </div>

                <div className="relative text-center max-w-4xl mx-auto z-10">
                    {/* Decorative Icon */}
                    <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                    </div>

                    {/* Main Heading */}
                    <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight' 
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        Welcome to
                        <span className='block bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mt-2'>
                            Chef's Table
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p className='text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed'>
                        Where culinary artistry meets unforgettable dining experiences. Discover the passion behind every dish.
                    </p>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mt-10'>
                        <button className='px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full font-bold text-lg hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-yellow-400'>
                            Explore Our Menu
                        </button>
                        <button className='px-8 py-4 bg-transparent text-yellow-400 rounded-full font-bold text-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300'>
                            Book a Table
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl mx-auto'>
                        {[
                            { number: '15+', label: 'Master Chefs' },
                            { number: '50+', label: 'Recipes' },
                            { number: '12+', label: 'Awards' },
                            { number: '25+', label: 'Years Experience' }
                        ].map((stat, index) => (
                            <div key={index} className='text-center p-4 rounded-2xl bg-black bg-opacity-30 backdrop-blur-sm border border-white border-opacity-10'>
                                <div className='text-2xl md:text-3xl font-bold text-yellow-400'>{stat.number}</div>
                                <div className='text-sm text-gray-300 mt-1'>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Scroll Indicator */}
                    <div className='mt-16 animate-bounce'>
                        <div className='w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center'>
                            <div className='w-1 h-3 bg-yellow-400 rounded-full mt-2'></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Sections */}
            <div className='relative'>
                {/* Decorative Divider */}
                <div className="relative h-24 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-50"></div>
                </div>

                {/* Main Content */}
                <div className='relative bg-gray-50 -mt-24 pt-24'>
                    <ChefSection />
                    <FirstSection />
                    <SecondSection />
                </div>
            </div>
        </div>
    );
};

export default Home;
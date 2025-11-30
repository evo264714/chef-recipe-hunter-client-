// import React, { useEffect, useState } from 'react';
// import Chef from './../Chef/Chef';

// const ChefSection = () => {
//     const [chefs, setChefs] = useState([]);

//     useEffect(() => {
//         fetch('https://chefs-table-server-evo264714.vercel.app/chefs')
//             .then(res => res.json())
//             .then(data => setChefs(data))
//             .catch(error => console.log(error))
//     }, [])

//     return (
//         <div className=''>
           
//            <h2 className='py-6 text-center text-black text-4xl font-bold bg-slate-400'>Check out some of our world class chef's recipes.</h2>
//             <div className='grid md:grid-cols-2 lg:grid-cols-2 bg-slate-400 sm:w-full'>
                
//                 {
//                     chefs.map(chef => <Chef
//                         key={chef.id}
//                         chef={chef}
//                     >
//                     </Chef>)


//                 }
//             </div>
//         </div>
//     );
// };

// export default ChefSection;





import React, { useEffect, useState } from 'react';
import Chef from './../Chef/Chef';

const ChefSection = () => {
    const [chefs, setChefs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://chefs-table-server-evo264714.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            })
    }, [])

    if (loading) {
        return (
            <div className="min-h-96 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600 text-lg">Loading our master chefs...</p>
                </div>
            </div>
        );
    }

    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4" 
                        style={{ fontFamily: "'Playfair Display', serif" }}>
                        Meet Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">Master Chefs</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover the culinary artists behind our exquisite dishes. Each chef brings unique expertise and passion to create unforgettable dining experiences.
                    </p>
                </div>

                {/* Chef Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {chefs.map(chef => (
                        <Chef key={chef.id} chef={chef} />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-16 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {[
                            { label: 'Years Combined Experience', value: chefs.reduce((acc, chef) => acc + chef.years_of_experience, 0) + '+' },
                            { label: 'Total Recipes', value: chefs.reduce((acc, chef) => acc + chef.num_recipes, 0) + '+' },
                            { label: 'Chef Awards', value: '50+' },
                            { label: 'Customer Satisfaction', value: '99%' }
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                                <div className="text-2xl md:text-3xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefSection;
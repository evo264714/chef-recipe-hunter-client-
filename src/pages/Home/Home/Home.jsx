import React from 'react';
import './Home.css'
import ChefSection from '../ChefsSection/ChefSection';

const Home = () => {

    return (
        <>
            <section className="banner">
                <div className="banner-text">
                    <h1 className='text-black font-bold'>Welcome to Chefs Table</h1>
                    <p className='text-black font-bold'>Discover the art of cooking with our delicious recipes and expert tips.</p>
                </div>

            </section>
            <div className=''>
                <ChefSection></ChefSection>
            </div>
        </>
    );
};

export default Home;
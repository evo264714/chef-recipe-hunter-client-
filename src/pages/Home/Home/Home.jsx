import React from 'react';
import './Home.css'
import ChefSection from '../ChefsSection/ChefSection';
import FirstSection from '../FirstSection/FirstSection';
import SecondSection from './../SecondSection/SecondSection';

const Home = () => {

    return (
        <div className=''>
            <section className="banner">
                <div className="banner-text">
                    <h1 className='text-green-600 font-bold'>Welcome to Chefs Table</h1>
                    <p className='text-green-600 font-bold'>Discover the art of cooking with our delicious recipes and expert tips.</p>
                </div>

            </section>
            <div className=''>
                <ChefSection></ChefSection>
                <FirstSection></FirstSection>
                <SecondSection></SecondSection>
            </div>
        </div>
    );
};

export default Home;
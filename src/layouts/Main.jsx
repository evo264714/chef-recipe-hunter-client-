import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';
import FirstSection from '../pages/Home/FirstSection/FirstSection';
import SecondSection from '../pages/Home/SecondSection/SecondSection';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Home></Home>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Main Content</div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <FirstSection></FirstSection>
                </div>
                <div className="divider"></div>
                <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                    <SecondSection></SecondSection>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
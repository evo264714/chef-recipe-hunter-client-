import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import Home from '../pages/Home/Home/Home';
import FirstSection from '../pages/Home/FirstSection/FirstSection';
import SecondSection from '../pages/Home/SecondSection/SecondSection';
import ChefSection from '../pages/Home/ChefsSection/ChefSection';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
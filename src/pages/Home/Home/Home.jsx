import React from 'react';
import logo from '../../../assets/logo.jpg.jpg'

const Home = () => {
    const logoImg = {
        height: '600px',
        width: '600px',
        padding: '20px',
    }
    return (
        <div className='d-flex justify-content-center'>
            <img className='rounded' style={logoImg} src={logo} alt="" />
        </div>
    );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaCuttlefish } from "react-icons/fa";

const Header = () => {
    const headerStyle={
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
    }
    return (
        <div className='w-full flex items-center justify-around p-6' style={headerStyle}>
            <h2 className='text-7xl font-bold text-white'>Chefs Table</h2>

            <nav>
                <Link className='text-white	font-medium mr-5' to="/home">Home</Link>
                <Link className='text-white	font-medium mr-5' to="/blog">Blog</Link>
                <Link className='text-white	font-medium mr-5' to="/">About</Link>
            </nav>
            <div>
               <Link> <FaCuttlefish /></Link>
            </div>

        </div>
    );
};

export default Header;
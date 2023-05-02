import React from 'react';
import { Link } from 'react-router-dom';
import { FaCuttlefish } from "react-icons/fa";

const Header = () => {
    const headerStyle={
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
    }
    return (
        <div className='d-flex align-items-center justify-content-around p-4' style={headerStyle}>
            <h2 className=''>Chefs Table</h2>

            <nav>
                <Link className='text-decoration-none text-white me-4' to="/home">Home</Link>
                <Link className='text-decoration-none text-white me-4' to="/blog">Blog</Link>
                <Link className='text-decoration-none text-white me-4' to="/">About</Link>
            </nav>
            <div>
               <Link> <FaCuttlefish /></Link>
            </div>

        </div>
    );
};

export default Header;
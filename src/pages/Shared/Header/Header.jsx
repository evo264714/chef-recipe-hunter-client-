import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const headerStyle={
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
    }
    const {user} = useContext(AuthContext);
    return (
        <div className='w-full flex items-center justify-around p-6' style={headerStyle}>
            <h2 className='text-7xl font-bold text-white'>Chefs Table</h2>

            <nav>
                <Link className='text-white	font-medium mr-5' to="/">Home</Link>
                <Link className='text-white	font-medium mr-5' to="/blogs">Blog</Link>
                <Link className='text-white	font-medium mr-5' to="/">About</Link>
            </nav>
            <div className='flex w-36 justify-between items-center'>
               {user && <Link> <FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle></Link>}

               {user ?
               
               <button className="btn btn-primary">Logout</button> :
               <Link to='/login'>
               <button className="btn btn-primary">Login</button>
               </Link>
               }

            </div>

        </div>
    );
};

export default Header;
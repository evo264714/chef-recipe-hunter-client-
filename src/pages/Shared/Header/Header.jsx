import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const headerStyle = {
        background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
        color: 'white',
    }
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div className='sm:w-full w-full md:flex items-center justify-around p-6' style={headerStyle}>
            <h2 className='text-7xl font-bold text-white'>Chefs Table</h2>

            <nav>
                <NavLink className='me-6'
                    to="/"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Home
                </NavLink>
                <NavLink className='me-6'
                    to="/blogs"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Blogs
                </NavLink>
                <NavLink className='me-6'
                    to="/register"
                    style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Register
                </NavLink>
                
            </nav>
            <div className='flex w-36 justify-between items-center'>
                {user && <img className='w-10 rounded-full' src={user.photoURL} />}

                {user ?

                    <button onClick={handleLogOut} className="btn btn-primary">Logout</button> :
                    <Link to='/login'>
                        <button className="btn btn-primary">Login</button>
                    </Link>
                }

            </div>

        </div>
    );
};

export default Header;
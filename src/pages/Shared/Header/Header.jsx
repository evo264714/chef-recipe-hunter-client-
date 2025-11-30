// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';

// const Header = () => {
//     const headerStyle = {
//         background: 'linear-gradient(to right, #2c3e50, #1a1a1a)',
//         color: 'white',
//     }
//     const { user, logOut } = useContext(AuthContext);

//     const handleLogOut = () => {
//         logOut()
//             .then()
//             .catch(error => console.log(error))
//     }

//     return (
//         <div className='sm:w-full w-full md:flex items-center justify-around p-6' style={headerStyle}>
//             <h2 className='text-7xl font-bold text-white'>Chefs Table</h2>

//             <nav>
//                 <NavLink className='me-6'
//                     to="/"
//                     style={({ isActive }) => {
//                         return {
//                             fontWeight: isActive ? "bold" : "",
//                         };
//                     }}
//                 >
//                     Home
//                 </NavLink>
//                 <NavLink className='me-6'
//                     to="/blogs"
//                     style={({ isActive }) => {
//                         return {
//                             fontWeight: isActive ? "bold" : "",
//                         };
//                     }}
//                 >
//                     Blogs
//                 </NavLink>
//                 <NavLink className='me-6'
//                     to="/register"
//                     style={({ isActive }) => {
//                         return {
//                             fontWeight: isActive ? "bold" : "",
//                         };
//                     }}
//                 >
//                     Register
//                 </NavLink>
                
//             </nav>
//             <div className='flex w-36 justify-between items-center'>
//                 {user && <img className='w-10 rounded-full' title={user.displayName} src={user.photoURL} />}

//                 {user ?

//                     <button onClick={handleLogOut} className="btn btn-primary">Logout</button> :
//                     <Link to='/login'>
//                         <button className="btn btn-primary">Login</button>
//                     </Link>
//                 }

//             </div>

//         </div>
//     );
// };

// export default Header;




import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    const headerStyle = {
        background: 'linear-gradient(135deg, #2c3e50 0%, #1a1a1a 50%, #34495e 100%)',
        color: 'white',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }
    
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navLinkStyle = ({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
        color: isActive ? "#fbbf24" : "white",
        textShadow: isActive ? "0 0 8px rgba(251, 191, 36, 0.4)" : "none",
        padding: "8px 16px",
        borderRadius: "8px",
        background: isActive ? "rgba(251, 191, 36, 0.1)" : "transparent",
        transition: "all 0.3s ease",
        border: isActive ? "1px solid rgba(251, 191, 36, 0.3)" : "1px solid transparent"
    })

    return (
        <div className='w-full flex items-center justify-between p-4 md:p-6 relative' style={headerStyle}>
            {/* Decorative elements */}
            <div className='absolute top-0 left-0 w-20 h-20 opacity-10' style={{
                background: 'radial-gradient(circle, #fbbf24 0%, transparent 70%)'
            }}></div>
            <NavLink to="/">
            <h2 className='text-4xl md:text-6xl font-bold text-white tracking-tight' style={{
                fontFamily: "'Playfair Display', serif",
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                background: 'linear-gradient(45deg, #fff, #fbbf24)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            }}>
                Chef's Table
            </h2>
            </NavLink>

            <nav className='flex items-center space-x-2 md:space-x-4 bg-black bg-opacity-30 px-4 py-2 rounded-full backdrop-blur-sm'>
                <NavLink
                    to="/"
                    style={navLinkStyle}
                    className="hover:scale-105 transform transition-all duration-300"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/blogs"
                    style={navLinkStyle}
                    className="hover:scale-105 transform transition-all duration-300"
                >
                    Blogs
                </NavLink>
                <NavLink
                    to="/register"
                    style={navLinkStyle}
                    className="hover:scale-105 transform transition-all duration-300"
                >
                    Register
                </NavLink>
            </nav>
            
            <div className='flex items-center space-x-4'>
                {user && (
                    <div className='flex items-center space-x-3 bg-black bg-opacity-30 px-3 py-2 rounded-full'>
                        <img 
                            className='w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-yellow-400 shadow-lg' 
                            title={user.displayName} 
                            src={user.photoURL} 
                            alt="Profile"
                        />
                        <span className='text-sm hidden md:inline text-yellow-200'>{user.displayName}</span>
                    </div>
                )}

                {user ? (
                    <button 
                        onClick={handleLogOut} 
                        className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-semibold hover:from-red-700 hover:to-red-800 transform hover:scale-105 transition-all duration-300 shadow-lg border border-red-500"
                    >
                        Logout
                    </button>
                ) : (
                    <Link to='/login'>
                        <button className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 rounded-full font-bold hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg border border-yellow-400">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
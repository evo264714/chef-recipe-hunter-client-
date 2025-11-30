// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';
// import { signInWithPopup } from 'firebase/auth';
// import { FaGoogle } from "react-icons/fa";
// import { FaGithub, FaSignInAlt } from "react-icons/fa";

// const Login = () => {

//     const { signIn, googleProvider, gitHubProvider, auth } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const navigate = useNavigate();
//     const location = useLocation()
//     const from = location.state?.from?.pathname || '/'
    

//     const handleGoogleSignIn = () =>{
//         signInWithPopup(auth, googleProvider)
//         .then(result=>{
//             const user = result.user
//             navigate(from, {replace: true})
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }
//     const handleGitHubSignIn = () =>{
//         signInWithPopup(auth, gitHubProvider)
//         .then(result =>{
//             const loggedInUser = result.loggedInUser;
//             navigate(from, {replace: true})
//         })
//         .catch(error =>{
//             console.log(error);
//         })
//     }

//     const handleLogin = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signIn(email, password)
//         .then(result =>{
//             const loggedUser = result.user;
//             console.log(loggedUser);
//             setError('');
//             navigate(from, {replace: true})
//         })
//         .catch(error =>{
//             setError(error.message);
//         })
//     }

//     return (
//         <form onSubmit={handleLogin}>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>

//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" name="email" required className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" placeholder="password" name="password" required className="input input-bordered" />
//                                 <label className="label">
//                                     <span>New to Chefs Table? Please <Link to='/register' className="underline decoration-solid">Register</Link></span>
//                                 </label>
//                                 <label>
//                                     <span className='text-red-500'>{error}</span>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-accent mb-10"><FaSignInAlt className='text-black me-2'/>Login</button>
//                                 <button onClick={handleGoogleSignIn} className="btn btn-accent mb-10"><FaGoogle className='text-black me-2'/>  Sign in with Google</button>
//                                 <button onClick={handleGitHubSignIn} className="btn btn-accent"><FaGithub className='text-black me-2'/>Sign in with Github</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Login;




import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaGithub, FaSignInAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";


const Login = () => {
    const { signIn, googleProvider, gitHubProvider, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
            setError('Google sign-in failed. Please try again.');
        })
        .finally(() => setIsLoading(false));
    }

    const handleGitHubSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const loggedInUser = result.loggedInUser;
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
            setError('GitHub sign-in failed. Please try again.');
        })
        .finally(() => setIsLoading(false));
    }

    const handleLogin = event => {
        event.preventDefault();
        setIsLoading(true);
        setError('');
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            setError('');
            navigate(from, { replace: true });
        })
        .catch(error => {
            setError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4" 
             style={{
                 background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                 fontFamily: "'Inter', sans-serif"
             }}>
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Left Side - Branding */}
                <div className="text-center lg:text-left text-white p-8">
                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                        <GiChefToque className="text-4xl text-yellow-400" />
                        <h1 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Chef's Table
                        </h1>
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        Welcome <span className="block text-yellow-400">Back</span>
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-md mx-auto lg:mx-0">
                        Sign in to continue your culinary journey and access exclusive recipes from master chefs.
                    </p>
                    <div className="hidden lg:block">
                        <div className="flex items-center gap-4 mb-4 text-yellow-300">
                            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                            <span>Access 1000+ exclusive recipes</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4 text-yellow-300">
                            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                            <span>Save your favorite dishes</span>
                        </div>
                        <div className="flex items-center gap-4 text-yellow-300">
                            <div className="w-8 h-1 bg-yellow-400 rounded-full"></div>
                            <span>Join our cooking community</span>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="p-8 md:p-10">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl font-bold text-gray-800 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Sign In
                            </h3>
                            <p className="text-gray-600">Welcome back to your culinary haven</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Email Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                                </div>
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    name="email" 
                                    required 
                                    className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            {/* Password Field */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    name="password" 
                                    required 
                                    className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
                                />
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Login Button */}
                            <button 
                                type="submit" 
                                disabled={isLoading}
                                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl font-bold text-lg hover:from-yellow-600 hover:to-yellow-700 transform hover:scale-105 transition-all duration-300 shadow-lg border border-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <>
                                        <FaSignInAlt className="text-lg" />
                                        Sign In
                                    </>
                                )}
                            </button>

                            {/* Divider */}
                            <div className="relative flex items-center my-6">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="flex-shrink mx-4 text-gray-500 text-sm">or continue with</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="grid grid-cols-2 gap-4">
                                <button 
                                    type="button" 
                                    onClick={handleGoogleSignIn}
                                    disabled={isLoading}
                                    className="flex items-center justify-center gap-3 py-3 bg-white border border-gray-300 rounded-2xl hover:bg-gray-50 hover:border-gray-400 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaGoogle className="text-red-500 text-lg" />
                                    <span className="font-medium text-gray-700">Google</span>
                                </button>
                                <button 
                                    type="button" 
                                    onClick={handleGitHubSignIn}
                                    disabled={isLoading}
                                    className="flex items-center justify-center gap-3 py-3 bg-gray-900 text-white rounded-2xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <FaGithub className="text-white text-lg" />
                                    <span className="font-medium">GitHub</span>
                                </button>
                            </div>

                            {/* Register Link */}
                            <div className="text-center mt-6">
                                <p className="text-gray-600">
                                    New to Chef's Table?{' '}
                                    <Link 
                                        to='/register' 
                                        className="text-yellow-600 font-semibold hover:text-yellow-700 underline transition-colors duration-300"
                                    >
                                        Create an account
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
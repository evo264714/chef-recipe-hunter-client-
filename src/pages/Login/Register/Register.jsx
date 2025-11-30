// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';
// import { updateProfile } from 'firebase/auth';

// const Register = () => {

//     const { createUser, auth } = useContext(AuthContext);
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     const handleRegister = event =>{
//         event.preventDefault();
//         setSuccess('')
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         const photo = form.photo.value;
//         console.log(name, email, password, photo);
//         createUser(email, password)
//         .then(result =>{
//             const createdUser = result.user;
//             console.log(createdUser);
//             updateProfile(auth.currentUser, {
//                 displayName: name, photoURL: photo
//             }).then(() =>{

//             }).catch(error => {
//                 console.log(error);
//             })
//             setError('')
//             form.reset();
//             setSuccess('Successfully Registered');
//         })
//         .catch(error =>{
//             setError(error.message);

//         })
//     }

//     return (
//         <form onSubmit={handleRegister}>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Register Here!</h1>

//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text" placeholder="Name" name="name" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo URL</span>
//                                 </label>
//                                 <input type="text" placeholder="URL" name="photo" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" placeholder="email" name='email' required className="input input-bordered" />
//                             </div>

//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" placeholder="password" name='password' required className="input input-bordered" />
//                                 <label>
//                                     <span className='text-red-500'>{error}</span>
//                                     <span className='text-green-500'>{success}</span>
//                                 </label>
//                                 <label className="label">
//                                     <span>Already Have an Account? Please <Link to='/login' className="underline decoration-solid">Login</Link></span>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <button className="btn btn-accent">Register</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Register;

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaCamera,
  FaCheckCircle,
} from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";

const Register = () => {
  const { createUser, auth } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;

        // Update profile with name and photo
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setSuccess(
              "Account created successfully! Welcome to Chef's Table."
            );
            form.reset();
          })
          .catch((error) => {
            console.log(error);
            setError("Profile update failed, but account was created.");
          });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left text-white p-8">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <GiChefToque className="text-4xl text-yellow-300" />
            <h1
              className="text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Chef's Table
            </h1>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join Our{" "}
            <span className="block text-yellow-300">Culinary Family</span>
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-md mx-auto lg:mx-0">
            Create your account and unlock a world of exquisite recipes, cooking
            tips, and chef secrets.
          </p>
          <div className="hidden lg:block">
            <div className="flex items-center gap-4 mb-4 text-yellow-300">
              <FaCheckCircle className="text-lg" />
              <span>Access exclusive chef recipes</span>
            </div>
            <div className="flex items-center gap-4 mb-4 text-yellow-300">
              <FaCheckCircle className="text-lg" />
              <span>Save and organize your favorites</span>
            </div>
            <div className="flex items-center gap-4 mb-4 text-yellow-300">
              <FaCheckCircle className="text-lg" />
              <span>Connect with food enthusiasts</span>
            </div>
            <div className="flex items-center gap-4 text-yellow-300">
              <FaCheckCircle className="text-lg" />
              <span>Get personalized recommendations</span>
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <h3
                className="text-3xl font-bold text-gray-800 mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Create Account
              </h3>
              <p className="text-gray-600">
                Start your culinary journey with us
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              {/* Name Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  required
                  className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Photo URL Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCamera className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="url"
                  placeholder="Profile photo URL"
                  name="photo"
                  className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  name="email"
                  required
                  className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Create password"
                  name="password"
                  required
                  className="w-full pl-10 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Messages */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-2xl text-sm">
                  {error}
                </div>
              )}
              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-2xl text-sm">
                  {success}
                </div>
              )}

              {/* Register Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg border border-purple-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FaUser className="text-lg" />
                    Create Account
                  </>
                )}
              </button>

              {/* Login Link */}
              <div className="text-center mt-6">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-purple-600 font-semibold hover:text-purple-700 underline transition-colors duration-300"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>

              {/* Terms Notice */}
              <p className="text-xs text-gray-500 text-center mt-4">
                By creating an account, you agree to our Terms of Service and
                Privacy Policy
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

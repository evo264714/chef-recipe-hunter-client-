import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { signInWithPopup } from 'firebase/auth';
import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaSignInAlt } from "react-icons/fa";

const Login = () => {

    const { signIn, googleProvider, gitHubProvider, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    

    const handleGoogleSignIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            const user = result.user
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
        })
    }
    const handleGitHubSignIn = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result =>{
            const loggedInUser = result.loggedInUser;
            navigate(from, {replace: true})
        })
        .catch(error =>{
            console.log(error);
        })
    }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            setError('');
            navigate(from, {replace: true})
        })
        .catch(error =>{
            setError(error.message);
        })
    }

    return (
        <form onSubmit={handleLogin}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" required className="input input-bordered" />
                                <label className="label">
                                    <span>New to Chefs Table? Please <Link to='/register' className="underline decoration-solid">Register</Link></span>
                                </label>
                                <label>
                                    <span className='text-red-500'>{error}</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent mb-10"><FaSignInAlt className='text-black me-2'/>Login</button>
                                <button onClick={handleGoogleSignIn} className="btn btn-accent mb-10"><FaGoogle className='text-black me-2'/>  Sign in with Google</button>
                                <button onClick={handleGitHubSignIn} className="btn btn-accent"><FaGithub className='text-black me-2'/>Sign in with Github</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { updatePassword, updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, auth } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo);
        createUser(email, password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: photo
            }).then(() =>{

            }).catch(error => {
                console.log(error);
            })
            setError('')
            form.reset();
            setSuccess('Successfully Registered');
        })
        .catch(error =>{
            setError(error.message);
            
        })
    }

    return (
        <form onSubmit={handleRegister}>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Here!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="URL" name="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' required className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                                <label>
                                    <span className='text-red-500'>{error}</span>
                                    <span className='text-green-500'>{success}</span>
                                </label>
                                <label className="label">
                                    <span>Already Have an Account? Please <Link to='/login' className="underline decoration-solid">Login</Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;
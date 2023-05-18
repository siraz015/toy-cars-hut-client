import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-1/3 mx-auto bg-gray-100 p-5 rounded-lg mt-10 shadow-lg'>
            {/* <h1 className="text-5xl text-center font-bold my-5">Please Login!</h1>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
            </form>
            <p className='my-4'><small>Don`t have account? <Link to='/register'>Please Register!</Link></small></p> */}
        </div>
    );
};

export default Login;
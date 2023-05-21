
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const Login = () => {
    const { loginUser, googleLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    useTitle('Login')

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(from, { replace: true });
                Swal.fire({
                    // position: 'top-center',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                const googleLoggedUser = result.user;
                setUser(googleLoggedUser);
                navigate(from, { replace: true });
                Swal.fire({
                    // position: 'top-center',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className='w-1/3 mx-auto bg-gray-100 p-5 rounded-lg mt-10 shadow-lg'>
            <h1 className="text-5xl text-center font-bold my-5">Please Login!</h1>
            <form onSubmit={handleLogin}>
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
            <p className='my-4'><small>Don`t have account? <Link to='/register'>Please Register!</Link></small></p>
            <div className='btn btn-secondary w-full'>
                <button onClick={handleGoogleLogIn}>Login with Google</button>
            </div>
        </div>
    );
};

export default Login;
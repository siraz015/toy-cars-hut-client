
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-1/3 mx-auto bg-gray-100 p-5 rounded-lg mt-10 shadow-lg'>
            <h1 className="text-5xl text-center font-bold my-5">Please Register!</h1>
            <form>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Login" />
                </div>
            </form>
            <p className='my-4'><small>Already have an account? <Link to='/login'>Please Login!</Link></small></p>
        </div>
    );
};

export default Register;

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navItems = <>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/login'>All Toys</Link> </li>
        {user?.email ? <>
            <li> <Link to='/login'>My Toys</Link> </li>
            <li> <Link to='/login'>Add A Toy</Link> </li>
        </> : <></>}
        <li> <Link to='/blog'>Blogs</Link> </li>
    </>

    return (
        <div className='bg-base-100 shadow-lg'>
            <div className="navbar max-w-[1280px] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navItems
                            }
                        </ul>
                    </div>
                    <img className='w-[150px]' src={'https://i.ibb.co/QdTrMvQ/Logo.png'} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            navItems
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.email ?
                        <div className='flex gap-4'>
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <button onClick={handleLogOut}>Log Out</button>
                        </div>
                        : <Link to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;

// import { Rating } from '@smastrom/react-rating'
// import '@smastrom/react-rating/style.css'
import { Link, Navigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from "../../providers/AuthProvider";







const SignleTab = ({ ta }) => {

    // const { _id, name, pictureURL, sellerName, availableQuantity, subCategory, price, rating } = ta;
    const { rating, price, pictureURL, name, _id } = ta || {}


    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with custom options if needed
    }, []);

    const { user } = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';

    const handleDetails = () => {
        {
            user ? Navigate(from, { replace: true }) : Swal.fire({
                title: 'Login!',
                text: 'Please Login To show Details',
                icon: 'warning',
                confirmButtonText: 'Login'
            })
        }
    }

    return (
        <div data-aos="fade-down">
            <div className="ml-5 mt-5 shadow-lg rounded-lg p-5 bg-white">
                <div className='card'>
                    <img className="h-80 w-96" src={pictureURL} alt="" />
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {name}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        price: ${price}
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 flex">
                        Rating: {rating}
                        {/* <Rating style={{ maxWidth: 100 }} value={rating} readOnly /> */}
                    </p>
                    <Link to={`/toy/${_id}`}>
                        <button onClick={handleDetails} className="btn my-4">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignleTab;
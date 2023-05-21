import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CustomerReview = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 }); // Initialize AOS with custom options if needed
    }, []);


    return (
        <div className='my-20'>
            <h2 className='text-center font-bold text-5xl text-orange-700 mb-4'>Our Customer Review</h2>
            <hr className='w-1/2 mx-auto py-3 to-black' />
            <div className='grid md:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-down">
                    <figure><img className='w-[250px]' src={'https://i.ibb.co/JcDM3d3/1.png'} alt="Customer Image" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Adelaide Summers</h2>
                        <p>Fantastic Toy Car for Endless Fun and Adventure!</p>
                        <p className='text-orange-700'>Rating: 4.8</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-left">
                    <figure><img className='w-[250px]' src={'https://i.ibb.co/hLrNMk2/2.png'} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl"> Liam Mitchell</h2>
                        <p>I recently purchased a toy car for my son, and I must say it has exceeded my expectations in every way possible. Here's why I highly recommend it:</p>
                        <p className='text-orange-700'>Rating: 4.9</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="fade-up">
                    <figure><img className='w-[250px]' src={'https://i.ibb.co/k1X1GLV/3.png'} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Ethan Sullivan</h2>
                        <p>I recently purchased the [Brand Name] toy car for my 5-year-old son, and I must say, it has exceeded all expectations! Here's why I believe it deserves a glowing review:</p>
                        <p className='text-orange-700'>Rating: 5</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReview;
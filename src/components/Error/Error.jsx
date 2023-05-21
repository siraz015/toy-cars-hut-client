import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const Error = () => {

    useTitle('Error')

    return (
        <div>
            <div className='flex justify-center'>
                <img className='text-center w-[400px]' src={'https://i.ibb.co/09DFNRY/404.webp'} alt="" />
            </div>
            <div className='text-center'>
                <h2 className='text-2xl text-red-700 font-bold my-5'>Page Not Found!!!</h2>
                <Link to='/' className='btn'>Go Back</Link>
            </div>
        </div>
    );
};

export default Error;
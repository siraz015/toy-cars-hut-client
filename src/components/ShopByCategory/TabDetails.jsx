
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const TabDetails = () => {
    const tabToy = useLoaderData();
    useTitle('Toy Details')

    const { availableQuantity, detailDescription, name, pictureURL, price, rating, subCategory } = tabToy;


    return (
        <div className='max-w-[1280px] mx-auto'>
            <h2 className='text-center font-bold text-5xl text-slate-600'>{name} Details</h2>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className=' shadow-xl rounded-xl'>
                    <img className='max-w-md w-96 mx-auto' src={pictureURL} alt="" />
                </div>
                <div className='flex flex-col justify-center shadow-xl rounded-xl p-10'>
                    <h2 className='text-4xl font-bold mb-3'>Toy Name: {name}</h2>
                    <p className='text-2xl font-semibold mb-2'>Category: {subCategory}</p>
                    <p className='text-lg'>Details Description: {detailDescription}</p>
                    <p className='text-lg'>Quantity: {availableQuantity}</p>
                    <p>Ratings: {rating}</p>
                    <p className='text-lg '>Price: {price}</p>
                    <button className='btn btn-primary w-1/4 mt-5'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default TabDetails;
import { useLoaderData } from 'react-router-dom';
import ToysRow from './ToysRow';

const AllToys = () => {
    const alltoys = useLoaderData();

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alltoys.map(toys => <ToysRow
                                key={toys._id}
                                toys={toys}
                            ></ToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;
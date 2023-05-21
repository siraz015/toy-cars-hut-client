import useTitle from '../../Hooks/useTitle';
import ToysRow from './ToysRow';
import { useEffect, useState } from 'react';

const AllToys = () => {

    const [allToy, setAllToy] = useState([]);
    const [searchText, setSearchText] = useState("");
    useTitle('AllToys')


    useEffect(() => {
        fetch('https://toy-cars-hut-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setAllToy(data))
    }, [])


    const handleSearch = () => {
        fetch(`https://toy-cars-hut-server.vercel.app/toySearchName/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setAllToy(data);
            })
    }

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div>
                <div className="flex justify-end items-center mb-5">
                    <input placeholder="Search Toy" className="border border-orange-700 py-2 px-3 rounded-lg mr-3" onChange={(e) => setSearchText(e.target.value)} type="text" />{""}
                    <button className='btn bg-orange-700 border-none' onClick={handleSearch}>Search</button>
                </div>
            </div>
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
                            allToy.map(toys => <ToysRow
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
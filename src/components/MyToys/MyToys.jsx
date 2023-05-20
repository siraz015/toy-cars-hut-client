import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UserToyRow from './UserToyRow';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState();

    const url = `http://localhost:5000/mytoys?sellerEmail=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])

    console.log(mytoys);

    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Image</th>
                            <th>Toy Name</th>
                            <th>Seller Name</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Ratings</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            mytoys?.map(userToys => <UserToyRow
                                key={userToys._id}
                                userToys={userToys}
                            ></UserToyRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;
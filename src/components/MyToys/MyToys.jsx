import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UserToyRow from './UserToyRow';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState();
    useTitle('My Toys')

    const url = `https://toy-cars-hut-server.vercel.app/mytoys?sellerEmail=${user.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])


    const handleDelete = id => {
        const proceed = confirm('are you sure want to delete');

        if (proceed) {
            fetch(`https://toy-cars-hut-server.vercel.app/mytoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            // position: 'top-center',
                            icon: 'success',
                            title: 'Deleted Toy Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                    const remaining = mytoys.filter(toy => toy._id !== id);
                    setMytoys(remaining)
                })
        }
    }


    const handleUpdate = id => {
        fetch(`https://toy-cars-hut-server.vercel.app/mytoys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        // position: 'top-end',
                        icon: 'success',
                        title: 'Updated Toy Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


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
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            ></UserToyRow>)
                        }

                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyToys;
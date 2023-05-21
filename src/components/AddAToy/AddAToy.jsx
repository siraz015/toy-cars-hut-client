import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const AddAToy = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add A Toy');

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;
        const pictureURL = form.pictureURL.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const availableQuantity = form.availableQuantity.value;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const detailDescription = form.detailDescription.value;

        const addToy = {
            pictureURL,
            name,
            sellerName,
            sellerEmail,
            availableQuantity,
            subCategory,
            price,
            rating,
            detailDescription
        }

        fetch('https://toy-cars-hut-server.vercel.app/addtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Add Toy Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className='my-16 max-w-[1280px] mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-5'>Please Add A toy</h2>
            <form onSubmit={handleAddToy}>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name='pictureURL' placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Toy Name" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select className="input input-bordered" name="subCategory" id="subCategory">
                            <option value="Sports Car">Sports Car</option>
                            <option value="Mini Fire Truck">Mini Fire Truck</option>
                            <option value="Mini Plice Car">Mini Plice Car</option>
                        </select>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name='detailDescription' placeholder="Detail description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <button className='bg-blue-500 rounded-lg py-2 text-white font-bold my-5 btn btn-primary'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddAToy;
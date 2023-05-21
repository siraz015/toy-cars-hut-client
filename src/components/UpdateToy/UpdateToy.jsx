import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const UpdateToy = () => {
    const updateToys = useLoaderData();
    const { _id, pictureURL, sellerEmail, name, sellerName, availableQuantity, subCategory, price, rating, detailDescription } = updateToys;
    useTitle('Update Toy')

    console.log(updateToys, sellerEmail);

    const handleUpdateToy = event => {
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

        const updateToy = {
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

        fetch(`https://toy-cars-hut-server.vercel.app/mytoys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
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
        <div className='my-16 max-w-[1280px] mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-5'>Update Toy: {name}</h2>
            <form onSubmit={handleUpdateToy}>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture URL</span>
                        </label>
                        <input type="text" name='pictureURL' defaultValue={pictureURL} placeholder="Picture URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder="Toy Name" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name='sellerName' defaultValue={sellerName} placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input type="text" name='sellerEmail' defaultValue={sellerEmail} placeholder="Seller Email" className="input input-bordered" />
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="text" name='availableQuantity' defaultValue={availableQuantity} placeholder="Available Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select className="input input-bordered" name="subCategory" defaultValue={subCategory} id="subCategory">
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
                        <input type="text" name='price' defaultValue={price} placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name='rating' defaultValue={rating} placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name='detailDescription' defaultValue={detailDescription} placeholder="Detail description" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <input className='bg-blue-500 rounded-lg py-2 text-white font-bold my-5 btn btn-primary' type="submit" value="Updated Toy" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;
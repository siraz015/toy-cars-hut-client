import React from 'react';

const AddAToy = () => {
    return (
        <div className='my-16 max-w-[1280px] mx-auto'>
            <h2 className='text-3xl font-bold text-center mb-5'>Please Add A toy</h2>
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
                    <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Name</span>
                    </label>
                    <input type="text" name='sellerName' placeholder="Seller Name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Seller Email</span>
                    </label>
                    <input type="text" name='sellerEmail' placeholder="Seller Email" className="input input-bordered" />
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
                        <option value="volvo">Sports Car</option>
                        <option value="saab">Mini Fire Truck</option>
                        <option value="opel">Mini Plice Car</option>
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
                <button className='bg-blue-500 rounded-lg py-2 text-white font-bold my-5'>Submit</button>
            </div>
        </div>
    );
};

export default AddAToy;
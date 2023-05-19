import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    const {_id, availableQuantity, detailDescription, name, pictureURL, price, rating, sellerName, subCategory} = toy;
    
    console.log(toy);

    

    return (
        <div>
            <h2>Toy Details Page</h2>
            <img src={pictureURL} alt="" />
        </div>
    );
};

export default ToyDetails;
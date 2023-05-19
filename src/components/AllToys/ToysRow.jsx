import React from 'react';
import { Link } from 'react-router-dom';

const ToysRow = ({ toys }) => {
    const { _id, name, sellerName, availableQuantity, subCategory, price, rating } = toys;

    return (

        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <Link to='/toydetails'>
                <button className="btn bg-amber-700 border-none">View Details</button>
            </Link>
        </tr>

    );
};

export default ToysRow;
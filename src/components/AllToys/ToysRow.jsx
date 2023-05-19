import React from 'react';

const ToysRow = ({ toys }) => {
    const {_id, name, sellerName, availableQuantity, subCategory, price, rating } = toys;

    return (

        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <button className="btn bg-amber-700 border-none">View Details</button>
            
        </tr>

    );
};

export default ToysRow;
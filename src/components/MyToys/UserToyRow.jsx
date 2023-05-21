import { Link } from "react-router-dom";


const UserToyRow = ({ userToys, handleDelete }) => {
    const { _id, name, pictureURL, sellerName, availableQuantity, subCategory, price, rating } = userToys;

    return (

        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <img className='w-20' src={pictureURL} alt="" />
                </div>
            </td>
            <td>
                <h3>{name}</h3>
            </td>
            <td>
                <h3>{sellerName}</h3>
            </td>
            <td>
                <h3>{subCategory}</h3>
            </td>
            <td>
                <h3 className="text-center">{availableQuantity}</h3>
            </td>
            <td>
                <h3>{price}</h3>
            </td>
            <td>
                <h3 className="text-center">{rating}</h3>
            </td>
            <td>
                <Link to={`/updateToy/${_id}`}><button className="btn btn-primary">Update</button></Link>
            </td>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
            </td>
        </tr>

    );
};

export default UserToyRow;
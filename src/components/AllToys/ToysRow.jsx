
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ToysRow = ({ toys }) => {
    const { _id, name, sellerName, availableQuantity, subCategory, price} = toys;

    return (
        <tr>
            <td>{sellerName}</td>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <Link to={`/toydetails/${_id}`}>
                <button className="btn bg-amber-700 border-none">View Details</button>
            </Link>
        </tr>
    );
};

export default ToysRow;
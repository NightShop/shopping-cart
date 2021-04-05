import { FaTimesCircle } from "react-icons/fa";
const CartRow = (props) => {

    return (
        <tr>
            <td>{props.name}</td><td>{props.price}€</td><td>{props.amount}</td><td>{props.amount * props.price} €</td><td><FaTimesCircle onClick={() => props.amountToZero(props.id)}/></td>
        </tr>
    )
}

export default CartRow;
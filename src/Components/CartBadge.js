import { FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";

const CartBadge = (props) => {
    const [active, setActive] = useState("");
    useEffect(() => {
        setActive(props.showBadge);
        return () => {
            setActive("");
        }
    }, [props.showBadge]);


    return (
        <div className="cartBadgeContainer">
            <div className={`cartBadge ${active}`}>
                <FaShoppingCart />
                <p>{props.count}</p>
            </div>
        </div>
    )
}

export default CartBadge;
import CartRow from "./CartRow"
import CartSummary from "./CartSummary";
import "../Cart.css";
import uniqid from "uniqid";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const Cart = (props) => {
    const [active, setActive] = useState(false);


    return (
        <div className={`cartPanel ${active ? "active" : ""}`}>
            <h4>Basket</h4>
            <table className="cartTable">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Price Sum</th>
                    </tr>
                </thead>
                <tbody>
                    {props.itemsList.filter(item => {
                        return item.amount > 0;
                    }).map(item => {
                        return <CartRow 
                        key={uniqid()} 
                        name={item.name} 
                        price={item.price} 
                        amount={item.amount}
                        amountToZero={props.amountToZero}
                        id={item.id} />
                    })}
                    <CartSummary priceSum={props.itemsList.reduce((acumulator, item) => {
                        return acumulator + item.amount * item.price;
                    }, 0)}/>
                </tbody>
            </table>
            <div className="toggleCartPanel" onClick={() => {
                setActive((prevState) => !prevState);
                props.toggleBadge();
                }}>
                {active ? <FaCaretRight className="cartCaret"/> : <FaCaretLeft className="cartCaret"/> }
            </div>
            <button className="checkoutButton">Go to checkout</button>
        </div>
    )
}

export default Cart;
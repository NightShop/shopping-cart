import { useState } from "react";
import Counter from "./Counter";

const ItemCard = (props) => {
    const [count, setCount] = useState(0);


    const handleCount = (co) => {
        setCount(co);
        console.log(co);
    }

    return (
        <div className="itemCard">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4>{props.price} €</h4>
            <Counter handleCount={handleCount} />
            <button className="addToCartButton" onClick={() => console.log("you bought: ", count)}>Add To Cart</button>
        </div>
    )
}

export default ItemCard;
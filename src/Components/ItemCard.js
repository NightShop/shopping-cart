import { useState } from "react";
import Counter from "./Counter";

const ItemCard = (props) => {
    const [count, setCount] = useState(0);


    const handleCount = (count) => {
        setCount(count);
    }

    const increment = () => {
        setCount((prevState) => prevState + 1)
        console.log("im in increment");
    }

    const decrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const addToOrder = () => {
        props.addToCart(props.id, count);
        console.log("im in addtoorder props.is", props.id);
        setCount(0);

    }



    return (
        <div className="itemCard">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4>{props.price} €</h4>
            <Counter handleCount={handleCount} count={count} increment={increment} decrement={decrement}/>
            <button className="addToCartButton" onClick={() => addToOrder()}>Add To Cart</button>
        </div>
    )
}

export default ItemCard;
import CartBadge from "./CartBadge";
import "../Store.css";
import { useState } from "react";
import data from "../itemsData";
import ItemCard from "./ItemCard";
import uniqid from "uniqid";
import Cart from "./Cart";

const Store = () => {
    const [items, setItems] = useState(data.map(item => {
        return {
            ...item,
            "amount": 0,
        }
    }));
    
    const [showBadge, setShowBadge] = useState(true);

    const addToCart = (id, amount) => {
        const tempItem = items.find(item => item.id === id);
        tempItem.amount += parseInt(amount);
        const newArray = items.map((item) => {
            if(item.id === tempItem.id) {
                return tempItem
            }
            return item
        })
        console.log(newArray);
        setItems(newArray);
    }

    function amountToZero (id) {
        console.log(id);
        const tempItem = items.find((item) => item.id === id);
        tempItem.amount = 0;
        const newArray = items.map((item) => {
            if(item.id === tempItem.id) {
                return tempItem
            }
            return item
        })
        setItems(newArray);
    }

    const toggleBadge = () => {
        console.log("badgeeee");
        console.log(showBadge);
        setShowBadge((prevState) => !prevState);
    }


    return (
        <div>
            <CartBadge showBadge={showBadge ? "active" : ""} count={items.reduce((acumulator, item) => {
                return acumulator + item.amount;
            }, 0)} />
            <div className="itemsContainer">
                {items.map(item => {
                    return <ItemCard
                        key={uniqid()}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        description={item.description}
                        addToCart={addToCart} />
                })}
            </div>
            <Cart itemsList={items} amountToZero={amountToZero} toggleBadge={toggleBadge}/>
        </div>
    )
}

export default Store;
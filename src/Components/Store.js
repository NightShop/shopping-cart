import CartBadge from "./CartBadge";
import "../Store.css";
import { useState } from "react";
import data from "../itemsData";
import ItemCard from "./ItemCard";
import uniqid from "uniqid";

const Store = () => {
    const [items, setItem] = useState(data);

    return (
        <div>
            <CartBadge count={data.length} />
            <div className="itemsContainer">
                {items.map(item => {
                    return <ItemCard 
                    key={uniqid()} 
                    name={item.name} 
                    price={item.price} 
                    description={item.description} />
                })}
            </div>
        </div>
    )
}

export default Store;
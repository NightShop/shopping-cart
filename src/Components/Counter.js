import { useEffect, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Counter = (props) => {
    const [count, setCounter] = useState(0);
    const handleCount = props.handleCount;
    useEffect(() => {
        handleCount(count);
    }, [count]);
    return (
        <div className="counter">
            <div onClick={() => setCounter((prevState) => prevState - 1)}>
                <FaMinusCircle />
            </div>
            <input onChange={e => {
                if (e.target.value >= 0) {
                    setCounter(e.target.value);
                }
            }} value={count} />
            <div onClick={() => setCounter((prevState) => prevState + 1)}>
                <FaPlusCircle />
            </div>
        </div>
    )
}

export default Counter;
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const Counter = (props) => {
    
    return (
        <div className="counter">
            <div onClick={props.decrement}>
                <FaMinusCircle />
            </div>
            <input onChange={e => {
                if (e.target.value >= 0) {
                    props.handleCount(e.target.value);
                }
            }} value={props.count} />
            <div onClick={props.increment}>
                <FaPlusCircle />
            </div>
        </div>
    )
}

export default Counter;
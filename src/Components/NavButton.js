import {useEffect} from "react";


const NavButton = (props) => {
    useEffect(() => console.log(props));
    return (
        <button>{props.name}</button>
    )
}

export default NavButton;
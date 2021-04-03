import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navLinks">
            <NavLink activeClassName="active" exact to="/" name="Home">
                <NavButton name="Home"/>
            </NavLink>
            <NavLink activeClassName="active" to="/store" name="Store">
                <NavButton name="Store" />
            </NavLink>
            </div>
        </div>
    )
}

export default NavBar;
import React from "react";
import {NavLink} from 'react-router-dom';
import "./index.css";

const Menu = () => {
    return(
        <>
            <div className = "menu-div">
                <NavLink exact to = "/" activeClassName = "active_class"
                 className = "navlink" >Home</NavLink>
                <NavLink to = "/contact" activeClassName = "active_class"
                 className = "navlink" >Contact Us</NavLink>
                <NavLink to = "/about" activeClassName = "active_class"
                 className = "navlink" >About Us</NavLink>
                 <NavLink to = "/user/Dhiman" activeClassName = "active_class"
                 className = "navlink" >User</NavLink>
            </div>
        </>
    )
}

export default Menu;
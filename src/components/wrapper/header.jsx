import React from "react";
import logo from "./../../assets/react.svg";
import { NavLink } from "react-router-dom";

//
function Header() {
    return(
        <header>
            <img src={logo} id="logo"/>
            <h1><a href="index.html">Skillsoft Weight Tracker</a></h1>
            <nav>
                <ul>
                    <li><NavLink to="/">home</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/employees">Employees</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};
//
export default Header;
import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <NavLink to="/" ><li>Home</li></NavLink>
                    <NavLink to="/About" ><li>About</li></NavLink>
                    <NavLink to="/Form" ><li>Form</li></NavLink>
                    <NavLink to="/IncreDecre" ><li>IncreDecre</li></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
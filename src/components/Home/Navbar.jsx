import React from "react";
import './Navbar.styles.css'

const Navbar = ()=>{
    let navItems = ['Home', 'About', 'Contact']
    return(
        <nav>
            <div className="logo">
                todo<span>List</span>
            </div>

            <ul className="nav-list">
                {navItems.map((items, index)=>{
                    return(
                        <li className="nav-lsit-items" key={index}>{items}</li>
                    )
                })}
            </ul>

            <div className="auth-btn">
            <div className="sign-up">
                Sign Up
            </div>
            <div className="sign-in">
                Sign In
            </div>
            </div>
        </nav>
    )
}

export default Navbar;
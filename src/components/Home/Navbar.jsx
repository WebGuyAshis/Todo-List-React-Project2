import React from "react";
import './Navbar.styles.css'
import { Link } from "react-router-dom";

const Navbar = ()=>{
    return(
        <nav>
            <div className="logo">
                todo<span>List</span>
            </div>

            <div className="nav-list">
                <Link className="nav-list-item" to='/'>Home</Link>
                <Link className="nav-list-item" to='/dashboard'>Dashboard</Link>
                <Link className="nav-list-item" to='/'>About</Link>
                <Link className="nav-list-item" to='/'>Contact</Link>

            </div>

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
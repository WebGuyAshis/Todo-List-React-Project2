import React from "react";
import './DashNav.styles.css'
import logoDash from '../../assets/images/logoDash.png'
import { Link } from "react-router-dom";
import userImg from '../../assets/images/userImg.png'

const DashNav = ()=>{
    return (
        <div className="dash-nav">
            {/* Dashboard Logo */}
            <div className="dash-logo">
                <img src={logoDash} alt="" />
                todo<span>List</span>
            </div>

            {/* Dash/Tasks Toggler */}
            <div className="dash-tasks-togg">
                <Link className="dash-tog-btn dash-btn" to='/tasksDash'>Dashboard</Link>
                <Link className="dash-tog-btn tasks-btn active-toggle" to='/listTasks'>Tasks</Link>
            </div>

            <div className="user-account">
                <div className="user-img">
                <img className="user-img" src={userImg} alt="" />
                </div>
                <span className="user-name">Hi, Ashis</span>
            </div>
        </div>
    )
}

export default DashNav;
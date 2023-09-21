import React from "react";
import './UserAccount.styles.css'
import userImg from '../../../assets/images/userImg.png'
import { Link } from "react-router-dom";

const UserAccount = () =>{
    return(
        <div className="user-account-container">
            <div className="user-image">
                <img src={userImg} alt="" />
            </div>
            <div className="user-profile-name">
                    Hi, Ashis
            </div>
            <div className="notification-container">
                <div className="notification-heading">
                    Notifications 
                </div>
                <div className="notification-box">
                    <div className="notifications">
                        <h5>Doc's Appointment</h5>
                        <p>21st August, 7:00 AM</p>
                    </div>
                    <div className="notifications">
                    <h5>Set Alert to See</h5>
                        <p>21st August, 7:00 AM</p>
                    </div>
                    <div className="notifications">
                    <h5>Set Alert to See</h5>
                        <p>21st August, 7:00 AM</p>
                    </div>
                    
                </div>
            </div>

            <Link className="logout" to='/'>Logout</Link>
        </div>
    )
}

export default UserAccount;
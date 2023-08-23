import React from "react";
import './UserAccount.styles.css'
import userImg from '../../assets/images/userImg.png'
import { Link } from "react-router-dom";

const UserAccount = () =>{
    return(
        <div className="user-account-container light-glass">
            <div className="user-image">
                <img src={userImg} alt="" />
            </div>
            <div className="user-profile-name light-glass">
                    Hi, Ashis
            </div>
            <div className="notification-container">
                <div class="notification-heading">
                    Notifications 
                </div>
                <div className="notification-box">
                    <div className="notifications">

                    </div>
                    <div className="notifications">
                        
                    </div>
                    <div className="notifications">
                        
                    </div>
                    
                </div>
            </div>

            <Link className="logout" to='/'>Logout</Link>
        </div>
    )
}

export default UserAccount;
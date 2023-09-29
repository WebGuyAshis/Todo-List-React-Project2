import React, { useContext } from "react";
import "./UserAccount.styles.css";
import userImg from "../../../assets/images/userImg.png";
import { Link } from "react-router-dom";
import { FetchedContext } from "../../../App";

const UserAccount = () => {
  const { tasks } = useContext(FetchedContext);

  return (
    <div className="user-account-container">
      <div className="user-image">
        <img src={userImg} alt="" />
      </div>
      <div className="user-profile-name">Hi, Ashis</div>
      <div className="notification-container">
        <div className="notification-heading">Notifications</div>
        <div className="notification-box">
          {tasks
            .filter((task) => task.alert === true)
            .map((task, index) => {
              return (
                <div className="notifications" key={index}>
                  <h5>{task.title}</h5>
                  <p>
                    {task.date}, {task.time}
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <Link className="logout" to="/">
        Logout
      </Link>
    </div>
  );
};

export default UserAccount;

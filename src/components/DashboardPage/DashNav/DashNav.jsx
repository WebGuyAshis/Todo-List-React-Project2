import React, { useContext } from "react";
import "./DashNav.styles.css";
import logoDash from "../../../assets/images/logoDash.png";
import userImg from "../../../assets/images/userImg.png";
import { DashContext } from "../DashboardPage";

const DashNav = () => {
  const dashClick = ()=>{
    setIsDash(true)
    console.log(isDash);
  }
  const taskClick = ()=>{
    setIsDash(false)
    console.log(isDash);

  }
  const {isDash, setIsDash} = useContext(DashContext);
  return (
    <div className="dash-nav">
      {/* Dashboard Logo */}
      <div className="dash-logo">
        <img src={logoDash} alt="" />
        todo<span>List</span>
      </div>

      {/* Dash/Tasks Toggler */}
      <div className="dash-tasks-togg light-glass">
        <div className={`dash-tog-btn dash-btn ${isDash?"active-toggle" : ""}`} onClick={dashClick}>
          Dashboard
        </div>
        <div className={`dash-tog-btn tasks-btn ${isDash? "": "active-toggle"}`} onClick={taskClick} >
          Tasks
        </div>
      </div>

      <div className="user-account-name light-glass">
        <div className="user-img">
          <img className="user-img" src={userImg} alt="" />
        </div>
        <span className="user-name">Hi, Ashis</span>
      </div>
    </div>
  );
};

export default DashNav;

import React, { useState, createContext, useContext } from "react";
import "./DashboardPage.styles.css";
import DashNav from "./DashNav";
import DashboardContainer from "./DashboardContainer";
import TasksContainer from "./TasksContainer";
import UserAccount from "./UserAccount";
import { FetchedContext } from "../../App";
import userImg from "../../assets/images/userImg.png";
import { Link } from "react-router-dom";

const DashContext = createContext();

const DashboardPage = () => {
  // const [page, setPage] = useState(<DashboardContainer/>)
  const [isDash, setIsDash] = useState(true);
  const { openUserAccount, setOpenUserAccount, tasks } =
    useContext(FetchedContext);

  return (
    <>
      <DashContext.Provider value={{ isDash, setIsDash }}>
        <div className="dashboard-page">
          <DashNav />

          <div className="dash-container-content">
            {isDash ? <DashboardContainer /> : <TasksContainer />}
            <UserAccount />
          </div>
        </div>
      </DashContext.Provider>

      {openUserAccount && (
        <div
          className="user-box-background"
          onClick={() => {
            setOpenUserAccount(!openUserAccount);
          }}
        >
          <div className="user-account-container" id="user-account">
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
        </div>
      )}
    </>
  );
};

export { DashContext };
export default DashboardPage;

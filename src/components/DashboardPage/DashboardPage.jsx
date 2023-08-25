import React from "react";
import './DashboardPage.styles.css'
import DashNav from "./DashNav/DashNav";
import DashUtils from "./DashUtils/DashUtils";
import TasksContainer from "./TasksContainer/TasksContainer";
import UserAccount from "./UserAccount";

const DashboardPage = () =>{
    return(
        <div className="dashboard-page"> 
            <DashNav/>
            <DashUtils/>
            <TasksContainer/>
            <UserAccount/>
        </div>
    )
}

export default DashboardPage;
import React from "react";
import './DashboardPage.styles.css'
import DashNav from "./DashNav";
import DashUtils from "./DashUtils";
import TasksContainer from "./TasksContainer";

const DashboardPage = () =>{
    return(
        <div className="dashboard-page"> 
            <DashNav/>
            <DashUtils/>
            <TasksContainer/>
        </div>
    )
}

export default DashboardPage;
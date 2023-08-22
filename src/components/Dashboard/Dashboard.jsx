import React from "react";
import './Dashboard.styles.css'
import DashNav from "./DashNav";
import DashUtils from "./DashUtils";

const Dashboard = () =>{
    return(
        <div className="dashboard-container"> 
            <DashNav/>
            <DashUtils/>
        </div>
    )
}

export default Dashboard;
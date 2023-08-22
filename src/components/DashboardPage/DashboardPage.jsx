import React from "react";
import './DashboardPage.styles.css'
import DashNav from "./DashNav";
import DashUtils from "./DashUtils";

const DashboardPage = () =>{
    return(
        <div className="dashboard-page"> 
            <DashNav/>
            <DashUtils/>
        </div>
    )
}

export default DashboardPage;
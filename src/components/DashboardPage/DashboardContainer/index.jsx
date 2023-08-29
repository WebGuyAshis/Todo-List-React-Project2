import React from "react";
import './dashboardContainer.styles.css'
import PieChartComponent from './Pie'

const DashboardContainer =()=>{
    console.log("Inside dashboard Container ");
    return(
        <div className="dashboard-container light-glass" id="dash-container">
            <PieChartComponent chartID="pie-chart" />
        </div>
    )
}

export default DashboardContainer;
import React from "react";
import "./dashboardContainer.styles.css";
import PieChartComponent from "./Pie";

const DashboardContainer = () => {
  console.log("Inside dashboard Container ");
  return (
    <div className="dashboard-container light-glass" id="dash-container">
      <div className="dash-heading">
        <h2>Dashboard</h2>
        <p>See your overall Performance</p>
      </div>
      <div className="status-container">
        <div className="total-tasks task-status">
            <h1>200</h1>
            <p>Total Tasks</p>
        </div>
        <div className="pending-tasks task-status">
        <h1>100</h1>
            <p>Pending Tasks</p>
        </div>
        <div className="completed-tasks task-status">
        <h1>100</h1>
            <p>Complete Tasks</p>
        </div>
      </div>
      <h2 className="chart-heading">
        Performance
      </h2>
      <PieChartComponent />
    </div>
  );
};

export default DashboardContainer;

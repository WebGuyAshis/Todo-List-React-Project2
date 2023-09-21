import React, { useContext } from "react";
import "./dashboardContainer.styles.css";
import PieChartComponent from "./Pie";
import { FetchedContext } from "../../../App";

const DashboardContainer = () => {
  const {tasks, pending, completed} = useContext(FetchedContext);

  console.log("Inside dashboard Container ");
  return (
    <div className="dashboard-container" id="dash-container">
      <div className="dash-heading">
        <h2>Dashboard</h2>
        <p>See your overall Performance</p>
      </div>
      <div className="status-container">
        <div className="total-tasks task-status">
            <h1>{tasks?tasks.length:0}</h1>
            <p>Total Tasks</p>
        </div>
        <div className="pending-tasks task-status">
        <h1>{pending.length}</h1>
            <p>Pending Tasks</p>
        </div>
        <div className="completed-tasks task-status">
        <h1>{completed.length}</h1>
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

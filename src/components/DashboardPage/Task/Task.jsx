import React from "react";
import "./Task.styles.css";

const Task = () => {
  return (
    <div className="task">
      <div className="task-description">
        <input type="checkbox" />
        <div className="task-desc">
          <div className="task-heading">Complete React Project</div>

          <span className="time-left">
            <b>Time Left:</b> 12hr
          </span>
        </div>
      </div>
      <div className="task-category">Personal</div>
      <div className="destroy-task">Delete</div>
    </div>
  );
};

export default Task;

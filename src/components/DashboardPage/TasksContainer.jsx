import React from "react";
import "./TasksContainer.styles.css";
import { Link } from "react-router-dom";
import plus from '../../assets/svg/plus.svg'

const TasksContainer = () => {
  return (
    <div className="tasks-main-container">
        <div className="tasks-category">
            <Link className="tasks-category-item active-item" to="/">
                All
            </Link>
            <Link className="tasks-category-item" to="/">
                Personal
            </Link>
            <Link className="tasks-category-item" to="/">
                Work
            </Link>
            <Link className="tasks-category-item" to="/">
                School
            </Link>
            <Link className="tasks-category-item" to="/">
                Events
            </Link>
        </div>
        <div className="container-header">
            <div className="heading">
                <div className="heading-tasks">Tasks</div>
                <div className="date">August 23, 2023</div>
            </div>

            <div className="pen-comp-toggler">
                <Link className="pending-btn active-item" to="/">
                    Pending
                </Link>
                <Link className="complete-btn" to="/">
                    Completed
                </Link>
            </div>
        </div>
        <div className="search-container">
            <input type="text" placeholder="Search"  className="search-bar"/>
            <span>Search</span>
        </div>

        <div className="tasks-container">
            
          <div className="add-tasks">
            <img src={plus} alt="" />
          </div>
        </div>
    </div>
  );
};

export default TasksContainer;

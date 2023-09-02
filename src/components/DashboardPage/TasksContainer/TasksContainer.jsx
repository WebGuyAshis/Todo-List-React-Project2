import React, { useState, useContext } from "react";
import "./TasksContainer.styles.css";
import { Link } from "react-router-dom";
import plus from "../../../assets/svg/plus.svg";
import Task from "../Task";
import { FetchedContext } from "../../../App";


const TasksContainer = () => {
  const {tasks,setTasks, completed,pending} = useContext(FetchedContext);

  // const addTask = ()=>{
  //   console.log("Clicked Add Btn");
  //   let newTask = {
  //     title: 'I am AShis!!'
  //   }
  //   setTasks(()=>{
  //     let updatedTasks = [...tasks, newTask];

  //     localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  //     return updatedTasks;
  //   })
  // }
  const addTask = () => {
    console.log("Clicked Add Btn");
    const newTask = {
      id: Math.random(), // Generate a unique ID for the new task
      title: 'I am Ashis!!',
      completed: false // You may want to specify the completion status
    };
  
    // Create a new array of tasks with the new task
    const updatedTasks = [newTask, ...tasks];
  
    // Update the tasks state
    setTasks(updatedTasks);
  
    // Update localStorage with the updatedTasks
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  

  const [isCompletedTab, setIsCompletedTab] = useState(false);
  const showPending = () => {
    setIsCompletedTab(false);
  };

  const showCompleted = () => {
    setIsCompletedTab(true);
  };
  return (
    <div className="tasks-main-container light-glass">
      <div className="tasks-category light-glass">
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
          Events
        </Link>
      </div>
      <div className="container-header">
        <div className="heading">
          <div className="heading-tasks">Tasks</div>
          <div className="date">August 23, 2023</div>
        </div>

        <div className="pen-comp-toggler light-glass">
        <div
            className={`pending-btn ${isCompletedTab ? "" : "active-item"}`}
            onClick={showPending}
          >
            Pending
          </div>
          <div
            className={`complete-btn ${isCompletedTab ? "active-item" : ""}`}
            onClick={showCompleted}
          >
            Completed
          </div>
        </div>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-bar" />
        <span>Search</span>
      </div>

      <div className="tasks-container">
        {/* Conditional rendering for pending and completed tasks */}
        {isCompletedTab
          ? completed.map((task)=>{
            return <Task key={task.id} value={task}/>
          })
          : pending.map((task)=>{
            return <Task key={task.id} value={task}/>
          })
        }
      </div>
      <div className="add-tasks" onClick={addTask}>
        <img src={plus} alt="" />
      </div>
    </div>
  );
};

export default TasksContainer;
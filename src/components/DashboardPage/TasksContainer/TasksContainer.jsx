import React, { useState, useContext, useEffect } from "react";
import "./TasksContainer.styles.css";
import { Link } from "react-router-dom";
import plus from "../../../assets/svg/plus.svg";
import Task from "./Task";
import { FetchedContext } from "../../../App";
import AddTaskBox from "./AddTaskBox";
import EditBox from "./EditBox";


const TasksContainer = () => {
  const [taskBox, setTaskBox] = useState(false);
  const [isCompletedTab, setIsCompletedTab] = useState(false);
  const {tasks,setTasks, completed,pending} = useContext(FetchedContext);
  const showPending = () => {
    setIsCompletedTab(false);
  };

  const showCompleted = () => {
    setIsCompletedTab(true);
  };

  const [editBox, setEditBox] = useState(false);
  const [editData, setEditData] = useState(null);

  const editTaskBox= (id)=>{
    setEditBox(!editBox);
    console.log("Open Task Box,", id);
    const editableTask = tasks.find((task) => task.id === id);
    setEditData(editableTask);
  }

  useEffect(()=>{
    console.log("Editable Task Data:", editData);
    if(editData){
      setEditBox(true)
    }
  }, [editData])
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
          Events
        </Link>
      </div>
      <div className="container-header">
        <div className="heading">
          <div className="heading-tasks">Tasks</div>
          <div className="date">August 23, 2023</div>
        </div>

        <div className="pen-comp-toggler">
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
            return <Task key={task.id} value={task}  editTaskBox = {editTaskBox} />
          })
          : pending.map((task)=>{
            return <Task key={task.id} value={task}  editTaskBox = {editTaskBox}/>
          })
        }
      </div>
      <div className="add-tasks" onClick={()=>{setTaskBox(!taskBox)}}>
        <img src={plus} alt="" />
      </div>

      {/* <AddTaskBox/> */}
      {taskBox && <AddTaskBox taskBox={taskBox} setTaskBox={setTaskBox}/>}
      {editBox && <EditBox editData={editData} editBox={editBox} setEditBox={setEditBox}/> }
    </div>
  );
};

export default TasksContainer;

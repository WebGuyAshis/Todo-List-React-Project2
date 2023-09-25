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
  const { tasks, setTasks, completed, pending } = useContext(FetchedContext);

  const showPending = () => {
    setIsCompletedTab(false);
  };

  const showCompleted = () => {
    setIsCompletedTab(true);
  };

  const [editBox, setEditBox] = useState(false);
  const [editData, setEditData] = useState({
    id: "",
    title: "",
    date: "",
    time: "",
    desc: "",
    category: "",
    alert: false,
  });

  const editTaskBox = (id) => {
    console.log("Value of editbox", editBox);
    setEditBox(!editBox);
    console.log("Value of after editbox", editBox);
// Send A Dummy Request
    console.log("Open Task Box,", id);
    const editableTask = tasks.find((task) => task.id === id);
    setEditData(editableTask);
  };

  // const [editTaskTitle, setEditTaskTitle] = useState(editData.title); // Initialize with editData if available
  // const [editTaskDate, setEditTaskDate] = useState(editData.date);
  // const [editTaskTime, setEditTaskTime] = useState(editData.time);
  // const [editTaskDesc, setEditTaskDesc] = useState(editData.desc);
  // const [editTaskCategory, setEditTaskCategory] = useState(editData.category);
  // const [editEnableAlert, setEditEnableAlert] = useState(editData.alert);

  // const editTask = (e,id)=>{
  //   e.preventDefault();
  //   console.log("Lets Edit Task of:", id);
  // }
  const editBoxProps = {
    // editTask,
    editData,
    setEditData,
    editBox,
    setEditBox,
    // editTaskTitle,
    // setEditTaskTitle,
    // editTaskDate,
    // setEditTaskDate,
    // editTaskTime,
    // setEditTaskTime,
    // editTaskDesc,
    // setEditTaskDesc,
    // editTaskCategory,
    // setEditTaskCategory,
    // editEnableAlert,
    // setEditEnableAlert,
  };

  // useEffect(() => {
  //   console.log("Editable Task Data:", editData);
  //   // if (editData) {
  //     setEditBox(true);
  //   // }
  // }, [editData]);
  const [searchInput, setSearcInput] = useState('');
  const [searchedTask, setSearchedTask] = useState(null)
  
  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Handling Search, value:', searchInput);
  
    const regex = new RegExp(searchInput, 'i');
    const searchedTasks = tasks.filter((task) => regex.exec(task.title));
  
    console.log('Searched Tasks:', searchedTasks);
    setSearchedTask(searchedTasks)
  };

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
      <form className="search-container" onSubmit={handleSearch}>
        <input type="text" placeholder="Search"  value={searchInput} className="search-bar" name="searchbox" onChange={(e)=>{setSearcInput(e.target.value)}}/>
        <input type="submit" value="Search" className="text-search-btn"/>
      </form>

      {/* <div className="tasks-container">
            {tasks.map((task)=>{
              if(task.completed === isCompletedTab){
                return <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              }
              return null;
            })}
      </div> */}
      <div className="tasks-container">
        {searchedTask?
        searchedTask.map((task)=>{
          return <Task key={task.id} value={task} editTaskBox={editTaskBox} />
        }):tasks
          .filter((task) => task.completed === isCompletedTab)
          .map((task) => (
              <Task key={task.id} value={task} editTaskBox={editTaskBox} />
          ))}
      </div>
      <div
        className="add-tasks"
        onClick={() => {
          setTaskBox(!taskBox);
        }}
      >
        <img src={plus} alt="" />
      </div>

      {/* <AddTaskBox/> */}
      {taskBox && <AddTaskBox taskBox={taskBox} setTaskBox={setTaskBox} />}
      {console.log("Value of Editbox befor Logging!", editBox)}
      {editBox && <EditBox {...editBoxProps} />}
    </div>
  );
};

export default TasksContainer;

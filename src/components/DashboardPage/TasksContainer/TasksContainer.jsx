import React, { useState, useContext } from "react";
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

  // Accessing Data Compming from provider 
  const { tasks, setTasks } =useContext(FetchedContext);

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
    console.log("Open Task Box,", id);
    const editableTask = tasks.find((task) => task.id === id);
    setEditData(editableTask);
  };

  const editBoxProps = {
    editData,
    setEditData,
    editBox,
    setEditBox,
  };

  const [searchInput, setSearchInput] = useState("");
  const [searchedTask, setSearchedTask] = useState(null);

  const handleSearch = (e) => {
    let search = e.target.value;
    // e.preventDefault();
    console.log("Handling Search, value:", search);
    if (search === "") {
      console.log("Search Field is empty");
      setSearchedTask(null);
      setTasks(tasks);
      // return;
    } else {
      const regex = new RegExp(search, "i");
      const searchedTasks = tasks.filter((task) => regex.exec(task.title));

      console.log("Searched Tasks:", searchedTasks);
      setSearchedTask(searchedTasks);
      // setTasks(searchedTasks)
    }
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
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          className="search-bar"
          name="searchbox"
          onChange={(e) => {
            setSearchInput(e.target.value);
            handleSearch(e);
          }}
        />
        <input value="Search" type="button" className="text-search-btn" />
      </div>
      {/* Rendering Task Component and Handling Search Also */}
      <div className="tasks-container">
        {searchedTask !== null
          ? searchedTask.map((task) => {
              return (
                <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              );
            })
          : tasks
              .filter((task) => task.completed === isCompletedTab)
              .map((task) => {
                return (
                  <Task key={task.id} value={task} editTaskBox={editTaskBox} />
                );
              })}
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

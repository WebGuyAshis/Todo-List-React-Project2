import React, { useState, useContext } from "react";
import "./TasksContainer.styles.css";
import plus from "../../../assets/svg/plus.svg";
import Task from "./Task";
import { FetchedContext } from "../../../App";
import AddTaskBox from "./AddTaskBox";
import EditBox from "./EditBox";
import Description from "./Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const TasksContainer = () => {
  const [taskBox, setTaskBox] = useState(false);
  // const [isCompletedTab, setIsCompletedTab] = useState(false);
  const [taskStatus, setTaskStaus] = useState("all");

  // Accessing Data Compming from provider
  const { tasks, isDescriptionOpen } = useContext(FetchedContext);

  // setting up Filter Task Category for work events school

  const [filterTaskCategory, setFilterTaskCategory] = useState("all");
  const [taskCategoryBox, setTaskCategoryBox] = useState(false);
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
    setEditBox(!editBox);
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
    if (search === "") {
      setSearchedTask(null);
      setTaskStaus("all");
      setFilterTaskCategory("all");
      // return;
    } else {
      const regex = new RegExp(search, "i");
      const searchedTasks = tasks.filter((task) => regex.exec(task.title));

      setSearchedTask(searchedTasks);
      setTaskStaus("all");
      setFilterTaskCategory("all");
      // setTasks(searchedTasks)
    }
  };

  let date = new Date();
  let monthsName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getDate();
  let monthIndex = date.getMonth();
  let month = monthsName[monthIndex];
  let year = date.getFullYear();

  const settingCategory = (category) => {
    setFilterTaskCategory(category);
    setSearchedTask(null);
    setTaskStaus("all");
  };

  const settingStatus = (stat) => {
    setTaskStaus(stat);
    setFilterTaskCategory("all");
    setSearchedTask(null);
  };

  return (
    <div className="tasks-main-container">
      <FontAwesomeIcon
        icon={faEllipsisVertical}
        className="three-dot-menu"
        onClick={() => {
          setTaskCategoryBox(true);
        }}
      />
      {/* Open Category box */}
      {taskCategoryBox && (
        <div
          className="task-category-background"
          onClick={() => {
            setTaskCategoryBox(false);
          }}
        >
          <div className="tasks-category">
            <div
              className={`tasks-category-item ${
                filterTaskCategory === "all" ? "active-item" : ""
              }`}
              onClick={() => {
                settingCategory("all");
              }}
            >
              All
            </div>
            <div
              className={`tasks-category-item ${
                filterTaskCategory === "Personal" ? "active-item" : ""
              }`}
              onClick={() => {
                settingCategory("Personal");
              }}
            >
              Personal
            </div>
            <div
              className={`tasks-category-item ${
                filterTaskCategory === "Work" ? "active-item" : ""
              }`}
              onClick={() => {
                settingCategory("Work");
              }}
            >
              Work
            </div>
            <div
              className={`tasks-category-item ${
                filterTaskCategory === "School" ? "active-item" : ""
              }`}
              onClick={() => {
                settingCategory("School");
              }}
            >
              School
            </div>
            <div
              className={`tasks-category-item ${
                filterTaskCategory === "Events" ? "active-item" : ""
              }`}
              onClick={() => {
                settingCategory("Events");
              }}
            >
              Events
            </div>
          </div>
        </div>
      )}

      <div className="heading">
        <div className="heading-tasks">Tasks</div>
        <div className="date">
          {month} {day}, {year}
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
      <div className="container-header">
        <div className="pen-comp-toggler">
          <div
            className={`all-btn ${taskStatus === "all" ? "active-item" : ""}`}
            onClick={() => {
              settingStatus("all");
            }}
          >
            All
          </div>
          <div
            className={`pending-btn ${
              taskStatus === "pending" ? "active-item" : ""
            }`}
            onClick={() => {
              settingStatus("pending");
            }}
          >
            Pending
          </div>
          <div
            className={`complete-btn ${
              taskStatus === "completed" ? "active-item" : ""
            }`}
            onClick={() => {
              settingStatus("completed");
            }}
          >
            Completed
          </div>
        </div>
      </div>

      {/* Rendering Task Component and Handling Search Also */}
      <div className="tasks-container">

        {searchedTask
          ? searchedTask.map((task) => (
              <Task key={task.id} value={task} editTaskBox={editTaskBox} />
            ))
          : taskStatus === "pending"
          ? tasks
              .filter((task) => taskStatus === "pending" && !task.completed)
              .map((task) => (
                <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              ))
          : taskStatus === "completed"
          ? tasks
              .filter((task) => taskStatus === "completed" && task.completed)
              .map((task) => (
                <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              ))
          : filterTaskCategory !== "all"
          ? tasks
              .filter((task) => task.category === filterTaskCategory)
              .map((task) => (
                <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              ))
          : tasks.map((task) => (
              <Task key={task.id} value={task} editTaskBox={editTaskBox} />
            ))}
      </div>
{/* Add Task Button */}
      <div
        className="add-tasks"
        onClick={() => {
          setTaskBox(!taskBox);
        }}
      >
        <img src={plus} alt="" />
      </div>

      {/* Rendering Boxes */}
      {taskBox && <AddTaskBox taskBox={taskBox} setTaskBox={setTaskBox} />}
      {editBox && <EditBox {...editBoxProps} />}
      {isDescriptionOpen && <Description editTaskBox={editTaskBox} />}
    </div>
  );
};

export default TasksContainer;

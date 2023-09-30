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
  // Checking Active Criteria for tasks render
  // const [isSearchActive, setIsSearchActive] = useState(false);
  // const [isTaskCategoryActive, setisTaskCategoryActive] = useState(false);
  // const [isTaskCompleteStatusActive, SetIsTaskCompleteStatusActive] =
  //   useState(false);

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
      setTaskStaus("all");
      setFilterTaskCategory("all");
      // return;
    } else {
      const regex = new RegExp(search, "i");
      const searchedTasks = tasks.filter((task) => regex.exec(task.title));

      console.log("Searched Tasks:", searchedTasks);
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

  // if(isSearchActive){

  // }

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

      {/* <div className="tasks-category">
        <div
          className={`tasks-category-item ${
            filterTaskCategory === "all" ? "active-item" : ""
          }`}
          onClick={() => {
            setFilterTaskCategory("all");
          }}
        >
          All
        </div>
        <div
          className={`tasks-category-item ${
            filterTaskCategory === "Personal" ? "active-item" : ""
          }`}
          onClick={() => {
            setFilterTaskCategory("Personal");
          }}
        >
          Personal
        </div>
        <div
          className={`tasks-category-item ${
            filterTaskCategory === "Work" ? "active-item" : ""
          }`}
          onClick={() => {
            setFilterTaskCategory("Work");
          }}
        >
          Work
        </div>
        <div
          className={`tasks-category-item ${
            filterTaskCategory === "School" ? "active-item" : ""
          }`}
          onClick={() => {
            setFilterTaskCategory("School");
          }}
        >
          School
        </div>
        <div
          className={`tasks-category-item ${
            filterTaskCategory === "Events" ? "active-item" : ""
          }`}
          onClick={() => {
            setFilterTaskCategory("Events");
          }}
        >
          Events
        </div>
      </div> */}
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
              console.log("Status:", taskStatus);
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
              console.log("Status:", taskStatus);
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
              console.log("Status:", taskStatus);
              settingStatus("completed");
            }}
          >
            Completed
          </div>
        </div>
      </div>

      {/* Rendering Task Component and Handling Search Also */}
      <div className="tasks-container">
        {/* {searchedTask !== null
          ? searchedTask.map((task) => {
              return (
                <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              );
            })
          : filterTaskCategory === "all"
          ? tasks
              .filter((task) => task.completed === isCompletedTab)
              .map((task) => {
                return (
                  <Task key={task.id} value={task} editTaskBox={editTaskBox} />
                );
              })
          : filterTaskCategory === "Personal"
          ? tasks
              .filter((task) => task.category === "Personal" || !task.category)
              .map((task) => {
                return (
                  <Task key={task.id} value={task} editTaskBox={editTaskBox} />
                );
              })
          : filterTaskCategory
          ? tasks
              .filter((task) => task.category === filterTaskCategory)
              .map((task) => {
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
              })} */}

        {/* {tasks && taskStatus === "pending"
          ? tasks
              .filter((task) => !task.completed)
              .map((task) => {
                return (
                  <Task key={task.id} value={task} editTaskBox={editTaskBox} />
                );
              })
          : tasks && taskStatus === "completed"
          ? tasks
              .filter((task) => task.completed)
              .map((task) => {
                return (
                  <Task key={task.id} value={task} editTaskBox={editTaskBox} />
                );
              })
          : tasks.map((task) => {
              return (
                <Task key={task.id} value={task} editTaskBox={editTaskBox} />
              );
            })} */}

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
      {isDescriptionOpen && <Description editTaskBox={editTaskBox} />}
    </div>
  );
};

export default TasksContainer;

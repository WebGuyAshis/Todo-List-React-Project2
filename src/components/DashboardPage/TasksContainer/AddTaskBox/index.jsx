import { useContext, useState } from "react";
import "./AddTaskBox.styles.css";
import { FetchedContext } from "../../../../App";

const AddTaskBox = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  const { tasks, setTasks } = useContext(FetchedContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(formattedToday);
  const [taskTime, setTaskTime] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [enableAlert, setEnableAlert] = useState(false);
  
  const addTask = async (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        id: Math.random(),
        title: taskTitle,
        date: taskDate,
        time: taskTime,
        description: taskDesc,
        category: taskCategory,
        alert: enableAlert,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newTask) => {
        console.log("New Task:", newTask);
        const updatedTasks = [newTask, ...tasks];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTasks(updatedTasks)
      });

  };
  return (
    <div className="add-task-container">
      <h3>Create New Task</h3>
      <form action="">
        <div className="task-title">
          <label htmlFor="task-title-input">Task Title</label>
          <input
            id="task-title-input"
            type="text"
            placeholder="Eg. Complete Assignment"
            value={taskTitle}
            onChange={(e) => {
              setTaskTitle(e.target.value);
            }}
          />
        </div>

        <div className="task-input">
          <div className="task-date">
            <label htmlFor="task-date-input">Date</label>
            <input
              type="Date"
              id="task-date-input"
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
            />
          </div>

          <div className="task-time">
            <label htmlFor="task-time-input">Time</label>
            <input
              type="time"
              id="task-time-input"
              onChange={(e) => {
                setTaskTime(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="task-desc">
          <label htmlFor="task-desc-input">Description</label>
          <textarea
            name=""
            id="task-desc-input"
            cols="30"
            rows="10"
            value={taskDesc}
            onChange={(e) => {
              setTaskDesc(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="task-category">
          <div
            className="task-cat"
            onClick={() => {
              setTaskCategory("Personal");
            }}
          >
            Personal
          </div>
          <div
            className="task-cat"
            onClick={() => {
              setTaskCategory("Work");
            }}
          >
            Work
          </div>
          <div
            className="task-cat"
            onClick={() => {
              setTaskCategory("School");
            }}
          >
            School
          </div>
          <div
            className="task-cat"
            onClick={() => {
              setTaskCategory("Events");
            }}
          >
            Events
          </div>
        </div>

        <div className="alert-category">
          <div className="alert-box">{/* Icon and texgt */}</div>
          <div className="alert-options">
            <input type="checkbox" id="alert-on-check" />
            <label htmlFor="alert-on-check">Enable Alert</label>
          </div>
          <div className="alert-options">
            <input type="checkbox" id="alert-off-check" />
            <label htmlFor="alert-off-check">Disable Alert</label>
          </div>
        </div>
        <button onClick={addTask}>Create Task</button>
      </form>
    </div>
  );
};

export default AddTaskBox;

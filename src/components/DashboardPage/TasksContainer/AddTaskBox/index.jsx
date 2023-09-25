import { useContext, useState } from "react";
import "./AddTaskBox.styles.css";
import { FetchedContext } from "../../../../App";

const AddTaskBox = ({ taskBox, setTaskBox }) => {
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
        title: taskTitle,
        date: taskDate,
        time: taskTime,
        description: taskDesc,
        category: taskCategory,
        completed:false,
        alert: enableAlert,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((newTask) => {
        newTask.id = Date.now();
        console.log("New Task:", newTask);
        const updatedTasks = [newTask, ...tasks];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        setTaskBox(!taskBox);
      });
  };

  return (
    <div className="box-background">
      <div className="add-task-container">
        <h3>Create New Task</h3>
        <form action="" onSubmit={addTask}>
          <div className="task-input">
            <label htmlFor="task-title-input">Task Title</label>
            <input
              id="task-title-input"
              type="text"
              placeholder="Eg. Complete Assignment"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              required
            />
          </div>

          <div className="task-inputDateTime">
            <div className="task-date">
              <label htmlFor="task-date-input">Date</label>
              <input
                type="Date"
                id="task-date-input"
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                required
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
                required
              />
            </div>
          </div>

          <div className="task-input">
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
              required
            ></textarea>
          </div>

          <div className="task-category-input">
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
              <input type="radio" id="alert-on-check" name="alert"  onChange={() => setEnableAlert(true)}/>
              <label htmlFor="alert-on-check">Enable Alert</label>
            </div>

            <div className="alert-options">
              <input type="radio" id="alert-off-check" name="alert" onChange={() => setEnableAlert(false)}/>
              <label htmlFor="alert-off-check">Disable Alert</label>
            </div>
          </div>
          <div className="box-btn">
            <button type="submit" className="create-task-btn">
              Create Task
            </button>
            
            <button
              className="delete-task-btn"
              onClick={() => {
                setTaskBox(!taskBox);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTaskBox;

import { useContext, useState } from "react";
import "./EditBox.styles.css";
import { FetchedContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const EditBox = (props) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  const { tasks, setTasks } = useContext(FetchedContext);
  console.log("Props Received!", props);

  const {
    // editTask,
    editData,
    setEditData,
    editBox,
    setEditBox,
    // // editTaskTitle,
    // setEditTaskTitle,
    // // editTaskDate,
    // setEditTaskDate,
    // // editTaskTime,
    // setEditTaskTime,
    // // editTaskDesc,
    // setEditTaskDesc,
    // // editTaskCategory,
    // setEditTaskCategory,
    // editEnableAlert,
    // setEditEnableAlert,
  } = props;


  const editTask = (e)=>{
    e.preventDefault();
    console.log("Lets Edit Task of:", editData);

    let updatedTasks = tasks.map((task)=>{
      if(task.id === editData.id){
        return editData
      }
      return task;
    })
  // Update localStorage with the updatedTasks array
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  // Retrieve and parse the data from localStorage
  const updatedTasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

  // Update the tasks state with the parsed data
  setTasks(updatedTasksFromLocalStorage);
  setEditBox(!editBox)
  }


  // const [editTaskTitle, setEditTaskTitle] = useState(editData.title || ""); // Initialize with editData if available
  // const [editTaskDate, setEditTaskDate] = useState(editData.date || formattedToday);
  // const [editTaskTime, setEditTaskTime] = useState(editData.time || "");
  // const [editTaskDesc, setEditTaskDesc] = useState(editData.desc || "");
  // const [editTaskCategory, setEditTaskCategory] = useState(editData.category || "");
  // const [editEnableAlert, setEditEnableAlert] = useState(false);

  return (
    <div className="box-background">
      <div className="add-task-container">
        <h3>Edit Your Task</h3>
        <form action="" onSubmit={editTask} className="editBox-form">
          <div className="task-input">
            <label htmlFor="task-title-input">Task Title</label>
            <input
              id="task-title-input"
              type="text"
              placeholder="Eg. Complete Assignment"
              value={editData.title}
              onChange={(e) => {
                setEditData(()=>({...editData, title: e.target.value}));
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
                value={editData.date}
                onChange={(e) => {
                  setEditData(()=>({...editData, date: e.target.value}));
                }}
                required
              />
            </div>

            <div className="task-time">
              <label htmlFor="task-time-input">Time</label>
              <input
                type="time"
                id="task-time-input"
                value={editData.time}
                onChange={(e) => {
                  setEditData(()=>({...editData, time: e.target.value}));
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
              value={editData.desc}
              onChange={(e) => {
                setEditData(()=>({...editData, desc: e.target.value}));
              }}
              required
            ></textarea>
          </div>

          <div className="task-category-input">
            <div
              className="task-cat"
              onClick={() => {
                setEditData(()=>({...editData, category: "Personal"}));
              }}
            >
              Personal
            </div>
            <div
              className="task-cat"
              onClick={() => {
                setEditData(()=>({...editData, category: "Work"}));
              }}
            >
              Work
            </div>
            <div
              className="task-cat"
              onClick={() => {
                setEditData(()=>({...editData, category: "School"}));
              }}
            >
              School
            </div>
            <div
              className="task-cat"
              onClick={() => {
                setEditData(()=>({...editData, category: "Events"}));
              }}
            >
              Events
            </div>
          </div>

          <div className="alert-category">
            <div className="alert-box">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div className="alert-options">
              <input type="radio" id="alert-on-check" name="alert" />
              <label htmlFor="alert-on-check">Enable Alert</label>
            </div>

            <div className="alert-options">
              <input type="radio" id="alert-off-check" name="alert"/>
              <label htmlFor="alert-off-check">Disable Alert</label>
            </div>
          </div>
          <div className="box-btn">
            <button type="submit" className="create-task-btn">
              Save
            </button>
            <button
              className="delete-task-btn"
              onClick={() => {
                setEditBox(!editBox);
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

export default EditBox;

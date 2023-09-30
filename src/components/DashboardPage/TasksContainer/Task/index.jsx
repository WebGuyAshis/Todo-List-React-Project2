import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "./Task.styles.css";
import { FetchedContext } from "../../../../App";

const Task = ({ value, editTaskBox }) => {
  const { deleteTask, tasks, setTasks, notify,showDescription } = useContext(FetchedContext);
  const [isChecked, setIsChecked] = useState(value.completed);
  
// Updating Task Completition
  const handleCheckbox = (id) => {
    setIsChecked(!isChecked);
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        completed:isChecked ,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            task.completed = !task.completed;
            return task;
          }
          return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setTasks(updatedTasks);
        if(isChecked){
          notify("Task Updated Successfully! Task Moved to Pending!", "success")
        }else{
          notify("Task Updated Successfully! Task Moved to Completed!", "success")
        }  
      })
      .catch((err)=>{
        notify("Error Updating Tasks!")
      })
  };

  return (
    <div className="task">
      <div className="task-description">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handleCheckbox(value.id);
          }}
        />
        {/* <input type="checkbox" /> */}
        <div className="task-desc" onClick={() => {
            showDescription(value.id);
          }}>
          <div className="task-heading">{value.title}</div>
          
        </div>
      </div>
      <div className="task-category">
        {value.category ? value.category : "Not Set"}
      </div>
      <div className="edit-del-icons">
        <FontAwesomeIcon
          className="edit-task"
          icon={faPenToSquare}
          onClick={() => {
            editTaskBox(value.id);
          }}
        />
        <FontAwesomeIcon
          className="destroy-task"
          icon={faTrashAlt}
          onClick={() => {
            deleteTask(value.id);
          }}
        />
      </div>
    </div>
  );
};

export default Task;

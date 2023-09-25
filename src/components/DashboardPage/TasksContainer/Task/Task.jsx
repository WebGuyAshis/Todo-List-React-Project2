import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import "./Task.styles.css";
import { FetchedContext } from "../../../../App";

const Task = ({ value, editTaskBox }) => {
  const { deleteTask, tasks, setTasks } = useContext(FetchedContext);
  const [isChecked, setIsChecked] = useState(value.completed);

  const handleCheckbox = (id) => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PATCH",
      body: JSON.stringify({
        title: "foo",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setIsChecked(!isChecked);

        console.log(
          "Change ID of task",
          id,
          "Checked:",
          isChecked,
          "Value.completed:",
          value.completed
        );
        let updatedTasks = tasks.map((task) => {
          if (task.id === id) {
            task.completed = !task.completed;
            return task;
          }

          return task;
        });
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        setInterval(() => {
          setTasks(updatedTasks);
        }, 300);
      });
  };
  // To update the value because react ony initialise it value once and after props change it does not updates the UI so to achieve that we will use useEffect hook
  // useEffect(()=>{
  //   setIsChecked(value.completed)
  // },[value.completed]);

  const openDetails = (e) => {
    console.log("Open Details Box!");
  };

  return (
    <div className="task" onClick={openDetails}>
      <div className="task-description">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            handleCheckbox(value.id);
          }}
        />
        {/* <input type="checkbox" /> */}
        <div className="task-desc">
          <div className="task-heading">{value.title}</div>

          {/* <span className="time-left">
            <b>Time Left:</b> 12hr
          </span> */}
        </div>
      </div>
      <div className="task-category">
        {value.category ? value.category : "Personal"}
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

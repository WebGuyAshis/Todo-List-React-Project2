import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import "./Task.styles.css";

const Task = (props) => {
  const [isChecked, setIsChecked] = useState(props.value.completed);

  const handleCheckbox = ()=>{
    setIsChecked(!isChecked);
  }
  console.log("Props:", props);
  return (
    <div className="task">
      <div className="task-description">
        <input type="checkbox" checked = {isChecked} onChange={handleCheckbox} />
         {/* <input type="checkbox" /> */}
        <div className="task-desc">
          <div className="task-heading">{props.value.title}</div>

          {/* <span className="time-left">
            <b>Time Left:</b> 12hr
          </span> */}
        </div>
      </div>
      <div className="task-category">Personal</div>
      <div className="destroy-task">
      <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#ffffff" }} />
      </div>
    </div>
  );
};

export default Task;

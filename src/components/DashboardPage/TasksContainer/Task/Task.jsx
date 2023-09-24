import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import {faPenToSquare} from '@fortawesome/free-regular-svg-icons'
import "./Task.styles.css";
import { FetchedContext } from "../../../../App";



const Task = ({value,editTaskBox}) => {
  const {deleteTask} = useContext(FetchedContext);
  const [isChecked, setIsChecked] = useState(value.completed);

  const handleCheckbox = ()=>{
    setIsChecked(!isChecked);
  }
  // To update the value because react ony initialise it value once and after props change it does not updates the UI so to achieve that we will use useEffect hook
  useEffect(()=>{
    setIsChecked(value.completed)
  },[value.completed]);

  const openDetails = (e)=>{
    console.log("Open Details Box!");
  }

  return (
    <div className="task" onClick={openDetails}>
      <div className="task-description">
        <input type="checkbox" checked = {isChecked} onChange={handleCheckbox}/>
         {/* <input type="checkbox" /> */}
        <div className="task-desc">
          <div className="task-heading">{value.title}</div>

          {/* <span className="time-left">
            <b>Time Left:</b> 12hr
          </span> */}
        </div>
      </div>
      <div className="task-category">Personal</div>
      <div className="edit-del-icons">
      <FontAwesomeIcon className="edit-task" icon={faPenToSquare} onClick={()=>{editTaskBox(value.id)}} />
      <FontAwesomeIcon className="destroy-task" icon={faTrashAlt} onClick={()=>{deleteTask(value.id)}}/>
      </div>
    </div>
  );
};

export default Task;

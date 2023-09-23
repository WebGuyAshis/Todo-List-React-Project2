import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import "./Task.styles.css";
import { FetchedContext } from "../../../../App";



const Task = ({value}) => {
  const {deleteTask} = useContext(FetchedContext);
  const [isChecked, setIsChecked] = useState(value.completed);

  const handleCheckbox = ()=>{
    setIsChecked(!isChecked);
  }
  // To update the value because react ony initialise it value once and after props change it does not updates the UI so to achieve that we will use useEffect hook
  useEffect(()=>{
    setIsChecked(value.completed)
  },[value.completed]);

//   const deleteTask=(id)=>{
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//   method: 'DELETE',
// });
//   }

  return (
    <div className="task">
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
      <div className="destroy-task" onClick={()=>{deleteTask(value.id)}}>
      <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#ffffff" }} />
      </div>
    </div>
  );
};

export default Task;

import { useContext } from "react";
import "./EditBox.styles.css";
import { FetchedContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash} from "@fortawesome/free-regular-svg-icons";

const EditBox = (props) => {

  const { tasks, setTasks,notify,setDescriptionData,isDescriptionOpen } = useContext(FetchedContext);

  const {
    editData,
    setEditData,
    editBox,
    setEditBox,
  } = props;

  // Editing Task and Updating
  const editTask = (e) => {
    e.preventDefault();

    fetch(`https://jsonplaceholder.typicode.com/posts/1`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        title: editData.title,
        date: editData.date,
        time: editData.time,
        desc: editData.desc,
        category: editData.category,
        completed: editData.completed,
        alert: editData.enableAlert,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let updatedTasks = tasks.map((task) => {
          if (task.id === editData.id) {
            return editData;
          }
          return task;
        });
        // Update localStorage with the updatedTasks array
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        // Retrieve and parse the data from localStorage
        const updatedTasksFromLocalStorage = JSON.parse(
          localStorage.getItem("tasks")
        );
        notify("Task Updated SuccessFully!", "success")
        // Update the tasks state with the parsed data
        setTasks(updatedTasksFromLocalStorage);
        setEditBox(!editBox);
        // Updating Description after Updating Task
        isDescriptionOpen && setDescriptionData(editData)
      })
      .catch((err) => {
        console.log("Dummy Put Request!");
  
      });
  };

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
                setEditData(() => ({ ...editData, title: e.target.value }));
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
                  setEditData(() => ({ ...editData, date: e.target.value }));
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
                  setEditData(() => ({ ...editData, time: e.target.value }));
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
                setEditData(() => ({ ...editData, desc: e.target.value }));
              }}
              required
            ></textarea>
          </div>

          <div className="task-category-input">
            <div
              className={`task-cat ${editData.category==="Personal"? "active-category":""}`}
              onClick={() => {
                setEditData(() => ({ ...editData, category: "Personal" }));
              }}
            >
              Personal
            </div>
            <div
              className={`task-cat ${editData.category==="Work"? "active-category":""}`}
              onClick={() => {
                setEditData(() => ({ ...editData, category: "Work" }));
              }}
            >
              Work
            </div>
            <div
              className={`task-cat ${editData.category==="School"? "active-category":""}`}
              onClick={() => {
                setEditData(() => ({ ...editData, category: "School" }));
              }}
            >
              School
            </div>
            <div
              className={`task-cat ${editData.category==="Events"? "active-category":""}`}
              onClick={() => {
                setEditData(() => ({ ...editData, category: "Events" }));
              }}
            >
              Events
            </div>
          </div>

          <div className="alert-category">

<div className={`alert-box ${editData.alert && "active-alert"}` } onClick={()=>setEditData(() => ({ ...editData, alert: !editData.alert }))}>
              {editData.alert?<FontAwesomeIcon icon={faBell}/>:<FontAwesomeIcon icon={faBellSlash} />}
            </div>

            <div className="alert-options">
              <input type="radio" id="alert-on-check" name="alert"  onChange={() => setEditData(() => ({ ...editData, alert: true }))} checked ={editData.alert} />
              <label htmlFor="alert-on-check">Enable Alert</label>
            </div>

            <div className="alert-options">
              <input type="radio" id="alert-off-check" name="alert" onChange={() => setEditData(() => ({ ...editData, alert: false }))} checked ={!editData.alert}/>
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

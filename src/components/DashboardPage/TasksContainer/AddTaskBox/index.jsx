import './AddTaskBox.styles.css'
const AddTaskBox = () => {
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
          />
        </div>

        <div className="task-input">
          <div className="task-date">
            <label htmlFor="task-date-input">Date</label>
            <input type="Date" id="task-date-input" />
          </div>

          <div className="task-time">
            <label htmlFor="task-time-input">Time</label>
            <input type="time" id="task-time-input" />
          </div>
        </div>

        <div className="task-desc">
            <label htmlFor="task-desc-input">Description</label>
            <textarea name="" id="task-desc-input" cols="30" rows="10"></textarea>
        </div>

        <div className="task-category">
            <div className="task-cat">
                Personal
            </div>
            <div className="task-cat">
                Work
            </div>
            <div className="task-cat">
                School
            </div>
            <div className="task-cat">
                Events
            </div>
        </div>

        <div className="alert-category">
            <div className="alert-box">
                {/* Icon and texgt */}
            </div>
            <div className="alert-options">
                <input type="checkbox"  id="alert-on-check"/>
                <label htmlFor="alert-on-check">Enable Alert</label>
            </div>
            <div className="alert-options">
                <input type="checkbox"  id="alert-off-check"/>
                <label htmlFor="alert-off-check">Disable Alert</label>
            </div>

        </div>
        <button>Create Task</button>
      </form>
    </div>
  );
};

export default AddTaskBox;

import { useContext } from "react";
import "./Description.styles.css";
import { FetchedContext } from "../../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBellSlash} from "@fortawesome/free-regular-svg-icons";
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Description = ({editTaskBox}) => {
  const { isDescriptionOpen, setIsDescriptionOpen,descriptionData,deleteTask }=useContext(FetchedContext);

  return (
    <div className="desc-background" >
      <div className="desc-box">
        {/* Close Description Box */}
      <div className="close-desc center-content" onClick={()=>{setIsDescriptionOpen(!isDescriptionOpen)}}>
      <FontAwesomeIcon icon={faXmark} />
      </div>
        <h1 className="desc-heading">{descriptionData.title}</h1>
        {/* Category and Alert */}
        <div className="cat-alert-desc">
          <div className="cat-desc center-content">{descriptionData.category?descriptionData.category:"Not Available"}</div>
          <div className="alert-desc center-content">
          {descriptionData.alert?<FontAwesomeIcon icon={faBell}/>:<FontAwesomeIcon icon={faBellSlash} />}
          </div>
        </div>
        {/* Description */}
        <p className="description-desc">{descriptionData.desc?descriptionData.desc:"Data Not Available"}</p>
        <div className="date-time-desc">
          <div className="date-desc center-content">Date: {descriptionData.date?descriptionData.date:"Not Set" }</div>
          <div className="time-desc center-content">Time: {descriptionData.time?descriptionData.time:"Not Set"}</div>
        </div>

        <div className="btn-desc">
          <div className="edit-desc btn-cat center-content" onClick={()=>{editTaskBox(descriptionData.id)}}>Edit Task</div>
          <div className="delete-desc btn-cat center-content" onClick={() => {deleteTask(descriptionData.id)}}>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default Description;

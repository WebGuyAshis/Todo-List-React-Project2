import React from "react";
import { Link } from "react-router-dom";
import "./DashUtils.styles.css";
import User from "../../../assets/svg/profile.svg";
import Task from "../../../assets/svg/list.svg";
import Birthday from "../../../assets/svg/birthday.svg";
import Imp from "../../../assets/svg/star.svg";
import Add from "../../../assets/svg/add.svg";

// import { ThemeContext } from '@mui/system';
// import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';

const DashUtils = () => {
  return (
    <div className="dash-utils light-glass">
      <Link className="util-item" to="">
        <img src={User} alt="" />
      </Link>
      <Link className="util-item" to="">
        <img src={Task} alt="" />
      </Link>
      <Link className="util-item" to="">
        <img src={Birthday} alt="" />
      </Link>
      <Link className="util-item" to="">
        <img src={Imp} alt="" />
      </Link>
      <Link className="util-item" to="">
        <img src={Add} alt="" />
      </Link>
    </div>
  );
};

export default DashUtils;

import React from "react";
import "./Home.styles.css";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />
      {/* Welcome Text */}
      <div className="home-page-content">
        <div className="wel-text">
          {/* Welcome Heading */}
          <h1 className="wel-heading">
            Easily Manage Your 
            <span> Daily Tasks</span>
          </h1>
          <div className="wel-quote">
            "You are never too old to set another goal or to dream a new dream."
          </div>
          <div className="responsive-img">
            
          </div>
          <Link className="sign-up-btn" to='/dashboard'>Get Started</Link>

        </div>
        {/* Home Page Img */}
        <div className="wel-page-img"></div>
      </div>
    </div>
  );
};

export default Home;

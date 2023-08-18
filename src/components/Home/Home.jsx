import React from "react";
import "./Home.styles.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-page">
      {/* Navbar */}
      <Navbar />
      <div className="wel-text">
        <h1 className="wel-heading">
          Easily Manage Your
          <div>
          Daily Tasks</div>
        </h1>
        <div className="wel-quote">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          quam
          <br />
          ut, suscipit eveniet veniam deleniti quod fugiat dolorum tempora id
        </div>
        <div className="sign-up-btn">Get Started</div>
      </div>

      <div className="wel-page-img">
        {/* <img src={welcomeImg} alt="" /> */}
      </div>
    </div>
  );
};

export default Home;

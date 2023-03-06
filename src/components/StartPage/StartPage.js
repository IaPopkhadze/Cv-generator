import React from "react";
import "./StartPageStyle/startPageStyle.css";
import BackgroundImage from "../Assets/startPageImage.png";

import CircleLogo from "../Assets/circle.svg";
import { useNavigate } from "react-router-dom";
const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div className="startPageStyle">
      <img className="startpage_img" src={BackgroundImage} />
      <div className="startPageContent">
        <h1 className="resume">Resume</h1>
        <div className="line"></div>
        <img src={CircleLogo} alt="logo" className="circle_logo" />
        <div className="add_resume_btn_container">
          <button className="add_resume_btn" onClick={() => navigate("layout")}>
            რეზიუმეს დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;

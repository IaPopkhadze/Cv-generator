import React, { useState } from "react";
import "./ExperienceStyle/experienceStyle.css";
import NewExperience from "./NewExperience";
const Experience = ({ handleNextPage, handlePreviousPage }) => {
  const [experiences, setExperiences] = useState([<NewExperience />]);

  const handleAddExperience = () => {
    setExperiences([...experiences, <NewExperience />]);
  };
  return (
    <>
 
      <NewExperience />
      <div className="btns_container">
        <button onClick={handlePreviousPage}>უკან</button>
        <button onClick={handleNextPage}>შემდეგი</button>
      </div>
    </>
  );
};

export default Experience;

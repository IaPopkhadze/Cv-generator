import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { valueContext } from "../../../App";
import NewEducation from "./NewEducation";
const Education = ({ handleNextPage, handlePreviousPage }) => {
  // const [educations, setEducations] = useState([<NewEducation />]);
  const navigate = useNavigate();
  const handleAddExperience = () => {
    // setEducations([...educations, <NeswEducation />]);
  };

  const { newEducation, setNewEducation } = useContext(valueContext);

  return (
    <>
      <NewEducation />

      {/* {educations.map(newform => {
        return newform;
      })} */}

      <div className="btns_container">
        <button onClick={handlePreviousPage}>უკან</button>
        {newEducation
          .map((x) => {
            if (
              x.university &&
              x.degree &&
              x.educationEndDate &&
              x.educationDescription
            ) {
    
              return true;
            } else return false;
          })
          .every((x) => x === true) && (
          <button onClick={() => navigate("/resumeResult")}>დასრულება</button>
        )}
      </div>
    </>
  );
};

export default Education;

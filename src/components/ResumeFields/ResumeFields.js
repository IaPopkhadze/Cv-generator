import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Experience from "./Experience/Experience.js";
import Education from "./Education/Education.js";
import ResumeResult from "../ResumeResult/ResumeResult";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const ResumeFields = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);

  const handleNextPage = () => {
    if (currentPage <2) {
      setCurrentPage(currentPage + 1); console.log(currentPage)
    }
   
  };
  const handlePreviousPage = () => {

      setCurrentPage(currentPage - 1);
    
  };
  const pages = [
    <PersonalInformation handleNextPage={handleNextPage} />,
    <Experience
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />,
    <Education
      handleNextPage={handleNextPage}
      handlePreviousPage={handlePreviousPage}
    />,

  ];
  return (
    <div>
      <div style={myStyle.backToStartPage} onClick={() => navigate("/")}>
        <IoIosArrowBack />
      </div>
      <div style={myStyle.currentField}>{pages[currentPage]}</div>
    </div>
  );
};

const myStyle = {
  backToStartPage: {
    position: "absolute",
    top: "45px",
    left: "48px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1.3rem",
    cursor: "pointer",
  },
  currentField: {
    position: "absolute",
    top: "47px",
    left: "149px",
    width: "798px",
  },
};

export default ResumeFields;

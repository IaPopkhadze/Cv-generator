import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Experience from "./Experience/Experience.js";
import Education from "./Education/Education.js";
import ResumeResult from "../ResumeResult/ResumeResult";
import { IoIosArrowBack } from "react-icons/io";

import "./ResumeFieldStyle/resumeFieldStyle.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { valueContext } from "../../App";

const ResumeFields = () => {
  const { newExperience, personalInformations } = useContext(valueContext);
  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const handleNextPage = (e) => {
    const {
      firstnameError,
      lastnameError,
      emailError,
      mobileError,
      imageError,
    } = personalInformations;

    const validateField2 = newExperience
      .map((x) => {
        if (
          x.jobPosition &&
          x.employer &&
          x.jobPositionStartDate &&
          x.jobPositionEndDate &&
          x.jobDescription
        ) {
          return true;
        } else {
          return false;
        }
      })
      .every((x) => x === true);
    if (
      !firstnameError &&
      !lastnameError &&
      !emailError &&
      !mobileError &&
      !imageError
    ) {
      if (currentPage == 0) {
        setCurrentPage(currentPage + 1);
      }
    }
    if (validateField2) {
      if (currentPage == 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

//

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
    <div className="resume_fields">
      <div className="resume_field_header">
        <div className="header_icon" onClick={() => navigate("/")}>
          <IoIosArrowBack />
        </div>
        <div className="header_line">
          <div className="page_title">პირადი ინფო</div>
          <div className="page_position">1/1</div>
        </div>
      </div>
      <div className="current_page">{pages[currentPage]}</div>
    </div>
  );
};

export default ResumeFields;

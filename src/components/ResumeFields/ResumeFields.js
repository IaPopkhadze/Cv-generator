import React, { useEffect, useState } from "react";
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
  const {
    newEducation,
    setNewEducation,
    newExperience,
    setNewExperience,
    personalInformations,
    setPersonalInformations,
    result,
    setResult,currentPage, setCurrentPage
  } = useContext(valueContext);
  // const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const resetFields = () => {
    setPersonalInformations({
      firstname: "",
      lastname: "",
      image: "",
      about: "",
      email: "",
      mobile: "",
      firstnameError: null,
      lastnameError: null,
      emailError: null,
      mobileError: null,
      imageError: null,
    });
    setNewExperience([
      {
        jobPosition: "",
        employer: "",
        jobPositionStartDate: "",
        jobPositionEndDate: "",
        jobDescription: "",
        jobPositionStyle: "",
        employerError: null,
        jobPositionStartDateError: null,
        jobPositionEndDateError: null,
        jobDescriptionError: null,
      },
    ]);
    setNewEducation([
      {
        university: "",
        degree: "",
        educationEndDate: "",
        educationDescription: "",
        universityStyle: "",
        degreeError: null,
        educationEndDateError: null,
        newEducationDescriptionStyle: "",
      },
    ]);
  };

  const handleGoBack = () => {
    resetFields();
    navigate("/");
    localStorage.removeItem("personalInformations");
    localStorage.removeItem("newExperience");
    localStorage.removeItem("newEducation");
  };

  const handleNextPage = (e) => {
    const {
      firstnameError,
      lastnameError,
      emailError,
      mobileError,
      imageError,
      firstname,
      lastname,
      image,
      about,
      email,
      mobile,
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
      firstname.length &&
      !lastnameError &&
      lastname.length &&
      !mobileError &&
      mobile.length &&
      !imageError &&
      image.length &&
      !emailError &&
      email.length &&
      about.length
    ) {
      if (currentPage == 0) {
        setCurrentPage(currentPage + 1);
      }
    } else {
      window.alert("PLEASE FILL ALL REQUIRED INPUT VALUES");
    }
    if (validateField2) {
      if (currentPage == 1) {
        setCurrentPage(currentPage + 1);
      }
    }
  };

  //
  useEffect(() => {
    const {
      firstnameError,
      lastnameError,
      emailError,
      mobileError,
      imageError,
    } = personalInformations;
    console.log(
      "these are",
      firstnameError,
      lastnameError,
      imageError,
      emailError,
      mobileError
    );
  });

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
        <div className="header_icon" onClick={handleGoBack}>
          <IoIosArrowBack />
        </div>
        <div className="header_line">
          <div className="page_title">{currentPage===0? 'პირადი ინფორმაცია':currentPage===1?'გამოცდილება':currentPage===2?'განათლება':null}</div>
          <div className="page_position">{currentPage+1}/3</div>
        </div>
      </div>
      <div className="current_page">{pages[currentPage]}</div>
    </div>
  );
};

export default ResumeFields;

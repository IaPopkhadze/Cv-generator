import React, { useState } from "react";
import "./ResumeResultStyle/resumeResultStyle.css";
import { useContext } from "react";
import { valueContext } from "../../App";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const ResumeResult = () => {
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
  const [data, setData] = useState(null);

  useEffect(() => {
    const _personalInformations = JSON.parse(
      localStorage.getItem("personalInformations")
    );
    const _newExperience = JSON.parse(localStorage.getItem("newExperience"));
    const _newEducation = JSON.parse(localStorage.getItem("newEducation"));
    if (_personalInformations && _newExperience && _newEducation) {
      let personalInformationValidation =
        _personalInformations.firstname &&
        _personalInformations.lastname &&
        _personalInformations.image &&
        _personalInformations.about &&
        _personalInformations.email &&
        _personalInformations.mobile;

      let newExperienceValidation = _newExperience
        .map((el, i) => {
          if (
            el.jobPosition &&
            el.employer &&
            el.jobPositionStartDate &&
            el.jobPositionEndDate &&
            el.jobDescription
          ) {
            return true;
          } else {
            return false;
          }
        })
        .every((x) => x === true);

      let newEducationValidation = _newEducation
        .map((el, i) => {
          if (
            el.university &&
            el.degree &&
            el.educationEndDate &&
            el.educationDescription
          ) {
            return true;
          } else {
            return false;
          }
        })
        .every((x) => x === true);

      if (
        newExperienceValidation &&
        newEducationValidation &&
        personalInformationValidation
      ) {
        setData(true);
      } else {
        setData(false);
      }
    } else {
      setData(false);
    }
  }, []);

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

  if (data) {
    return (
      <div className="resumeResult">
        <div className="result_container">
          <div className="personal-information-container">
            <div className="left-side">
              <div className="first-section">
                <h1 className="result-title">
                  {personalInformations.firstname}{" "}
                  {personalInformations.lastname}
                </h1>
                <span>{personalInformations.email}</span>
                <span>{personalInformations.mobile}</span>
              </div>
              <div className="second-section">
                <h1 className="result-title"> ჩემს შესახებ</h1>
                <p>{personalInformations.about}</p>
              </div>
            </div>
            <div className="right-side">
              <img src={personalInformations.image} />
            </div>
          </div>
          <div className="experience_container">
            {newExperience?.map((el, index) => {
              return (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  {" "}
                  {(el.jobPosition ||
                    el.employer ||
                    el.jobPositionStartDate ||
                    el.jobPositionEndDate ||
                    el.jobDescription) &&
                    index == 0 && (
                      <>
                        {" "}
                        <div
                          className="line"
                          style={{ marginTop: "5rem" }}
                        ></div>{" "}
                        <div className="title">გამოცდილება</div>
                      </>
                    )}
                  <div className="new_section">
                    <p className="bold_text">
                      {el.jobPosition}
                      {el.jobPosition && el.employer && ", "} {el.employer}
                    </p>
                    <p className="light_text">
                      {el.jobPositionStartDate} {el.jobPositionEndDate && "- "}
                      {el.jobPositionEndDate}
                    </p>
                    <p>{el.jobDescription}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {newEducation?.map((el, index) => {
            return (
              <div key={index} style={{ marginBottom: "3rem" }}>
                {" "}
                {(el.jobPosition ||
                  el.employer ||
                  el.jobPositionStartDate ||
                  el.jobPositionEndDate ||
                  el.jobDescription) &&
                  index == 0 && (
                    <>
                      {" "}
                      <div className="line"></div>{" "}
                      <div className="title">გამოცდილება</div>
                    </>
                  )}
                <div className="new_section">
                  <p className="bold_text">
                    {el.jobPosition}
                    {el.jobPosition && el.employer && ", "} {el.employer}
                  </p>
                  <p className="light_text">
                    {el.jobPositionStartDate} {el.jobPositionEndDate && "- "}
                    {el.jobPositionEndDate}
                  </p>
                  <p>{el.jobDescription}</p>
                </div>
              </div>
            );
          })}
          {newEducation.map((e, i) => {
            return (
              <div
                style={{ marginBottom: "3rem" }}
                key={i}
                className="new_section"
              >
                {(e.university ||
                  e.degree ||
                  e.educationEndDate ||
                  e.educationDescription) &&
                  i == 0 && (
                    <>
                      {" "}
                      <div className="line"></div>{" "}
                      <div className="title">განათლება</div>
                    </>
                  )}
                <p className="bold_text">
                  {e.university}
                  {e.degree && ", "} {e.degree}
                </p>
                <p className="light_text">{e.educationEndDate}</p>
                <p>{e.educationDescription}</p>
              </div>
            );
          })}
        </div>
        <button className="start_again_btn" onClick={handleGoBack}>
          თავიდან დაწყება
        </button>
      </div>
    );
  }
  if (data === false) {
    return <Navigate to={"/"} />;
  }
};

export default ResumeResult;

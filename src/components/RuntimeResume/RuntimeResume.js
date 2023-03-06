import React from "react";
import "./RuntimeStyle/runtimeStyle.css";
import Icon1 from "../Assets/mailIcon.svg";
import Icon2 from "../Assets/phoneIcon.svg";
import { useContext } from "react";
import { valueContext } from "../../App";

const RuntimeResume = ({ overflow }) => {
  const { newEducation, newExperience, personalInformations } =
    useContext(valueContext);
    

  return (
    <div
      className={`runtime_resume_conainer ${overflow === 1 && "overflow-none"}`}
    >
      <div className="runtime_resume">
        <div className="section1">
          <div className="section1_left_container">
            <p className="name_surname">
              {personalInformations.firstname} {personalInformations.lastname}
            </p>
            <div className="gmail_phone">
              {personalInformations.email && (
                <div className="each_cont">
                  <img src={Icon1} alt="" />
                  <p>{personalInformations.email}</p>
                </div>
              )}
              {personalInformations.mobile && (
                <div className="each_cont">
                  <img src={Icon2} alt="" />
                  <p>{personalInformations.mobile}</p>
                </div>
              )}
            </div>
            {personalInformations.about && (
              <>
                {" "}
                <p className="title">ჩემ შესახებ</p>
                <p className="about_me_text"> {personalInformations.about}</p>
              </>
            )}
          </div>
          <div className="section1_right_container">
            {personalInformations.image && (
              <div className="image_container">
                <img src={personalInformations.image} />
              </div>
            )}
          </div>
        </div>

        {newExperience.map((el, index) => {
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
    </div>
  );
};

export default RuntimeResume;

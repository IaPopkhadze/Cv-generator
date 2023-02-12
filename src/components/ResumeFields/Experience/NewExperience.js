import React from "react";
import { useState } from "react";
import "./ExperienceStyle/experienceStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
const NewExperience = () => {
  const [jobPosition, setJobPosition] = useState("");
  const [jobPositionStyle, setJobPositionStyle] = useState("");

  const [employer, setEmployer] = useState("");
  const [employerStyle, setEmployerStyle] = useState("");

  const [jobDescription, setJobDescription] = useState("");
  const [jobDescriptionStyle, setJobDescriptionStyle] = useState("");

  const jobPositionValidation = (e) => {
    const jobPosition = e.target.value;
    setJobPosition(jobPosition);
    if (jobPosition.length >= 2) {
      setJobPositionStyle("success");
    } else if (jobPosition.length && jobPosition.length < 2) {
      setJobPositionStyle("error");
    } else {
      setJobPositionStyle("default");
    }
  };
  const employerValidation = (e) => {
    const employer = e.target.value;
    setEmployer(employer);
    if (employer.length >= 2) {
      setEmployerStyle("success");
    } else if (employer.length && employer.length < 2) {
      setEmployerStyle("error");
    } else {
      setEmployerStyle("default");
    }
  };
  const jobDescriptionValidation = (e) => {
    const jobDescription = e.target.value;
    setJobDescription(jobDescription);
    if (jobDescription.length) {
      setJobDescriptionStyle("success");
    }
  };
  return (
    <div className="experience">
      <form action="">
        <div className="input_container">
          <label htmlFor="">თანამდებობა</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={jobPositionValidation}
              value={jobPosition}
              type="text"
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              style={
                jobPositionStyle == "error"
                  ? { border: "1px solid #EF5050" }
                  : jobPositionStyle == "success"
                  ? { border: "1px solid #98E37E" }
                  : jobPosition == "default"
                  ? { border: "1px solid #bcbcbc" }
                  : null
              }
            />
            {jobPositionStyle === "error" ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : jobPositionStyle == "success" ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>მინიმუმ ორი სიმბოლო</p>
        </div>
        <div className="input_container">
          <label htmlFor="">დამსაქმებელი</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={employerValidation}
              value={employer}
              type="text"
              placeholder="დამსაქმებელი"
              style={
                employerStyle == "error"
                  ? { border: "1px solid #EF5050" }
                  : employerStyle == "success"
                  ? { border: "1px solid #98E37E" }
                  : employerStyle == "default"
                  ? { border: "1px solid #bcbcbc" }
                  : null
              }
            />
            {employerStyle === "error" ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : employerStyle == "success" ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>მინიმუმ ორი სიმბოლო</p>
        </div>

        <div className="two_input_container">
          <div className="child_container">
            <label htmlFor="">დაწყების რიცხვი</label>
            <div className="input_icon">
              <input
                // onChange={usernameValidation}
                // value={firstname}
                // style={
                //   firstname.length && firstnameError
                //     ? { border: "1px solid #EF5050" }
                //     : { border: "1px solid #bcbcbc" }
                // }
                type="date"
                className="data_input"
              />

              {/* {firstname.length && firstnameError ? (
                  <div className="icon_container">
                    <img src={Vector} alt="" />
                  </div>
                ) : firstname.length && !firstnameError ? (
                  <div
                    className="icon_container"
                    style={{ backgroundColor: "#98e37e" }}
                  >
                    <BsCheck />
                  </div>
                ) : null} */}
            </div>
          </div>
          <div className="child_container">
            <label htmlFor="">დამთავრების რიცხვი</label>
            <div className="input_icon">
              <input
                className="data_input"
                type="date"

                // value={lastname}
                // onChange={lastnameValidation}

                // style={
                //   lastname.length && lastnameError
                //     ? { border: "1px solid #EF5050" }
                //     : lastname.length && !lastnameError
                //     ? { border: "1px solid #98E37E" }
                //     : { border: "1px solid #bcbcbc" }
                // }
              />
              {/* {lastname.length && lastnameError ? (
                  <div className="icon_container">
                    <img src={Vector} alt="" />
                  </div>
                ) : lastname.length && !lastnameError ? (
                  <div
                    className="icon_container"
                    style={{ backgroundColor: "#98e37e" }}
                  >
                    <BsCheck />
                  </div>
                ) : null} */}
            </div>
          </div>
        </div>
        <div className="textarea_container">
          <label>აღწერა</label>
          <textarea
            onChange={jobDescriptionValidation}
            value={jobDescription}
            className='jobdescription'
            style={
                
              jobDescription.length ? { border: "1px solid #98E37E" } : null
              // about.length && aboutError
              //   ? { border: "1px solid #EF5050" }
              //   : about.length && !aboutError
              //   ? { border: "1px solid #98E37E" }
              //   : { border: "1px solid #bcbcbc" }  
            }
            name="about"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "#C1C1C1",
            marginTop: "58px",
          }}
        ></div>
      </form>
    </div>
  );
};

export default NewExperience;

import React, { useEffect } from "react";
import { useState } from "react";
import "./ExperienceStyle/experienceStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";


const NewExperience = () => {
  const { newExperience, setNewExperience } = useContext(valueContext);
  useEffect(() => {
    const localData = localStorage.getItem("newExperience");
    if (localData) {
      setNewExperience(JSON.parse(localData));
    }
  }, []);

  const saveLocalData = (obj) => {
    localStorage.setItem("newExperience", JSON.stringify(obj));
  };
  const addNewForm = () => {
    const formObj = {
      jobPosition: "",
      employer: "",
      jobPositionStartDate: "",
      jobPositionEndDate: "",
      jobDescription: "",
    };

    setNewExperience([...newExperience, formObj]);
  };

  const handleChangeJobPosition = (e, i) => {
    const _newExperience = [...newExperience];
    const _jobPosition = e.target.value;
    _newExperience[i].jobPosition = _jobPosition;
    if (_jobPosition.length >= 2) {
      _newExperience[i].jobPositionStyle = "success";
    } else if (
      _newExperience?.jobPosition?.length &&
      _newExperience.jobPosition.length < 2
    ) {
      _newExperience[i].jobPositionStyle = "error";
    } else {
      _newExperience[i].jobPositionStyle = "defaullt";
    }
    setNewExperience(_newExperience);
    saveLocalData(_newExperience);
  };

  const handleChangeEmployer = (e, i) => {
    const _newExperience = [...newExperience];
    _newExperience[i].employer = e.target.value;
    setNewExperience(_newExperience);
    saveLocalData(_newExperience);
  };
  const handleChangeJobPositionStartDate = (e, i) => {
    const _newExperience = [...newExperience];
    _newExperience[i].jobPositionStartDate = e.target.value;
    setNewExperience(_newExperience);
    saveLocalData(_newExperience);
  };
  const handleChangeJobPositionEndDate = (e, i) => {
    const _newExperience = [...newExperience];
    _newExperience[i].jobPositionEndDate = e.target.value;
    setNewExperience(_newExperience);
    saveLocalData(_newExperience);
  };
  const handleJobDescription = (e, i) => {
    const _newExperience = [...newExperience];
    _newExperience[i].jobDescription = e.target.value;
    setNewExperience(_newExperience);
    saveLocalData(_newExperience);
  };

  return (
    <>
      <div className="experience">
        {newExperience.map((exp, i) => {
          return (
            <form key={i} action="">
              <div className="input_container">
                <label htmlFor="">თანამდებობა</label>
                <div style={{ position: "relative" }}>
                  <input
                    onChange={(e) => handleChangeJobPosition(e, i)}
                    value={exp.jobPosition}
                    type="text"
                    placeholder="დეველოპერი, დიზაინერი, ა.შ"
                    style={
                      exp.jobPositionStyle == "error"
                        ? { border: "1px solid #EF5050" }
                        : exp.jobPositionStyle == "success"
                        ? { border: "1px solid #98E37E" }
                        : exp.jobPosition == "default"
                        ? { border: "1px solid #bcbcbc" }
                        : null
                    }
                  />

                  {newExperience?.jobPositionStyle === "error" ? (
                    <div className="icon_container">
                      <img src={Vector} alt="" />
                    </div>
                  ) : newExperience?.jobPositionStyle == "success" ? (
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
                    onChange={(e) => handleChangeEmployer(e, i)}
                    value={exp.employer}
                    type="text"
                    placeholder="დამსაქმებელი"
                    style={
                      newExperience?.employerStyle == "error"
                        ? { border: "1px solid #EF5050" }
                        : newExperience?.employerStyle == "success"
                        ? { border: "1px solid #98E37E" }
                        : newExperience?.employerStyle == "default"
                        ? { border: "1px solid #bcbcbc" }
                        : null
                    }
                  />
                  {newExperience?.employerStyle === "error" ? (
                    <div className="icon_container">
                      <img src={Vector} alt="" />
                    </div>
                  ) : newExperience?.employerStyle == "success" ? (
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
                      value={exp.jobPositionStartDate}
                      onChange={(e) => handleChangeJobPositionStartDate(e, i)}
                      // style={
                      //   firstname.length && firstnameError
                      //     ? { border: "1px solid #EF5050" }
                      //     : { border: "1px solid #bcbcbc" }
                      // }
                      type="date"
                      className="data_input"
                    />
                    {/* 
                    {newExperience?.jobPositionStartDate?.length && firstnameError ? (
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
                      onChange={(e) => handleChangeJobPositionEndDate(e, i)}
                      value={exp.jobPositionEndDate}
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
                <textarea
                  onChange={(e) => handleJobDescription(e, i)}
                  value={exp.jobDescription}
                  className="jobdescription"
                  style={
                    exp.jobDescription.length
                      ? { border: "1px solid #98E37E" }
                      : null
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
          );
        })}
      </div>
      <button className="more_experience" onClick={addNewForm}>
        მეტი გამოცდილების დამატება
      </button>
    </>
  );
};

export default NewExperience;

import React from "react";
import { useState, useEffect } from "react";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";
import { useNavigate } from "react-router-dom";

const NewEducation = () => {
  const { newEducation, setNewEducation, 
     } = useContext(valueContext);
  const navigate = useNavigate();
  useEffect(() => {
    const localData = localStorage.getItem("newEducation");
    if (localData) {
      setNewEducation(JSON.parse(localData));
    }
  }, []);

  const saveLocalData = (obj) => {
    localStorage.setItem("newEducation", JSON.stringify(obj));
  };

  const universityValidation = (e, i) => {
    const university = e.target.value;
    const _newEducation = [...newEducation];

    _newEducation[i].university = university;

    if (university.length >= 2) {
      _newEducation[i].universityStyle = "success";
    } else if (university.length && university.length < 2) {
      _newEducation[i].universityStyle = "error";
    } else {
      _newEducation[i].universityStyle = "default";
    }

    setNewEducation(_newEducation);
    saveLocalData(_newEducation);
  };

  const educationDescriptionValidation = (e) => {
    const educationDescription = e.target.value;

    const _newEducation = [...newEducation];

    _newEducation.educationDescription = educationDescription;

    setNewEducation(_newEducation);
    saveLocalData(_newEducation);
  };

  const addNewForm = () => {
    const formObj = {
      university: "",
      degree: "",
      educationEndDate: "",
      educationDescription: "",
    };

    setNewEducation([...newEducation, formObj]);
  };

  const handleChangeUniversity = (e, i) => {
    const _newEducation = [...newEducation];
    _newEducation[i].university = e.target.value;
    setNewEducation(_newEducation);
    saveLocalData(_newEducation);
  };
  const handleChangeDegree = (e, i) => {
    const _newEducation = [...newEducation];
    _newEducation[i].degree = e.target.value;
    setNewEducation(_newEducation);
    saveLocalData(_newEducation);
  };
  const handleChangeEducationEndDate = (e, i) => {
    const _newEducation = [...newEducation];
    _newEducation[i].educationEndDate = e.target.value;
    setNewEducation(_newEducation);
    saveLocalData(_newEducation);
  };
  const handleChangeEducationDescription = (e, i) => {
    const _newEducation = [...newEducation];
    _newEducation[i].educationDescription = e.target.value;
    setNewEducation(_newEducation);
    saveLocalData(_newEducation);
  };

  return (
    <>
      <div className="experience">
        {newEducation.map((exp, i) => {
          return (
            <form action="" key={i}>
              <div className="input_container">
                <label htmlFor="">სასწავლებელი</label>
                <div style={{ position: "relative" }}>
                  <input
                    onChange={(e) => universityValidation(e, i)}
                    value={exp.university}
                    type="text"
                    placeholder="სასწავლებელი"
                    style={
                      exp.universityStyle == "error"
                        ? { border: "1px solid #EF5050" }
                        : exp.universityStyle == "success"
                        ? { border: "1px solid #98E37E" }
                        : exp.universityStyle == "default"
                        ? { border: "1px solid #bcbcbc" }
                        : null
                    }
                  />
                  {exp.universityStyle === "error" ? (
                    <div className="icon_container">
                      <img src={Vector} alt="" />
                    </div>
                  ) : exp.universityStyle == "success" ? (
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
                  <label htmlFor="">ხარისხი</label>
                  <div className="input_icon">
                    {/* <input
                // onChange={usernameValidation}
                // value={firstname}
                // style={
                //   firstname.length && firstnameError
                //     ? { border: "1px solid #EF5050" }
                //     : { border: "1px solid #bcbcbc" }
                // }
                type="text"
                className="data_input"
                placeholder="აირჩიეთ ხარისხი"
              /> */}
                    <select
                      className="my_select"
                      placeholder="აისდსდ "
                      onChange={(e) => handleChangeDegree(e, i)}
                      value={exp.degree}
                    >
                      <option value="">აირჩიეთ ხარისხი</option>
                      <option value="ბაკალავრიატი">ბაკალავრიატი</option>
                      <option value="მაგისტრაურა">მაგისტრაურა</option>
                      <option value="დოქტორანტურა">დოქტორანტურა</option>
                      <option value="ასპირანტურა">ასპირანტურა</option>
                    </select>

  
                  </div>
                </div>
                <div className="child_container">
                  <label htmlFor="">დამთავრების რიცხვი</label>
                  <div className="input_icon">
                    <input
                      className="data_input"
                      type="date"
                      onChange={(e) => handleChangeEducationEndDate(e, i)}
                      value={exp.educationEndDate}
    
                    />

                  </div>
                </div>
              </div>
              <div className="textarea_container">
                <textarea
                  onChange={(e) => handleChangeEducationDescription(e, i)}
                  value={exp.educationDescription}
                  style={
                    exp.educationDescription?.length
                      ? { border: "1px solid #98E37E" }
                      : null
         
                  }
                  name="about"
                  placeholder="განათლების აღწერა"
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
      <button
        className="more_experience"
        onClick={() => {
          addNewForm();
        }}
      >
        სხვა სასწავლებლის დამატება
      </button>
    </>
  );
};

export default NewEducation;

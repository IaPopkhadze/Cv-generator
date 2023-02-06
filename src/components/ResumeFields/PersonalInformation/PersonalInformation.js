import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "../ValidationSchema";
import "./PersonalInformationStyle/personalInformationStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
const PersonalInformation = () => {
  const onSubmit = () => {
    console.log("submited");
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      image: "",
      about: "",
      email: "",
      mobile: "",
    },
    validationSchema: validationSchema,
    onSubmit,
  });

  const letters = [
    "ა",
    "ბ",
    "გ",
    "დ",
    "ე",
    "ვ",
    "ზ",
    "თ",
    "ი",
    "კ",
    "ლ",
    "მ",
    "ნ",
    "ო",
    "პ",
    "ჟ",
    "რ",
    "ს",
    "ტ",
    "უ",
    "ფ",
    "ქ",
    "ღ",
    "ყ",
    "შ",
    "ჩ",
    "ც",
    "ძ",
    "წ",
    "ჭ",
    "ხ",
    "ჯ",
    "ჰ",
  ];
  const allowedLetters = (e) => {
    if (letters.includes(e.key) || e.key == "Backspace" || e.key == " ") {
    } else {
      e.preventDefault();
    }
  };

  return (
    <>
      <div className="personal_information">
        <p className="title">პირადი ინფო</p>
        <div className="current_page_index" style={{ fontSize: "20px" }}>
          1/3
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="name_surname_container">
          <div className="child_container">
            <label htmlFor="">სახელი</label>
            <div className="input_icon">
              <input
                onChange={formik.handleChange}
                value={formik.values.firstname}
                name="firstname"
                onKeyDown={allowedLetters}
                style={
                  formik.values.firstname.length && formik.errors.firstname
                    ? { border: "1px solid #EF5050" }
                    : formik.values.firstname.length && !formik.errors.firstname
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />

              {formik.values.firstname.length && formik.errors.firstname ? (
                <div className="icon_container">
                  <img src={Vector} alt="" />
                </div>
              ) : formik.values.firstname.length && !formik.errors.firstname ? (
                <div className="icon_container">
                  <BsCheck />
                </div>
              ) : null}
    

    
            </div>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className="child_container">
            <label htmlFor="">სახელი</label>
            <div className="input_icon">
              <input type="text" />
              <div className="icon_container">
                <BsCheck />
              </div>
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            </div>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;

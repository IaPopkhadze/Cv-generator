import React, { useEffect, useState } from "react";
import "./PersonalInformationStyle/personalInformationStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";

const PersonalInformation = ({ handleNextPage }) => {
  const {
    firstname,
    setFirstname,
    firstnameError,
    setFirstnameError,
    lastname,
    setLastname,
    lastnameError,
    setLastnameError,
    about,
    setAbout,
    email,
    setEmail,
    emailError,
    setEmailError,
    mobile,
    setMobile,
    mobileError,
    setMobileError,
  } = useContext(valueContext);


  const usernameValidation = (e) => {
    const firstname = e.target.value;
    const regex = /^[ა-ჰ]{2,}$/;

    setFirstname(firstname);
    setFirstnameError(!firstname.match(regex));
  };

  const lastnameValidation = (e) => {
    const lastname = e.target.value;
    const regex = /^[ა-ჰ]{2,}$/;

    setLastname(lastname);
    setLastnameError(!lastname.match(regex));
  };

  const aboutValidation = (e) => {
    const about = e.target.value;
    setAbout(about);

  };

  const emailValidation = (e) => {
    const email = e.target.value;
    setEmail(email);
    const emailRegex = /^\w+([.-]?\w+)*@redberry.ge$/;
    setEmailError(!email.match(emailRegex));
  };

  const mobileNumberValidation = (e) => {
    let mobile = e.target.value;
    mobile = mobile.replace(/[^\d+]/g, "");
    let phoneNumberLength = mobile.length;
    if (phoneNumberLength < 5) {
      setMobile(mobile);
    }
    if (phoneNumberLength < 14) {
      let formatedPhoneNumber = `${mobile.slice(0, 4)} ${mobile.slice(
        4,
        7
      )} ${mobile.slice(7, 9)} ${mobile.slice(9, 11)} ${mobile.slice(11, 13)}`;
      setMobile(formatedPhoneNumber);
    }
  };

  return (
    <>
      <div className="header_information">
        <p className="title">პირადი ინფო</p>
        <div className="current_page_index" style={{ fontSize: "20px" }}>
          1/3
        </div>
      </div>
      <form autoComplete="off">
        <div className="two_input_container">
          <div className="child_container">
            <label htmlFor="">სახელი</label>
            <div className="input_icon">
              <input
                name="firstname"
                onChange={usernameValidation}
                value={firstname}
                style={
                  firstname.length && firstnameError
                    ? { border: "1px solid #EF5050" }
                    : lastname.length && !firstnameError
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />

              {firstname.length && firstnameError ? (
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
              ) : null}
            </div>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
          <div className="child_container">
            <label htmlFor="">გვარი</label>
            <div className="input_icon">
              <input
                value={lastname}
                onChange={lastnameValidation}
                name="lastname"
                style={
                  lastname.length && lastnameError
                    ? { border: "1px solid #EF5050" }
                    : lastname.length && !lastnameError
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />
              {lastname.length && lastnameError ? (
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
              ) : null}
            </div>
            <p>მინიმუმ 2 ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className="upload_image_container">
          <p>პირადი ფოტოს ატვირთვა</p>
          <button>ატვირთვა</button>
          {/* {formik.errors.image && (
            <div className="icon_container">
              <img src={Vector} alt="" />
            </div>
          )} */}
        </div>
        <div className="textarea_container">
          <label>ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            onChange={aboutValidation}
            value={about}
            style={
              about.length
                ? { border: "1px solid #98E37E" }
                : { border: "1px solid #bcbcbc" }
            }
            name="about"
            placeholder="ზოგადი ინფო შენს შესახებ"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="input_container">
          <label htmlFor="email">ელ.ფოსტა</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={emailValidation}
              value={email}
              name="email"
              type="email"
              placeholder="someone@redberry.ge"
              style={
                email.length && emailError
                  ? { border: "1px solid #EF5050" }
                  : email.length && !emailError
                  ? { border: "1px solid #98E37E" }
                  : { border: "1px solid #bcbcbc" }
              }
            />
            {email.length && emailError ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : email.length && !emailError ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className="input_container">
          <label htmlFor="mobile">მობილური ნომერი</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={mobileNumberValidation}
              value={mobile}
              name="mobile"
              type="text"
              placeholder="+995 551 12 34 56"
              style={
                mobile.length && mobileError
                  ? { border: "1px solid #EF5050" }
                  : mobile.length && !mobileError
                  ? { border: "1px solid #98E37E" }
                  : { border: "1px solid #bcbcbc" }
              }
            />
            {mobile && mobileError ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : mobile.length && !mobileError ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>

        <div className="btn_container">
          <button className="next_page_btn" onClick={handleNextPage}>
            შემდეგი
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;

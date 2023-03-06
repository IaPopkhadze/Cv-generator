import React, { useEffect, useState } from "react";
import "./PersonalInformationStyle/personalInformationStyle.css";
import { BsCheck } from "react-icons/bs";
import Vector from "../../Assets/Vector.svg";
import { useContext } from "react";
import { valueContext } from "../../../App";

const PersonalInformation = ({ handleNextPage }) => {
  const { personalInformations, setPersonalInformations } =
    useContext(valueContext);

  useEffect(() => {
    const localData = localStorage.getItem("personalInformations");

    if (localData) {
      setPersonalInformations(JSON.parse(localData));
    }
  }, []);

  const saveLocalData = (obj) => {
    localStorage.setItem("personalInformations", JSON.stringify(obj));
  };

  const usernameValidation = (e) => {
    const _personalInformations = { ...personalInformations };
    const firstname = e.target.value;
    const regex = /^[ა-ჰ]{2,}$/;

    _personalInformations.firstname = firstname;
    _personalInformations.firstnameError = !firstname.match(regex);
    setPersonalInformations(_personalInformations);

    saveLocalData(_personalInformations);
  };

  const lastnameValidation = (e) => {
    const _personalInformations = { ...personalInformations };
    const lastname = e.target.value;
    const regex = /^[ა-ჰ]{2,}$/;

    _personalInformations.lastname = lastname;
    _personalInformations.lastnameError = !lastname.match(regex);
    setPersonalInformations(_personalInformations);

    saveLocalData(_personalInformations);
  };

  const aboutValidation = (e) => {
    const about = e.target.value;
    const _personalInformations = { ...personalInformations };
    _personalInformations.about = about;
    setPersonalInformations(_personalInformations);

    saveLocalData(_personalInformations);
  };

  const emailValidation = (e) => {
    const _personalInformations = { ...personalInformations };
    const email = e.target.value;

    _personalInformations.email = email;
    const emailRegex = /^\w+([.-]?\w+)*@gmail.com$/;
    _personalInformations.emailError = !email.match(emailRegex);
    setPersonalInformations(_personalInformations);
    saveLocalData(_personalInformations);
  };

  const checkPhoneNumber = (e) => {
    const _mobile = e.target.value;
    const _personalInformations = { ...personalInformations };
    console.log(_mobile);
    if (_mobile.length < 18) {
      const _mobile2 = _mobile.replace(/[^+|0-9]/g, "");
      if (_mobile2.startsWith("+995") && _mobile.length === 13) {
        let ph = "";
        for (let i = 0; i < _mobile2.length; i++) {
          ph += _mobile2[i];
          if (i > 0) {
            if (i === 3) ph += " ";
            if (i === 6) ph += " ";
            if (i === 8) ph += " ";
            if (i === 10) ph += " ";
            _personalInformations.mobile = ph;
            _personalInformations.mobileError = false;
          }
        }
      }
      if (_mobile2.length !== 13) {
        _personalInformations.mobile = _mobile;
        _personalInformations.mobileError = true;
      }
    }
    setPersonalInformations(_personalInformations);
    saveLocalData(_personalInformations);
  };

  const handleUploadImage = (e) => {
    const _personalInformations = { ...personalInformations };
    const _image = e.target.files[0];
    if (
      _image &&
      ["jpg", "jpeg", "png", "svg+xml", "svg"].includes(
        _image.type?.split("/")[1]
      )
    ) {
      _personalInformations.image = URL.createObjectURL(_image);
      _personalInformations.imageError = false;
    } else {
      _personalInformations.imageError = true;
    }
    setPersonalInformations(_personalInformations);
  };

  return (
    <>
      <form autoComplete="off">
        <div className="two_input_container">
          <div className="child_container">
            <label htmlFor="">სახელი</label>
            <div className="input_icon">
              <input
                name="firstname"
                onChange={usernameValidation}
                value={personalInformations?.firstname}
                style={
                  personalInformations?.firstname?.length &&
                  personalInformations?.firstnameError
                    ? { border: "1px solid #EF5050" }
                    : personalInformations?.firstname?.length &&
                      !personalInformations?.firstnameError
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />

              {personalInformations?.firstname?.length &&
              personalInformations?.firstnameError ? (
                <div className="icon_container">
                  <img src={Vector} alt="" />
                </div>
              ) : personalInformations?.firstname?.length &&
                !personalInformations?.firstnameError ? (
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
                value={personalInformations?.lastname}
                onChange={lastnameValidation}
                name="lastname"
                style={
                  personalInformations?.lastname?.length &&
                  personalInformations?.lastnameError
                    ? { border: "1px solid #EF5050" }
                    : personalInformations?.lastname?.length &&
                      !personalInformations?.lastnameError
                    ? { border: "1px solid #98E37E" }
                    : { border: "1px solid #bcbcbc" }
                }
                type="text"
              />
              {personalInformations?.lastname?.length &&
              personalInformations?.lastnameError ? (
                <div className="icon_container">
                  <img src={Vector} alt="" />
                </div>
              ) : personalInformations?.lastname?.length &&
                !personalInformations?.lastnameError ? (
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
          {/* აქედან */}

          <input type="file" onChange={handleUploadImage} />
          {personalInformations?.imageError && (
            <div className="icon_container">
              <img src={Vector} alt="" />
            </div>
          )}
          {personalInformations?.imageError === false && (
            <div
              className="icon_container"
              style={{
                backgroundColor: "#98e37e",
                borderRadius: "50%",
                color: "white",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <BsCheck />
            </div>
          )}
        </div>
        <div className="textarea_container">
          <label>ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            onChange={aboutValidation}
            value={personalInformations?.about}
            style={
              personalInformations?.about?.length
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
              value={personalInformations?.email}
              name="email"
              type="email"
              placeholder="someone@gmail.com"
              style={
                personalInformations?.email?.length &&
                personalInformations?.emailError
                  ? { border: "1px solid #EF5050" }
                  : personalInformations?.email?.length &&
                    !personalInformations?.emailError
                  ? { border: "1px solid #98E37E" }
                  : { border: "1px solid #bcbcbc" }
              }
            />
            {personalInformations?.email?.length &&
            personalInformations?.emailError ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : personalInformations?.email?.length &&
              !personalInformations?.emailError ? (
              <div
                className="icon_container"
                style={{ backgroundColor: "#98e37e", left: "95%" }}
              >
                <BsCheck />
              </div>
            ) : null}
          </div>
          <p>უნდა მთავრდებოდეს @someone.com-ით</p>
        </div>
        <div className="input_container">
          <label htmlFor="mobile">მობილური ნომერი</label>
          <div style={{ position: "relative" }}>
            <input
              onChange={checkPhoneNumber}
              value={personalInformations?.mobile}
              name="mobile"
              type="text"
              placeholder="+995 551 12 34 56"
              style={
                personalInformations?.mobile?.length &&
                personalInformations?.mobileError
                  ? { border: "1px solid #EF5050" }
                  : personalInformations?.mobile?.length &&
                    !personalInformations?.mobileError
                  ? { border: "1px solid #98E37E" }
                  : { border: "1px solid #bcbcbc" }
              }
            />
            {personalInformations?.mobile?.length &&
            personalInformations?.mobileError ? (
              <div className="icon_container">
                <img src={Vector} alt="" />
              </div>
            ) : personalInformations?.mobile?.length &&
              !personalInformations?.mobileError ? (
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

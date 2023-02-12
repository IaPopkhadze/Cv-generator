import React from 'react'

import "./ExperienceStyle/experienceStyle.css";
const NewExperience = () => {
 
  



    return (
      <div className="experience">
        <form action="">
          <div className="input_container">
            <label htmlFor="">თანამდებობა</label>
            <div style={{ position: "relative" }}>
              <input
                // onChange={mobileNumberValidation}
                // value={mobile}
  
                type="text"
                placeholder="დეველოპერი, დიზაინერი, ა.შ"
                // style={
                //   mobile.length && mobileError
                //     ? { border: "1px solid #EF5050" }
                //     : mobile.length && !mobileError
                //     ? { border: "1px solid #98E37E" }
                //     : { border: "1px solid #bcbcbc" }
                // }
              />
              {/* {mobile && mobileError ? (
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
              ) : null} */}
            </div>
            <p>მინიმუმ ორი სიმბოლო</p>
          </div>
          <div className="input_container">
            <label htmlFor="">დამსაქმებელი</label>
            <div style={{ position: "relative" }}>
              <input
                // onChange={mobileNumberValidation}
                // value={mobile}
  
                type="text"
                placeholder="დამსაქმებელი"
                // style={
                //   mobile.length && mobileError
                //     ? { border: "1px solid #EF5050" }
                //     : mobile.length && !mobileError
                //     ? { border: "1px solid #98E37E" }
                //     : { border: "1px solid #bcbcbc" }
                // }
              />
              {/* {mobile && mobileError ? (
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
              ) : null} */}
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
              // onChange={aboutValidation}
              // value={about}
              style={
                { height: "123px" }
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
}

export default NewExperience
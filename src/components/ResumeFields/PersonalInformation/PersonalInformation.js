import React from "react";
import { useFormik } from "formik";
import "./PersonalInformationStyle/personalInformationStyle.css";
const PersonalInformation = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      image: "",
      about: "",
      email: "",
      mobile: "",
    },
  });
  console.log(formik)

  return (
    <>
      <div className="personal_information">
        <p className="title">პირადი ინფო</p>
        <div className="current_page_index" style={{ fontSize: "20px" }}>
          1/3
        </div>
      </div>
      <form action="">
        <div className="firstname_lastname_container ">
          <div>
            <label htmlFor="firstname">სახელი</label>
            <input
              value={formik.values.firstname}
              onChange={formik.handleChange}
              name="firstname"
              type="text"
              placeholder="სახელი..."
            />
            <p>მინიმუმ ორი ასო, ქართული ასოები</p>
          </div>
          <div>
            <label htmlFor="lastname">გვარი</label>
            <input
              value={formik.values.lastname}
              onChange={formik.handleChange}
              name="lastname"
              type="text"
              placeholder="გვარი..."
            />
            <p>მინიმუმ ორი ასო, ქართული ასოები</p>
          </div>
        </div>
        <div className="upload_image_container">
          <p>პირადი ფოტოს ატვირთვა</p>
          <button>ატვირთვა</button>
        </div>
        <div className="about_me_container">
          <label>ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            value={formik.values.about}
            onChange={formik.handleChange}
            name="about"
            placeholder="ზოგადი ინფო შენს შესახებ"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="input_container">
          <label htmlFor="email">ელ.ფოსტა</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            type="email"
            placeholder="someone@redberry.ge"
          />
          <p>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div className="input_container">
          <label htmlFor="email">მობილურის ნომერი</label>
          <input
            value={formik.values.mobile}
            onChange={formik.handleChange}
            name="mobile"
            type="text"
            placeholder="+995 _ _  _ _  _ _"
          />
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>
        <div className="btn_container">
          <button className="next_page_btn">შემდეგი</button>
        </div>
      </form>
    </>
  );
};

export default PersonalInformation;

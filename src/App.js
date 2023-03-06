import StartPage from "./components/StartPage/StartPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { createContext, useState } from "react";
import ResumeResult from "./components/ResumeResult/ResumeResult";
export const valueContext = createContext(null);

function App() {
  const [result, setResult] = useState(false);
  const navigate = useNavigate();
  const [personalInformations, setPersonalInformations] = useState({
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
  const [newExperience, setNewExperience] = useState([
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
  const [newEducation, setNewEducation] = useState([
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

  return (
    <valueContext.Provider
      value={{
        newEducation,
        setNewEducation,
        newExperience,
        setNewExperience,
        personalInformations,
        setPersonalInformations,
        result,
        setResult,
      }}
    >
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="layout" element={<Layout />} />
        <Route path="resumeResult" element={<ResumeResult />} />
      </Routes>
    </valueContext.Provider>
  );
}

export default App;
